import React from "react";

const Hero = () => {
  return (
    <section className="flex w-full items-center bg-[url('/images/backgrounds/hero-bg.webp'),url('/images/backgrounds/hero-bg-pattern.webp')] bg-size-[cover,auto] bg-position-[center,right] bg-no-repeat max-sm:mt-12 sm:min-h-120 xl:min-h-200">
      <div className="z-10 container mx-auto flex h-full items-center justify-between max-sm:flex-col max-sm:px-12 lg:px-6">
        <div className="max-lg-[] basis-1/2 max-lg:pl-6 max-sm:pl-0 max-sm:text-center">
          <h1 className="text-primary text-3xl leading-10 font-bold max-[426px]:text-[17px] max-[426px]:leading-6 lg:text-4xl lg:leading-14 xl:text-[75px] xl:leading-24">
            Brew Perfection at Home with Our Coffee beans & Kits
          </h1>
          <p className="py-6 text-[15px] font-normal tracking-wide lg:py-12 lg:text-xl">
            Welcome to our world of premium coffee. Explore our handpicked beans
            and expertly crafted coffee kits for the perfect brew at home
          </p>
          <button className="bg-primary cursor-pointer rounded-xl px-8 py-4 font-semibold text-white max-[426px]:px-6 max-[426px]:py-2">
            Shop Now
          </button>
        </div>
        <div className="max-lg-[] basis-[60%] max-sm:mt-14 lg:basis-[45%]">
          <img
            className="h-auto w-full"
            src="/images/backgrounds/cup-coffee.webp"
            alt="cup-coffee"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
