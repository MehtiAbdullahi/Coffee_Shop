"use client";

import type React from "react";
import type { PointerEvent } from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";

/** What the cursor grows over: controls, links, and anything you mark with `data-cursor="interactive"`. */
const INTERACTIVE =
  'a[href], button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), label, summary, [role="button"], [role="link"], [role="checkbox"], [role="radio"], [role="switch"], [role="tab"], [role="option"], [role="menuitem"], [data-cursor="interactive"]';

/** Whether the pointer is over an interactive element inside the area. */
const overInteractive = (target: EventTarget | null, area: HTMLElement) => {
  if (!(target instanceof Element)) {
    return false;
  }
  const hit = target.closest(INTERACTIVE);
  return hit !== null && area.contains(hit);
};

/**
 * The area the custom cursor lives in. Inside it, the system cursor is
 * hidden and its `Cursor` and `CursorFollow` parts track the pointer;
 * outside it, on touch, with reduced motion and in forced colors the
 * system cursor stays. The pointer is written as two CSS variables
 * (`--animated-cursor-x`, `--animated-cursor-y`), never as state, so a move
 * re-renders nothing.
 */
export const AnimatedCursor = (props: React.ComponentProps<"div">) => {
  const {
    className,
    onPointerEnter,
    onPointerLeave,
    onPointerMove,
    onPointerOver,
    ...rest
  } = props;

  const [active, setActive] = useState(false);
  const [interactive, setInteractive] = useState(false);

  const place = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty(
      "--animated-cursor-x",
      `${event.clientX - rect.left}px`
    );
    event.currentTarget.style.setProperty(
      "--animated-cursor-y",
      `${event.clientY - rect.top}px`
    );
  };

  const pointerEnter = (event: PointerEvent<HTMLDivElement>) => {
    onPointerEnter?.(event);
    if (event.pointerType === "touch") {
      return;
    }
    place(event);
    setActive(true);
  };

  const pointerMove = (event: PointerEvent<HTMLDivElement>) => {
    onPointerMove?.(event);
    if (event.pointerType === "touch") {
      return;
    }
    place(event);
    setActive(true);
  };

  const pointerOver = (event: PointerEvent<HTMLDivElement>) => {
    onPointerOver?.(event);
    if (event.pointerType === "touch") {
      return;
    }
    setInteractive(overInteractive(event.target, event.currentTarget));
  };

  const pointerLeave = (event: PointerEvent<HTMLDivElement>) => {
    onPointerLeave?.(event);
    setActive(false);
    setInteractive(false);
  };

  return (
    <div
      className={cn(
        "group/animated-cursor relative isolate",
        // The system cursor goes only while the custom one shows.
        // "motion-safe:not-forced-colors:data-active:cursor-none motion-safe:not-forced-colors:data-active:**:cursor-none",
        className
      )}
      data-active={active ? "" : undefined}
      data-interactive={interactive ? "" : undefined}
      data-slot="animated-cursor"
      onPointerEnter={pointerEnter}
      onPointerLeave={pointerLeave}
      onPointerMove={pointerMove}
      onPointerOver={pointerOver}
      {...rest}
    />
  );
};

/**
 * Shown while the pointer is in the area, hidden (and gone from layout)
 * otherwise. Entering from `display: none` has no previous position, so a
 * part appears where the pointer is instead of sliding in from where it
 * last left; `@starting-style` grows it in, and it shrinks away on leave.
 * That grow is `transform`, so `scale-*` stays yours (the interactive
 * state, a hover) and `translate` is the position.
 */
const PART =
  "pointer-events-none absolute top-0 left-0 hidden opacity-0 [transform:scale(0)] transition-discrete starting:opacity-0 starting:[transform:scale(0)] group-data-active/animated-cursor:block group-data-active/animated-cursor:opacity-100 group-data-active/animated-cursor:[transform:none] motion-reduce:hidden! forced-colors:hidden!";

/**
 * Keeps a part inside the area's box (and its corners), so a label near
 * an edge never widens the page.
 */
const LAYER =
  "pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]";

