import { motion, useReducedMotion, Variants } from "framer-motion";
import React from "react";

const TITLE_BILLING = "Billing Details";

const Billing = () => {
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
          aria-label={TITLE_BILLING}
          className="my-6 ml-2 text-3xl font-medium"
        >
          {TITLE_BILLING.split(" ").map((w, i) => (
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
        initial={reduced ? false : { opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: EASE }}
        className="border-border rounded-xl border-2 bg-white px-4 py-6"
      >
        <form
          action=""
          className="[&_input:focus]:border-primary [&_input]:border-border [&_label]:text-primary border-b-border mb-6 flex flex-col gap-4 border-b pb-6 [&_input]:min-w-0 [&_input]:rounded-md [&_input]:border [&_input]:px-4 [&_input]:py-3 [&_input]:transition-colors [&_input]:outline-none [&_input:not([type=checkbox])]:mt-2 [&_input:not([type=checkbox])]:w-full [&_label]:font-semibold"
        >
          <div className="flex justify-between gap-2">
            <div className="">
              <label htmlFor="">First Name *</label>
              <input type="text" placeholder="Jhon" />
            </div>
            <div className="">
              <label htmlFor="">Last Name *</label>
              <input type="text" placeholder="Doe" />
            </div>
          </div>
          <div className="">
            <label htmlFor="">Email Address *</label>
            <input type="text" placeholder="example@gmail.com" />
            <div className="mt-2 flex items-center gap-2">
              <input type="checkbox" name="" id="" className="" />
              <span>Sign me up to receive email updates and news!</span>
            </div>
          </div>
          <div className="">
            <label htmlFor="">Company Name</label>
            <input type="text" placeholder="Company XYZ Ltd." />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Country / Region *</label>
            <select
              name=""
              className="border-border mt-2 rounded-md border px-4 py-3"
              id=""
            >
              <option value="">Lorem, ipsum.</option>
              <option value="">Lorem, ipsum.</option>
              <option value="">Lorem, ipsum.</option>
            </select>
          </div>
          <div className="">
            <label htmlFor="">Street address *</label>
            <div className="">
              <input type="text" placeholder="House Number & street road" />
              <input
                type="text"
                placeholder="Apartment, suit, unit, etc (optional)"
              />
            </div>
          </div>
          <div className="">
            <label htmlFor="">Postcode / ZIP *</label>
            <input type="text" placeholder="12345" />
          </div>
        </form>
        <div className="text-primary flex gap-2">
          <input type="checkbox" name="" id="" />
          <span>Create an account?</span>
        </div>
      </motion.div>
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: EASE }}
        className="text-primary mt-4 ml-4 flex items-center gap-2"
      >
        <input type="checkbox" name="" id="" />
        <span>Ship to a different address?</span>
      </motion.div>
    </div>
  );
};

export default Billing;
