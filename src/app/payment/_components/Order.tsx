import React from "react";
import Link from "next/link";
import { Motions, TitleMotion } from "@/components/motions/Motions";

const Order = () => {
  return (
    <div className="basis-[48%]">
      <TitleMotion
        title="Your Order"
        titleClass="my-6 ml-2 text-3xl font-medium"
        classMotion="max-w-5xl px-4"
        amount={0.4}
      />
      <Motions
        duration={0.5}
        ease="smooth"
        x={20}
        amount={0.3}
        classMotion="max-lg:border-border rounded-2xl max-lg:w-full max-lg:border max-lg:bg-white max-lg:p-6"
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
          <Motions
            duration={0.5}
            ease="smooth"
            y={20}
            delay={0.25}
            amount={0.5}
            classMotion="mt-4 flex md:mt-6"
          >
            <button className="group bg-primary md:hover:shadow-primary/30 relative inline-flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl px-6 py-3 font-semibold text-white transition-all duration-300 hover:shadow-xl active:scale-95 sm:px-8 sm:py-4">
              <span className="relative z-10 text-sm md:text-xl">
                Place Order
              </span>

              {/* Hover shine effect */}
              <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </button>
          </Motions>
        </div>
      </Motions>
    </div>
  );
};

export default Order;
