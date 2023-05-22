import axios from "axios";
import { UseQueryResult, useQuery } from "react-query";
import { SquidResponse } from "../types";

function App() {
  const URL =
    "https://us-central1-squid-apis.cloudfunctions.net/test-front-basic";

  const response: UseQueryResult<SquidResponse, Error> = useQuery(
    "squidPosts",
    () => axios.get(URL).then((res) => res.data),
    { refetchOnWindowFocus: false }
  );

  if (response.isLoading) return <div>Loading...</div>;

  if (response.isError) return <div>Error: {response.error.message}</div>;

  return (
    <div className="bg-custom-squid">
      {response.data?.map((e) => (
        <img src={e.imagens.resolucaoMedia.url} key={e.uid} alt="squid" />
      ))}
    </div>
  );
}

export default App;
