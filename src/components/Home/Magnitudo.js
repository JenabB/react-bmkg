import React from "react";

const Magnitudo = ({ data }) => {
  return (
    <div
      className="bg-blue-700 font-bold text-white mx-auto p-7 rounded-full my-10"
      style={{ width: "80px", height: "80px" }}
    >
      {data.Magnitude}
    </div>
  );
};

export default Magnitudo;
