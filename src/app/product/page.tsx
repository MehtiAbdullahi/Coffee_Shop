import React from "react";
import Link from "next/link";
import ProductBox from "@/components/product-box/ProductBox";
import Accordion from "@/components/acordion/Acordion";
import { AccordionItem } from "@/ts-types/types";
import { Motions } from "@/components/motions/Motions";

const accordionItems: AccordionItem[] = [
  {
    id: 1,
    title: "Key Features",
    content: [
      {
        title: "Flavor Notes:",
        text: "Bold, Nutty, with Hints of Dark Chocolate",
      },
      { title: "Roast Level:", text: "Hard Roast (Dark Roast)" },
      { title: "Weight:", text: "350 grams" },
      { title: "Origin:", text: "Single-Origin from Brazil" },
      { title: "Perfect For:", text: "Espresso, French Press, or Moka Pot" },
      { title: "Certifications:", text: "Ethically Sourced, 100% Organic" },
    ],
  },
  {
    id: 2,
    title: "Customer Reviews",
    content: [
      {
        title: "Flavor Notes:",
        text: "Bold, Nutty, with Hints of Dark Chocolate",
      },
      { title: "Roast Level:", text: "Hard Roast (Dark Roast)" },
      { title: "Weight:", text: "350 grams" },
      { title: "Origin:", text: "Single-Origin from Brazil" },
      { title: "Perfect For:", text: "Espresso, French Press, or Moka Pot" },
      { title: "Certifications:", text: "Ethically Sourced, 100% Organic" },
    ],
  },
  {
    id: 3,
    title: "Shipping & Delivery",
    content: [
      {
        title: "Flavor Notes:",
        text: "Bold, Nutty, with Hints of Dark Chocolate",
      },
      { title: "Roast Level:", text: "Hard Roast (Dark Roast)" },
      { title: "Weight:", text: "350 grams" },
      { title: "Origin:", text: "Single-Origin from Brazil" },
      { title: "Perfect For:", text: "Espresso, French Press, or Moka Pot" },
      { title: "Certifications:", text: "Ethically Sourced, 100% Organic" },
    ],
  },
];

const Product = () => {

  return (
    <section className="container mx-auto my-12 px-6 lg:px-12">
      <div className="flex gap-16 max-lg:flex-col">
        <div className="flex basis-[50%] flex-col gap-6">
          <Motions x={-20} ease="soft" duration={1}>
            <img
              src="/images/products/coffee4-lg.webp"
              alt="product"
              className="h-auto w-full rounded-2xl"
            />
          </Motions>

          <Motions
            y={20}
            duration={1}
            amount={0.9}
            classMotion="flex flex-wrap justify-between"
          >
            <img
              src="/images/products/coffee6.webp"
              className="h-auto w-32 max-[450px]:w-20 sm:w-42 md:w-52 lg:w-32 xl:w-44 2xl:w-52"
              alt="product"
            />

            <img
              src="/images/products/coffee7.webp"
              className="h-auto w-32 max-[450px]:w-20 sm:w-42 md:w-52 lg:w-32 xl:w-44 2xl:w-52"
              alt="product"
            />
            <img
              src="/images/products/coffee8.webp"
              className="h-auto w-32 max-[450px]:w-20 sm:w-42 md:w-52 lg:w-32 xl:w-44 2xl:w-52"
              alt="product"
            />
          </Motions>
        </div>
        <div className="flex basis-[50%] flex-col">
          <Motions
            x={20}
            duration={1}
            amount={0.8}
            classMotion="flex flex-col gap-6"
          >
            <h2 className="text-2xl font-bold md:text-3xl">
              Barista Coffee Bean - Hard Roast
            </h2>
            <div className="flex gap-3">
              <span className="font-semibold">Price:</span>
              <span>$15:99</span>
            </div>
            <div className="flex gap-3">
              <span className="font-semibold">SKU:</span>
              <span>BCB-HR-350</span>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-semibold">Description:</span>
              <p className="leading-8">
                Enjoy the rich aroma and bold flavor of Barista Coffee Bean.
                This premium hard roast is crafted for coffee enthusiasts who
                appreciate strong, full-bodied brews. Sourced from the finest
                coffee farms, it delivers a perfectly balanced cup every time.
              </p>
            </div>
          </Motions>
          <Motions y={20} duration={1} amount={0.8}>
            <div className="mt-6 flex flex-wrap gap-4 max-md:justify-center">
              <Link
                href="/blog"
                className="border-primary/30 bg-primary hover:bg-primary group relative z-10 flex w-44 items-center justify-center gap-2 rounded-md border p-3 font-semibold text-white transition hover:scale-105 hover:text-white active:scale-[0.98]"
              >
                <span>Add To Cart</span>
                <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </Link>
              <Link
                href="/blog"
                className="border-primary text-primary hover:bg-primary group flex w-44 items-center justify-center gap-2 rounded-md border-2 p-3 font-semibold transition hover:scale-105 hover:text-white active:scale-[0.98]"
              >
                Buy Now
              </Link>
            </div>
          </Motions>
          <Motions y={20} duration={1} amount={0.5}>
            <Accordion items={accordionItems} />
          </Motions>
        </div>
      </div>
      <div className="text-center">
        <h3 className="mt-16 mb-12 text-3xl font-bold">Related Product</h3>
        <div className="grid grid-cols-2 items-center justify-center xl:flex">
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
        </div>
      </div>
    </section>
  );
};

export default Product;
