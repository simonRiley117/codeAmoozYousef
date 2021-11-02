import React from "react";
import Detaile from "./Detaile";
import VideoPlayer from "@Components/Shared/VideoPlayer/VideoPlayer";

function index() {
  return (
    <div>
      <Detaile />
      <VideoPlayer src="" />
      <div className="AboutDetaile__hederBox">
        <p className="font-bold">ویژگی ها</p>
      </div>
      <p className="AboutDetaile__txt leading-loose About__list">
        چاپگرها و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
      </p>
      <p className="AboutDetaile__txt leading-loose About__list">
        چاپگرها و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
      </p>
      <div className="AboutDetaile__hederBox About__header">
        <p className="font-bold">پیش نیاز ها</p>
      </div>
      <p className="AboutDetaile__txt leading-loose About__list">
        چاپگرها و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
      </p>
      <p className="AboutDetaile__txt leading-loose About__list">
        چاپگرها و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
      </p>
    </div>
  );
}

export default index;
