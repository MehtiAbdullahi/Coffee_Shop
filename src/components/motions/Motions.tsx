"use client";
import React, { ReactNode } from "react";
import { motion, useReducedMotion, Variants } from "motion/react";

const easings = {
  smooth: [0.4, 0, 0.2, 1],
  snappy: [0.16, 1, 0.3, 1],
  expoOut: [0.16, 1, 0.3, 1],
  expoInOut: [0.87, 0, 0.13, 1],
  soft: [0.22, 1, 0.36, 1],
  bounce: [0.34, 1.56, 0.64, 1],
} as const;

interface MotionsProps {
  children: ReactNode;
  classMotion?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  direction?: string;
  amount?: number;
  x?: number | string;
  y?: number | string;
  scale?: number;
  ease?: keyof typeof easings;
  perspective?: number;
  id?: string;
  role?: string;
}

export const Motions = ({
  children,
  classMotion,
  duration = 0.5,
  once = true,
  ease = "smooth",
  x = 0,
  y = 0,
  delay = 0.25,
  amount = 0.5,
  perspective = 0,
  scale = 1,
  id,
  role,
}: MotionsProps) => {
  const reduced = useReducedMotion();

  const animation = {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
  };

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, x: x, y: y, scale: scale }}
      whileInView={reduced ? undefined : animation}
      exit={{ opacity: 0, y: y }}
      viewport={{ once: once, amount: amount }}
      id={id}
      role={role}
      transition={{
        delay: delay,
        duration: duration,
        ease: easings[ease],
      }}
      style={{ perspective: perspective }}
      className={classMotion}
    >
      {children}
    </motion.div>
  );
};

interface TitleMotionProps {
  classMotion?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  direction?: string;
  amount?: number;
  x?: number | string;
  y?: number | string;
  scale?: number;
  ease?: keyof typeof easings;
  perspective?: number;
  id?: string;
  role?: string;
  rotate?: number;
  staggerChildren?: number;
  delayChildren?: number;
  title: string;
  initial?: string;
  whileInView?: string;
  titleClass: string;
}

export const TitleMotion = ({
  y = "110%",
  rotate = 3,
  duration = 0.8,
  ease = "smooth",
  staggerChildren = 0.06,
  delayChildren = 0.05,
  title,
  initial = "hidden",
  whileInView = "show",
  classMotion,
  titleClass,
  once = true,
  amount = 0.5,
}: TitleMotionProps) => {
  const word: Variants = {
    hidden: { y: y, rotate: rotate },
    show: {
      y: "0%",
      rotate: 0,
      transition: { duration: duration, ease: easings[ease] },
    },
  };

  const headerContainer: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren,
      },
    },
  };

  return (
    <motion.div
      variants={headerContainer}
      initial={initial}
      whileInView={whileInView}
      viewport={{ once: once, amount: amount }}
      className={classMotion}
    >
      <span id={`${title}-title`} aria-label={title} className={titleClass}>
        {title.split(" ").map((w, i) => (
          <span
            key={i}
            aria-hidden="true"
            className="inline-block overflow-hidden pb-1 align-top"
          >
            <motion.span variants={word} className="inline-block">
              {w}
              {"\u00A0"}
            </motion.span>
          </span>
        ))}
      </span>
    </motion.div>
  );
};
