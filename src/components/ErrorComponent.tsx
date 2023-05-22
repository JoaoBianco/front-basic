import { QueryObserverResult } from "react-query";
import { SquidResponse } from "../../types";

type Props = {
  message: string;
  refetch: () => Promise<QueryObserverResult<SquidResponse, Error>>;
};

export default function ErrorComponent({ message, refetch }: Props) {
  return (
    <div className="display-flex flex-column align-items-center justify-content-center">
      <h2>Algo deu errado :(</h2>
      <p>Erro: {message}</p>
      <button onClick={() => refetch()} className="button button-pink">
        Tentar novamente!
      </button>
    </div>
  );
}
