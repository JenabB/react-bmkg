import React, { useState, useEffect } from "react";
import moment from "moment";

const FeltM5 = () => {
  const [felt, setFelt] = useState(null);

  useEffect(() => {
    fetch("https://data.bmkg.go.id/DataMKG/TEWS/gempaterkini.json")
      .then((response) => response.json())
      .then((data) => setFelt(data.Infogempa.gempa))
      .catch((error) => console.log(error));
  }, []);

  console.log(felt);

  return (
    <div>
      <header className="bg-blue-800 text-white text-center p-4 font-bold">
        <h1>Felt Magnitude 5+</h1>
      </header>
      {felt ? (
        <div className="grid lg:grid-cols-2 lg:w-2/4 mx-auto">
          {felt.map((data, index) => (
            <div key={index} className="shadow-lg p-4 m-4 rounded-lg">
              <h1>{data.Wilayah}</h1>
              <h2 className="text-blue-700 text-bold">{data.Magnitude}</h2>
              <p className="text-gray-700 text-xs">
                {moment(data.DateTime).format("dddd, MMMM Do YYYY, h:mm:ss a")}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default FeltM5;
