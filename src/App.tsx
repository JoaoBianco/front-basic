import axios from "axios";
import { UseQueryResult, useQuery } from "react-query";
import { SquidResponse } from "../types";
import Header from "./components/Header";
import Post from "./components/Post";
import { motion } from "framer-motion";
import {
  fadeInParentVariant,
  fadeInChildrenVariant,
} from "./framer_motion/main";

function App() {
  const URL =
    "https://us-central1-squid-apis.cloudfunctions.net/test-front-basic";

  const response: UseQueryResult<SquidResponse, Error> = useQuery(
    "squidPosts",
    () => axios.get(URL).then((resp) => resp.data),
    { refetchOnWindowFocus: false }
  );

  if (response.isLoading) return <div>Loading...</div>;

  if (response.isError) return <div>Error: {response.error.message}</div>;

  return (
    <div className="bg-custom-squid container display-flex align-items-center flex-column py-7">
      <Header />
      <motion.div
        variants={fadeInParentVariant}
        animate="show"
        initial="hidden"
        className="display-grid grid-container-squid"
      >
        {response.data?.map((e) => (
          <motion.div variants={fadeInChildrenVariant} key={e.uid}>
            <Post props={e} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default App;
