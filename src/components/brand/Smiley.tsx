interface SmileyProps {
  className?: string;
}

export function Smiley({ className }: SmileyProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <circle cx="24" cy="23" r="19" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <circle cx="17" cy="18" r="2.2" fill="currentColor" />
      <circle cx="31" cy="18" r="2.2" fill="currentColor" />
      <path
        d="M15 28 q4.5 7 18 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
