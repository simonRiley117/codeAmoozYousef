import React, { useState } from "react";
import Detaile from "./Detaile";
import VideoPlayer from "@Components/Shared/VideoPlayer/VideoPlayer";
import useFetch from "@App/Context/useFetch";
import { Skeleton } from 'antd';

function Index({ courseId }) {
  const [courseInfo, setCourseInfo] = useState({});

  const getAboutCourse = useFetch({
    url: `CourseService/${courseId}`,
    // url: `CourseService/${id}/courseOrder`,
    method: "GET",
    noHeader: true,
    setter: setCourseInfo,
  });

  // console.log('getAboutCourse.loading: ', getAboutCourse.loading)
  // console.log('getAboutCourse: ', getAboutCourse)
  const {
    title,
    intro,
    cover,
    // language,
    intro_video,
    // percentage_of_quality_of_course,
    properties,
    prerequisites,
  } = courseInfo;

  return (
    <>
      {getAboutCourse?.response ? (
        <div>
          <Detaile title={title} intro={intro} cover={cover} />
          <VideoPlayer src={intro_video} />
          <div className="AboutDetaile__hederBox">
            <p className="font-bold">ویژگی ها</p>
          </div>
          {properties.map((property) => (
            <p
              key={property.id}
              className="AboutDetaile__txt leading-loose About__list"
            >
              {property.prop}
            </p>
          ))}
          <div className="AboutDetaile__hederBox About__header">
            <p className="font-bold">پیش نیاز ها</p>
          </div>
          {prerequisites.map((prerequisite) => (
            <p
              key={prerequisite.id}
              className="AboutDetaile__txt leading-loose About__list"
            >
              {prerequisite.pre_prop}
            </p>
          ))}
        </div>
      ) : <Skeleton />}
    </>
  );
}

export default Index;
