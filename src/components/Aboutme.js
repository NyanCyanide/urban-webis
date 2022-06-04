import React from "react";
import pro from "../images/pro.png";


function Aboutme() {
  return (
    <div className="flex flex-col md:flex-row-reverse text-white md:px-8">
      <div className="md:basis-1/3">
        <img className="mx-auto p-5" src={pro} alt="About-pic" />
      </div>
      <div className="md:basis-2/3 p-5"></div>
    </div>
  );
}

export default Aboutme;
