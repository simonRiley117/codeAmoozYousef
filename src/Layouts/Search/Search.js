import React, { useMemo, useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import searchic from "@Assets/Pic/search.png";
import { useParams } from "react-router-dom";
import Pagination from "@Components/Shared/Pagination";
import useFetch from "@App/Context/useFetch";
import Coursecardsm from "@Components/Layouts/Course/Cards/CourseCardSm";
import Searchxx from "../Courses/Searchxx";
function Search() {
  const { name } = useParams();
  const [allcourse, setallcourse] = useState(null);

  const getallCourseList = useFetch({
    url: `CourseService`,
    method: "GET",
    noHeader: true,
    setter: setallcourse,
    params: { search: name },
  });
  const PageSize = 11;
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div className="Search">
      <div className="courses Search__box" style={{ paddingTop: "10rem" }}>
        <div className="Search__input">
          <Searchxx />
        </div>
        <p className="Courses__searchTitle font-bold	">
          {" "}
          نتیجه جستجو شما برای "{name}":
        </p>
        {allcourse?.length !== 0 ? (
          <div className=" courses__grid grid grid-cols-4 gap-x-6 gap-y-8  ">
            {allcourse?.results.map((card) => {
              return <Coursecardsm key={card.uuid} card={card} />;
            })}
          </div>
        ) : (
          <div className="Courses__imgBox flex justify-center items-center">
            <img src={searchic} alt={searchic} className="Courses__img" />
          </div>
        )}
      </div>

      <div className="Title-paging">
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
}

export default Search;
