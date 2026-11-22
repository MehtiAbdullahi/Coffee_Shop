"use client";

import {
  type ComponentProps,
  type CSSProperties,
  useEffect,
  useRef,
  useState,
} from "react";

import { cn } from "@/lib/utils";

export interface Testimonial {
  name?: string;
  designation?: string;
  quote?: string;
  src: string;
}

export interface AnimatedTestimonialsProps
  extends Omit<ComponentProps<"section">, "children" | "defaultValue"> {
  autoplay?: boolean;
  defaultValue?: number;
  interval?: number;
  onValueChange?: (value: number) => void;
  testimonials: Testimonial[];
  value?: number;
}

const TILTS = [-6, 8, -9, 4, 10, -3, 7, -8];

const wrap = (index: number, count: number) =>
  count > 0 ? ((index % count) + count) % count : 0;

const photosOf = (testimonials: Testimonial[]) =>
  testimonials.map((testimonial, index) => ({
    depth: testimonials.length + 2 - index,
    index,
    name: testimonial.name,
    src: testimonial.src,
    tilt: TILTS[index % TILTS.length] ?? 0,
  }));

export const AnimatedTestimonials = (
  props: AnimatedTestimonialsProps
) => {
  const {
    autoplay = true,
    defaultValue = 0,
    interval = 3000,
    onValueChange,
    testimonials,
    value,
    className,
    ...rest
  } = props;

  const [own, setOwn] = useState(defaultValue);
  const [reduced, setReduced] = useState(false);

  const changed = useRef(onValueChange);
  const count = testimonials.length;

  const shown = wrap(value ?? own, count);

  const playable = autoplay && !reduced && count > 1;

  // Reduced motion preference
  useEffect(() => {
    const query = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const update = () => setReduced(query.matches);

    update();

    query.addEventListener("change", update);

    return () => query.removeEventListener("change", update);
  }, []);

  // Keep callback updated
  useEffect(() => {
    changed.current = onValueChange;
  }, [onValueChange]);

  // Automatic image rotation
  useEffect(() => {
    if (!playable) return;

    const timer = window.setTimeout(() => {
      const next = wrap(shown + 1, count);

      setOwn(next);
      changed.current?.(next);
    }, interval);

    return () => window.clearTimeout(timer);
  }, [count, interval, playable, shown]);

  return (
    <section
      aria-label="Image gallery"
      aria-roledescription="carousel"
      className={cn(
        "@container/animated-testimonials w-full",
        className
      )}
      data-slot="animated-testimonials"
      {...rest}
    >
      <div
        className="
          relative mx-auto
          h-120 w-full max-w-md
        "
        data-slot="animated-testimonials-photos"
      >
        {photosOf(testimonials).map((photo) => (
          <img
            alt={
              photo.index === shown
                ? photo.name ?? `Image ${photo.index + 1}`
                : ""
            }
            aria-hidden={
              photo.index === shown ? undefined : "true"
            }
            className="
              absolute inset-0
              z-(--animated-testimonials-depth)
              size-full
              origin-bottom
              rotate-[calc(var(--animated-testimonials-tilt)*var(--animated-testimonials-dir)*1deg)]
              scale-95
              select-none
              rounded-3xl
              bg-muted
              object-cover
              object-center
              opacity-70
              transition-[rotate,scale,opacity]
              duration-400
              ease-in-out
              data-[state=active]:z-40
              data-[state=active]:rotate-0
              data-[state=active]:scale-100
              data-[state=active]:opacity-100
              motion-safe:data-[state=active]:animate-animated-testimonials-rise
              motion-reduce:transition-none
            "
            data-slot="animated-testimonials-photo"
            data-state={
              photo.index === shown ? "active" : "inactive"
            }
            draggable={false}
            height={500}
            key={photo.index}
            src={photo.src}
            style={
              {
                "--animated-testimonials-depth": photo.depth,
                "--animated-testimonials-tilt": photo.tilt,
                "--animated-testimonials-dir": 1,
              } as CSSProperties
            }
            width={500}
          />
        ))}
      </div>
    </section>
  );
};