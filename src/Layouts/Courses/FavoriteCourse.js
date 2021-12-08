import React, { useState } from "react";
import useFetch from "@App/Context/useFetch";
import Slider from "react-slick";
import CourseCardSm from "@Components/Layouts/Course/Cards/CourseCardSm";

const FavoriteCourse = () => {
  const [favcourses, setfavcourses] = useState(null);

  const getFavCourseList = useFetch({
    url: `CourseService/mostFavoriteCourse`,
    method: "GET",
    noHeader: true,
    setter: setfavcourses,
  });
  const settings = {
    className: "latestCourse__center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 5,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
