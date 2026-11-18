"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { ArrowLeft, ArrowRight, Coffee, Quote, Star } from "lucide-react";

const AUTOPLAY_SECONDS = 6;

type Testimonial = {
  name: string;
  role: string;
  text: string;
  image: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    name: "Sarah Thompson",
    role: "E-commerce Designer",
    text: "The Coffee UI Kits completely transformed my website. They are easy to use and helped me attract more customers online. Highly recommend it to anyone in the coffee business!",
    image: "/images/personal/personal.webp",
    rating: 5,
  },
  {
    name: "James Carter",
    role: "Coffee Shop Owner",
    text: "The coffee beans I purchased were of exceptional quality. The aroma and flavor are unmatched. It’s a must-try for any coffee enthusiast! Anyone can buy it for drinking good coffee at home.",
    image: "/images/personal/personal1.webp",
    rating: 5,
  },
  // نمونه‌های اضافه برای اینکه اسلایدر حلقه‌ای روی دسکتاپ درست کار کنه
  // (متن و عکس رو با دیدگاه‌های واقعی خودت جایگزین کن)
  {
    name: "Sarah Thompson",
    role: "E-commerce Designer",
    text: "Setting up our online menu took one afternoon. The components feel warm and polished, and our customers keep complimenting the new look.",
    image: "/images/personal/personal.webp",
    rating: 5,
  },
  {
    name: "James Carter",
    role: "Coffee Shop Owner",
    text: "Fresh roasts, fast delivery and a taste that reminds me why I started my own shop. Our regulars noticed the difference on the first cup.",
    image: "/images/personal/personal1.webp",
    rating: 4,
  },
];

/* ------------------------------------------------------------------ */
/*  Card با افکت نور دنبال‌کننده‌ی ماوس                                */
/* ------------------------------------------------------------------ */
const TestimonialCard = ({
  item,
  active,
}: {
  item: Testimonial;
  active: boolean;
}) => {
  const mx = useMotionValue(-300);
  const my = useMotionValue(-300);
  const glow = useMotionTemplate`radial-gradient(380px circle at ${mx}px ${my}px, rgba(253, 224, 171, 0.2), transparent 70%)`;

  const onPointerMove = (e: React.PointerEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  };

  return (
    <motion.article
      onPointerMove={onPointerMove}
      animate={{ opacity: active ? 1 : 0.5, scale: active ? 1 : 0.96 }}
      transition={{ type: "spring", stiffness: 220, damping: 26 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/15 bg-white/8 p-6 text-white shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8 lg:p-10"
    >
      {/* نور ماوس */}
      <motion.div
        aria-hidden
        style={{ background: glow }}
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      {/* کوتیشن بزرگ پس‌زمینه */}
      <Quote
        aria-hidden
        className="pointer-events-none absolute -top-2 -right-2 size-28 rotate-12 text-amber-200/10 sm:size-36"
        strokeWidth={1.2}
      />

      <div
        className="relative flex items-center gap-1"
        aria-label={`${item.rating} out of 5 stars`}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={
              i < item.rating
                ? "size-4 fill-amber-300 text-amber-300"
                : "size-4 text-white/30"
            }
          />
        ))}
      </div>

      <p className="relative mt-5 flex-1 text-base leading-8 tracking-wide text-pretty text-white/90 sm:text-lg">
        {item.text}
      </p>

      <div className="relative mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="size-14 shrink-0 rounded-full object-cover ring-2 ring-amber-200/60 ring-offset-2 ring-offset-transparent"
        />
        <div className="min-w-0">
          <h4 className="truncate text-lg font-bold">{item.name}</h4>
          <span className="block truncate text-sm text-amber-100/70">
            {item.role}
          </span>
        </div>
      </div>
    </motion.article>
  );
};

