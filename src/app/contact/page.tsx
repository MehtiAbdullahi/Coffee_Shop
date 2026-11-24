import React, { ReactElement } from "react";
import { Motions, TitleMotion } from "@/components/motions/Motions";
import Link from "next/link";

// icons
import { LuMapPin } from "react-icons/lu";
import { LuPhone } from "react-icons/lu";
import { LuMail } from "react-icons/lu";

interface contactBoxType {
  id: number;
  title: string;
  des: string;
  icon: ReactElement;
}

const contactBox: contactBoxType[] = [
  {
    id: 1,
    title: "Head Office",
    des: "1234 Coffee Lane, Suite 200 Seattle, WA 98101, USA",
    icon: <LuMapPin size={54} />,
  },
  {
    id: 1,
    title: "Phone",
    des: "+1 (206) 555-1234 (Mon Fri, 9 AM 5 PM PST)",
    icon: <LuPhone size={54} />,
  },
  {
    id: 1,
    title: "Email",
    des: "support@gmail.com",
    icon: <LuMail size={54} />,
  },
];

const ContactPage = () => {
  return (
    <>
      <img
        src="/images/backgrounds/contact-bg.webp"
        alt=""
        className="absolute inset-x-0 top-0 -z-10 h-full w-full object-cover"
      />
      <section className="relative z-10 container mx-auto px-8 xl:px-12">
        <TitleMotion
          amount={0.4}
          classMotion="mx-auto my-12 max-w-5xl px-4 text-center lg:my-24"
          title="Contact"
          titleClass="text-primary text-xl leading-tight font-bold tracking-tight text-balance sm:text-5xl lg:text-4xl xl:text-5xl"
        />
        <div className="flex justify-between max-md:flex-col-reverse max-md:gap-12 xl:justify-around">
          <Motions
            x={-20}
            delay={0.25}
            duration={0.5}
            classMotion="text-primary flex basis-[45%] flex-col gap-4 max-md:text-center lg:gap-8 xl:gap-12 [&>p]:leading-8 [&>p]:text-balance"
          >
            <h2 className="text-3xl font-semibold">Returns</h2>
            <p>
              We are dedicated to ensuring your experience as a coffee
              enthusiast is nothing short of excellent. Your satisfaction with
              our products and service is our top priority.
            </p>
            <p>
              That said, mistakes can happen—we’re only human! But rest assured,
              we are here to make things right and provide the support you need.
            </p>
            <p>
              If you need to return an item, simply visit our Return Portal.
              This will help us process your request as efficiently as possible
              so you can get back to brewing with ease.
            </p>
            <Link className="group flex max-md:justify-center" href="#">
              <span className="border-b-primary flex items-center gap-2 border-b-2 transition-all duration-300 ease-in-out group-hover:gap-4">
                Go to return portal
                <svg
                  className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </Link>
          </Motions>

          <Motions
            x={20}
            delay={0.25}
            duration={0.5}
            classMotion="border-border basis-[50%] rounded-md border-2 bg-white p-8"
          >
            <form
              action=""
              className="[&_input]:border-border flex flex-col gap-4 [&_input]:rounded-md [&_input]:border [&_input]:p-3 [&>div]:flex [&>div]:flex-col [&>div]:gap-2"
            >
              <div className="">
                <label htmlFor="username">Name:</label>
                <input type="text" id="username" placeholder="Jhon Doe" />
              </div>
              <div className="">
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" placeholder="example@gmail.com" />
              </div>
              <div className="">
                <label htmlFor="message">Message</label>
                <textarea
                  name=""
                  id="Message"
                  className="border-border rounded-md border p-3"
                  placeholder="Write your message here...."
                ></textarea>
              </div>
              <div className=""></div>
              <Motions
                y={20}
                delay={0.25}
                duration={0.5}
                classMotion="mt-8 md:mt-10"
              >
                <button className="group bg-primary md:hover:shadow-primary/30 relative inline-flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-2xl px-6 py-3 font-semibold text-white transition-all duration-300 active:scale-[0.98] sm:px-8 sm:py-4 md:hover:shadow-xl">
                  <span className="relative z-10 text-sm md:text-xl">
                    Send Message
                  </span>

                  {/* Hover shine effect */}
                  <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                </button>
              </Motions>
            </form>
          </Motions>
        </div>
        <div className="">
          <TitleMotion
            title="Contact Information"
            titleClass="text-primary text-base leading-tight font-bold tracking-tight text-balance sm:text-lg lg:text-xl xl:text-3xl"
            amount={0.2}
            classMotion="mx-auto my-24 max-w-5xl px-4 text-center"
          />
          <div className="[&>div]:border-border text-primary flex flex-wrap justify-center gap-6 [&>div]:flex [&>div]:h-72 [&>div]:min-h-0 [&>div]:w-96 [&>div]:min-w-60 [&>div]:flex-1 [&>div]:flex-col [&>div]:items-center [&>div]:justify-center [&>div]:rounded-xl [&>div]:border-2 [&>div]:bg-white [&>div]:p-6 [&>div>p]:text-center [&>div>p]:tracking-wide [&>div>p]:text-wrap [&>div>span]:text-xl [&>div>span]:font-semibold">
            {contactBox.map(({ des, icon, id, title }) => (
              <Motions key={id} y={20} delay={0.25} duration={0.2}>
                {icon}
                <span className="mt-6 mb-3">{title}</span>
                <p>{des}</p>
              </Motions>
            ))}
          </div>
          <div className="my-24 flex w-full justify-center">
            <img
              src="/images/backgrounds/map.webp"
              alt="map"
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
