import React from "react";

const About = () => {
  const credits = [
    {
      nama: "Yogi Surya Pranata",
      sebagai: "Front End & Initiator",
    },
    {
      nama: "kotakode.com",
      sebagai: "Penyedia forum dan bantuan",
    },
    {
      nama: "BMKG",
      sebagai: "Penyedia Open API",
    },

    {
      nama: "fjstudio",
      sebagai: "Weather Icons from flaticon.com",
    },
    { nama: "Hendra Agil", sebagai: "Problem solver dari kotakode.com" },
  ];

  return (
    <div>
      <header className="bg-blue-800 text-white text-center p-4 font-bold">
        <h1>About</h1>
      </header>
      <main className="p-4">
        <div className="shadow-lg p-4">
          <p style={{ textAlign: "justify" }}>
            Sebuah Web App yang menampilkan data gempa terbaru, prakiraan cuaca,
            dan gempa yang dirasakan dalam 20 data menggunakan API dari data
            terbuka BMKG. Jika ingin mengembangkan Web App ini silahkan klik{" "}
            <a href="https://github.com/JenabB/react-bmkg-gempa">
              <b style={{ fontSize: "18px", color: "teal" }}>Ini</b>
            </a>
          </p>
        </div>
        <div className="mt-8">
          <h1 className="mb-4">Kontributor</h1>
          {credits.map((credit, index) => (
            <div key={index}>
              <table>
                <tr>
                  <td>{credit.nama}</td>
                  <td>{credit.sebagai}</td>
                </tr>
              </table>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default About;
