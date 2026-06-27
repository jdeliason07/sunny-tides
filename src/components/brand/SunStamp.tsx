interface SunStampProps {
  className?: string;
}

export function SunStamp({ className }: SunStampProps) {
  const rays = Array.from({ length: 9 }).map((_, i) => {
    const a = Math.PI + (i / 8) * Math.PI;
    return {
      x1: 50 + Math.cos(a) * 22,
      y1: 52 + Math.sin(a) * 22,
      x2: 50 + Math.cos(a) * 30,
      y2: 52 + Math.sin(a) * 30,
    };
  });

  return (
    <svg viewBox="0 0 100 90" className={className} aria-hidden="true">
      {rays.map((r, i) => (
        <line
          key={i}
          x1={r.x1}
          y1={r.y1}
          x2={r.x2}
          y2={r.y2}
          stroke="currentColor"
          strokeWidth={3.2}
          strokeLinecap="round"
        />
      ))}
      <path d="M30 52 A20 20 0 0 1 70 52 Z" fill="currentColor" />
      <path
        d="M14 64 q9 -7 18 0 t18 0 t18 0"
        fill="none"
        stroke="currentColor"
        strokeWidth={3.4}
        strokeLinecap="round"
      />
      <path
        d="M14 76 q9 -7 18 0 t18 0 t18 0"
        fill="none"
        stroke="currentColor"
        strokeWidth={3.4}
        strokeLinecap="round"
      />
    </svg>
  );
}
