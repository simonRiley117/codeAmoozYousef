import React, { useMemo, useState, useEffect } from "react";
import { A11y, Autoplay } from "swiper";
import CourseCardBg from "@Components/Layouts/Course/Cards/CourseCardBg";
import Searchxx from "./Searchxx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
// images
import Coursecardsm from "@Components/Layouts/Course/Cards/CourseCardSm";
import Filtersxx from "./Filtersxx";
import Pagination from "@Components/Shared/Pagination";
import { cardData } from "../../Components/Layouts/News/cardData";
;
const Courses = () => {
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
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return cards.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  return (
    <div className="container">
      <div className="courses">
      
          <Swiper module={[A11y, Autoplay]} spaceBetween={50} slidesPerView={1}>
            {cards.map((card, index) => {
              return (
                <SwiperSlide key={card.id}>
                  <CourseCardBg />
                </SwiperSlide>
              );
            })}
          </Swiper>
 

        <Searchxx />

       
            <h3 className="text-4xl font-bold mb-12">پرطرفدار ترین دوره ها</h3>
            <Swiper
              module={[A11y, Autoplay]}
              spaceBetween={50}
              slidesPerView={4}
            >
              {cards.map((card, index) => {
                return (
                  <SwiperSlide style={{ marginBottom: "5.399rem" }}>
                    <Coursecardsm key={card.id} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <Filtersxx />
 

        <div className="grid grid-cols-4 gap-x-6 gap-y-8">
          {currentTableData.map((card) => {
            return <Coursecardsm key={card.id} />;
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
