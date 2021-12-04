import React, { Component, useState } from "react";
import Slider from "react-slick";
import "swiper/swiper-bundle.css";
import useFetch from "@App/Context/useFetch";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Mousewheel, Keyboard } from "swiper";
import CourseCardBg from "@Components/Layouts/Course/Cards/CourseCardBg";


const LatestCourse = () => {
  const [latestCourse, setLatestCourse] = useState([]);
  const getLatestCourseList = useFetch({
    url: `CourseService/latestCourse`,
    method: "GET",
    noHeader: true,
    setter: setLatestCourse,
  });

  SwiperCore.use([Navigation, Mousewheel, Keyboard]);
  const settings = {
    className: "latestCourse__center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 1,
    speed: 500,
  };
  return (
    <div className='latestCourse'>
      {/* <Swiper
        effect="coverflow"
        grabCursor
        loop
        slidesPerView={3}
        slideToClickedSlide
        coverflowEffect={{
          rotate: 0,
          stretch: 40,
          depth: 400,
          modifier: 3,
          slideShadows: false,
          scale: 1,
        }}
        pagination={{
          clickable: true,
        }}
      >
        {latestCourse?.map((info, key) => (
          <RenderCourseItem card={info}/>
        ))}
      </Swiper> */}
      <Slider {...settings}>
        {latestCourse?.map((card) => (
          <CourseCardBg card={card} key={card.uuid} />
        ))}
      </Slider>
    </div>
  );
};

export default LatestCourse;
