import React from "react";
import Card3DBox from "../card3D-box/Card3DBox";

interface newsBox {
  id: number;
  src: string;
  title: string;
  date: string;
  countComments: number;
}

const boxs: newsBox[] = [
  {
    id: 1,
    src: "/images/backgrounds/blog-1.webp",
    title: "How to make American coffee at home that you feel on shop",
    date: "10/May/2025",
    countComments: 10,
  },
  {
    id: 2,
    src: "/images/backgrounds/coffee.webp",
    title: "Perfect Drinks for Relaxing Evenings",
    date: "10/May/2025",
    countComments: 14,
  },
  {
    id: 3,
    src: "/images/backgrounds/coffee-machin.webp",
    title: "The best instant coffee you can have right now on a budget",
    date: "10/May/2025",
    countComments: 8,
  },
];

const LastNews = () => {
  return (
    <section className="relative bg-size-[cover,auto] bg-left bg-no-repeat sm:min-h-120 lg:bg-[url('/images/backgrounds/hero-bg.webp')] xl:min-h-200">
      <img
        src="/images/backgrounds/coffee-cup-pattern.webp"
        alt="coffee-cup-pattern"
        className="absolute top-0 my-auto w-48 bg-no-repeat max-md:bottom-0 md:top-30"
      />
      <div className="flex w-full flex-col items-center justify-center gap-12 sm:min-h-120 xl:min-h-200">
        <div className="text-center">
          <h2 className="sm:mb-7 mb-5 text-2xl font-bold sm:text-5xl lg:text-6xl">
            Latest news & blog
          </h2>
          <span className="text-sm font-medium sm:text-xl lg:text-2xl">
            GET EVERY SINGLE UPDATE
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-center">
          {boxs.map((b, index) => (
            <Card3DBox key={index} {...b} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LastNews;
