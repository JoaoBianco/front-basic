import axios from "axios";
import { UseQueryResult, useQuery } from "react-query";
import { SquidResponse } from "../types";
import Header from "./components/Header";
import Post from "./components/Post";
import { AnimatePresence, motion } from "framer-motion";
import {
  fadeInParentVariant,
  fadeInChildrenVariant,
} from "./framer_motion/main";
import SkeletonWrapper from "./components/skeleton/SkeletonWrapper";
import ErrorComponent from "./components/ErrorComponent";

function App() {
  const URL =
    "https://us-central1-squid-apis.cloudfunctions.net/test-front-basic";

  //Fetch data from server
  const response: UseQueryResult<SquidResponse, Error> = useQuery(
    "squidPosts",
    () => axios.get(URL).then((resp) => resp.data),
    { refetchOnWindowFocus: false }
  );

  return (
    <div className="bg-custom-squid container display-flex align-items-center flex-column py-7">
      <Header />
      {response.isError && (
        <ErrorComponent
          message={response.error.message}
          refetch={() => response.refetch()}
        />
      )}
      <motion.div
        variants={fadeInParentVariant}
        animate="show"
        initial="hidden"
        className="display-grid grid-container-squid w-full"
      >
        <AnimatePresence>
          {response.isFetching && <SkeletonWrapper />}

          {response.data?.map((post, index) => (
            <motion.div
              custom={index}
              variants={fadeInChildrenVariant}
              key={post.uid}
            >
              <Post props={post} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
