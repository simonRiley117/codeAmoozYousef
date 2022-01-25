import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Progress } from "antd";
import { ReactComponent as Star } from "@Assets/Icons/star.svg";
import useFetch from "@App/Context/useFetch";
import BtnLink from "@Components/Shared/Buttons/Link";
import NoCommentImage from "../../../../Assets/Images/Pic/nocard.svg";
import { ReactComponent as User } from "@Assets/Icons/user.svg";
import { ReactComponent as ClockIcon } from "@Assets/Icons/clock.svg";
import Rate from "@Components/Shared/Rate/Rate";

const MyCourseCard = ({
  card,
  finishedCourse,
  handleModalShow,
  setSelectedCourse,
}) => {
  const [courseData, setCourseData] = useState(null);
  const [loadingCourseData, setLoadingCourseData] = useState(true);

  const setData = (data) => {
    setCourseData(data);
    setLoadingCourseData(false);
  };

  const getMyCourses = useFetch({
    url: finishedCourse
      ? `StudentService/myDoneCourses`
      : `StudentService/myDoingCourses`,
    method: "GET",
    noHeader: false,
    setter: setData,
  });

  return !loadingCourseData ? (
    courseData.results.length > 0 ? (
      courseData.results.map((course, index) => (
        <article key={index} className="card-bg MyCourses__Card">
          <div className="card-bg-pic">
            <img
              src={course.cover}
              alt={course.title}
              className="card-bg-pic-logo"
            />
          </div>
          <div className="card-bg-info">
            <div className="card-bg-content ">
              <div className="d-flex-space MyCourses__Card--header">
                <h5 className="card-bg-title">
                  <Link
                    to={`/coursecontent`}
                    state={{
                      name: course.title,
                      id: course.course_id,
                    }}
                  >
                    {course.title}
                  </Link>
                </h5>
                <BtnLink
                  to={`/coursecontent`}
                  state={{
                    name: course.title,
                    id: course.course_id,
                  }}
                >
                  مشاهده ی کل دوره
                </BtnLink>
              </div>
              <div className="MyCourses__Card--body">
                {!finishedCourse ? (
                  <>
                    <div className="MyCourses__Card--body-row d-flex-space">
                      <p className="MyCourses__Card--body-p ">
                        پیشرفت شما در دوره :
                      </p>
                      {/*<span>5جلسه</span>*/}
                    </div>
                    <Progress
                      strokeWidth={12}
                      strokeColor={"#196476"}
                      percent={course.progresses}
                    />
                    {/*<div className="MyCourses__Card--Link " onClick={() => handleModalShow()}>*/}
                    {/*    امتیاز به این دوره*/}
                    {/*</div>*/}
                  </>
                ) : (
                  <>
                    <div className="d-flex-align">
                      <Progress type="circle" percent={100} />

                      <p className="MyCourses__Card--body-p mx-4 ">
                        دوره تکمیل شده{" "}
                      </p>
                    </div>
                    <Link to="/#" className="MyCourses__Card--Link ">
                      دریافت گواهی پایان دوره دانشگاه صنعتی
                    </Link>
                    {!course.is_user_send_score ? (
                      <div
                        className="MyCourses__Card--Link "
                        onClick={() => {
                          handleModalShow();
                          setSelectedCourse(course.course_id);
                        }}
                      >
                        امتیاز به این دوره
                      </div>
                    ) : null}
                  </>
                )}
                <div className="d-flex-space mt-auto">
                  <div className="card-bg-info-row ">
                    <div className="d-flex-align card-bg-info-row-star MyCourses__cardDetail">
                      <span className="card-bg-time">
                        <div className=" flex items-center">
                          <Rate
                            // defaultValue={3}
                            value={course.mean_of_participant_points}
                            defaultValue={course.mean_of_participant_points}
                            disabled={true}
                          />
                        </div>
                        {/* <span>({course.nums_of_voter})</span>
                        نفر */}
                      </span>
                      <div className="d-flex-align card-bg-info-row-time">
                        <ClockIcon />
                        <span className="card-bg-time">
                          {course.total_time_of_course}
                        </span>
                      </div>
                      <div className="d-flex-align card-bg-info-row-user">
                        <User />
                        <span className="card-bg-time">
                          {course.num_of_participants}نفر
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="card-bg-info-row-level  center">
                    <span>{course.level}</span>
                  </div>
                </div>
              </div>

              <div className="d-flex-space card-bg-footer">
                <Link
                  to="/courses/teacher"
                  state={{
                    courseId: course.uuid,
                    teacherId: course.teacher_uuid,
                  }}
                  className="card-bg-img-pic"
                >
                  <img src={course.teacher_avatar} alt="teacher-avatar" />{" "}
                  &nbsp;
                  <span>
                    {course.teacher_first_name} {course.teacher_last_name}
                  </span>
                </Link>
                <Link to="/#" className="MyCourses__Card--Link">
                  ارتباط با استاد
                </Link>
              </div>
            </div>
          </div>
        </article>
      ))
    ) : (
      <div className="center Card__empthy">
        <img src={NoCommentImage} alt="NoCommentImage" />
        <p>دوره ای هنوز ثبت نام نشده</p>
      </div>
    )
  ) : null;
};

export default MyCourseCard;
