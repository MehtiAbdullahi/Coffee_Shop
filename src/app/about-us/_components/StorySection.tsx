import React from "react";
import { ImageSide, StorySectionData } from "../_data/content";
import { motion, Variants } from "motion/react";
import { useReducedMotion } from "framer-motion";
import { Card3D, Card3DBody, Card3DItem } from "@/components/ui/card-3d";
import { cn } from "cn";

// const BACKGROUND: Record<ImageSide, string> = {
//   left: "",
//   right:
//     "relative h-110 w-full before:-scale-x-100 before:bg-[url('/images/backgrounds/beans-bg.webp')] before:bg-cover before:bg-center before:bg-no-repeat",
// };

const DIRECTION: Record<ImageSide, "left" | "right"> = {
  left: "left",
  right: "right",
};

const OFFSETS = {
  up: { y: 40 },
  left: { x: -40 },
  right: { x: 40 },
} as const;

const StorySection = ({
  id,
  title,
  paragraphs,
  image,
  imageSide,
}: StorySectionData) => {
  const titleId = `${id}-${title.trim()}`;
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
    <div className="container mx-auto my-16 px-4 sm:px-6 lg:px-8 xl:my-24 xl:px-12">
      <div
        className={`flex flex-col-reverse gap-8 lg:items-center lg:gap-12 xl:flex-row ${imageSide === "right" ? "xl:flex-row-reverse" : ""} `}
      >
        <motion.div
          initial={
            reduced ? false : { opacity: 0, ...OFFSETS[DIRECTION[imageSide]] }
          }
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: EASE }}
          className="w-full shrink-0 basis-[50%]"
        >
          <Card3D>
            <Card3DBody className="rounded-xl p-2 sm:p-3 md:p-4">
              <Card3DItem className="mt-2 w-full sm:mt-4" translateZ={80}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-auto w-full min-w-0 rounded-xl object-cover hover:shadow-2xl hover:shadow-black/50"
                />
              </Card3DItem>
            </Card3DBody>
          </Card3D>
        </motion.div>

        {/* Content */}
        <div className="flex w-full basis-[50%] flex-col gap-2 sm:gap-4 xl:gap-8">
          <motion.div
            variants={headerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <h2
              id="about-us-title"
              aria-label={title}
              className="text-primary text-3xl font-semibold max-md:text-center sm:text-4xl md:text-[2.5rem] lg:text-4xl"
            >
              {title.split(" ").map((w, i) => (
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
          </motion.div>

          {paragraphs.map((p) => (
            <motion.p
              key={p}
              initial={reduced ? false : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="text-primary text-sm leading-7 font-medium tracking-wide max-md:text-center sm:text-[15px] sm:leading-8 md:text-base md:leading-9 xl:text-[17px]"
            >
              {p}
            </motion.p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StorySection;
