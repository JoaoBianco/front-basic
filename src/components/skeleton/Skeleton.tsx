import { motion } from "framer-motion";
import { skeletonVariant } from "../../framer_motion/skeleton";

export default function Skeleton() {
  return (
    <motion.div
      variants={skeletonVariant}
      initial="hidden"
      animate="show"
      className="skeleton-squid"
    ></motion.div>
  );
}
