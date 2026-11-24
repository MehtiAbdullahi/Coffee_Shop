import React from "react";
import { StorySectionData } from "../_data/content";
import { Card3D, Card3DBody, Card3DItem } from "@/components/ui/card-3d";
import { Motions, TitleMotion } from "@/components/motions/Motions";

const StorySection = ({
  title,
  paragraphs,
  image,
  imageSide,
}: StorySectionData) => {
  return (
    <div className="container mx-auto my-16 px-4 sm:px-6 lg:px-8 xl:my-24 xl:px-12">
      <div
        className={`flex flex-col-reverse gap-8 lg:items-center lg:gap-12 xl:flex-row ${imageSide === "right" ? "xl:flex-row-reverse" : ""} `}
      >
        <Motions
          x={imageSide === "left" ? -20 : 20}
          amount={0.3}
          ease="soft"
          duration={1}
          classMotion="w-full shrink-0 basis-[50%]"
        >
          <Card3D>
            <Card3DBody className="rounded-xl p-2 sm:p-3 md:p-4">
              <Card3DItem className="mt-2 w-full sm:mt-4" translateZ={80}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-auto w-full min-w-0 rounded-xl object-cover hover:shadow-2xl hover:shadow-black/50"
                />
              </Card3DItem>
            </Card3DBody>
          </Card3D>
        </Motions>

        {/* Content */}
        <div className="flex w-full basis-[50%] flex-col gap-2 sm:gap-4 xl:gap-8">
          <TitleMotion
            title={title}
            amount={0.4}
            titleClass="text-primary text-3xl font-semibold max-md:text-center sm:text-4xl md:text-[2.5rem] lg:text-4xl"
          />

          {paragraphs.map((p, i) => (
            <Motions
              key={i}
              y={40}
              amount={0.6}
              ease="smooth"
              classMotion="text-primary text-sm leading-7 font-medium tracking-wide max-md:text-center sm:text-[15px] sm:leading-8 md:text-base md:leading-9 xl:text-[17px]"
            >
              <p>{p}</p>
            </Motions>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StorySection;
