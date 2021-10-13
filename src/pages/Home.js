import React, { useState, useEffect } from "react";
import moment from "moment";
import DetailInfo from "../components/Home/DetailInfo";
import Magnitudo from "../components/Home/Magnitudo";

const Home = () => {
  const [earthquake, setEarthquake] = useState(null);

  useEffect(() => {
    fetch(`https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json`)
      .then((response) => response.json())
      .then((data) => setEarthquake(data.Infogempa.gempa))
      .catch((error) => console.log(error.response));
  }, []);

  console.log(earthquake);

  return (
    <div className="pb-20 text-center">
      <header className="bg-blue-800 text-white text-center p-4 font-bold">
        <h1>Gempa Terkini</h1>
      </header>

      <main>
        {earthquake ? (
          <div>
            <div className="flex justify-center">
              <img
                src={`https://data.bmkg.go.id/DataMKG/TEWS/
${earthquake.Shakemap}`}
                alt="shakemap"
              />
            </div>
            <div className="shadow-lg p-4 lg:w-2/4 mx-auto">
              <h1 className="text-xs">
                {moment(earthquake.DateTime).format(
                  "dddd, MMMM Do YYYY, h:mm:ss a"
                )}
              </h1>
              <h1>{earthquake.Wilayah}</h1>
              <Magnitudo data={earthquake} />
              <DetailInfo data={earthquake} />

              <p className="my-4">{earthquake.Potensi}</p>
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
