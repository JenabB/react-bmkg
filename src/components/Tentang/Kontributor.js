import React from "react";

const Kontributor = ({ kontributor }) => {
  return (
    <div className="mt-8">
      <h1 className="mb-8 text-center text-blue-800 font-bold">Kontributor</h1>
      <table>
        <tr>
          <th>Nama</th>
          <th>Peran</th>
        </tr>
        {kontributor.map((credit, index) => (
          <tr key={index}>
            <td>{credit.nama}</td>
            <td>{credit.sebagai}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Kontributor;
