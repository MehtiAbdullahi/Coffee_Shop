import React from "react";

const CoffeeBeans = () => {
  return (
    <section className="my-18 flex h-150 w-full items-center 2xl:h-200 2xl:bg-[url('/images/backgrounds/coffee-bean-photo.webp')] 2xl:bg-right 2xl:bg-no-repeat">
      <div className="container mx-auto flex items-center justify-between px-6 max-2xl:px-0 max-md:px-5 max-md:flex-col max-md:gap-12">
        <div>
          <div className="w-full max-w-140 max-md:flex max-md:flex-col max-md:items-center">
            <h2 className="text text-primary text-3xl leading-10 font-bold lg:text-5xl lg:leading-15 xl:text-6xl xl:leading-20">
              Check out our best coffee beans
            </h2>
            <p className="text-primary mt-5 mb-8 leading-8 text-balance max-md:text-center lg:mt-7 lg:mb-10">
              Coffee beans begin as cherries, which ripen over several months.
              Harvesting these cherries can be done either by hand or machine.
              Hand-picking is labor-intensive but allows for the selection of
              only the ripest cherries, ensuring higher quality.
            </p>
            <button className="bg-primary cursor-pointer rounded-xl px-8 py-4 font-semibold text-white max-[426px]:px-6 max-[426px]:py-2">
              Explore our product
            </button>
          </div>
        </div>
        <div className="basis-[70%] lg:basis-[50%]">
          <img
            className="2xl:hidden"
            src="/images/backgrounds/coffee-bean-photo.webp"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default CoffeeBeans;
