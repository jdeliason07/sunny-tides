'use client';

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
} from 'react';

const STORAGE_KEY = 'sunny-tides-cart';

export interface CartItem {
  slug: string;
  name: string;
  image: string;
  priceCents: number;
  variant?: string;
  qty: number;
}

export function itemKey(item: Pick<CartItem, 'slug' | 'variant'>): string {
  return item.variant ? `${item.slug}::${item.variant}` : item.slug;
}

// ---------------------------------------------------------------------------
// Module-level store — safe because mutations only happen on the client, and
// getServerSnapshot always returns [] for SSR.
// ---------------------------------------------------------------------------

let _snapshot: CartItem[] = (() => {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as CartItem[]) : [];
  } catch {
    return [];
  }
})();

const _listeners = new Set<() => void>();

function _notify() {
  _listeners.forEach((l) => l());
}

function _persist(next: CartItem[]) {
  _snapshot = next;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // ignore storage errors
  }
  _notify();
}

function _subscribe(callback: () => void) {
  _listeners.add(callback);
  return () => {
    _listeners.delete(callback);
  };
}

function _getSnapshot(): CartItem[] {
  return _snapshot;
}

function _getServerSnapshot(): CartItem[] {
  return [];
}

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface CartContextValue {
  items: CartItem[];
  subtotalCents: number;
  addItem: (item: Omit<CartItem, 'qty'>) => void;
  setQty: (key: string, qty: number) => void;
  removeItem: (key: string) => void;
  clear: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const items = useSyncExternalStore(_subscribe, _getSnapshot, _getServerSnapshot);

  const subtotalCents = useMemo(
    () => items.reduce((n, i) => n + i.priceCents * i.qty, 0),
    [items],
  );

  const addItem = useCallback((item: Omit<CartItem, 'qty'>) => {
    const key = itemKey(item);
    const existing = _snapshot.find((i) => itemKey(i) === key);
    const next = existing
      ? _snapshot.map((i) =>
          itemKey(i) === key ? { ...i, qty: Math.min(i.qty + 1, 99) } : i,
        )
      : [..._snapshot, { ...item, qty: 1 }];
    _persist(next);
  }, []);

  const setQty = useCallback((key: string, qty: number) => {
    const next =
      qty < 1
        ? _snapshot.filter((i) => itemKey(i) !== key)
        : _snapshot.map((i) =>
            itemKey(i) === key ? { ...i, qty: Math.min(qty, 99) } : i,
          );
    _persist(next);
  }, []);

  const removeItem = useCallback((key: string) => {
    _persist(_snapshot.filter((i) => itemKey(i) !== key));
  }, []);

  const clear = useCallback(() => {
    _persist([]);
  }, []);

  const value = useMemo<CartContextValue>(
    () => ({ items, subtotalCents, addItem, setQty, removeItem, clear }),
    [items, subtotalCents, addItem, setQty, removeItem, clear],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside <CartProvider>');
  return ctx;
}
