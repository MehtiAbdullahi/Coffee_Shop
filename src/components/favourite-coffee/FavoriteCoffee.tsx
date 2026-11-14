import React from "react";

const FavoriteCoffee = () => {
  return (
    <section className="relative bg-[url('/images/backgrounds/favourite-coffee-bg.webp')] bg-size-[cover,auto] bg-center bg-no-repeat max-md:bg-left max-md:py-16 md:max-lg:bg-none lg:h-220">
      <div className="container mx-auto h-full max-md:px-4">
        <div className="relative flex h-full items-center">
          <img
            src="/images/backgrounds/favourite-coffee-bg-md.webp"
            alt=""
            className="absolute z-0 h-auto w-full max-md:hidden lg:hidden"
          />
          <div className="relative z-10 flex h-full items-center justify-around max-md:flex-col-reverse max-md:gap-16 lg:justify-between">
            <div className="md:basis-[40%]">
              <img
                src="images/products/coffee-machine.webp"
                alt=""
                className="h-auto w-full max-w-80 min-w-0 md:max-w-150"
              />
            </div>
            <div className="max-md:text-center md:basis-[50%]">
              <h2 className="text-3xl font-bold text-balance text-white md:text-4xl md:leading-12 lg:text-5xl lg:leading-16 xl:text-6xl xl:leading-20">
                Order your favorite coffee Machine
              </h2>
              <p className="py-8 leading-8 text-balance text-white">
                Welcome to our cozy coffee shop, where the aroma of freshly
                brewed coffee fills the air. Take a seat and relax as you browse
                our menu of delicious drinks and pastries. Our baristas are
                ready to craft your perfect cup of coffee, whether you prefer a
                classic latte or a specialty espresso drink
              </p>
              <button className="bg-bg-primary text-primary cursor-pointer rounded-xl px-8 py-4 font-semibold max-[426px]:px-6 max-[426px]:py-2">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FavoriteCoffee;
