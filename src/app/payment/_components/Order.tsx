import React from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";
import Link from "next/link";

const TITLE_ORDER = "Your Order";

const Order = () => {
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
    <div className="basis-[48%]">
      <motion.div
        variants={headerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="max-w-5xl px-4"
      >
        <h2
          id="shop-title"
          aria-label={TITLE_ORDER}
          className="my-6 ml-2 text-3xl font-medium"
        >
          {TITLE_ORDER.split(" ").map((w, i) => (
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
      <motion.div
        initial={reduced ? false : { opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: EASE }}
      >
        <div className="border-border flex flex-col gap-12 rounded-xl border-2 bg-white px-4 py-6 [&>div]:flex [&>div]:flex-col">
          <div className="[&>div:not(:last-child)]:border-b-border flex justify-between [&>div]:flex [&>div]:justify-between [&>div]:py-4 [&>div:not(:last-child)]:border-b [&>div>span]:font-medium">
            <div className="">
              <span>Barista Coffee Bean Hard Roast</span>
              <span>$15:99</span>
            </div>
            <div className="">
              <span>Subtotal</span>
              <span>$15:99</span>
            </div>
            <div className="">
              <span>Shipping (DHL Parcel)</span>
              <span>$5</span>
            </div>
            <div className="">
              <span className="font-bold!">Total</span>
              <span className="border-b-primary border-b-4">$20:99</span>
            </div>
          </div>
          <div className="">
            <label htmlFor="" className="font-semibold">
              Order Notes (optional)
            </label>
            <textarea
              className="border-border mt-2 h-40 rounded-md border p-2"
              name=""
              placeholder="Notes about your order, e.g. special notes for delivery."
              id=""
            ></textarea>
          </div>
          <div className="[&>div]:border-b-border [&>div]:flex [&>div]:items-center [&>div]:justify-between [&>div]:border-b-2 [&>div]:py-4 [&>div>div]:flex [&>div>div]:gap-2">
            <div className="">
              <div className="">
                <input type="checkbox" name="" id="Paypal" />
                <label className="cursor-pointer select-none" htmlFor="Paypal">
                  Paypal
                </label>
              </div>
              <img src="/images/paypal.webp" alt="paypal" className="mr-1" />
            </div>
            <div className="">
              <div className="">
                <input type="checkbox" name="" id="Bancomat" />
                <label
                  className="cursor-pointer select-none"
                  htmlFor="Bancomat"
                >
                  Bancomat
                </label>
              </div>
              <img src="/images/bancomat.webp" alt="bancomat" />
            </div>
            <div className="">
              <div className="">
                <input type="checkbox" name="" id="Card" />
                <label className="cursor-pointer select-none" htmlFor="Card">
                  Card
                </label>
              </div>
              <img src="/images/card.webp" alt="card" />
            </div>
            <div className="">
              <div className="">
                <input type="checkbox" name="" id="Klama" />
                <label className="cursor-pointer select-none" htmlFor="Klama">
                  Klama
                </label>
              </div>
              <img src="/images/klama.webp" alt="klama" />
            </div>
            <p className="mt-4 leading-8 tracking-wide text-balance">
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our{" "}
              <Link className="font-semibold underline" href="#">
                Privacy policy
              </Link>
              .
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="mt-4 flex md:mt-6"
          >
            <button className="group bg-primary md:hover:shadow-primary/30 relative inline-flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl px-6 py-3 font-semibold text-white transition-all duration-300 hover:shadow-xl active:scale-95 sm:px-8 sm:py-4">
              <span className="relative z-10 text-sm md:text-xl">
                Place Order
              </span>

              {/* Hover shine effect */}
              <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Order;
