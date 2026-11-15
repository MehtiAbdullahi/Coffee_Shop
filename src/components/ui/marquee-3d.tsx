"use client";

import type { ComponentProps, CSSProperties } from "react";
import { cn } from "@/lib/utils";

export interface Marquee3DProps extends ComponentProps<"div"> {
  /**
   * Tiles painted in a colour each instead of images: any CSS colour, such
   * as a theme token (`var(--chart-1)`). Used when given.
   */
  colors?: string[];
  /**
   * How many columns the tiles are dealt into, in order: the first tile to
   * the first column, the second to the second, and so on.
   *
   * @default 4
   */
  columns?: number;
  /**
   * The time one column takes to scroll by its own length, in seconds;
   * every other column takes a quarter longer, the other way.
   *
   * @default 20
   */
  duration?: number;
  /** The images' URLs, one tile each. 8 to 16 fill the grid well. */
  images?: string[];
  /**
   * Whether the columns hold still where they are: for a pause button of
   * yours, since motion that starts on its own needs a way to stop it
   * without a mouse.
   *
   * @default false
   */
  paused?: boolean;
  /**
   * Whether the columns stop while the pointer is over the grid.
   *
   * @default false
   */
  pauseOnHover?: boolean;
  /**
   * Whether the grid leans the other way: to the start instead of the end.
   *
   * @default false
   */
  reverse?: boolean;
}

/** The tiles dealt into columns, in order, as cards around a table. */
const dealt = (items: string[], columns: number) =>
  Array.from({ length: columns }, (_, column) =>
    items.filter((_item, index) => index % columns === column),
  );

/** The fewest tiles in one set of a column: fewer leave the box's corners bare. */
const LEAST = 4;

/**
 * A column's run: its tiles repeated into a set of at least `LEAST`, and
 * the set three times over, so the column always reaches past the box.
 */
const runOf = (column: string[]) => {
  const set = Array.from(
    { length: column.length > 0 ? Math.ceil(LEAST / column.length) : 0 },
    () => column,
  ).flat();
  return [...set, ...set, ...set];
};

/**
 * A grid of images laid back and turned 45 degrees, its columns scrolling
 * without end, every other one the other way. Each column is a set of its
 * tiles three times over, moved by one set by a CSS animation, so the loop
 * never shows a seam; the repeats are hidden from assistive tech. The
 * edges fade by a mask, into whatever is behind. It fills its box, so give
 * it a height. In a right-to-left page it leans the other way; with
 * reduced motion, or `paused`, the columns hold still.
 */
export const Marquee3D = (props: Marquee3DProps) => {
  const {
    images,
    colors,
    columns = 4,
    duration = 20,
    pauseOnHover = false,
    paused = false,
    reverse = false,
    className,
    style,
    ...rest
  } = props;
  const painted = colors !== undefined;
  const tiles = dealt(colors ?? images ?? [], columns);

  return (
    <div
      className={cn(
        "group/marquee-3d @container-size relative isolate size-full overflow-hidden",
        "mask-y-from-95% mask-x-from-95%",
        "[--marquee-3d-turn:-45deg] rtl:[--marquee-3d-turn:45deg]",
        "data-reverse:[--marquee-3d-turn:45deg] rtl:data-reverse:[--marquee-3d-turn:-45deg]",
        className,
      )}
      data-pause-on-hover={pauseOnHover ? "" : undefined}
      data-paused={paused ? "" : undefined}
      data-reverse={reverse ? "" : undefined}
      data-slot="marquee-3d"
      style={
        { "--marquee-3d-duration": `${duration}s`, ...style } as CSSProperties
      }
      {...rest}
    >
      <div
        className="absolute inset-0 flex items-center justify-center"
        data-slot="marquee-3d-scene"
      >
        <div
          className="grid w-[160cqmax] shrink-0 transform-[rotateX(55deg)_rotateZ(var(--marquee-3d-turn))] gap-[2cqmax]"
          data-slot="marquee-3d-grid"
          style={{
            gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
          }}
        >
          {tiles.map((column, index) => (
            <div
              className={cn(
                "flex flex-col gap-[2cqmax] pb-[2cqmax]",
                "motion-safe:animate-marquee-3d",
                "even:[animation-direction:reverse] even:[animation-duration:calc(var(--marquee-3d-duration)*1.25)]",
                "group-data-pause-on-hover/marquee-3d:group-hover/marquee-3d:[animation-play-state:paused]",
                "group-data-paused/marquee-3d:[animation-play-state:paused]",
              )}
              data-slot="marquee-3d-column"
              // biome-ignore lint/suspicious/noArrayIndexKey: a column is its place in the grid.
              key={index}
            >
              {runOf(column).map((tile, place) => (
                <div
                  aria-hidden={place >= column.length ? "true" : undefined}
                  className={cn(
                    "bg-muted ring-foreground/10 aspect-4/3 w-full shrink-0 overflow-hidden rounded-[1.5cqmax]",
                    "motion-safe:hover:trnslate-y-[-1.5cqmax] transition-[translate,scale] duration-200 ease-out motion-safe:hover:scale-105",
                  )}
                  data-slot="marquee-3d-tile"
                  // biome-ignore lint/suspicious/noArrayIndexKey: a tile is its place in the run; the same image can come twice.
                  key={place}
                  style={painted ? { background: tile } : undefined}
                >
                  {painted ? null : (
                    <img
                      alt=""
                      className="size-full object-cover"
                      draggable={false}
                      height={300}
                      src={tile}
                      width={400}
                    />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
