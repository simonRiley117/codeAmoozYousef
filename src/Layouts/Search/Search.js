import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import searchic from "@Assets/Pic/search.png";

function Search() {
  return (
    <div>
      <div className="Courses__imgBox flex justify-center items-center">
        <img src={searchic} alt={searchic} className="Courses__img" />
      </div>
    </div>
  );
}

export default Search;
