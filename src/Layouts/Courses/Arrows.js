import React from "react";
import LeftArrow from "@Assets/Icons/arrow-left.svg";
import RightArrow from "@Assets/Icons/arrow-right.svg";
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
    className={`${className} NextArrow__icons`}
      onClick={onClick}
    >
      <img src={LeftArrow} alt="" />
    </div>
  );
}
export { NextArrow };
function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} PrevArrow__icons`}
      onClick={onClick}
    >
      <img src={LeftArrow} alt="" />
    </div>
  );
}
export { PrevArrow };
