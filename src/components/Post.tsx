import { useState } from "react";
import { SquidProps } from "../../types";
import { AiFillHeart } from "react-icons/ai";
import { FaComment, FaCalendarAlt } from "react-icons/fa";

export default function Post({ props }: SquidProps) {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <div
      key={props.uid}
      className="img-post_container-squid"
      onMouseEnter={() => setIsShowing(true)}
      onMouseLeave={() => setIsShowing(false)}
    >
      <img
        className="img-fluid object-fit-contain"
        src={props.imagens.resolucaoPadrao.url}
        alt="squid"
      />
      {isShowing && (
        <div className="white img-post_infos-squid display-flex flex-column align-items-center justify-content-center">
          <p>@{props.usuario.nome}</p>
          <div className="display-flex align-items-center gap-300 fs-500">
            <AiFillHeart />
            <p>{props.upvotes}</p>
          </div>
          <div className="display-flex align-items-center gap-300">
            <FaComment />
            <p>{props.comentarios}</p>
          </div>
          <div className="display-flex align-items-center gap-300">
            <FaCalendarAlt />
            <p>{new Date(props.criadoEm).toLocaleString()}</p>
          </div>
        </div>
      )}
    </div>
  );
}
