"use client";

import React from "react";
import { motion } from "framer-motion";

const CoffeeBeans = () => {
  return (
    <section className="my-36 flex h-150 w-full items-center md:my-12 2xl:h-200 2xl:bg-[url('/images/backgrounds/coffee-bean-photo.webp')] 2xl:bg-right 2xl:bg-no-repeat">
      <div className="container mx-auto flex items-center justify-between px-6 max-2xl:px-0 max-md:flex-col max-md:gap-12 max-md:px-5">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full max-w-xl px-6 text-center md:text-left"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-primary/80 mb-4 inline-block text-sm font-medium tracking-widest uppercase"
          >
            From Farm to Cup
          </motion.span>

          <h2 className="text-primary relative text-3xl leading-tight font-bold text-balance sm:text-4xl md:text-4xl lg:text-6xl lg:leading-[1.15]">
            Check out our best coffee beans
            <span className="bg-primary/40 absolute -bottom-2 left-0 h-0.75 w-full rounded-full" />
          </h2>

          <p className="text-primary/80 mt-6 text-base md:mt-7 md:text-lg md:leading-7 lg:leading-9">
            Coffee beans begin as cherries, which ripen over several months.
            Harvesting these cherries can be done either by hand or machine.
            Hand-picking is labor-intensive but allows for the selection of only
            the ripest cherries, ensuring higher quality.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="mt-8 md:mt-10"
          >
            <button className="group bg-primary md:hover:shadow-primary/30 relative inline-flex cursor-pointer items-center gap-2 overflow-hidden rounded-2xl px-6 py-2 font-semibold text-white transition-all duration-300 md:hover:shadow-xl active:scale-[0.98] md:px-8 md:py-4">
              <span className="relative z-10 text-sm md:text-xl">
                Explore our product
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
        </motion.div>
        <div className="">
          <img
            className="2xl:hidden"
            src="/images/backgrounds/coffee-bean-photo.webp"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default CoffeeBeans;
