import StepIcon from "./StepIcon";

type Step = {
  id: number;
  title: string;
  arabic: string;
};

export default function StepCard({ step }: { step: Step }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition hover:shadow-md">
      <div className="mb-3 aspect-square rounded-xl bg-sky-50 p-2">
        <StepIcon step={step.id} />
      </div>
      <p className="text-center text-sm font-medium leading-snug text-slate-800">{step.title}</p>
      <p className="mt-1 text-center text-xs leading-snug text-slate-500">{step.arabic}</p>
    </div>
  );
}
