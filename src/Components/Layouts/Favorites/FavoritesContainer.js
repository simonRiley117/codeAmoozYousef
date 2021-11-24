import FavoritesItem from "./FavoritesItem";
import FavoriteEmpty from "./FavoriteEmpty";
import React, { useState } from "react";
import CourseCardBg from "../Course/Cards/CourseCardBg";

const Favoritescontainer = () => {
  const [hasFav, setHasFav] = useState(false);
  var showPage;

  if (hasFav) {
    showPage = <FavoritesItem />;
  } else if (!hasFav) {
    showPage = <FavoriteEmpty />;
  }
  return (
    <div>
      <div className="favorites-main-title flex justify-center text-center">
        <h1>لیست علاقه مندی‌ها</h1>
      </div>
      <div className="favorites">{showPage}</div>
    </div>
  );
};

export default Favoritescontainer;
