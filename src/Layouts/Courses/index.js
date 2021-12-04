import React, { useMemo, useState, useEffect } from "react";
import { A11y, Autoplay } from "swiper";
import Searchxx from "./Searchxx";
import LatestCourse from "./LatestCourse"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import useFetch from "@App/Context/useFetch";
import SwiperCore, {
  Navigation,Mousewheel,Keyboard
} from 'swiper';
// images
import Coursecardsm from "@Components/Layouts/Course/Cards/CourseCardSm";
import FilterCourses from "./FilterCourses";
import Pagination from "@Components/Shared/Pagination";
import { cardData } from "../../Components/Layouts/News/cardData";
const Courses = () => {
  SwiperCore.use([Navigation,Mousewheel,Keyboard]);
  // just some testing array to be able to map on cards
  const cards = [
    { id: 1, name: "دوره آنلاین برنامه نویسی HTML" },
    { id: 2, name: "دوره آنلاین برنامه نویسی HTML" },
    { id: 3, name: "دوره آنلاین برنامه نویسی HTML" },
    { id: 5, name: "دوره آنلاین برنامه نویسی HTML" },
    { id: 6, name: "دوره آنلاین برنامه نویسی HTML" },
    { id: 7, name: "دوره آنلاین برنامه نویسی HTML" },
    { id: 8, name: "دوره آنلاین برنامه نویسی HTML" },
    { id: 9, name: "دوره آنلاین برنامه نویسی HTML" },
    { id: 10, name: "دوره آنلاین برنامه نویسی HTML" },
    { id: 11, name: "دوره آنلاین برنامه نویسی HTML" },
    { id: 12, name: "دوره آنلاین برنامه نویسی HTML" },
    { id: 13, name: "دوره آنلاین برنامه نویسی HTML" },
  ];
  // pagination config
  const PageSize = 11;
  const [currentPage, setCurrentPage] = useState(1);
  const [favcourses, setfavcourses] = useState(null);
  const [cateid, setcateid] = useState(null);
  const chooseCat = (id)=>{
    setcateid(id)
    getallCourseList.reFetch()
  }
  const [allcourse, setallcourse] = useState(null);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return cards.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  
  const getFavCourseList = useFetch({
    url: `CourseService/mostFavoriteCourse`,
    method: "GET",
    noHeader: true,
    setter: setfavcourses,
  });
  const getallCourseList = useFetch({
    url: `CourseService`,
    method: "GET",
    noHeader: true,
    setter: setallcourse,
   params:{categories:cateid}
  });
  
  return (
    <div className="container">
      <div className="courses">
         <LatestCourse />

        <Searchxx />

        <h3 className="text-4xl font-bold mb-12">پرطرفدار ترین دوره ها</h3>
        {/* <Swiper module={[A11y, Autoplay]} spaceBetween={25} slidesPerView={4}>
          {favcourses.map((card, index) => {
            return (
              <SwiperSlide style={{ marginBottom: "5.399rem" }}>
                <Coursecardsm key={card.uuid}  card={card} />
              </SwiperSlide>
            );
          })}
        </Swiper> */}
        <FilterCourses cateid={cateid} chooseCat={chooseCat} />

        <div className="grid grid-cols-4 gap-x-6 gap-y-8">
          {allcourse?.results.map((card) => {
            return <Coursecardsm key={card.uuid}  card={card} />;
          })}
        </div>

        <div className="Title-paging">
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={cards.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </div>
  );
};
export default Courses;
