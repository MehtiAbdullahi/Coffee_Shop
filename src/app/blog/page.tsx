"use client";
import BlogBox from "@/components/blog-box/BlogBox";
import { motion, Variants } from "framer-motion";
import { boxs } from "./_data/content";

const EASE = [0.22, 1, 0.36, 1] as const;

const TITLE = "Our Blog";

const word: Variants = {
  hidden: { y: "110%", rotate: 3 },
  show: { y: "0%", rotate: 0, transition: { duration: 0.8, ease: EASE } },
};

const headerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

const BlogsPage = () => {
  return (
    <section className="container mx-auto my-28 px-4 md:px-12">
      <h2 className="mb-12 text-center text-4xl font-bold">
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
            className="text-primary text-xl leading-tight font-bold tracking-tight text-balance sm:text-5xl lg:text-4xl xl:text-5xl"
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
        </motion.div>
      </h2>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
        {boxs.map((b) => (
          <BlogBox key={b.id} item={b} />
        ))}
      </div>
    </section>
  );
};

export default BlogsPage;
