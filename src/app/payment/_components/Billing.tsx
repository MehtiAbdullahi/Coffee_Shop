import React from "react";
import { Motions, TitleMotion } from "@/components/motions/Motions";

const Billing = () => {
  return (
    <div className="basis-[48%]">
      <TitleMotion
        amount={0.4}
        classMotion="max-w-5xl px-4"
        title="Billing Details"
        titleClass="my-6 ml-2 text-3xl font-medium"
      />
      <Motions
        amount={0.3}
        duration={0.5}
        x={-20}
        ease="smooth"
        classMotion="border-border rounded-xl border-2 bg-white px-4 py-6"
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
      </Motions>
      <Motions
        y={20}
        amount={0.5}
        duration={0.5}
        ease="smooth"
        classMotion="text-primary mt-4 ml-4 flex items-center gap-2"
      >
        <input type="checkbox" name="" id="" />
        <span>Ship to a different address?</span>
      </Motions>
    </div>
  );
};

export default Billing;
