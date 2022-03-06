import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import searchic from "@Assets/Pic/search.png";
import searchNotFound from "@Assets/Pic/searchNotFound.jpg";
import Pagination from "@Components/Shared/Pagination";
import useFetch from "@App/Context/useFetch";
import Coursecardsm from "@Components/Layouts/Course/Cards/CourseCardSm";
import Searchxx from "../Courses/Searchxx";

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [allcourse, setallcourse] = useState(null);

  const getallCourseList = useFetch({
    url: `CourseService`,
    method: "GET",
    trigger: false,
    noHeader: true,
    setter: setallcourse,
    params: { search: searchParams.get("s") },
  });

  useEffect(() => {
    getallCourseList.reFetch();
  }, [searchParams]);
console.log('allcourse', allcourse?.results)
  const PageSize = 11;
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div className="Search container">
      <div
        className="courses Search__box flex-column"
        style={{ paddingTop: "10rem" }}
      >
        <div className="Search__input">
          <Searchxx />
        </div>
        <p className="Courses__searchTitle font-bold flex-column">
          {allcourse?.results.length > 0 ? (
            <> نتیجه جستجو شما برای "{searchParams.get("s")}":</>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img src={searchNotFound} alt={searchNotFound} />
              <p style={{ fontSize: "3rem" }}>هیچ نتیجه ای یافت نشد</p>
            </div>
          )}
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
