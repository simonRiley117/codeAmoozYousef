import React, {Component, useState} from "react";
import Slider from "react-slick";
import useFetch from "@App/Context/useFetch";
import CourseCardBg from "@Components/Layouts/Course/Cards/CourseCardBg";
import {useAuth} from "../../Context/authContext";


const LatestCourse = ({getallCourseList, liftUpLatestCourseRequest}) => {
    const [latestCourse, setLatestCourse] = useState([]);
    const [loadingLatestCourse, setLoadingLatestCourse] = useState(true);
    const {token} = useAuth()

    const setData = (data) => {
        setLoadingLatestCourse(false)
        setLatestCourse(data)
        liftUpLatestCourseRequest(getLatestCourseList)
    }

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
    };
    return (
        !loadingLatestCourse ? (
            <div className='latestCourse'>
                <Slider {...settings}>
                    {latestCourse?.map((card) => (
                        <CourseCardBg
                            getallCourseList={getallCourseList}
                            getLatestCourseList={getLatestCourseList}
                            card={card}
                            key={card.uuid}/>
                    ))}
                </Slider>
            </div>
        ) : null
    );
};

export default LatestCourse;
