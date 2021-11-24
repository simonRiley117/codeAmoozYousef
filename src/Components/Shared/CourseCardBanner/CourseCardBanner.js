import React from "react";
import CourseLogo from "@Assets/Icons/CourseLogo.svg";
import classNames from "classnames";
import LogoTypo from "@Assets/Pic/logoTypo.png";

const Coursecardbanner = ({ suggest, courseLogo }) => {
  return (
    <div
      className={classNames(
        "course-card-banner flex items-center lg:ml-10 ml-3",
        {
          suggest: suggest,
        }
      )}
    >
      <div className="typo">
        <img src={LogoTypo} />
      </div>
      <div className="logo">
        <img src={courseLogo} />
      </div>
    </div>
  );
};

export default Coursecardbanner;
