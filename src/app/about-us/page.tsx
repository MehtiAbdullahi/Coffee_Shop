import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import React from "react";

import { HERO, SECTIONS } from "./_data/content";
import StorySection from "./_components/StorySection";
import { Motions, TitleMotion } from "@/components/motions/Motions";

const AboutUsPage = () => {
  return (
    <section>
      <div className="my-6 w-full items-center bg-size-[cover,auto] bg-position-[center,right] bg-no-repeat xl:h-200 xl:bg-[url('/images/backgrounds/hero-bg.webp')]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <TitleMotion
            amount={0.4}
            title={HERO.title}
            classMotion="flex mt-16 my-12 justify-center"
            titleClass="text-primary mt-12 mb-24 font-bold text-center text-5xl font-xl:mb-32"
          />

          <div className="flex items-center justify-around gap-12 px-12 max-xl:flex-col">
            <div className="flex flex-col gap-12 xl:basis-[45%]">
              {HERO.paragraphs.map((p, index) => (
                <Motions key={index} x={-50} ease="soft" duration={1}>
                  <p className="text-primary text-xl leading-10 font-semibold tracking-wide max-md:text-center">
                    {p}
                  </p>
                </Motions>
              ))}
            </div>

            <Motions
              x={20}
              ease="soft"
              duration={1}
              classMotion="mb-12 w-full max-w-md xl:basis-[50%]"
            >
              <AnimatedTestimonials
                testimonials={HERO.slides}
                autoplay
                interval={3000}
              />
            </Motions>
          </div>
        </div>
      </div>

      {SECTIONS.map((data) => (
        <StorySection key={data.id} {...data} />
      ))}
    </section>
  );
};

export default AboutUsPage;
