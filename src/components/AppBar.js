import React from "react";

const AppBar = ({ title }) => {
  return (
    <header className="bg-blue-800 text-white text-center p-4 font-bold">
      <h1>{title}</h1>
    </header>
  );
};

export default AppBar;
