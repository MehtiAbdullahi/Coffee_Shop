"use client";
import React, { useEffect, useState } from "react";
import Feature from "@/components/feature-section/Feature";
import { AnimatedCursor, Cursor, CursorFollow } from "../ui/animated-cursor";
import TechText from "../ui/TechText";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const Hero = () => {
  const [fontSize, setFontSize] = useState(200);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setFontSize(90);
      } else if (window.innerWidth < 768) {
        setFontSize(130);
      } else if (window.innerWidth < 1024) {
        setFontSize(170);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isDesktop = useMediaQuery("(min-width: 640px)", true);

  return (
    <>
      <section id="home" className="relative z-0 flex w-full items-center bg-[url('/images/backgrounds/hero-bg.webp'),url('/images/backgrounds/hero-bg-pattern.webp')] bg-size-[cover,auto] bg-position-[center,right] bg-no-repeat max-sm:mt-12 sm:min-h-120 xl:min-h-200">
        <div className="z-10 container mx-auto flex h-full items-center justify-between max-sm:flex-col max-sm:px-12 lg:px-6">
          <div className="basis-1/2 max-lg:pl-6 max-sm:pl-0 max-sm:text-center">
            <div className="relative flex h-40 w-full max-md:justify-center sm:-ml-4 lg:-ml-8 lg:h-50 xl:h-70">
              <TechText
                text={"Brew Perfection at\nHome with Our\nCoffee beans & Kits"}
                fontWeight={700}
                fontSize={fontSize}
                reveal="area"
                dashLength={4}
                dashGap={2}
                specks={0}
                intro="type"
                introDuration={2}
                clickKick
                guides={false}
                fontFamily=""
                letterSpacing={-0.03}
                accentColor="#371406"
                reach={50}
                softness={0.85}
                lineStyle="dashed"
                strokeWidth={1}
                speed={1}
                bounce={0.4}
                selection
                labels={false}
                color="#371406"
                align={isDesktop ? "left" : "center"}
                draggable
                sweep
              />
            </div>

            <p className="pt-2 pb-4 text-[15px] font-normal tracking-wide lg:pt-6 lg:pb-12 lg:text-xl">
              Welcome to our world of premium coffee. Explore our handpicked
              beans and expertly crafted coffee kits for the perfect brew at
              home
            </p>
            <div className="flex max-md:justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25, duration: 0.5 }}
                className="mt-8 md:mt-10"
              >
                <button className="group bg-primary md:hover:shadow-primary/30 relative inline-flex cursor-pointer items-center gap-2 overflow-hidden rounded-2xl px-6 py-3 font-semibold text-white transition-all duration-300 active:scale-[0.98] sm:px-8 sm:py-4 md:hover:shadow-xl">
                  <span className="relative z-10 text-sm md:text-xl">
                    Shop Now
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
          </div>
          <div className="basis-[60%] max-sm:mt-14 lg:basis-[45%]">
            <motion.img
              className="h-auto w-full"
              src="/images/backgrounds/cup-coffee.webp"
              alt="coffee-cup"
              initial={{ x: 150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.9,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            />
          </div>
        </div>
      </section>
      <Feature />
    </>
  );
};

export default Hero;
