import React from "react";
import python from "@Assets/Pic/python.png";

function Detaile({ title, intro, cover }) {
  return (
    <div className="Detaile AboutDetaile">
      <div className="AboutDetaile__hederBox">
        <p className="font-bold"> دوره {title}</p>
        <div>&nbsp;</div>
      </div>
      <div
        className="AboutDetaile__imgBox"
        style={{ backgroundImage: `url(${cover})` }}
      >
        {/* <img src={cover} alt={cover} /> */}
      </div>
      <div className="AboutDetaile__hederBox">
        <p className="font-bold">درباره دوره</p>
      </div>
      <p className="AboutDetaile__txt leading-loose">{intro}</p>
    </div>
  );
}

export default Detaile;