/* ------------------------------------------------------------------ */
/*  Section                                                            */
/* ------------------------------------------------------------------ */
const Client = () => {
  const reduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
  });
  const [selected, setSelected] = useState(0);

  // پارالاکس بک‌گراند
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

  // sync با embla
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect).on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect).off("reInit", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // Autoplay با نوار پیشرفت داخل دات فعال
  const progressRef = useRef<HTMLSpanElement>(null);
  const animRef = useRef<ReturnType<typeof animate> | null>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    if (!emblaApi || reduced || !progressRef.current) return;
    let cancelled = false;
    const anim = animate(
      progressRef.current,
      { scaleX: [0, 1] },
      { duration: AUTOPLAY_SECONDS, ease: "linear" },
    );
    animRef.current = anim;
    if (pausedRef.current) anim.pause();
    anim.then(() => {
      if (!cancelled) emblaApi.scrollNext();
    });
    return () => {
      cancelled = true;
      anim.stop();
    };
  }, [selected, emblaApi, reduced]);

  const setPaused = (value: boolean) => {
    pausedRef.current = value;
    if (value) animRef.current?.pause();
    else animRef.current?.play();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") scrollPrev();
    if (e.key === "ArrowRight") scrollNext();
  };

  const headingWords = "What clients say about us".split(" ");

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20 sm:py-24 lg:py-32"
    >
      {/* بک‌گراند با پارالاکس */}
      <motion.div
        aria-hidden
        style={reduced ? undefined : { y: bgY }}
        className="absolute inset-x-0 -inset-y-[10%] bg-[url('/images/backgrounds/client-bg.webp')] bg-cover bg-center bg-no-repeat"
      />
      <div className="bg-client-overlay/60 absolute inset-0" />
      <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/40" />

      <div className="relative z-10 container mx-auto px-5">
        {/* هدر سکشن */}
        <div className="mx-auto mb-12 flex max-w-3xl flex-col items-center text-center sm:mb-16 lg:mb-20">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 16, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-200/30 bg-white/10 px-4 py-1.5 text-sm text-amber-100 backdrop-blur-md"
          >
            <span className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="size-3.5 fill-amber-300 text-amber-300"
                />
              ))}
            </span>
            <span>4.9 average from happy customers</span>
          </motion.div>

          {/* عنوان: ورود کلمه به کلمه (تریگر روی خود h2 است، نه روی کلمه‌های clip شده) */}
          <motion.h2
            initial={reduced ? "show" : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.08, delayChildren: 0.15 }}
            className="flex flex-wrap justify-center gap-x-3 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl"
          >
            {headingWords.map((word, i) => (
              <span key={i} className="overflow-hidden pb-1">
                <motion.span
                  className="inline-block"
                  variants={{
                    hidden: { y: "110%" },
                    show: {
                      y: 0,
                      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.h2>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-xl text-base leading-7 text-pretty text-white/70 sm:text-lg"
          >
            Real stories from coffee shop owners, designers and home brewers who
            made our products part of their daily routine.
          </motion.p>

          {/* خط تزئینی با آیکون قهوه */}
          <motion.div
            aria-hidden
            initial={reduced ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 flex items-center gap-4"
          >
            <motion.span
              initial={reduced ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-px w-16 origin-right bg-linear-to-l from-amber-200/70 to-transparent sm:w-24"
            />
            <Coffee className="size-5 text-amber-200" />
            <motion.span
              initial={reduced ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-px w-16 origin-left bg-linear-to-r from-amber-200/70 to-transparent sm:w-24"
            />
          </motion.div>
        </div>

        {/* اسلایدر */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          role="region"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
          onKeyDown={onKeyDown}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          className="mx-auto max-w-6xl"
        >
          <div ref={emblaRef} className="-mx-3 overflow-hidden py-4">
            <div className="flex touch-pan-y">
              {testimonials.map((item, i) => (
                <div
                  key={i}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${testimonials.length}`}
                  className="min-w-0 flex-[0_0_100%] px-3 lg:flex-[0_0_50%]"
                >
                  <TestimonialCard item={item} active={i === selected} />
                </div>
              ))}
            </div>
          </div>

          {/* کنترل‌ها */}
          <div className="mt-8 flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
            <div
              className="flex items-center gap-2"
              role="tablist"
              aria-label="Select testimonial"
            >
              {testimonials.map((_, i) => {
                const isActive = i === selected;
                return (
                  <button
                    key={i}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`Go to testimonial ${i + 1}`}
                    onClick={() => emblaApi?.scrollTo(i)}
                    className="relative h-2 overflow-hidden rounded-full bg-white/25 transition-[width,background-color] duration-500 outline-none hover:bg-white/40 focus-visible:ring-2 focus-visible:ring-amber-200"
                    style={{ width: isActive ? 48 : 8 }}
                  >
                    {isActive && (
                      <span
                        ref={progressRef}
                        className="absolute inset-0 origin-left rounded-full bg-amber-200"
                        style={reduced ? undefined : { transform: "scaleX(0)" }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-3">
              <motion.button
                type="button"
                onClick={scrollPrev}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.06 }}
                aria-label="Previous testimonial"
                className="grid size-12 place-items-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-amber-200 hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-amber-200 focus-visible:outline-none"
              >
                <ArrowLeft className="size-5" />
              </motion.button>
              <motion.button
                type="button"
                onClick={scrollNext}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.06 }}
                aria-label="Next testimonial"
                className="grid size-12 place-items-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-amber-200 hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-amber-200 focus-visible:outline-none"
              >
                <ArrowRight className="size-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Client;
