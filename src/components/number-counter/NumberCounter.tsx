// components/number-counter.tsx
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

type NumberCounterProps = {
  initialValue?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (value: number) => void;
};

export function NumberCounter({
  initialValue = 0,
  min = 0,
  max = 99,
  step = 1,
  onChange,
}: NumberCounterProps) {
  // مقدار نهایی اینجا ذخیره می‌شود
  const [count, setCount] = useState<number>(initialValue);
  // جهت انیمیشن: 1 = افزایش، -1 = کاهش
  const [direction, setDirection] = useState<1 | -1>(1);

  const update = (next: number) => {
    const clamped = Math.min(max, Math.max(min, next));
    if (clamped === count) return;
    setDirection(clamped > count ? 1 : -1);
    setCount(clamped);
    onChange?.(clamped);
  };

  return (
    <div className="border-border flex items-center rounded-md border">
      <Button
        className="bg-transparent hover:text-white cursor-pointer"
        size="icon"
        onClick={() => update(count - step)}
        disabled={count <= min}
        aria-label="کم کردن"
      >
        <Minus className="size-4" />
      </Button>

      <div className="relative flex h-10 w-14 items-center justify-center overflow-hidden md:px-6 lg:px-12">
        <AnimatePresence mode="popLayout" initial={false} custom={direction}>
          <motion.span
            key={count}
            custom={direction}
            variants={{
              enter: (d: number) => ({ y: d * 24, opacity: 0, scale: 0.8 }),
              center: { y: 0, opacity: 1, scale: 1 },
              exit: (d: number) => ({ y: d * -24, opacity: 0, scale: 0.8 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="absolute text-primary text-xl font-bold tabular-nums"
          >
            {count}
          </motion.span>
        </AnimatePresence>
      </div>

      <Button
        className="bg-transparent hover:text-white cursor-pointer"
        size="icon"
        onClick={() => update(count + step)}
        disabled={count >= max}
        aria-label="زیاد کردن"
      >
        <Plus className="size-4" />
      </Button>
    </div>
  );
}
