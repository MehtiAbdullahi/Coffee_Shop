"use client";

import { AccordionProps } from "@/ts-types/types";
import { useState } from "react";

// Icons
import MinusCircle from "@/assets/icons/Minus-circle.svg";
import PlusCircle from "@/assets/icons/Plus-circle.svg";

export default function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="border-primary/50 hover:border-primary/10 mx-auto mt-10 w-full max-w-xl rounded-xl border transition-all">
      {items.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div
            key={item.id}
            className={`overflow-hidden ${isOpen && "bg-primary/5 shadow-md"}`}
          >
            <button
              onClick={() => toggleAccordion(item.id)}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.id}`}
              className="flex w-full items-center justify-between p-5 text-right"
            >
              <span className="font-semibold text-gray-800">{item.title}</span>

              <span className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full transition-all duration-300">
                {openId === item.id ?  <MinusCircle /> : <PlusCircle />}
              </span>
            </button>

            <div
              id={`accordion-content-${item.id}`}
              aria-hidden={!isOpen}
              className={`border-border grid border-t transition-all duration-300 ease-in-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="flex flex-col overflow-hidden">
                {item.content.map((i) => (
                  <div
                    key={i.title}
                    className="mx-6 my-4 flex items-center gap-3 max-md:flex-col max-md:items-start"
                  >
                    <span className="text-primary text-md font-bold md:text-xl">
                      {i.title}
                    </span>
                    <p className="text-primary text-[13px] leading-7 font-medium text-shadow-md md:text-sm">
                      {i.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
