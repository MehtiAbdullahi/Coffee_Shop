"use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import React from "react";

import { motion, Variants } from "motion/react";
import { useReducedMotion } from "framer-motion";
import { HERO, SECTIONS } from "./_data/content";
import StorySection from "./_components/StorySection";

const AboutUsPage = () => {
  const EASE = [0.22, 1, 0.36, 1] as const;
  const reduced = useReducedMotion();

  const word: Variants = {
    hidden: { y: "110%", rotate: 3 },
    show: { y: "0%", rotate: 0, transition: { duration: 0.8, ease: EASE } },
  };

  const headerContainer: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
  };

  return (
    <section>
      <div className="my-6 w-full items-center bg-size-[cover,auto] bg-position-[center,right] bg-no-repeat xl:h-200 xl:bg-[url('/images/backgrounds/hero-bg.webp')]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div
            variants={headerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="flex justify-center"
          >
            <h1
              id="about-us-title"
              aria-label={HERO.title}
              className="text-primary mt-12 mb-24 text-center text-5xl font-bold xl:mb-32"
            >
              {HERO.title.split(" ").map((w, i) => (
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
            </h1>
          </motion.div>

          <div className="flex items-center justify-around gap-12 px-12 max-xl:flex-col">
            <div className="flex flex-col gap-12 xl:basis-[45%]">
              {HERO.paragraphs.map((p, index) => (
                <motion.p
                  key={index}
                  initial={reduced ? false : { opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 1, ease: EASE }}
                  className="text-primary text-xl leading-10 font-semibold tracking-wide max-md:text-center"
                >
                  {p}
                </motion.p>
              ))}
            </div>

            <motion.div
              initial={reduced ? false : { opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1, ease: EASE }}
              className="mb-12 w-full max-w-md xl:basis-[50%]"
            >
              <AnimatedTestimonials
                testimonials={HERO.slides}
                autoplay
                interval={3000}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {SECTIONS.map((data) => (
        <StorySection key={data.id} {...data} />
      ))}
    </section>
  );
};

export default AboutUsPage;
