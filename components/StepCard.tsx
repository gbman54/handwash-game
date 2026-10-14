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
      <div className="cardTop">
        <span className="badge">{step.id}</span>
        <StepIcon name={step.icon} />
      </div>
      <div className="cardText">
        <div className="ar">{step.ar}</div>
        <div className="en">{step.en}</div>
      </div>
    </button>
  );
}
