"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

// کانتینر متن: فرزندان را پشت‌سرهم (stagger) نمایش می‌دهد
const textContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const textItem: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

// تصویر دستگاه: از کنار وارد می‌شود
const machineEnter: Variants = {
  hidden: { opacity: 0, x: -48, scale: 0.92 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.9, ease: EASE },
  },
};

const FavoriteCoffee = () => {
  return (
    <section className="relative bg-[url('/images/backgrounds/favourite-coffee-bg.webp')] bg-size-[cover,auto] bg-center bg-no-repeat max-md:bg-left max-md:py-16 md:max-lg:bg-none lg:h-220">
      <div className="container mx-auto h-full max-md:px-4">
        <div className="relative flex h-full items-center">
          <img
            src="/images/backgrounds/favourite-coffee-bg-md.webp"
            alt=""
            className="absolute z-0 h-auto w-full max-md:hidden lg:hidden"
          />
          <div className="relative z-10 flex h-full items-center justify-around max-md:flex-col-reverse max-md:gap-16 lg:justify-between">
            {/* ---------- تصویر دستگاه ---------- */}
            <motion.div
              variants={machineEnter}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="relative flex w-full justify-center md:basis-[42%] lg:basis-[40%]"
            >
              {/* شناور شدن آرام (float) */}
              <motion.img
                src="/images/products/coffee-machine.webp"
                alt="Coffee machine"
                animate={{ y: [0, -14, 0] }}
                transition={{
                  duration: 5,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                className="h-auto w-full max-w-72 drop-shadow-2xl sm:max-w-80 md:max-w-md lg:max-w-xl"
              />
            </motion.div>

            {/* ---------- متن ---------- */}
            <motion.div
              variants={textContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              className="w-full max-md:text-center md:basis-[54%] lg:basis-[50%]"
            >
              <motion.h2
                id="favorite-coffee-title"
                variants={textItem}
                className="text-3xl font-bold tracking-tight text-balance text-white sm:text-4xl md:leading-tight lg:text-5xl lg:leading-[1.15] xl:text-6xl"
              >
                Order your favorite coffee machine
              </motion.h2>

              <motion.p
                variants={textItem}
                className="mt-5 max-w-xl text-base leading-8 text-pretty text-white/85 max-md:mx-auto md:mt-6 lg:text-lg"
              >
                Welcome to our cozy coffee shop, where the aroma of freshly
                brewed coffee fills the air. Take a seat and relax as you browse
                our menu of delicious drinks and pastries. Our baristas are
                ready to craft your perfect cup, whether you prefer a classic
                latte or a specialty espresso drink.
              </motion.p>

              <motion.div variants={textItem} className="mt-8 md:mt-10">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="group bg-bg-primary text-primary inline-flex cursor-pointer items-center gap-3 rounded-xl px-8 py-4 font-semibold shadow-lg shadow-black/20 transition-shadow hover:shadow-xl hover:shadow-black/30 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/40 focus-visible:outline-none max-[426px]:px-6 max-[426px]:py-3"
                >
                  Order Now
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-5 transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FavoriteCoffee;
