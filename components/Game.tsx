"use client";

import { useMemo, useState } from "react";
import StepCard from "./StepCard";

type Step = {
  id: number;
  ar: string;
  en: string;
  icon: string;
};

const steps: Step[] = [
  { id: 1, ar: "بلل يديك بالماء", en: "Wet hands with water", icon: "water" },
  { id: 2, ar: "ضع كمية كافية من الصابون لتغطية جميع أسطح اليدين", en: "Apply enough soap to cover all hand surfaces", icon: "soap" },
  { id: 3, ar: "افرك راحتي اليدين معًا", en: "Rub hands palm to palm", icon: "palm" },
  { id: 4, ar: "افرك راحة اليد اليمنى على ظهر اليد اليسرى مع تشبيك الأصابع والعكس", en: "Right palm over left dorsum with interlaced fingers and vice versa", icon: "back" },
  { id: 5, ar: "افرك راحة اليدين مع تشبيك الأصابع", en: "Palm to palm with fingers interlaced", icon: "interlaced" },
  { id: 6, ar: "افرك ظهر الأصابع على راحة اليد الأخرى مع تشبيك الأصابع", en: "Backs of fingers to opposing palms with fingers interlocked", icon: "fingers" },
  { id: 7, ar: "افرك الإبهام بحركة دائرية داخل راحة اليد الأخرى والعكس", en: "Rotational rubbing of left thumb clasped in right palm and vice versa", icon: "thumb" },
  { id: 8, ar: "افرك أطراف الأصابع بحركة دائرية داخل راحة اليد الأخرى والعكس", en: "Rotational rubbing, backwards and forwards with clasped fingers of right hand in left palm and vice versa", icon: "tips" },
  { id: 9, ar: "اشطف يديك بالماء", en: "Rinse hands with water", icon: "rinse" },
  { id: 10, ar: "جفف يديك جيدًا بمنشفة تستخدم مرة واحدة", en: "Dry thoroughly with a single use towel", icon: "dry" },
  { id: 11, ar: "استخدم المنشفة لإغلاق الصنبور", en: "Use towel to turn off faucet", icon: "faucet" },
  { id: 12, ar: "وأصبحت يداك آمنتين", en: "And your hands are safe", icon: "safe" }
];

export default function Game() {
  const [bank, setBank] = useState<Step[]>(() => shuffle(steps));
  const [slots, setSlots] = useState<(Step | null)[]>(
    Array.from({ length: steps.length }, () => null)
  );
  const [message, setMessage] = useState("");

  const placedCount = useMemo(() => slots.filter(Boolean).length, [slots]);

  function reset() {
    setBank(shuffle(steps));
    setSlots(Array.from({ length: steps.length }, () => null));
    setMessage("");
  }

  function placeIntoFirstOpen(step: Step) {
    const idx = slots.findIndex((s) => s === null);
    if (idx === -1) return;
    setBank((prev) => prev.filter((s) => s.id !== step.id));
    setSlots((prev) => {
      const next = [...prev];
      next[idx] = step;
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
                    onTap={() => {
                      setSlots((prev) => {
                        const next = [...prev];
                        const removed = next[i];
                        next[i] = null;
                        if (removed) setBank((b) => shuffle([...b, removed]));
                        return next;
                      });
                    }}
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

function shuffle<T>(arr: T[]) {
  return [...arr].sort(() => Math.random() - 0.5);
}
