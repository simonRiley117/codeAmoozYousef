import React, {useState} from "react";
import useFetch from "@App/Context/useFetch";
import LatestCourse from "./LatestCourse";
import BreadCrump from "@Components/Shared/BreadCrump/BreadCrump";
import Coursecardsm from "@Components/Layouts/Course/Cards/CourseCardSm";
import Pagination from "@Components/Shared/Pagination";
import {useAuth} from "../../Context/authContext";
import {Skeleton} from "antd";
import _ from "lodash";
import {CourseListIconsProvider} from "../../Context/courseListIconsContext";

const Courses = () => {
    // pagination config
    const {token} = useAuth();
    const PageSize = 11;
    const [currentPage, setCurrentPage] = useState(1);
    // const [cateid, setcateid] = useState(null);
    // const chooseCat = (id) => {
    //     setcateid(id);
    //     getallCourseList.reFetch();
    // };
    const [allcourse, setallcourse] = useState([]);

    const setData = (data) => {
        setallcourse(data);
    };

    const getallCourseList = useFetch({
        url: `CourseService`,
        noHeader: token ? false : true,
        setter: setData,
        // params: {categories: cateid},
    });


    return (
        <div className="container">
            <div className="courses">
                <BreadCrump/>

                <CourseListIconsProvider>
                    <LatestCourse/>
                    <div className="courses__popular">
                        <h2 className="courses__popular--title">پرطرفدار ترین دوره ها</h2>

                        <div className=" courses__grid grid grid-cols-4 gap-x-6 gap-y-8">
                            {getallCourseList.loading ? (
                                <>
                                    {_.range(4).map((key) => (
                                        <div className="card-sm-loading" key={key}>
                                            <Skeleton.Avatar active/>
                                            <Skeleton.Button active/>
                                            <Skeleton.Button active/>
                                            <Skeleton avatar active paragraph={false}/>
                                            <div className="card-sm-loading-row">
                                                <Skeleton.Input active/>
                                                <Skeleton.Button active/>
                                            </div>
                                        </div>
                                    ))}
                                </>
                            ) : (
                                <>
                                    {allcourse?.results?.map((card) => (
                                        <Coursecardsm
                                            getallCourseList={getallCourseList}
                                            key={card.uuid}
                                            card={card}
                                        />
                                    ))}
                                </>
                            )}
                        </div>
                    </div>
                </CourseListIconsProvider>

                <div className="Title-paging">
                    <Pagination
                        className="pagination-bar"
                        currentPage={currentPage}
                        pageSize={PageSize}
                        onPageChange={(page) => setCurrentPage(page)}
                    />
                </div>
            </div>
        </div>
    );
};
export default Courses;
