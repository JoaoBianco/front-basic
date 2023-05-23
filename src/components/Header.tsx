import { AnimatePresence, motion } from "framer-motion";

export default function Header({
  setIsFancierHover,
  isFancierHover,
}: {
  setIsFancierHover: React.Dispatch<React.SetStateAction<boolean>>;
  isFancierHover: boolean;
}) {
  return (
    <>
      <AnimatePresence>
        {isFancierHover && (
          <motion.span
            style={{
              position: "absolute",
              color: "#e94589",
              fontWeight: "bold",
              fontSize: "0.5rem",
              zIndex: "-1",
            }}
            initial={{ y: 30 }}
            animate={{ y: 0 }}
            exit={{ y: 30, opacity: 0 }}
          >
            Fancy Hover!
          </motion.span>
        )}
      </AnimatePresence>
      <img
        src="/assets/logo.svg"
        alt="Squid"
        className="img-fluid img-squid py-4"
        onClick={() => setIsFancierHover(!isFancierHover)}
      />
    </>
  );
}
