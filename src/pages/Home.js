import React, { useState, useEffect } from "react";
import moment from "moment";

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
            <div
              className="bg-blue-700 text-white mx-auto p-7 rounded-full my-10"
              style={{ width: "80px", height: "80px" }}
            >
              {earthquake.Magnitude}
            </div>
            <div className="grid grid-cols-2">
              <div className="shadow-lg m-2 p-2 rounded-lg">
                <h1 className="text-blue-600 font-bold">Location</h1>
                <h1>
                  {earthquake.Bujur}, {earthquake.Lintang}
                </h1>
              </div>
              <div className="shadow-lg m-2 p-2 rounded-lg">
                <h1 className="text-blue-600 font-bold">Depth</h1>
                <h1>{earthquake.Kedalaman}</h1>
              </div>
              <div className="shadow-lg m-2 p-2 rounded-lg">
                <h1 className="text-blue-600 font-bold">Date</h1>
                <h1>{earthquake.Tanggal}</h1>
              </div>
              <div className="shadow-lg m-2 p-2 rounded-lg">
                <h1 className="text-blue-600 font-bold">Depth</h1>
                <h1>{earthquake.Kedalaman}</h1>
              </div>
            </div>

            <p className="my-4">{earthquake.Potensi}</p>
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default Home;
