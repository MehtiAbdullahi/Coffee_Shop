"use client";

import React from "react";
import { motion, MotionConfig, type Variants } from "framer-motion";
import ProductBox from "@/components/product-box/ProductBox";



const EASE = [0.22, 1, 0.36, 1] as const;

// داده‌ی نمونه؛ بعداً با داده‌ی واقعی (API / Supabase) جایگزین کن
const PRODUCTS = [
  {
    id: 1,
    title: "Barista",
    price: "$200",
    rating: 4,
    src: "/images/products/coffee4.webp",
  },
  {
    id: 2,
    title: "Barista",
    price: "$200",
    rating: 5,
    src: "/images/products/coffee4.webp",
  },
  {
    id: 3,
    title: "Barista",
    price: "$200",
    rating: 4,
    src: "/images/products/coffee4.webp",
  },
  {
    id: 4,
    title: "Barista",
    price: "$200",
    rating: 3,
    src: "/images/products/coffee4.webp",
  },
  {
    id: 5,
    title: "Barista",
    price: "$200",
    rating: 5,
    src: "/images/products/coffee4.webp",
  },
  {
    id: 6,
    title: "Barista",
    price: "$200",
    rating: 4,
    src: "/images/products/coffee4.webp",
  },
  {
    id: 7,
    title: "Barista",
    price: "$200",
    rating: 4,
    src: "/images/products/coffee4.webp",
  },
  {
    id: 8,
    title: "Barista",
    price: "$200",
    rating: 5,
    src: "/images/products/coffee4.webp",
  },
];

const TITLE = "Our Special Coffee Beans Coffee kits";

// ---------- Variants ----------
const headerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

const word: Variants = {
  hidden: { y: "110%", rotate: 3 },
  show: { y: "0%", rotate: 0, transition: { duration: 0.8, ease: EASE } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const gridContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const gridItem: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: EASE },
  },
};

const ProductShop = () => {
  return (
    // reducedMotion="user": برای کاربرانی که «کاهش حرکت» را فعال کرده‌اند، انیمیشن‌های حرکتی خاموش می‌شوند
    <MotionConfig reducedMotion="user">
      <section
        id="shop"
        aria-labelledby="shop-title"
        className="relative overflow-hidden py-16 sm:py-20 lg:py-28"
      >
        {/* هاله‌های نور محو پشت سکشن */}
        <div
          aria-hidden="true"
          className="bg-primary/10 pointer-events-none absolute -top-24 left-1/2 -z-10 size-[28rem] -translate-x-1/2 rounded-full blur-3xl sm:size-[40rem]"
        />
        <div
          aria-hidden="true"
          className="bg-primary/5 pointer-events-none absolute right-0 bottom-0 -z-10 size-72 translate-x-1/3 rounded-full blur-3xl sm:size-[28rem]"
        />

        <div className="container mx-auto">
          {/* ================= هدر ================= */}
          <motion.div
            variants={headerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="mx-auto max-w-5xl px-4 text-center"
          >
            <h2
              id="shop-title"
              aria-label={TITLE}
              className="text-primary text-3xl leading-tight font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              {TITLE.split(" ").map((w, i) => (
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
            </h2>

            {/* خط تزئینی که از وسط باز می‌شود */}
            <motion.div
              aria-hidden="true"
              variants={{
                hidden: { scaleX: 0, opacity: 0 },
                show: {
                  scaleX: 1,
                  opacity: 1,
                  transition: { duration: 0.9, ease: EASE },
                },
              }}
              className="bg-primary mx-auto mt-6 h-1 w-20 origin-center rounded-full sm:mt-8 sm:w-28"
            />

            <motion.p
              variants={fadeUp}
              className="text-primary/80 mx-auto mt-6 max-w-3xl text-sm leading-7 text-pretty sm:mt-8 sm:text-lg sm:leading-9 lg:text-xl"
            >
              Discover our special coffee beans and expertly crafted coffee
              kits. Perfect for brewing café-quality coffee at home. Elevate
              your mornings with premium flavors and artisanal blends. Shop now
              and savor the difference!
            </motion.p>
          </motion.div>

          {/* ================= گرید محصولات ================= */}
          <motion.div
            variants={gridContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-12 grid grid-cols-1 gap-4 px-4 sm:mt-16 sm:grid-cols-2 sm:gap-6 sm:px-6 lg:mt-20 lg:grid-cols-3 xl:grid-cols-4"
          >
            {PRODUCTS.map((p) => (
              <motion.div key={p.id} variants={gridItem} className="min-w-0">
                <ProductBox
                  src={p.src}
                  title={p.title}
                  price={p.price}
                  rating={p.rating}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* ================= دکمه ================= */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.8 }}
            className="mt-12 flex justify-center px-4 sm:mt-16"
          >
            <button className="group bg-primary md:hover:shadow-primary/30 relative inline-flex cursor-pointer items-center gap-2 overflow-hidden rounded-2xl px-6 py-3 font-semibold text-white transition-all duration-300 active:scale-[0.98] sm:px-8 sm:py-4 md:hover:shadow-xl">
              <span className="relative z-10 text-sm md:text-xl">
                View All Product
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
            </button>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
};

export default ProductShop;
