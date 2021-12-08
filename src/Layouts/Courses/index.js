import React, { useState, useEffect } from "react";
import useFetch from "@App/Context/useFetch";
import Searchxx from "./Searchxx";
import LatestCourse from "./LatestCourse";
// images
import Coursecardsm from "@Components/Layouts/Course/Cards/CourseCardSm";
import FilterCourses from "./FilterCourses";
import Pagination from "@Components/Shared/Pagination";
import FavoriteCourse from "./FavoriteCourse"
const Courses = () => {
  
  // pagination config
  const PageSize = 11;
  const [currentPage, setCurrentPage] = useState(1);
  const [cateid, setcateid] = useState(null);
  const chooseCat = (id) => {
    setcateid(id);
    getallCourseList.reFetch();
  };
  const [allcourse, setallcourse] = useState(null);

  const getallCourseList = useFetch({
    url: `CourseService`,
    method: "GET",
    noHeader: true,
    setter: setallcourse,
    params: { categories: cateid },
  });

  return (
    <div className="container">
      <div className="courses">
        <LatestCourse />
        <Searchxx />
        <h3 className="text-4xl font-bold mb-12">پرطرفدار ترین دوره ها</h3>
        <FavoriteCourse />
        {/* <FilterCourses cateid={cateid} chooseCat={chooseCat} /> */}

        <div className=" courses__grid grid grid-cols-4 gap-x-6 gap-y-8">
          {allcourse?.results.map((card) => {
            return <Coursecardsm key={card.uuid} card={card} />;
          })}
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
    </div>
  );
};
export default Courses;
