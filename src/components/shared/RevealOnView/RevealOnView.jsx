"use client";
// CHANGELOG: 2025-09-30 Added reusable RevealOnView wrapper with reduced-motion safeguards.
/**
 * Wraps children with an in-view fade and translate animation via Framer Motion.
 */

import { Children } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  CHILD_VARIANTS,
  REDUCED_MOTION_STYLE,
  VIEWPORT_CONFIG,
  createParentVariants,
} from "../animationConfig";

/**
 * @typedef {Object} RevealOnViewProps
 * @property {keyof import("react").ReactHTML} [as]
 * @property {number} [stagger]
 * @property {boolean} [once]
 * @property {import("react").ReactNode} children
 * @property {boolean | "visible"} [reducedMotionFallback]
 */

/**
 * Motion wrapper that staggers direct children when the node enters the viewport.
 * Children must be valid React elements; they will be cloned with motion variants.
 * @param {RevealOnViewProps & import("react").HTMLAttributes<HTMLElement>} props
 */
function RevealOnView({
  as = "section",
  stagger = 0.1,
  once = true,
  reducedMotionFallback = "visible",
  children,
  className,
  "data-animate": dataAnimate,
  ...rest
}) {
  const { style, ...restProps } = rest;
  const shouldReduceMotion = useReducedMotion();
  const MotionComponent = motion[as] ?? motion.section;
  const childArray = Children.toArray(children);

  const parentVariants = createParentVariants(stagger);
  const viewport = {
    ...VIEWPORT_CONFIG,
    once,
  };

  const resolvedStyle =
    shouldReduceMotion && reducedMotionFallback
      ? { ...REDUCED_MOTION_STYLE, ...style }
      : style;

  return (
    <MotionComponent
      className={className}
      data-animate={dataAnimate}
      variants={shouldReduceMotion ? undefined : parentVariants}
      initial={shouldReduceMotion ? undefined : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "show"}
      viewport={shouldReduceMotion ? undefined : viewport}
      style={resolvedStyle}
      {...restProps}
    >
      {childArray.map((child, index) => {
        if (
          !shouldReduceMotion &&
          child != null &&
          typeof child === "object" &&
          "type" in child
        ) {
          const MotionChild = motion.div;
          return (
            <MotionChild
              key={index}
              variants={CHILD_VARIANTS}
              style={{ width: "100%" }}
            >
              {child}
            </MotionChild>
          );
        }

        // Reduced motion or non-element child: render untouched node.
        return (
          <div key={index} style={{ width: "100%" }}>
            {child}
          </div>
        );
      })}
    </MotionComponent>
  );
}

export default RevealOnView;
