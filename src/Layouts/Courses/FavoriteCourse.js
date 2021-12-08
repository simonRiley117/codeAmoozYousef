import React, { useState } from "react";
import useFetch from "@App/Context/useFetch";
import Slider from "react-slick";
import CourseCardSm from "@Components/Layouts/Course/Cards/CourseCardSm";
import {NextArrow,PrevArrow} from "./Arrows"

const FavoriteCourse = () => {
  const [favcourses, setfavcourses] = useState(null);

  const getFavCourseList = useFetch({
    url: `CourseService/mostFavoriteCourse`,
    method: "GET",
    noHeader: true,
    setter: setfavcourses,
  });
  
  const settings = {
    className: "FavoriteCourse__slider",
    infinite:  false,
    slidesToShow:4,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow  />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='FavoriteCourse'>
      {" "}
      <Slider {...settings}>
        {favcourses?.map((card) => (
          <CourseCardSm card={card} key={card.uuid} />
        ))}
      </Slider>
    </div>
  );
};

export default FavoriteCourse;
