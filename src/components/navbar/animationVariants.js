// Motion settings shared by the navbar.

// Time the overlay takes to fade in and out.
export const overlayDuration = 0.4;
// Left drawer that holds the menu slides in from the left.
export const leftVariants = {
  open: {
    x: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
      delay: overlayDuration,
      when: "beforeChildren",
      delayChildren: overlayDuration + 0.1,
    },
  },
  closed: {
    x: "-100%",
    transition: { duration: 0.7, ease: "easeIn" },
  },
  exit: {
    x: "-100%",
    transition: { duration: 0.7, ease: "easeIn" },
  },
};

// Right drawer with logo and info slides in from the right.
export const rightVariants = {
  open: {
    x: "0%",
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: overlayDuration,
      when: "beforeChildren",
      delayChildren: overlayDuration + 0.2,
      staggerChildren: 0.12,
    },
  },
  closed: {
    x: "100%",
    transition: { duration: 0.7, ease: "easeIn" },
  },
  exit: {
    x: "100%",
    transition: { duration: 0.7, ease: "easeIn" },
  },
};

// Control how each list item staggers in sequence.
export const listVariants = {
  open: {
    transition: {
      when: "beforeChildren",
      ease: "easeOut",
      duration: overlayDuration + 0.5,
      staggerChildren: 0.16,
      delayChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.08,
      staggerDirection: -1,
    },
  },
};

// Animations for the text content inside each nav item.
export const itemContentVariants = {
  open: {
    y: 0,
  },
  closed: {
    y: 100,
    transition: { duration: 0.25, ease: "easeIn" },
  },
  hover: {
    y: 0,
    transition: {
      duration: 5,
      ease: "easeOut",
    },
  },
};

// Thin underline that grows on hover.
export const lineVariants = {
  open: {
    width: "100%",
    transition: {
      duration: overlayDuration + 1,
      ease: "easeOut",
      delay: 0.1,
    },
  },
  closed: {
    width: "0%",
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

// Move link text sideways when hovered.
export const linkContentVariants = {
  closed: { x: 0 },
  open: {
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  hover: {
    x: 50,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

// Bolder underline that expands on hover.
export const underlineBoldVariants = {
  closed: {
    height: 0,
    width: "0%",
  },
  open: {
    height: 0,
    width: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  hover: {
    height: "4px",
    width: "100%",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

// Semi transparent overlay behind the links.
export const overlayVariants = {
  closed: {
    height: 0,
  },
  open: {
    height: 0,
    transition: { duration: 0.2, ease: "easeOut" },
  },
  hover: {
    height: "100%",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

// Fade and slide animation for the secondary logo.
export const rightLogoVariants = {
  closed: {
    opacity: 0,
    y: 20,
  },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

// Reveal the small info boxes under the logo.
export const navBoxItemVariants = {
  closed: {
    opacity: 0,
    y: 30,
  },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

