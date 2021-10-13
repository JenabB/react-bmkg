import React from "react";

const DetailInfo = ({ data }) => {
  return (
    <div className="grid grid-cols-2">
      <div className="shadow-lg m-2 p-2 rounded-lg">
        <div className="text-blue-600 font-bold flex items-center justify-center">
          <h1 className="material-icons mr-2">place</h1>
          <h1>Kordinat</h1>
        </div>
        <h1 className="mt-1 text-gray-700 text-sm">
          {data.Bujur}, {data.Lintang}
        </h1>
      </div>
      <div className="shadow-lg m-2 p-2 rounded-lg">
        <div className="text-blue-600 font-bold flex items-center justify-center">
          <h1 className="material-icons mr-2">arrow_downward</h1>
          <h1>Kedalaman</h1>
        </div>
        <h1 className="mt-1 text-gray-700 text-sm">{data.Kedalaman}</h1>
      </div>
      <div className="shadow-lg m-2 p-2 rounded-lg">
        <div className="text-blue-600 font-bold flex items-center justify-center">
          <h1 className="material-icons mr-2">calendar_today</h1>
          <h1 className="mt-1  text-sm">Tanggal</h1>
        </div>
        <h1 className="mt-1 text-gray-700 text-sm">{data.Tanggal}</h1>
      </div>
      <div className="shadow-lg m-2 p-2 rounded-lg">
        <div className="text-blue-600 font-bold flex items-center justify-center">
          <h1 className="material-icons mr-2">schedule</h1>
          <h1>Waktu</h1>
        </div>
        <h1 className="mt-1 text-gray-700 text-sm">{data.Jam}</h1>
      </div>
    </div>
  );
};

export default DetailInfo;
