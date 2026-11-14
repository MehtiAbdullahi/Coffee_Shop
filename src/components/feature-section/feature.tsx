import React from "react";

// Icons
import ExpertCraftsmanship from "@/assets/icons/Expert-Craftsmanship.svg";
import PremiumBeans from "@/assets/icons/Premium-Coffee-Beans.svg";
import QualityKits from "@/assets/icons/Quality-coffee-kits.svg";

const Feature = () => {
  return (
    <>
      <section className="container mx-auto mt-11">
        <div className="bg-bg-secondry [&>div]:max-md:bg-bg-secondry flex justify-around gap-2 rounded-2xl px-8 py-12 text-white max-md:flex-col max-md:items-center max-md:bg-transparent [&>div]:flex [&>div]:w-full [&>div]:max-w-96 [&>div]:flex-col [&>div]:items-center [&>div]:max-md:rounded-2xl max-md:[&>div]:p-8 [&>div]:[&>h3]:text-xl max-[376px]:[&>div]:[&>h3]:text-[17px]">
          <div className="">
            <PremiumBeans />
            <h3 className="mt-6 mb-2 justify-center text-center text-[24px] font-semibold">
              Premium Coffee Beans
            </h3>
            <p className="text-center text-[16px] leading-8 max-[376px]:text-[14px] max-[376px]:leading-6">
              Freshly roasted, ethically sourced, and packed with rich
              flavors—our coffee beans are perfect for every coffee lover.
            </p>
          </div>
          <div className="">
            <QualityKits />
            <h3 className="mt-6 mb-2 justify-center text-center text-[24px] font-semibold">
              Quality coffee kits
            </h3>
            <p className="text-center text-[16px] leading-8 max-[376px]:text-[14px] max-[376px]:leading-6">
              Need a stunning coffee-themed website? Our Coffee UI Kits help you
              launch an elegant, high-converting online store effortlessly.
            </p>
          </div>
          <div className="">
            <ExpertCraftsmanship />
            <h3 className="mt-6 mb-2 justify-center text-center text-[24px] font-semibold">
              Expert Craftsmanship
            </h3>
            <p className="text-center text-[16px] leading-8 max-[376px]:text-[14px] max-[376px]:leading-6">
              From bean to brew, our experts craft premium coffee beans and
              kits, ensuring every sip delivers unparalleled quality
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