/**
 * The cursor itself: centred on the pointer, with no lag. With no
 * children it draws a dot in the primary colour; give it children (an
 * icon, a ring) to draw your own. It grows over interactive elements.
 * Pointer coordinates are physical, so it's placed from the top-left
 * corner in either direction.
 */
export const Cursor = (props: React.ComponentProps<"div">) => {
  const { className, children, ...rest } = props;

  return (
    <div aria-hidden="true" className={LAYER} data-slot="cursor-layer">
      <div
        className={cn(
          PART,
          "z-20",
          "[translate:calc(var(--animated-cursor-x,0px)-50%)_calc(var(--animated-cursor-y,0px)-50%)]",
          "transition-[opacity,transform,scale,display] duration-200 ease-out",
          "group-data-interactive/animated-cursor:scale-150",
          // The dot's defaults are plain utilities ahead of `className`, so
          // a `size-*` or `bg-*` you pass replaces them.
          children ? undefined : "size-4 rounded-full bg-primary",
          className
        )}
        data-slot="cursor"
        {...rest}
      >
        {children}
      </div>
    </div>
  );
};

type CursorAlign =
  | "center"
  | "top"
  | "top-start"
  | "top-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end"
  | "start"
  | "end";

/**
 * Which side of the pointer the follower sits on: -1 before, 0 centred,
 * 1 after, across and down. `start` and `end` follow the reading
 * direction (`end` is to the right in LTR, to the left in RTL).
 */
const ALIGN: Record<CursorAlign, string> = {
  bottom: "[--cursor-follow-sx:0] [--cursor-follow-sy:1]",
  "bottom-end": "[--cursor-follow-sx:1] [--cursor-follow-sy:1]",
  "bottom-start": "[--cursor-follow-sx:-1] [--cursor-follow-sy:1]",
  center: "[--cursor-follow-sx:0] [--cursor-follow-sy:0]",
  end: "[--cursor-follow-sx:1] [--cursor-follow-sy:0]",
  start: "[--cursor-follow-sx:-1] [--cursor-follow-sy:0]",
  top: "[--cursor-follow-sx:0] [--cursor-follow-sy:-1]",
  "top-end": "[--cursor-follow-sx:1] [--cursor-follow-sy:-1]",
  "top-start": "[--cursor-follow-sx:-1] [--cursor-follow-sy:-1]",
};

interface CursorFollowProps extends React.ComponentProps<"div"> {
  /**
   * Where it sits around the pointer. `start` and `end` follow the
   * reading direction.
   *
   * @default "bottom-end"
   */
  align?: CursorAlign;
  /**
   * The gap between the pointer and the follower's nearest edge, in pixels.
   *
   * @default 16
   */
  sideOffset?: number;
}

/**
 * Trails the pointer: each move restarts an ease-out transition from
 * where it is now, so it catches up smoothly and settles when the pointer
 * stops. Set `--cursor-follow-duration` (400ms by default) for a looser
 * or tighter trail.
 */
export const CursorFollow = (props: CursorFollowProps) => {
  const { align = "bottom-end", sideOffset, className, style, ...rest } = props;

  return (
    <div aria-hidden="true" className={LAYER} data-slot="cursor-layer">
      <div
        className={cn(
          PART,
          "z-10 rtl:[--cursor-follow-dir:-1]",
          ALIGN[align],
          "[translate:calc(var(--animated-cursor-x,0px)_+_var(--cursor-follow-dir,1)_*_var(--cursor-follow-sx)_*_(50%_+_var(--cursor-follow-offset,16px))_-_50%)_calc(var(--animated-cursor-y,0px)_+_var(--cursor-follow-sy)_*_(50%_+_var(--cursor-follow-offset,16px))_-_50%)]",
          "transition-[translate,opacity,transform,scale,display] duration-[var(--cursor-follow-duration,400ms)] ease-[cubic-bezier(0.22,1,0.36,1)]",
          className
        )}
        data-align={align}
        data-slot="cursor-follow"
        style={
          {
            "--cursor-follow-offset":
              sideOffset === undefined ? undefined : `${sideOffset}px`,
            ...style,
          } as React.CSSProperties
        }
        {...rest}
      />
    </div>
  );
};