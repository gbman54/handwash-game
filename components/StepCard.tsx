"use client";

import StepIcon from "./StepIcon";

type Step = {
  id: number;
  ar: string;
  en: string;
  icon: string;
};

export default function StepCard({
  step,
  compact = false,
  onTap
}: {
  step: Step;
  compact?: boolean;
  onTap?: () => void;
}) {
  return (
    <button className={`card ${compact ? "compact" : ""}`} onClick={onTap}>
      <div className="cardMedia">
        <StepIcon name={step.icon} stepId={step.id} alt={step.en} />
      </div>
      <div className="cardText">
        <div className="ar">{step.ar}</div>
        <div className="en">{step.en}</div>
      </div>
    </button>
  );
}
