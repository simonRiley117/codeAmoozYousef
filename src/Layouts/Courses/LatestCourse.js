import React, { Component, useState } from "react";
import Slider from "react-slick";
import useFetch from "@App/Context/useFetch";
import CourseCardBg from "@Components/Layouts/Course/Cards/CourseCardBg";
import { useAuth } from "../../Context/authContext";
import { NextArrow, PrevArrow } from "./Arrows";
import {ClipLoader} from "react-spinners";
const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "green",
};
const LatestCourse = ({ getallCourseList, liftUpLatestCourseRequest }) => {
  const [latestCourse, setLatestCourse] = useState([]);
  const [loadingLatestCourse, setLoadingLatestCourse] = useState(true);
  const { token } = useAuth();

  const setData = (data) => {
    setLoadingLatestCourse(false);
    setLatestCourse(data);
    liftUpLatestCourseRequest(getLatestCourseList);
  };

  const getLatestCourseList = useFetch({
    url: `CourseService/latestCourse`,
    noHeader: token ? false : true,
    setter: setData,
  });

  const settings = {
    className: "latestCourse__center",
    centerMode: true,
    infinite: latestCourse?.length < 3 ? false : true,
    centerPadding: "0",
    slidesToShow: 1,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return !loadingLatestCourse ? (
    <div className="latestCourse">
      <Slider {...settings}>
        {latestCourse?.map((card) => (
          <CourseCardBg
            getallCourseList={getallCourseList}
            getLatestCourseList={getLatestCourseList}
            card={card}
            key={card.uuid}
          />
        ))}
      </Slider>
    </div>
  ) : <div >
      <ClipLoader color="#43aa8b" loading={true} css={override} size={60}/>
  </div>
  ;
};

export default LatestCourse;
