import { useState, useEffect } from "react";
import { getGempaDiatas5 } from "../data/api";
import { motion } from "framer-motion";

import AppBar from "../components/AppBar";
import Gempa from "../components/Gempa";

const Diatas5 = () => {
  const [felt, setFelt] = useState(null);

  useEffect(() => {
    getGempaDiatas5()
      .then((data) => setFelt(data.Infogempa.gempa))
      .catch((error) => console.log(error));
  }, []);

  console.log(felt);

  return (
    <div>
      <AppBar title="Gempa Diatas 5 Magnitudo" />
      {felt ? (
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
                delay: 0.9,
              },
            },
          }}
          className="grid lg:grid-cols-2 lg:w-2/4 mx-auto"
        >
          {felt.map((data, index) => (
            <Gempa data={data} key={index} />
          ))}
        </motion.div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Diatas5;
