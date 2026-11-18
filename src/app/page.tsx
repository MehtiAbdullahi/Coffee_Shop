import React from "react";
import Hero from "@/components/hero/Hero";
import CoffeeBeans from "../components/coffee-beans/CoffeeBeans";
import FavouriteCoffee from "@/components/favorite-coffee/FavoriteCoffee";
import ProductShop from "@/components/product-shop/ProductShop";
import Client from "@/components/client/Client";
import Gallery from "@/components/gallery/Gallery";
import LastNews from "@/components/last-news/LastNews";

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
