"use client";
import React from "react";

import Link from "next/link";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight, CalendarDays, MessageCircle } from "lucide-react";
import { Motions } from "../motions/Motions";

interface newsBox {
  id: number;
  src: string;
  title: string;
  date: string;
  countComments: number;
  href?: string;
}

const BlogBox = ({ item }: { item: newsBox }) => {
  const reduced = useReducedMotion();

  // موقعیت ماوس نسبت به کارت، بین -0.5 و 0.5
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 180, damping: 18 });
  const sy = useSpring(py, { stiffness: 180, damping: 18 });

  const rotateY = useTransform(sx, [-0.5, 0.5], [-8, 8]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [8, -8]);

  const glareX = useTransform(sx, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(sy, [-0.5, 0.5], [0, 100]);
  const glare = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.22), transparent 55%)`;

  const onPointerMove = (e: React.PointerEvent<HTMLElement>) => {
    // فقط ماوس؛ روی لمسی tilt نداریم
    if (reduced || e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width - 0.5);
    py.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const reset = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <Motions
      classMotion="h-full"
      duration={0.5}
      ease="smooth"
      amount={0.4}
      y={50}
      perspective={1000}
    >
      <motion.article
        onPointerMove={onPointerMove}
        onPointerLeave={reset}
        style={
          reduced
            ? undefined
            : { rotateX, rotateY, transformStyle: "preserve-3d" }
        }
        className="group bg-card text-card-foreground border-border relative flex h-full flex-col overflow-hidden rounded-3xl border shadow-xl shadow-black/5 transition-shadow duration-500 hover:shadow-2xl hover:shadow-black/20"
      >
        {/* تصویر */}
        <div className="relative aspect-4/3 overflow-hidden">
          <img
            src={item.src}
            alt={item.title}
            loading="lazy"
            decoding="async"
            className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent"
          />
          {/* تاریخ روی عکس */}
          <span className="absolute top-2 left-2 inline-flex items-center gap-1.5 rounded-full bg-white/85 px-2 py-1 text-[10px] font-semibold text-neutral-900 backdrop-blur-md sm:top-4 sm:left-4 sm:px-3 sm:py-1.5 sm:text-xs">
            <CalendarDays className="size-3.5" />
            {item.date}
          </span>
        </div>

        {/* محتوا */}
        <div
          className="flex flex-1 flex-col gap-2 p-2 sm:gap-4 md:p-4"
          style={reduced ? undefined : { transform: "translateZ(30px)" }}
        >
          <h3 className="md:text-md line-clamp-2 text-sm font-bold max-lg:truncate md:leading-7 lg:text-xl">
            {item.title}
          </h3>

          <div className="border-border mt-auto flex items-center justify-center border-t pt-2 text-sm sm:justify-between">
            <span className="inline-flex items-center gap-1.5 opacity-70 max-sm:hidden">
              <MessageCircle className="size-4" />
              {item.countComments} comments
            </span>
            <Link
              href={item.href ?? `/blog/${item.id}`}
              className="text-primary inline-flex items-center gap-1.5 font-semibold after:absolute after:inset-0 after:content-[''] focus-visible:outline-none max-sm:text-xs"
            >
              Read more
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </div>
        </div>

        {/* glare */}
        {!reduced && (
          <motion.div
            aria-hidden
            style={{ background: glare }}
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        )}
      </motion.article>
    </Motions>
  );
};

export default BlogBox;
