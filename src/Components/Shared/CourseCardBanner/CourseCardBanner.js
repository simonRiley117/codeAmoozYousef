import React from "react";
import CourseLogo from "@Assets/Icons/CourseLogo.svg";
import classNames from "classnames";
import LogoTypo from "@Assets/Pic/logoTypo.png";
import { last } from "lodash";

const Coursecardbanner = (suggest) => {
  return (
    <div>
      <div
        className={classNames(
          "course-card-banner flex items-center px-7 lg:ml-10 ml-3 h-full",
          {
            suggest: suggest,
          }
        )}
      >
        <div className="ml-4 typo">
          <img src={LogoTypo} />
        </div>
        <div className="logo">
          <img src={CourseLogo} />
        </div>
      </div>
    </div>
  );
};

export default Coursecardbanner;
