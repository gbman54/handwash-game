type Props = {
  name: string;
  stepId?: number;
  className?: string;
  alt?: string;
};

const stepImageMap: Record<string, number> = {
  water: 1,
  soap: 2,
  palm: 3,
  back: 4,
  interlaced: 5,
  fingers: 6,
  thumb: 7,
  tips: 8,
  rinse: 9,
  dry: 10,
  faucet: 11,
  safe: 12
};

export default function StepIcon({ name, stepId, className, alt = "" }: Props) {
  const id = stepId || stepImageMap[name] || 1;
  return (
    <img
      src={`/steps/step-${id}.png`}
      alt={alt || name}
      className={className || "stepImage"}
      loading="eager"
    />
  );
}
