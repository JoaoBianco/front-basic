import { motion } from "framer-motion";
import { skeletonVariant } from "../../framer_motion/skeleton";

export default function Skeleton() {
  return (
    <motion.div
      variants={skeletonVariant}
      initial="hidden"
      animate="show"
      exit="exit"
      className="skeleton-squid"
    ></motion.div>
  );
}
