"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import BlogBox from "@/components/blog-box/BlogBox";
import { boxs } from "@/app/blog/_data/content";
import { ArrowRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const LastNews = () => {
  const reduced = useReducedMotion();
  const headingWords = "Latest news & blog".split(" ");

  return (
    <section
      id="blog"
      className="relative overflow-hidden bg-size-[cover,auto] bg-left bg-no-repeat py-20 sm:py-24 lg:bg-[url('/images/backgrounds/hero-bg.webp')] xl:py-32"
    >
      {/* الگوی فنجان با حرکت شناور */}
      <motion.img
        src="/images/backgrounds/coffee-cup-pattern.webp"
        alt=""
        aria-hidden
        animate={reduced ? undefined : { y: [0, -14, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-0 w-32 opacity-60 max-md:-left-6 sm:w-40 md:top-30 md:w-48 md:opacity-100"
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
          {boxs.slice(0, 3).map((b) => (
            <BlogBox key={b.id} item={b} />
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
