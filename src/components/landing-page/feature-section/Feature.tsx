"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

import ExpertCraftsmanship from "@/assets/icons/Expert-Craftsmanship.svg";
import PremiumBeans from "@/assets/icons/Premium-Coffee-Beans.svg";
import QualityKits from "@/assets/icons/Quality-coffee-kits.svg";

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <PremiumBeans />,
    title: "Premium Coffee Beans",
    description:
      "Freshly roasted, ethically sourced, and packed with rich flavors—our coffee beans are perfect for every coffee lover.",
  },
  {
    icon: <QualityKits />,
    title: "Quality coffee kits",
    description:
      "Need a stunning coffee-themed website? Our Coffee UI Kits help you launch an elegant, high-converting online store effortlessly.",
  },
  {
    icon: <ExpertCraftsmanship />,
    title: "Expert Craftsmanship",
    description:
      "From bean to brew, our experts craft premium coffee beans and kits, ensuring every sip delivers unparalleled quality.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function FeaturesSection() {
  return (
    <section className="container mx-auto mt-16 mb-20 px-4 md:mt-20 md:mb-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="md:bg-bg-secondry md:shadow-primary/30 flex flex-col justify-around gap-6 rounded-3xl border border-white/5 p-6 md:flex-row md:gap-8 md:shadow-2xl"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-bg-secondry flex flex-col items-center rounded-2xl border border-transparent max-md:px-3 py-4 text-center transition-all duration-300 md:bg-transparent md:hover:border-white/10 md:hover:bg-white/5 lg:p-8"
          >
            <div className="md:group-hover:bg-primary/10 mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 transition-colors duration-300 sm:h-18 sm:w-18">
              {feature.icon}
            </div>

            <h3 className="mb-3 text-xl leading-snug font-semibold text-white sm:text-[22px] md:text-2xl">
              {feature.title}
            </h3>

            <p className="max-w-70 text-[15px] leading-7 text-white/75 sm:text-base">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
