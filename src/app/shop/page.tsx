"use client";
import React, { useState } from "react";

import ListView from "@/assets/icons/list-view.svg";
import ViewGrid from "@/assets/icons/view-grid.svg";
import { cn } from "cn";
import {
  MotionHighlight,
  MotionHighlightItem,
} from "@/components/ui/motion-highlight";
import ProductBox from "@/components/product-box/ProductBox";
import { Motions } from "@/components/motions/Motions";

const ProductsPage = () => {
  const [selectedView, setSelectedView] = useState("view-grid");
  const [showFilters, setShowFilters] = useState(false);

  return (
    <section className="container mx-auto my-12 px-6 md:px-12">
      <div className="flex items-center justify-between gap-2">
        <Motions x={-20} duration={1} amount={0.5}>
          <h3 className="text-3xl font-bold max-lg:hidden">Filters:</h3>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={cn(
              "cursor-pointer rounded-xl bg-[#decea9] p-3 font-semibold transition hover:scale-105 active:scale-100 md:px-5 md:py-3 lg:hidden",
              showFilters && "shadow-sm shadow-black/50",
            )}
          >
            Show Filters
          </button>
        </Motions>
        <Motions
          x={20}
          duration={1}
          amount={0.5}

          classMotion="flex items-center gap-2 rounded-xl bg-[#decea9] px-2 py-2 transition hover:scale-105 active:scale-100 md:px-3 md:py-2"
        >
          <MotionHighlight
            className="bg-muted inline-flex rounded-lg"
            highlightClassName="rounded-sm bg-white shadow-sm"
            onValueChange={setSelectedView}
            value={selectedView}
          >
            <fieldset
              aria-label="Range"
              className="m-0 flex min-w-0 gap-1 border-0 p-0"
            >
              <MotionHighlightItem
                asChild
                key={"view-grid"}
                value={"view-grid"}
              >
                <button
                  onClick={() => setSelectedView("view-grid")}
                  className="text-muted-foreground hover:text-foreground focus-visible:ring-ring/50 data-active:text-foreground rounded-sm px-3 py-1 text-sm font-medium transition-colors outline-none focus-visible:ring-[3px] motion-reduce:transition-none"
                  type="button"
                >
                  <ViewGrid
                    className={cn(
                      "cursor-pointer",
                      selectedView === "view-grid" && "[&>rect]:stroke-none",
                    )}
                  />
                </button>
              </MotionHighlightItem>
              <MotionHighlightItem
                asChild
                key={"list-view"}
                value={"list-view"}
              >
                <button
                  onClick={() => setSelectedView("list-view")}
                  className="text-muted-foreground hover:text-foreground focus-visible:ring-ring/50 data-active:text-foreground rounded-sm px-3 py-1 text-sm font-medium transition-colors outline-none focus-visible:ring-[3px] motion-reduce:transition-none"
                  type="button"
                >
                  <ListView
                    className={cn(
                      "cursor-pointer",
                      selectedView === "list-view" && "[&>rect]:stroke-none",
                    )}
                  />
                </button>
              </MotionHighlightItem>
            </fieldset>
          </MotionHighlight>
        </Motions>
      </div>
      <div className="relative my-8 flex items-start justify-between gap-12 max-lg:flex-col">
        <Motions
          x={-20}
          duration={1}
          amount={0.5}
          classMotion="right-0 left-0 z-10 max-lg:absolute"
        >
          <div
            className={cn(
              "bg-bg-primary basis-[25%] transition max-lg:max-h-96 max-lg:flex-row max-lg:overflow-y-auto max-lg:rounded-2xl max-lg:px-4 max-lg:py-2 max-lg:opacity-0 max-lg:shadow-md max-lg:shadow-black/15",
              showFilters && "max-lg:opacity-100",
            )}
          >
            <div
              className={cn(
                "lg:[&>div>span]:text-md flex flex-col flex-wrap items-start justify-center max-lg:hidden max-lg:opacity-0 [&>div]:mx-2 [&>div]:my-3 lg:[&>div]:my-6 [&>div>span]:font-semibold md:[&>div>span]:text-xl lg:[&>div>span]:text-2xl",
                showFilters && "max-lg:flex max-lg:opacity-100",
              )}
            >
              <div className="">
                <span className="">Product Type</span>
                <ul className="md:[&>li]:text-md my-4 [&>li]:my-2 [&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:text-sm lg:[&>li]:text-xl [&>li>label]:cursor-pointer">
                  <li>
                    <input
                      type="checkbox"
                      name="coffee-beans"
                      id="coffee-beans"
                    />
                    <label htmlFor="coffee-beans">Coffee Beans</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="coffee-kits"
                      id="coffee-kits"
                    />
                    <label htmlFor="coffee-kits">Coffee kits</label>
                  </li>
                </ul>
              </div>
              <div className="flex w-full flex-col gap-4 max-lg:order-1">
                <div className="flex w-full items-center justify-between font-semibold">
                  <span>Price</span>
                  <span>$15 - $1200</span>
                </div>
                <input type="range" name="" id="" />
              </div>
              <div className="">
                <span>Beans Origin</span>
                <ul className="md:[&>li]:text-md my-4 [&>li]:my-2 [&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:text-sm lg:[&>li]:text-xl [&>li>label]:cursor-pointer">
                  <li>
                    <input type="checkbox" name="ethiopia" id="ethiopia" />
                    <label htmlFor="ethiopia">Ethiopia</label>
                  </li>
                  <li>
                    <input type="checkbox" name="colombia" id="colombia" />
                    <label htmlFor="colombia">Colombia</label>
                  </li>
                  <li>
                    <input type="checkbox" name="brazil" id="brazil" />
                    <label htmlFor="brazil">Brazil</label>
                  </li>
                  <li>
                    <input type="checkbox" name="guatemala" id="guatemala" />
                    <label htmlFor="guatemala">Guatemala</label>
                  </li>
                </ul>
              </div>
              <div className="">
                <span>Grind Options</span>
                <ul className="md:[&>li]:text-md my-4 [&>li]:my-2 [&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:text-sm lg:[&>li]:text-xl [&>li>label]:cursor-pointer">
                  <li>
                    <input
                      type="checkbox"
                      name="whole-beans"
                      id="whole-beans"
                    />
                    <label htmlFor="whole-beans">Whole Beans</label>
                  </li>
                  <li>
                    <input type="checkbox" name="pre-ground" id="pre-ground" />
                    <label htmlFor="pre-ground">Pre Ground</label>
                  </li>
                </ul>
              </div>
              <div className="">
                <span>Special Features</span>
                <ul className="md:[&>li]:text-md my-4 [&>li]:my-2 [&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:text-sm lg:[&>li]:text-xl [&>li>label]:cursor-pointer">
                  <li>
                    <input type="checkbox" name="organic" id="organic" />
                    <label htmlFor="organic">Organic</label>
                  </li>
                  <li>
                    <input type="checkbox" name="decaf" id="decaf" />
                    <label htmlFor="decaf">Decaf</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="single-origin"
                      id="single-origin"
                    />
                    <label htmlFor="single-origin">Single-Origin</label>
                  </li>
                </ul>
              </div>
              <div className="">
                <span>Customer Ratings</span>
                <ul className="md:[&>li]:text-md my-4 [&>li]:my-2 [&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:text-sm lg:[&>li]:text-xl [&>li>label]:cursor-pointer">
                  <li>
                    <input type="checkbox" name="stars=four" id="stars=four" />
                    <label htmlFor="stars=four">4 Stars & Up</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="stars-three"
                      id="stars-three"
                    />
                    <label htmlFor="stars-three">3 Stars & up</label>
                  </li>
                </ul>
              </div>
              <div className="max-lg:order-2">
                <button
                  type="button"
                  className="text-primary border-primary cursor-pointer rounded-sm border bg-[#decea9] px-4 py-2 transition hover:scale-105 active:scale-100"
                >
                  Clear All
                </button>
              </div>
            </div>
          </div>
        </Motions>
        <div className="grid basis-[90%] grid-cols-2 xl:grid-cols-3">
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
