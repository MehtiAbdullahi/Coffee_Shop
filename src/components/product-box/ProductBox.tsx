import React from "react";

// Icons
import Heart from "@/assets/icons/heart.svg";
import Star from "@/assets/icons/star.svg";
import Star1 from "@/assets/icons/star-1.svg";

const ProductBox = () => {
  return (
    <div className="border-border w-full min-w-0 overflow-hidden rounded-2xl border-2">
      <div className="relative aspect-square w-full">
        <img
          src="/images/products/coffee4.webp"
          alt=""
          className="absolute z-0 h-full w-full cursor-pointer"
        />
        <Heart className="absolute top-3 right-3 z-10 cursor-pointer transition hover:scale-125 hover:rotate-12" />
      </div>
      <div className="bg-products-bg px-5 py-2 [&>div]:flex [&>div]:items-center [&>div]:justify-between [&>div]:py-3">
        <div className="">
          <span className="text-xl font-bold">Barista</span>
          <span>$200</span>
        </div>
        <div className="">
          <button className="bg-primary cursor-pointer rounded-sm px-4 py-2 text-sm font-semibold text-white">
            Add to cart
          </button>
          <div className="flex basis-[35%] justify-between">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star1 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBox;
