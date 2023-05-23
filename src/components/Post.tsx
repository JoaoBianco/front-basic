import { useState } from "react";
import { SquidProps } from "../../types";
import { AiFillHeart } from "react-icons/ai";
import { FaComment, FaCalendarAlt } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

import {
  fadeInChildrenVariant,
  fadeInParentVariant,
} from "../framer_motion/card";

export default function Post({ props }: SquidProps) {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <div
      key={props.uid}
      className="img-post_container-squid"
      onMouseEnter={() => setIsShowing(true)}
      onMouseLeave={() => setIsShowing(false)}
      onClick={() => window.open(props.link, "_blank")}
    >
      <img
        className="img-fluid object-fit-contain"
        src={props.imagens.resolucaoPadrao.url}
        alt="squid"
      />
      <AnimatePresence>
        {isShowing && (
          <motion.div
            variants={fadeInParentVariant}
            animate="show"
            initial="hidden"
            exit="exit"
            className="white img-post_infos-squid display-flex flex-column align-items-center justify-content-center"
          >
            <motion.div variants={fadeInChildrenVariant}>
              <p>@{props.usuario.nome}</p>
            </motion.div>
            <motion.div
              variants={fadeInChildrenVariant}
              className="display-flex align-items-center gap-300 fs-500"
            >
              <AiFillHeart />
              <p>{props.upvotes}</p>
            </motion.div>
            <motion.div
              variants={fadeInChildrenVariant}
              className="display-flex align-items-center gap-300"
            >
              <FaComment />
              <p>{props.comentarios}</p>
            </motion.div>
            <motion.div
              variants={fadeInChildrenVariant}
              className="display-flex align-items-center gap-300"
            >
              <FaCalendarAlt />
              <p>{new Date(props.criadoEm).toLocaleString()}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
