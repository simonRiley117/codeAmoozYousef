import React, { Component, useState } from "react";
import Slider from "react-slick";
import useFetch from "@App/Context/useFetch";
import CourseCardBg from "@Components/Layouts/Course/Cards/CourseCardBg";


const LatestCourse = () => {
  const [latestCourse, setLatestCourse] = useState([]);
  const getLatestCourseList = useFetch({
    url: `CourseService/latestCourse`,
    method: "GET",
    noHeader: true,
    setter: setLatestCourse,
  });

  const settings = {
    className: "latestCourse__center",
    centerMode: true,
    infinite: latestCourse?.length < 3 ? false :true,
    centerPadding: "0",
    slidesToShow: 1,
    speed: 500,
  };
  return (
    <div className='latestCourse'>
      <Slider {...settings}>
        {latestCourse?.map((card) => (
          <CourseCardBg card={card} key={card.uuid} />
        ))}
      </Slider>
    </div>
  );
};

export default LatestCourse;
