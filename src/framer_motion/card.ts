export const fadeInParentVariant = {
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
  hidden: {
    opacity: 0,
  },
  exit: {
    opacity: 0,
  },
};

export const fadeInChildrenVariant = {
  show: {
    x: 0,
  },
  hidden: {
    x: -100,
  },
  exit: {
    x: -100,
  },
};
