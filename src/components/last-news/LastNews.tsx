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
} from "motion/react";
import { ArrowRight, CalendarDays, MessageCircle } from "lucide-react";

interface newsBox {
  id: number;
  src: string;
  title: string;
  date: string;
  countComments: number;
  href?: string;
}

const boxs: newsBox[] = [
  {
    id: 1,
    src: "/images/backgrounds/blog-1.webp",
    title: "How to make American coffee at home that you feel on shop",
    date: "10/May/2025",
    countComments: 10,
  },
  {
    id: 2,
    src: "/images/backgrounds/coffee.webp",
    title: "Perfect Drinks for Relaxing Evenings",
    date: "10/May/2025",
    countComments: 14,
  },
  {
    id: 3,
    src: "/images/backgrounds/coffee-machin.webp",
    title: "The best instant coffee you can have right now on a budget",
    date: "10/May/2025",
    countComments: 8,
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

/* ------------------------------------------------------------------ */
/*  کارت خبر با افکت 3D tilt + glare                                   */
/* ------------------------------------------------------------------ */
const NewsCard = ({ item }: { item: newsBox }) => {
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
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: EASE },
        },
      }}
      style={{ perspective: 1000 }}
      className="h-full"
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
          <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/85 px-3 py-1.5 text-xs font-semibold text-neutral-900 backdrop-blur-md">
            <CalendarDays className="size-3.5" />
            {item.date}
          </span>
        </div>

        {/* محتوا */}
        <div
          className="flex flex-1 flex-col gap-4 p-6"
          style={reduced ? undefined : { transform: "translateZ(30px)" }}
        >
          <h3 className="line-clamp-2 min-h-14 text-lg leading-7 font-bold sm:text-xl">
            {item.title}
          </h3>

          <div className="border-border mt-auto flex items-center justify-between border-t pt-4 text-sm">
            <span className="inline-flex items-center gap-1.5 opacity-70">
              <MessageCircle className="size-4" />
              {item.countComments} comments
            </span>
            <Link
              href={item.href ?? `/blog/${item.id}`}
              className="text-primary inline-flex items-center gap-1.5 font-semibold after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
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
    </motion.div>
  );
};

/* ------------------------------------------------------------------ */
/*  Section                                                            */
/* ------------------------------------------------------------------ */
const LastNews = () => {
  const reduced = useReducedMotion();
  const headingWords = "Latest news & blog".split(" ");

  return (
    <section className="relative overflow-hidden bg-size-[cover,auto] bg-left bg-no-repeat py-20 sm:py-24 lg:bg-[url('/images/backgrounds/hero-bg.webp')] xl:py-32">
      {/* الگوی فنجان با حرکت شناور */}
      <motion.img
        src="/images/backgrounds/coffee-cup-pattern.webp"
        alt=""
        aria-hidden
        animate={reduced ? undefined : { y: [0, -14, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-0 w-32 opacity-60 sm:w-40 md:top-30 md:w-48 md:opacity-100 max-md:-left-6"
      />

      <div className="relative z-10 container mx-auto flex flex-col items-center gap-12 px-6 sm:gap-16">
        {/* هدر */}
        <div className="flex flex-col items-center text-center">
          <motion.span
            initial={reduced ? false : { opacity: 0, y: 16, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="border-primary/20 bg-primary/10 text-primary mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wide sm:text-sm"
          >
            <span className="relative flex size-2">
              <span className="bg-primary absolute inline-flex size-full animate-ping rounded-full opacity-60" />
              <span className="bg-primary relative inline-flex size-2 rounded-full" />
            </span>
            GET EVERY SINGLE UPDATE
          </motion.span>

          {/* تریگر روی خود h2 است نه روی کلمه‌های clip شده */}
          <motion.h2
            initial={reduced ? "show" : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.09, delayChildren: 0.15 }}
            className="flex flex-wrap justify-center gap-x-3 text-3xl font-bold sm:text-5xl lg:text-6xl"
          >
            {headingWords.map((word, i) => (
              <span key={i} className="overflow-hidden pb-2">
                <motion.span
                  className="inline-block"
                  variants={{
                    hidden: { y: "110%" },
                    show: {
                      y: 0,
                      transition: { duration: 0.7, ease: EASE },
                    },
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.h2>
        </div>

        {/* کارت‌ها: ۱ ستون موبایل، ۲ ستون تبلت، ۳ ستون دسکتاپ */}
        <motion.div
          initial={reduced ? "show" : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
          className="grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {boxs.map((b) => (
            <NewsCard key={b.id} item={b} />
          ))}
        </motion.div>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <Link
            href="/blog"
            className="border-primary/30 text-primary hover:bg-primary group inline-flex items-center gap-2 rounded-xl border px-8 py-4 font-semibold transition-colors hover:text-white max-[426px]:px-6 max-[426px]:py-3"
          >
            View all articles
            <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default LastNews;