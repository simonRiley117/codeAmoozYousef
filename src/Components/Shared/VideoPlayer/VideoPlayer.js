import React, { useState, useRef } from "react";
import icon from "@Assets/Icons/Frame 5.svg";

function VideoPlayer(props) {
  const [play, setPlay] = useState(false);
  const handlePlay = () => {
    setPlay(true);
  };
  const videoRef = useRef();

  return (
    <div className={`VideoPlayer__videoBox relative ${props.className}`}>
      {/* <video className="VideoPlayer__video" controls={play} autoPlay={play}>
        <source
          src={props.src}
          type="video/mp4"
          className="VideoPlayer__video"
        />
        Your browser does not support the video tag.
      </video> */}
      <video
        ref={videoRef}
        src={props.sr}
        poster={process.env.PUBLIC_URL + "/poster.png"}
        className="VideoPlayer__video"
        controls={play}
        autoPlay={play}
      />
      {!play && <img src={icon} alt={icon} onClick={handlePlay} />}
    </div>
  );
}

export default VideoPlayer;
