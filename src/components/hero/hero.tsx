"use client";
import React, { useEffect, useState } from "react";
import Feature from "../feature-section/Feature";
import { AnimatedCursor, Cursor, CursorFollow } from "../ui/animated-cursor";
import TechText from "../ui/TechText";
import { motion } from "framer-motion";

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

  return (
    <>
      <section className="relative z-0 flex w-full items-center bg-[url('/images/backgrounds/hero-bg.webp'),url('/images/backgrounds/hero-bg-pattern.webp')] bg-size-[cover,auto] bg-position-[center,right] bg-no-repeat max-sm:mt-12 sm:min-h-120 xl:min-h-200">
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
                introDuration={1}
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
                align={window.innerWidth > 768 ? "left" : "center"}
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
              <AnimatedCursor className="bg-primary cursor-pointer rounded-xl px-8 py-4 font-semibold text-white transition hover:shadow-primary/30 hover:shadow-xl hover:scale-105 max-[426px]:px-6 max-[426px]:py-2">
                Shop Now
                <Cursor className="size-0 rounded-full bg-white" />
                <CursorFollow
                  align="center"
                  className="size-32 rounded-full bg-white/50 blur-2xl [--cursor-follow-duration:900ms]"
                />
              </AnimatedCursor>
            </div>
          </div>
          <div className="basis-[60%] max-sm:mt-14 lg:basis-[45%]">
            <motion.img
              className="h-auto w-full"
              src="/images/backgrounds/cup-coffee.webp" // مسیر عکس خودت رو بذار
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
