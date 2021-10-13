import React from "react";
import AppBar from "../components/AppBar";
import Deskripsi from "../components/Tentang/Deskripsi";
import Kontributor from "../components/Tentang/Kontributor";

const About = () => {
  const kontributor = [
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
      <AppBar title="Tentang" />
      <main className="p-4">
        <Deskripsi />
        <Kontributor kontributor={kontributor} />
      </main>
    </div>
  );
};

export default About;
