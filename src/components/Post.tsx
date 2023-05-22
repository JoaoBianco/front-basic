import { SquidProps } from "../../types";

export default function Post({ props }: SquidProps) {
  return (
    <div key={props.uid} className="object-fit-contain">
      <img
        className="img-fluid object-fit-contain"
        src={props.imagens.resolucaoPadrao.url}
        alt="squid"
      />
    </div>
  );
}
