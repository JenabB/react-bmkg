import React from "react";

const Magnitudo = ({ data }) => {
  return (
    <div
      className="bg-blue-700  text-white mx-auto p-7 rounded-full my-4"
      style={{ width: "80px", height: "80px" }}
    >
      <h1 className="font-extrabold">{data.Magnitude}</h1>
    </div>
  );
};

export default Magnitudo;
