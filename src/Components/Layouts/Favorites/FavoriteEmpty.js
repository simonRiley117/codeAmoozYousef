import React from "react";
import { Link } from "react-router-dom";
import NoFav from "../../../Assets/Images/Pic/NoFav.png";

const Favoriteempty = () => {
  return (
    <div className="flex flex-col text-center justify-center items-center pt-36 w-full">
      <h3 className="mb-12">هنوز دوره‌ای در لیست علاقه مندی شما وجود ندارد</h3>
      <img className="mb-12" src={NoFav} />
      <Link
        to="/courses"
        className="button button__default bg-white"
        style={{ alignSelf: "end" }}
      >
        افزودن دوره‌های جدید
      </Link>
    </div>
  );
};

export default Favoriteempty;
