import React from "react";
import Link from "next/link";
import Billing from "./_components/Billing";
import Order from "./_components/Order";
import { Motions } from "@/components/motions/Motions";

const Payment = () => {
  return (
    <section className="container mx-auto my-12 px-6 lg:px-12">
      <div className="lg:border-border text-primary flex items-center rounded-md p-4 max-lg:flex-col max-lg:gap-5 lg:justify-around lg:border-2 lg:bg-white">
        <Motions
          duration={0.5}
          ease="smooth"
          x={-20}
          amount={0.3}
          classMotion="max-lg:border-border rounded-2xl max-lg:w-full max-lg:border max-lg:bg-white max-lg:p-6"
        >
          <span className="flex gap-2 max-lg:flex-wrap max-lg:justify-center">
            Returning customers?
            <Link className="font-semibold" href="/login">
              Click here to login?
            </Link>
          </span>
        </Motions>
        <span className="bg-border h-24 w-0.5 max-lg:hidden"></span>
        <Motions
          duration={0.5}
          ease="smooth"
          x={20}
          amount={0.3}
          classMotion="max-lg:border-border flex flex-col gap-4 rounded-2xl max-lg:w-full max-lg:items-center max-lg:border max-lg:bg-white max-lg:p-6 lg:gap-2"
        >
          <span className="text-xl font-semibold">Apply Coupon</span>
          <div className="flex gap-2 max-lg:w-full max-lg:flex-wrap max-lg:items-center max-lg:justify-center">
            <input
              type="text"
              className="border-border w-full max-w-72 min-w-0 rounded-md border p-3"
              placeholder="Enter your code"
            />
            <button className="cursor-pointer rounded-md bg-[#b5854b] px-6 py-3 text-white transition hover:scale-105 hover:shadow-md hover:shadow-[#b5854b]/50 active:scale-100">
              Apply
            </button>
          </div>
          <span className="text-[12px] text-gray-400">
            your coupon will be validated upon submission
          </span>
        </Motions>
      </div>
      <div className="my-12 flex justify-between max-lg:flex-col max-lg:gap-12">
        <Billing />
        <Order />
      </div>
    </section>
  );
};

export default Payment;
