import React, { useState, useEffect } from "react";

import DetailInfo from "../components/Home/DetailInfo";
import Magnitudo from "../components/Home/Magnitudo";
import Header from "../components/Home/Header";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json`)
      .then((response) => response.json())
      .then((data) => setData(data.Infogempa.gempa))
      .catch((error) => console.log(error.response));
  }, []);

  console.log(data);

  return (
    <div className="pb-20 text-center">
      <header className="bg-blue-800 text-white text-center p-4 font-bold">
        <h1>Gempa Terkini</h1>
      </header>

      <main>
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
      </main>
    </div>
  );
};

export default Home;
