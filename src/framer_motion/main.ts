export const fadeInParentVariant = {
  show: {
    opacity: 1,
  },
  hidden: {
    opacity: 1,
  },
};

export const fadeInChildrenVariant = {
  show: (i: number) => {
    const delay = i * 0.15;
    return {
      rotate: 0,
      scale: 1,
      transition: {
        delay: delay,
        duration: 0.15,
      },
    };
  },
  hidden: {
    rotate: -25,
    scale: 0,
  },
};
