export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={className || "logo"}
      fill="none"
    >
      <circle cx="50" cy="50" r="46" fill="#eef7fd" stroke="#0084c7" strokeWidth="4" />
      <path
        d="M50 16 C38 32, 28 44, 28 58 A22 22 0 0 0 72 58 C72 44, 62 32, 50 16 Z"
        fill="#0084c7"
        opacity="0.12"
        stroke="#0084c7"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* Hand silhouettes inside water droplet */}
      <path
        d="M38 60 C42 63, 46 64, 50 64 C54 64, 58 63, 62 60"
        stroke="#0084c7"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M42 52 C45 55, 48 56, 50 56 C52 56, 55 55, 58 52"
        stroke="#0084c7"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Red cross emblem */}
      <rect x="47" y="32" width="6" height="18" rx="2" fill="#eb2d2d" />
      <rect x="41" y="38" width="18" height="6" rx="2" fill="#eb2d2d" />
    </svg>
  );
}
