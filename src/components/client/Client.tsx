import React from "react";

// Icons
import Quote from "@/assets/icons/quote.svg";

const Client = () => {
  return (
    <section className="relative h-205 bg-[url('/images/backgrounds/client-bg.webp')] bg-size-[cover,auto] bg-center bg-no-repeat">
      <div className="bg-client-overlay/50 absolute inset-0"></div>
      <div className="relative z-10 container mx-auto flex h-full flex-col justify-center px-5">
        <h2 className="mb-28 text-center text-3xl text-white sm:text-4xl lg:text-5xl">
          What clients say about us
        </h2>
        <div className="flex items-center justify-center gap-20">
          <div className="flex flex-col items-center gap-4 text-center text-white md:basis-[40%]">
            <Quote />
            <p className="leading-8 tracking-wider text-balance">
              The Coffee UI Kits completely transformed my website. They are
              easy to use and helped me attract more customers online. Highly
              recommend it to anyone in the coffee business!
            </p>
            <img
              src="/images/personal/personal.webp"
              alt="personal"
              className="mt-8 h-12 w-12"
            />
            <h4 className="text-xl font-bold">Sarah Thompson</h4>
            <span>E-commerce Designer</span>
          </div>
          <div className="flex basis-[40%] flex-col items-center gap-4 text-center text-white max-md:hidden">
            <Quote />
            <p className="leading-8 tracking-wider text-balance">
              The coffee beans I purchased were of exceptional quality. The
              aroma and flavor are unmatched. It’s a must-try for any coffee
              enthusiast! i like this product anyone can buy it for drinking
              good coffee at home
            </p>
            <img
              src="/images/personal/personal1.webp"
              alt="personal"
              className="mt-8 h-12 w-12"
            />
            <h4 className="text-xl font-bold">James Carter</h4>
            <span>Coffee Shop Owner</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;
