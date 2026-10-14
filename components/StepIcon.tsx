type Props = { name: string };

export default function StepIcon({ name }: Props) {
  const common = {
    width: 64,
    height: 64,
    viewBox: "0 0 64 64",
    fill: "none"
  };

  const stroke = "#2f4f9e";
  const accent = "#32a4d6";

  switch (name) {
    case "water":
      return (
        <svg {...common}>
          <path d="M32 8 C24 20, 18 26, 18 36 a14 14 0 0 0 28 0 c0-10-6-16-14-28Z" stroke={accent} strokeWidth="3" />
          <path d="M26 40c2 4 10 4 12 0" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case "soap":
      return (
        <svg {...common}>
          <rect x="18" y="22" width="28" height="22" rx="6" stroke={stroke} strokeWidth="3" />
          <circle cx="26" cy="31" r="2" fill={accent} />
          <circle cx="34" cy="31" r="2" fill={accent} />
          <circle cx="42" cy="31" r="2" fill={accent} />
        </svg>
      );
    case "palm":
      return (
        <svg {...common}>
          <path d="M18 38c4-10 10-16 14-16s10 6 14 16" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
          <path d="M22 38c4-5 8-5 10 0" stroke={accent} strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case "back":
      return (
        <svg {...common}>
          <path d="M16 40c6-7 14-10 18-10s12 3 14 10" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
          <path d="M24 26l12 12" stroke={accent} strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case "interlaced":
      return (
        <svg {...common}>
          <path d="M18 40c4-8 10-12 14-12s10 4 14 12" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
          <path d="M24 28h16" stroke={accent} strokeWidth="3" strokeLinecap="round" />
          <path d="M28 24v16" stroke={accent} strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case "fingers":
      return (
        <svg {...common}>
          <path d="M18 42c3-8 9-14 14-14s11 6 14 14" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
          <path d="M23 28l6 8" stroke={accent} strokeWidth="3" strokeLinecap="round" />
          <path d="M33 28l6 8" stroke={accent} strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case "thumb":
      return (
        <svg {...common}>
          <path d="M20 40c4-8 8-12 12-12s8 4 12 12" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
          <path d="M37 22c-2 2-3 4-3 7" stroke={accent} strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case "tips":
      return (
        <svg {...common}>
          <path d="M18 40c4-8 10-12 14-12s10 4 14 12" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
          <path d="M26 25l3 6" stroke={accent} strokeWidth="3" strokeLinecap="round" />
          <path d="M32 24l3 6" stroke={accent} strokeWidth="3" strokeLinecap="round" />
          <path d="M38 25l3 6" stroke={accent} strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case "rinse":
      return (
        <svg {...common}>
          <path d="M22 20h20v6H22z" stroke={stroke} strokeWidth="3" />
          <path d="M30 26v18" stroke={accent} strokeWidth="3" strokeLinecap="round" />
          <path d="M24 34h16" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case "dry":
      return (
        <svg {...common}>
          <path d="M18 38c4-8 10-12 14-12s10 4 14 12" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
          <path d="M22 20h20" stroke={accent} strokeWidth="3" strokeLinecap="round" />
          <path d="M24 46h16" stroke={accent} strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case "faucet":
      return (
        <svg {...common}>
          <path d="M20 22h16v6H20z" stroke={stroke} strokeWidth="3" />
          <path d="M34 28h10v6H34z" stroke={stroke} strokeWidth="3" />
          <path d="M28 34v10" stroke={accent} strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case "safe":
      return (
        <svg {...common}>
          <circle cx="32" cy="32" r="16" stroke={accent} strokeWidth="3" />
          <path d="M24 32l5 5 11-12" stroke={stroke} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return null;
  }
}
