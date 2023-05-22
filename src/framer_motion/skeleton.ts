import { Variants } from "framer-motion";

export const skeletonVariant: Variants = {
  show: {
    backgroundColor: "#E94589",
    transition: { duration: 1.5, repeat: Infinity, repeatType: "reverse" },
  },
  hidden: {
    backgroundColor: "#F6B7D1",
  },
};
