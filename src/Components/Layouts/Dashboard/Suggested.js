import React, {useState} from "react";
import studsPic from "@Assets/Pic/nostuds.png";
import avatar from "@Assets/Pic/avatar.png";
import {Card, Divider} from "antd";
import Coursecardbanner from "@Components/Shared/CourseCardBanner/CourseCardBanner";

const Suggested = ({suggestions}) => {
    // const suggests = [
    //   {
    //     teacher: "سینا آزادی",
    //     course: "دوره آنلاین برنامه نویسی",
    //   },
    //   {
    //     teacher: "سینا آزادی",
    //     course: "دوره آنلاین برنامه نویسی",
    //   },
    // ];
    return (
        <div>
            {!suggestions.length > 0 ? (
                <div className="dashboard-card dash-students">
                    <Card
                        title="بهترین دانشجوی شما:"
                        bordered={false}
                        headStyle={{border: "none", fontSize: "1.4rem"}}
                        bodyStyle={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                        }}
                        style={{
                            borderRadius: "1.5rem",
                            boxShadow: "0px 2px 8px 2px rgba(0, 0, 0, 0.15)",
                            height: "26.7rem",
                        }}
                    >
                        <img src={studsPic} style={{paddingBottom: "2rem"}}/>
                        <p style={{paddingBottom: "2rem"}}>
                            در حال حاضر دوره پیشنهادی ندارید
                        </p>
                    </Card>
                </div>
            ) : (
                <div>
                    <Card
                        title="آخرین دوره‌های پیشنهادی شما:"
                        bordered={false}
                        headStyle={{border: "none", fontSize: "1.4rem"}}
                        bodyStyle={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            height: "90%",
                        }}
                        style={{
                            borderRadius: "1.5rem",
                            height: "26.7rem",
                            boxShadow: "0px 2px 8px 2px rgba(0, 0, 0, 0.15)",
                        }}
                    >
                        <div className="student-cards">
                            {suggestions.map((suggest) => {
                                return (
                                    <div
                                        className="w-full grid grid-cols-5"
                                        style={{
                                            boxShadow: "0px 1px 4px 1px rgba(0, 0, 0, 0.15)",
                                            borderRadius: "1.5rem",
                                            padding: "0.6rem",
                                        }}
                                    >
                                        <div className="col-span-2">
                                            <Coursecardbanner suggest={true} courseLogo={suggest.course_cover}/>
                                        </div>
                                        <div className="col-span-3">
                                            <a style={{color: "#002171", fontSize: "1.4rem"}}>
                                                {suggest.course_title}
                                            </a>
                                            <p style={{fontSize: "1.4rem"}}>{suggest.course_teacher}</p>
                                        </div>
                                    </div>
                                );
                            })}
                            <div className="flex justify-end w-full">
                                <a className="text-primary self-end">بیشتر...</a>
                            </div>
                        </div>
                    </Card>
                </div>
            )}
        </div>
    );
};

export default Suggested;
