"use client";

import { useMemo, useState } from "react";
import StepCard from "./StepCard";

type Step = {
  id: number;
  title: string;
  arabic: string;
};

const steps: Step[] = [
  { id: 1, title: "Wet hands with water", arabic: "بلل يديك بالماء" },
  { id: 2, title: "Apply enough soap to cover all hand surfaces", arabic: "ضع كمية كافية من الصابون لتغطية جميع أسطح اليدين" },
  { id: 3, title: "Rub hands palm to palm", arabic: "افرك راحتي اليدين معًا" },
  { id: 4, title: "Right palm over left dorsum with interlaced fingers and vice versa", arabic: "افرك راحة اليد اليمنى على ظهر اليد اليسرى مع تشبيك الأصابع والعكس" },
  { id: 5, title: "Palm to palm with fingers interlaced", arabic: "افرك راحة اليدين مع تشبيك الأصابع" },
  { id: 6, title: "Backs of fingers to opposing palms with fingers interlocked", arabic: "افرك ظهر الأصابع على راحة اليد الأخرى مع تشبيك الأصابع" },
  { id: 7, title: "Rotational rubbing of left thumb clasped in right palm and vice versa", arabic: "افرك الإبهام بحركة دائرية داخل راحة اليد الأخرى والعكس" },
  { id: 8, title: "Rotational rubbing, backwards and forwards with clasped fingers of right hand in left palm and vice versa", arabic: "افرك أطراف الأصابع بحركة دائرية داخل راحة اليد الأخرى والعكس" },
  { id: 9, title: "Rinse hands with water", arabic: "اشطف يديك بالماء" },
  { id: 10, title: "Dry thoroughly with a single use towel", arabic: "جفف يديك جيدًا بمنشفة تستخدم مرة واحدة" },
  { id: 11, title: "Use towel to turn off faucet", arabic: "استخدم المنشفة لإغلاق الصنبور" },
  { id: 12, title: "And your hands are safe", arabic: "وأصبحت يداك آمنتين" }
];

export default function Game() {
  const shuffled = useMemo(() => [...steps].sort(() => Math.random() - 0.5), []);
  const [available, setAvailable] = useState(shuffled);
  const [placed, setPlaced] = useState<(Step | null)[]>(Array(12).fill(null));

  const placeStep = (step: Step) => {
    const nextIndex = placed.findIndex((slot) => slot === null);
    if (nextIndex === -1) return;

    setPlaced((prev) => {
      const copy = [...prev];
      copy[nextIndex] = step;
      return copy;
    });

    setAvailable((prev) => prev.filter((s) => s.id !== step.id));
  };

  const reset = () => {
    setAvailable(shuffled);
    setPlaced(Array(12).fill(null));
  };

  const checkAnswer = () => {
    const ok = placed.every((step, index) => step?.id === index + 1);
    alert(ok ? "Correct!" : "Not in the right order yet.");
  };

  return (
    <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
      <section>
        <h2 className="mb-3 text-sm font-semibold text-slate-600">Step cards</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
          {available.map((step) => (
            <button key={step.id} onClick={() => placeStep(step)} className="text-left">
              <StepCard step={step} />
            </button>
          ))}
        </div>
      </section>

      <aside className="rounded-3xl bg-white p-4 shadow-sm">
        <h2 className="mb-3 text-sm font-semibold text-slate-600">Your order</h2>

        <div className="grid grid-cols-3 gap-2">
          {placed.map((step, index) => (
            <div
              key={index}
              className="flex min-h-20 items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-2 text-center text-xs text-slate-400"
            >
              {step ? step.title : `Step ${index + 1}`}
            </div>
          ))}
        </div>

        <div className="mt-4 flex gap-2">
          <button onClick={checkAnswer} className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white">
            Check Answer
          </button>
          <button onClick={reset} className="rounded-xl bg-slate-200 px-4 py-2 text-sm font-medium text-slate-800">
            Reset
          </button>
        </div>

        <p className="mt-4 text-sm text-slate-500">
          Placed: {12 - available.length}/12
        </p>
      </aside>
    </div>
  );
}
