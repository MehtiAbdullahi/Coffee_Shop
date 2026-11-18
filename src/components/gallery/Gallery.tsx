"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { ArrowRight, Camera, Expand, Images } from "lucide-react";
import { Marquee3D } from "../ui/marquee-3d";

const images = [
  "/images/backgrounds/coffee2.webp",
  "/images/backgrounds/coffee-machin8.webp",
  "/images/backgrounds/coffee4.webp",
  "/images/backgrounds/coffee-machin4.webp",
  "/images/backgrounds/coffee-machin6.webp",
  "/images/backgrounds/coffee3.webp",
  "/images/backgrounds/coffee-machin7.webp",
  "/images/backgrounds/cup-coffee-bg.webp",
  "/images/backgrounds/coffee-machin5.webp",
  "/images/backgrounds/coffee-beans-bg.webp",
  "/images/backgrounds/coffee5.webp",
  "/images/products/coffee5.webp",
  "/images/products/product.webp",
  "/images/backgrounds/coffee-machin2.webp",
  "/images/products/coffee3.webp",
  "/images/products/coffee-machine3.webp",
];

const EASE = [0.22, 1, 0.36, 1] as const;

// کدوم آیتم‌ها در گرید موبایل/تبلت بزرگ‌تر باشن (الگوی bento)
const isFeatured = (i: number) => i % 5 === 0;

const Gallery = () => {
  const reduced = useReducedMotion();
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const headingWords = "Explore our coffee Gallery".split(" ");

  return (
    <section className="container mx-auto my-24 px-6">
      {/* ---------------------------- Header ---------------------------- */}
      <div className="flex flex-col items-center justify-center text-center">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 16, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="border-primary/20 bg-primary/10 text-primary mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium"
        >
          <Camera className="size-4" />
          <span>{images.length} moments from bean to brew</span>
        </motion.div>

        {/* تریگر روی خود h2 است تا کلمه‌های clip شده مشکلی ایجاد نکنن */}
        <motion.h2
          initial={reduced ? "show" : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.08, delayChildren: 0.15 }}
          className="text-primary mb-6 flex flex-wrap justify-center gap-x-3 text-3xl font-bold sm:text-4xl md:text-5xl"
        >
          {headingWords.map((word, i) => (
            <span key={i} className="overflow-hidden pb-1">
              <motion.span
                className="inline-block"
                variants={{
                  hidden: { y: "110%" },
                  show: { y: 0, transition: { duration: 0.7, ease: EASE } },
                }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </motion.h2>

        <motion.p
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
          className="w-full max-w-150 min-w-0 text-sm leading-8 text-wrap opacity-80 sm:text-xl"
        >
          From bean to brew, discover the story behind our premium coffee.
          Browse our gallery and see how we bring the world’s best flavors to
          your cup.
        </motion.p>
      </div>

      <div className="text-center">
        {/* ------------------- Desktop: Marquee 3D ------------------- */}
        <motion.div
          initial={reduced ? false : { opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="relative my-16 h-150 overflow-hidden rounded-3xl max-lg:hidden"
        >
          {/* نور نرم پشت مارکی */}
          <div
            aria-hidden
            className="bg-primary/10 pointer-events-none absolute inset-x-10 top-1/2 h-2/3 -translate-y-1/2 rounded-full blur-3xl"
          />
          <Marquee3D
            className="relative h-full rounded-xl"
            columns={6}
            images={images}
            duration={20}
            reverse
            pauseOnHover
          />
          {/* محو شدن بالا و پایین */}
          <div
            aria-hidden
            className="from-background pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b to-transparent"
          />
          <div
            aria-hidden
            className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t to-transparent"
          />
        </motion.div>

        {/* ------------------- Mobile / Tablet: Bento grid ------------------- */}
        <div className="my-12 grid grid-flow-dense auto-rows-[7rem] grid-cols-2 gap-3 min-[480px]:auto-rows-[9rem] md:auto-rows-[11rem] md:grid-cols-3 md:gap-4 lg:hidden">
          {images.map((src, index) => (
            <motion.button
              key={src}
              type="button"
              onClick={() => setLightboxIndex(index)}
              aria-label={`Open photo ${index + 1}`}
              initial={reduced ? false : { opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: (index % 3) * 0.08,
                ease: EASE,
              }}
              whileTap={{ scale: 0.97 }}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                isFeatured(index) ? "col-span-2 row-span-2" : ""
              }`}
            >
              <img
                src={src}
                alt={`Coffee gallery photo ${index + 1}`}
                loading="lazy"
                decoding="async"
                className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <span
                aria-hidden
                className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-active:opacity-100"
              />
              <span
                aria-hidden
                className="absolute right-3 bottom-3 grid size-9 translate-y-2 place-items-center rounded-full bg-white/20 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-active:translate-y-0 group-active:opacity-100"
              >
                <Expand className="size-4" />
              </span>
            </motion.button>
          ))}
        </div>

        {/* ----------------------------- CTA ----------------------------- */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="bg-primary group relative inline-flex cursor-pointer items-center gap-2 overflow-hidden rounded-xl px-8 py-4 font-semibold text-white shadow-lg shadow-black/10 max-[426px]:px-6 max-[426px]:py-3"
          >
            <span className="relative z-10 text-sm md:text-xl">
              Explore Products
            </span>

            {/* Arrow */}
            <svg
              className="relative z-10 h-5 w-5 transition-transform duration-300 md:group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>

            {/* Hover shine effect */}
            <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </motion.button>

          <motion.button
            type="button"
            onClick={() => setLightboxIndex(0)}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="border-primary/30 text-primary hover:bg-primary/10 inline-flex cursor-pointer items-center gap-2 rounded-xl border px-8 py-4 font-semibold transition-colors max-[426px]:px-6 max-[426px]:py-3"
          >
            <Images className="size-5" />
            Browse all photos
          </motion.button>
        </motion.div>
      </div>

      {/* ---------------------------- Lightbox ---------------------------- */}
      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={images.map((src, i) => ({
          src,
          alt: `Coffee gallery photo ${i + 1}`,
        }))}
        carousel={{ finite: false }}
        animation={{ fade: reduced ? 0 : 300, swipe: reduced ? 0 : 400 }}
      />
    </section>
  );
};

export default Gallery;
