"use client";

import { useEffect, useMemo, useState } from "react";
import StepCard from "./StepCard";

type Step = {
  id: number;
  ar: string;
  en: string;
  icon: string;
};

const steps: Step[] = [
  { id: 1, ar: "بلل يديك بالماء", en: "Wet hands with water", icon: "water" },
  { id: 2, ar: "ضع كمية من الصابون تكفي لتغطية سطح اليد", en: "Apply enough soap to cover all hand surfaces", icon: "soap" },
  { id: 3, ar: "وزع الصابون باستخدام راحتي يديك", en: "Rub hands palm to palm", icon: "palm" },
  { id: 4, ar: "راحة اليد اليمنى على ظهر اليد اليسرى مع تداخل الأصابع والعكس", en: "Right palm over left dorsum with interlaced fingers and vice versa", icon: "back" },
  { id: 5, ar: "راحة اليد مع راحة اليد الأخرى مع تداخل الأصابع", en: "Palm to palm with fingers interlaced", icon: "interlaced" },
  { id: 6, ar: "ظهر الأصابع مع راحة اليد الأخرى مع ضم الأصابع", en: "backs of fingers to opposing palms with fingers interlocked", icon: "fingers" },
  { id: 7, ar: "قم بمسح الإبهام الأيسر باستخدام راحة اليد اليمنى بحركة دائرية والعكس", en: "Rotational rubbing of left thumb clasped in right palm and vice versa", icon: "thumb" },
  { id: 8, ar: "قم بمسح راحة اليد اليمنى باستخدام أصابع اليد اليسرى بحركة دائرية مع وضد عقارب الساعة والعكس", en: "Rotational rubbing, backwards and forwards with clasped fingers of right hand in left palm and vice versa", icon: "tips" },
  { id: 9, ar: "اشطف يديك بالماء", en: "Rinse hands with water", icon: "rinse" },
  { id: 10, ar: "جفف يديك جيداً بمنشفة تستخدم لمرة واحدة", en: "Dry thoroughly with a single use towel", icon: "dry" },
  { id: 11, ar: "استخدم المنشفة لإغلاق صنبور المياه", en: "use towel to turn off faucet", icon: "faucet" },
  { id: 12, ar: "الآن - يدك آمنة", en: "And your hands are safe", icon: "safe" }
];

export default function Game() {
  const [shuffledSteps, setShuffledSteps] = useState<Step[]>(steps);
  const [slots, setSlots] = useState<(Step | null)[]>(
    Array.from({ length: steps.length }, () => null)
  );
  const [message, setMessage] = useState("");

  useEffect(() => {
    setShuffledSteps(shuffle(steps));
  }, []);

  // Compute placed IDs from slots
  const placedIds = useMemo(() => {
    const ids = new Set<number>();
    for (const slot of slots) {
      if (slot) ids.add(slot.id);
    }
    return ids;
  }, [slots]);

  // Derived bank: always unique, cannot ever duplicate keys
  const bank = useMemo(() => {
    return shuffledSteps.filter((step) => !placedIds.has(step.id));
  }, [shuffledSteps, placedIds]);

  const placedCount = useMemo(() => placedIds.size, [placedIds]);

  function reset() {
    setShuffledSteps(shuffle(steps));
    setSlots(Array.from({ length: steps.length }, () => null));
    setMessage("");
  }

  function placeIntoFirstOpen(step: Step) {
    setSlots((prev) => {
      const idx = prev.findIndex((s) => s === null);
      if (idx === -1) return prev;
      const next = [...prev];
      next[idx] = step;
      return next;
    });
  }

  function removeFromSlot(index: number) {
    setSlots((prev) => {
      if (!prev[index]) return prev;
      const next = [...prev];
      next[index] = null;
      return next;
    });
  }

  function checkAnswer() {
    const correct = slots.every((s, i) => s?.id === steps[i].id);
    setMessage(correct ? "Correct! Great job." : "Not quite. Try again.");
  }

  return (
    <main className="app">
      <header className="hero">
        <img src="/logo.png" alt="Logo" className="logo" />
        <div>
          <div className="eyebrow">إدارة الصحة العامة ومكافحة العدوى</div>
          <h1>How do I wash my hands properly?</h1>
          <h2>كيف أغسل يدي بصورة صحيحة؟</h2>
        </div>
      </header>

      <section className="layout">
        <div className="panel">
          <h3>Step cards</h3>
          <div className="grid">
            {bank.map((step) => (
              <StepCard
                key={step.id}
                step={step}
                onTap={() => placeIntoFirstOpen(step)}
              />
            ))}
          </div>
        </div>

        <div className="panel">
          <h3>Your order</h3>
          <div className="slots">
            {slots.map((slot, i) => (
              <div key={i} className="slot">
                {slot ? (
                  <StepCard
                    step={slot}
                    compact
                    onTap={() => removeFromSlot(i)}
                  />
                ) : (
                  <div className="slotPlaceholder">Step {i + 1}</div>
                )}
              </div>
            ))}
          </div>

          <div className="actions">
            <button onClick={checkAnswer}>Check Answer</button>
            <button onClick={reset} className="secondary">
              Reset
            </button>
          </div>

          <p className={`message ${message.includes("Correct") ? "good" : "bad"}`}>
            {message}
          </p>

          <p className="progress">
            Placed: {placedCount}/{steps.length}
          </p>
        </div>
      </section>
    </main>
  );
}

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}
