import React, { useState } from "react";
import VideoPlayer from "@Components/Shared/VideoPlayer/VideoPlayer";

function Detaile() {
  return (
    <div className="Detaile">
      <div className="Detaile__hederBox">
        <p>جلسه اول: آشنایی</p>
        <p>پایتون چیست؟</p>
      </div>
      <div>
        <VideoPlayer src="" />
      </div>
    </div>
  );
}

export default Detaile;
