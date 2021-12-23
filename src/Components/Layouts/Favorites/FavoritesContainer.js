import FavoritesItem from "./FavoritesItem";
import FavoriteEmpty from "./FavoriteEmpty";
import React, { useState, useEffect } from "react";
import useFetch from "@App/Context/useFetch";
import { data } from "autoprefixer";

const Favoritescontainer = () => {
  const [hasFav, setHasFav] = useState(false);
  const [favoritesData, setFavoritesData] = useState();

  const showFavorites = (data) => {
    setFavoritesData(data.results);
    setHasFav(true);
    console.log(data.results);
  };

  const getFavoritesData = useFetch({
    url: `StudentService/willing_list`,
    method: "GET",
    setter: showFavorites,
  });

  const renderFavorite = () => {
    if (hasFav) {
      return <FavoritesItem favData={favoritesData} />;
    } else {
      return <FavoriteEmpty />;
    }
  };
  return (
    <div>
      <div className="favorites-main-title title__box flex justify-center text-center">
        <h2>لیست علاقه مندی‌ها</h2>
      </div>
      <div className="favorites">{renderFavorite()}</div>
    </div>
  );
};

export default Favoritescontainer;
