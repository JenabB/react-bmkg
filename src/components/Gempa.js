import React from "react";
import moment from "moment";

const Gempa = ({ data }) => {
  return (
    <div className="shadow-lg p-4 m-4 rounded-lg">
      <h1>{data.Wilayah}</h1>
      <h2 className="text-blue-700 text-lg font-bold">{data.Magnitude}</h2>
      <p className="text-gray-700 text-xs">
        {moment(data.DateTime).format("dddd, MMMM Do YYYY, h:mm:ss a")}
      </p>
    </div>
  );
};

export default Gempa;
