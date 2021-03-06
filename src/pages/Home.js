import React, { useState, useEffect } from "react";
import { getGempaTerkini } from "../data/api";
import { motion } from "framer-motion";
import DetailInfo from "../components/Home/DetailInfo";
import Magnitudo from "../components/Home/Magnitudo";
import Header from "../components/Home/Header";
import AppBar from "../components/AppBar";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getGempaTerkini()
      .then((data) => setData(data.Infogempa.gempa))
      .catch((error) => console.log(error.response));
  }, []);

  return (
    <div className="pb-20 text-center">
      <AppBar title="Gempa Terkini" />

      <motion.main
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
      >
        {data ? (
          <div>
            <div className="shadow-lg p-4 lg:w-2/4 mx-auto">
              <Header data={data} />
              <h1>{data.Wilayah}</h1>
              <Magnitudo data={data} />
              <DetailInfo data={data} />

              <p className="my-4">{data.Potensi}</p>
            </div>
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </motion.main>
    </div>
  );
};

export default Home;
