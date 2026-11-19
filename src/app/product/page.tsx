"use client";
import React from "react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import ProductBox from "@/components/product-box/ProductBox";

const Product = () => {
  const EASE = [0.22, 1, 0.36, 1] as const;
  const reduced = useReducedMotion();

  return (
    <section className="container mx-auto my-12 px-12">
      <div className="flex gap-16">
        <div className="flex w-full basis-[50%] flex-col gap-6">
          <div className="">
            <img
              src="/images/products/coffee4-lg.webp"
              alt=""
              className="h-auto w-full rounded-2xl"
            />
          </div>
          <div className="flex justify-between">
            <img
              src="/images/products/coffee6.webp"
              className="h-auto w-56"
              alt=""
            />
            <img
              src="/images/products/coffee7.webp"
              className="h-auto w-56"
              alt=""
            />
            <img
              src="/images/products/coffee8.webp"
              className="h-auto w-56"
              alt=""
            />
          </div>
        </div>
        <div className="flex basis-[50%] flex-col gap-6">
          <h2 className="text-3xl font-bold">Barista Coffee Bean - Hard Roast</h2>
          <div className="flex gap-3">
            <span className="font-semibold">Price:</span>
            <span>$15:99</span>
          </div>
          <div className="flex gap-3">
            <span className="font-semibold">SKU:</span>
            <span>BCB-HR-350</span>
          </div>
          <div className="flex gap-3 flex-col">
            <span className="font-semibold">Description:</span>
            <p className="leading-8">
              Enjoy the rich aroma and bold flavor of Barista Coffee Bean. This
              premium hard roast is crafted for coffee enthusiasts who
              appreciate strong, full-bodied brews. Sourced from the finest
              coffee farms, it delivers a perfectly balanced cup every time.
            </p>
          </div>
          <div className="flex gap-4 mt-6">
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <Link
                href="/blog"
                className="border-primary/30 bg-primary hover:bg-primary group relative z-10 flex w-44 items-center justify-center gap-2 rounded-md border p-3 font-semibold text-white transition hover:scale-105 hover:text-white active:scale-[0.98]"
              >
                <span>Add To Cart</span>
                <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </Link>
            </motion.div>
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <Link
                href="/blog"
                className="border-primary text-primary hover:bg-primary group flex w-44 items-center justify-center gap-2 rounded-md border-2 p-3 font-semibold transition hover:scale-105 hover:text-white active:scale-[0.98]"
              >
                Buy Now
              </Link>
            </motion.div>
          </div>
          <div className="">
            <div className="accordion" id="acc">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    data-bs-toggle="collapse"
                    data-bs-target="#a1"
                  >
                    hello
                  </button>
                </h2>
                <div
                  id="a1"
                  className="accordion-collapse show collapse"
                  data-bs-parent="#acc"
                >
                  <div className="accordion-body">hi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <h3 className="mt-16 mb-12 text-3xl font-bold">Related Product</h3>
        <div className="flex items-center">
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
        </div>
      </div>
    </section>
  );
};

export default Product;
