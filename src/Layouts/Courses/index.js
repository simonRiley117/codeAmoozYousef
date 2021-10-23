import React, { useMemo, useState } from "react";
import { A11y, Autoplay } from "swiper";
import CourseCardBg from "../../Components/Shared/Cards/CourseCardBg";
import Searchxx from "./Searchxx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
// images
import Coursecardsm from "../../Components/Shared/Cards/CourseCardSm";
import Filtersxx from "./Filtersxx";
import Pagination from "../../Components/Shared/Pagination";
import { cardData } from "../../Components/Layouts/News/cardData";

const Courses = () => {
  // just some testing array to be able to map on cards
  const cards = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 },
    { id: 13 },
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
    <div className="courses px-40 mt-60">
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
      <Swiper module={[A11y, Autoplay]} spaceBetween={50} slidesPerView={4}>
        {cards.map((card, index) => {
          return (
            <SwiperSlide>
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
  );
};
export default Courses;
