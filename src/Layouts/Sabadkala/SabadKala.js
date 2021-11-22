import React from "react";
import CostBox from "@Components/Layouts/sabadkala/CostBox";
import CoursesBox from "@Components/Layouts/sabadkala/CoursesBox";
const SabadKala = () => {
  return (
    <div className="sabadKala">
      <div className="container">
        <div className="sabadKala-heading center title__box">
          <h2> سبدخرید</h2>
        </div>
        <div className="sabadKala__row  ">
          <CoursesBox />
          <CostBox />
        </div>
      </div>
    </div>
  );
};

export default SabadKala;
