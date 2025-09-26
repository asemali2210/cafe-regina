// CHANGELOG: 2025-09-30 Refined entrance animation variants for reveal-on-view sections.
/**
 * Shared animation variants used by RevealOnView and related layout components.
 */

/**
 * Duration for individual child reveals in seconds.
 * @type {number}
 */
export const REVEAL_DURATION = 0.4;

/**
 * Default vertical offset used for entrance animations.
 * @type {number}
 */
export const REVEAL_OFFSET = 16;

/**
 * Viewport settings shared by all intersection-triggered animations.
 */
export const VIEWPORT_CONFIG = {
  once: true,
  margin: "0px 0px -20% 0px",
};

/**
 * Computes the parent variants used to stagger child animation entries.
 * @param {number} stagger - Time between each child reveal in seconds.
 * @returns {import("framer-motion").Variants}
 */
export const createParentVariants = (stagger = 0.08) => ({
  hidden: {
    opacity: 1,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: stagger,
      delayChildren: 0.1,
    },
  },
});

/**
 * Variants applied to each child node during the reveal animation.
 * @type {import("framer-motion").Variants}
 */
export const CHILD_VARIANTS = {
  hidden: {
    opacity: 0,
    y: REVEAL_OFFSET,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: REVEAL_DURATION,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

/**
 * Fallback styles when reduced motion is requested by the user.
 */
export const REDUCED_MOTION_STYLE = {
  opacity: 1,
  transform: "none",
};
