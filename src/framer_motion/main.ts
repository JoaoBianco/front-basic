export const fadeInParentVariant = {
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
  hidden: {
    opacity: 1,
  },
};
export const fadeInChildrenVariant = {
  show: {
    rotate: 0,
    scale: 1,
  },
  hidden: {
    rotate: -25,
    scale: 0,
  },
};
