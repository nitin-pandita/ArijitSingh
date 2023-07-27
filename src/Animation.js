export const Animation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 0.7,
    },
  },
};

export const titleAnim = {
  hidden: { y: 200 },
  show: {
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

export const fade = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { ease: "easeOut", duration: 0.75 },
  },
};

export const PhotoAnim = {
  hidden: {
    opacity: 0,
    scale: 1.5,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: "easeOut",
      duration: 0.75,
    },
  },
};

export const LineAnim = {
  hidden: {
    width: "0%",
  },
  show: {
    width: "100%",
    transition: { duration: 1 },
  },
};

export const Sliders = {
  hidden: {
    x: "-130%",
    skew: "45deg",
  },
  show: {
    x: "100%",
    skew: "0deg",
    transition: { ease: "easeOut", duration: 1 },
  },
};

export const AnimDelay = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
};
export const scrollReveal = {
  hidden: { opacity: 0, scale: 1.2, transition: { duration: 0.5 } },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};
