type Props = {
  step: number;
};

export default function StepIcon({ step }: Props) {
  const common = {
    fill: "none",
    stroke: "#2f5fa8",
    strokeWidth: 3,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (step) {
    case 1:
      return (
        <svg viewBox="0 0 200 200" className="h-full w-full">
          <path d="M130 50c10 8 17 18 19 30" {...common} />
          <path d="M70 120c10-24 28-42 55-54" {...common} />
          <path d="M78 102c8 8 18 13 31 15" {...common} />
          <path d="M90 82l10 14 15-9" {...common} />
        </svg>
      );
    case 2:
      return (
        <svg viewBox="0 0 200 200" className="h-full w-full">
          <path d="M85 25h30v24H85z" {...common} />
          <path d="M70 55h60l-8 110H78z" {...common} />
          <path d="M100 95v40" {...common} />
        </svg>
      );
    case 3:
      return (
        <svg viewBox="0 0 200 200" className="h-full w-full">
          <path d="M52 115c20-35 76-35 96 0" {...common} />
          <path d="M64 105c18 16 54 16 72 0" {...common} />
          <path d="M82 80l13 17 16-10" {...common} />
        </svg>
      );
    case 4:
      return (
        <svg viewBox="0 0 200 200" className="h-full w-full">
          <path d="M48 118h78" {...common} />
          <path d="M82 72c22 10 39 28 50 52" {...common} />
          <path d="M72 88l14 14" {...common} />
          <path d="M120 88l14 14" {...common} />
        </svg>
      );
    case 5:
      return (
        <svg viewBox="0 0 200 200" className="h-full w-full">
          <path d="M52 116c16-25 59-25 76 0" {...common} />
          <path d="M78 72v55" {...common} />
          <path d="M98 72v55" {...common} />
          <path d="M118 72v45" {...common} />
        </svg>
      );
    case 6:
      return (
        <svg viewBox="0 0 200 200" className="h-full w-full">
          <path d="M58 122h84" {...common} />
          <path d="M70 85c20 0 40 12 56 35" {...common} />
          <path d="M88 72l10 15 15-8" {...common} />
        </svg>
      );
    case 7:
      return (
        <svg viewBox="0 0 200 200" className="h-full w-full">
          <path d="M118 58c-22 10-34 28-34 52" {...common} />
          <path d="M94 88c18 0 35 10 45 26" {...common} />
          <path d="M72 122c10-18 26-29 48-31" {...common} />
        </svg>
      );
    case 8:
      return (
        <svg viewBox="0 0 200 200" className="h-full w-full">
          <path d="M52 118c20-18 48-18 72 0" {...common} />
          <path d="M78 85l10 14 13-10" {...common} />
          <path d="M111 85l10 14 13-10" {...common} />
          <path d="M90 121c8 10 15 10 23 0" {...common} />
        </svg>
      );
    case 9:
      return (
        <svg viewBox="0 0 200 200" className="h-full w-full">
          <path d="M70 45c17 18 22 35 22 54 0 19-12 34-27 34s-27-15-27-34c0-19 5-36 32-54z" {...common} />
          <path d="M122 55c14 14 14 40 0 54" {...common} />
        </svg>
      );
    case 10:
      return (
        <svg viewBox="0 0 200 200" className="h-full w-full">
          <path d="M56 112c10-22 25-33 44-33s34 11 44 33" {...common} />
          <path d="M72 84l11 17 13-9" {...common} />
          <path d="M104 84l11 17 13-9" {...common} />
          <path d="M98 120l10 16" {...common} />
        </svg>
      );
    case 11:
      return (
        <svg viewBox="0 0 200 200" className="h-full w-full">
          <path d="M55 70h90" {...common} />
          <path d="M88 70v44" {...common} />
          <path d="M88 96c16 8 27 20 34 38" {...common} />
          <path d="M123 100l18 18" {...common} />
        </svg>
      );
    case 12:
      return (
        <svg viewBox="0 0 200 200" className="h-full w-full">
          <path d="M65 124c12-18 24-26 35-26s23 8 35 26" {...common} />
          <path d="M71 98v-20" {...common} />
          <path d="M91 92v-25" {...common} />
          <path d="M109 92v-25" {...common} />
          <path d="M129 98v-20" {...common} />
        </svg>
      );
    default:
      return null;
  }
}
