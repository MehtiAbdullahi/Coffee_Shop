import React from "react";

import CoffeeBeans from "../components/landing-page/coffee-beans/CoffeeBeans";
import FavouriteCoffee from "@/components/landing-page/favorite-coffee/FavoriteCoffee";
import Client from "@/components/landing-page/client/Client";
import LastNews from "@/components/landing-page/last-news/LastNews";
import Hero from "@/components/landing-page/hero/Hero";
import Gallery from "@/components/landing-page/gallery/Gallery";
import ProductShop from "@/components/landing-page/product-shop/ProductShop";

const HeroPage = () => {
  return (
    <>
      <main>
        <Hero />
        <CoffeeBeans />
        <FavouriteCoffee />
        <ProductShop />
        <Client />
        <Gallery />
        <LastNews />
      </main>
    </>
  );
};

export default HeroPage;
