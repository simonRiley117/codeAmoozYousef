import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Price from '@Components/Shared/Price/Price';
import Rate from '@Components/Shared/Rate/Rate';
import IconBtn from '@Components/Shared/Buttons/IconBtn';
import {Progress} from 'antd';

// Assets
import teacherPic from '@Assets/Pic/course-profile.png';
import courseLogo from '@Assets/Icons/HTML.svg';
import Cover from '@Assets/Pic/js.png';
import {ReactComponent as Star} from '@Assets/Icons/star.svg';

import useFetch from '@App/Context/useFetch';
import Button from '@Components/Shared/Buttons/Button';
import BtnLink from '@Components/Shared/Buttons/Link';
import {useLocation} from "react-router";

const MyCourseCard = ({card, finishedCourse}) => {

    const [courseData, setCourseData] = useState(null)
    const [loadingCourseData, setLoadingCourseData] = useState(true)

    const setData = (data) => {
        setCourseData(data)
        setLoadingCourseData(false)
    }

    const getMyCourses = useFetch({
        url: finishedCourse ? `StudentService/myDoneCourses` : `StudentService/myDoingCourses`,
        method: "GET",
        noHeader: false,
        setter: setData,
    });


    // useEffect(() => {
    //     if (finishedCourse) {
    //         getMyDoneCourses.reFetch()
    //     } else {
    //         getMyDoingCourses.reFetch()
    //     }
    // }, [finishedCourse]);

    return (
        !loadingCourseData ? (
            courseData.results.map((course) => (
                <article className='card-bg MyCourses__Card'>
                    <div className='card-bg-pic'>
                        <img src={course.cover} alt={course.title} className='card-bg-pic-logo'/>
                    </div>
                    <div className='card-bg-info'>
                        <div className='card-bg-content '>
                            <div className='d-flex-space MyCourses__Card--header'>
                                <h5 className='card-bg-title'>
                                    <Link to='/dashboard/course'
                                          state={{
                                              name: course.title,
                                              id: course.course_id,
                                          }}>{course.title}</Link>
                                </h5>
                                <BtnLink to='/dashboard/course'
                                         state={{
                                             name: course.title,
                                             id: course.course_id,
                                         }}>مشاهده ی کل دوره</BtnLink>
                            </div>
                            <div className='MyCourses__Card--body'>
                                {!finishedCourse ? (
                                    <>
                                        <div className='MyCourses__Card--body-row d-flex-space'>
                                            <p className='MyCourses__Card--body-p '>
                                                پیشرفت شما در دوره :
                                            </p>
                                            {/*<span>5جلسه</span>*/}
                                        </div>
                                        <Progress
                                            strokeWidth={12}
                                            strokeColor={'#196476'}
                                            percent={course.progresses}
                                        />
                                        <div className='MyCourses__Card--Link '>
                                            امتیاز به این دوره
                                        </div>
                                        {' '}
                                    </>
                                ) : (
                                    <>
                                        <div className='d-flex-align'>
                                            <Progress type='circle' percent={100}/>

                                            <p className='MyCourses__Card--body-p mx-4 '>
                                                دوره تکمیل شده{' '}
                                            </p>
                                        </div>
                                        <Link to='/course' className='MyCourses__Card--Link '>

                                            دریافت گواهی پایان دوره دانشگاه صنعتی
                                        </Link>
                                        <div className='MyCourses__Card--Link '>
                                            امتیاز به این دوره
                                        </div>
                                        {' '}
                                    </>
                                )}
                            </div>
                            <div className='d-flex-space card-bg-footer'>
                                <div className='card-bg-img-pic'>
                                    <img src={course.teacher_avatar}/>
                                    <h4>{course.teacher_first_name} {course.teacher_last_name}</h4>
                                </div>
                                <Link to='/course' className='MyCourses__Card--Link'>

                                    ارتباط با استاد
                                </Link>
                            </div>
                        </div>
                    </div>
                </article>
            ))
        ) : null
    );
};

export default MyCourseCard;

