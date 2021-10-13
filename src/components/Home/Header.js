import React from "react";
import { motion } from "framer-motion";
const Header = ({ data }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 0.8,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 1.3,
          },
        },
      }}
      className="flex justify-center"
    >
      <img
        src={`https://data.bmkg.go.id/DataMKG/TEWS/
${data.Shakemap}`}
        alt="shakemap"
      />
    </motion.div>
  );
};

export default Header;
