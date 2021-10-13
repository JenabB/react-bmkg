import React from "react";

const Header = ({ data }) => {
  return (
    <div>
      <div className="flex justify-center">
        <img
          src={`https://data.bmkg.go.id/DataMKG/TEWS/
${data.Shakemap}`}
          alt="shakemap"
        />
      </div>
    </div>
  );
};

export default Header;
