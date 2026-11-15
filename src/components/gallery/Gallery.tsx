import React from "react";
// import GallerySlider from "../gallery-slider/GallerySlider";
import { Marquee3D } from "../ui/marquee-3d";

const images = [
  "/images/backgrounds/coffee2.webp",
  "/images/backgrounds/coffee-machin8.webp",
  "/images/backgrounds/coffee4.webp",
  "/images/backgrounds/coffee-machin4.webp",
  "/images/backgrounds/coffee-machin6.webp",
  "/images/backgrounds/coffee3.webp",
  "/images/backgrounds/coffee-machin7.webp",
  "/images/backgrounds/cup-coffee-bg.webp",
  "/images/backgrounds/coffee-machin5.webp",
  "/images/backgrounds/coffee-beans-bg.webp",
  "/images/backgrounds/coffee5.webp",
  "/images/products/coffee5.webp",
  "/images/products/product.webp",
  "/images/backgrounds/coffee-machin2.webp",
  "/images/products/coffee3.webp",
  "/images/products/coffee-machine3.webp",
];

const Gallery = () => {
  return (
    <section className="container mx-auto my-24 px-6">
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="text-primary mb-8 text-3xl font-bold sm:text-4xl md:text-5xl">
          Explore our coffee Gallery
        </h2>
        <p className="mix-w-0 w-full max-w-150 text-sm leading-8 text-wrap sm:text-xl">
          From bean to brew, discover the story behind our premium coffee.
          Browse our gallery and see how we bring the worlds best flavors to
          your cup
        </p>
      </div>
      <div className="text-center">
        <div className="my-16 flex w-full flex-wrap justify-around gap-3 md:gap-5 lg:h-150">
          <Marquee3D
            className="h-full rounded-xl max-lg:hidden"
            columns={6}
            images={images}
            duration={20}
            reverse
            pauseOnHover
          />
          {images.map((src, index) => (
            <img
              className="h-32 w-32 rounded-2xl object-cover md:h-48 md:w-48 lg:hidden"
              key={index}
              src={src}
              alt=""
            />
          ))}
        </div>
        <button className="bg-primary cursor-pointer rounded-xl px-8 py-4 font-semibold text-white max-[426px]:px-6 max-[426px]:py-2">
          Explore Products
        </button>
      </div>
    </section>
  );
};

export default Gallery;
