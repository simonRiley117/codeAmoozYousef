import React, {useState, useEffect} from "react";
import useFetch from "@App/Context/useFetch";
import Searchxx from "./Searchxx";
import LatestCourse from "./LatestCourse";
import BreadCrump from "@Components/Shared/BreadCrump/BreadCrump";
import Coursecardsm from "@Components/Layouts/Course/Cards/CourseCardSm";
import FilterCourses from "./FilterCourses";
import Pagination from "@Components/Shared/Pagination";
import FavoriteCourse from "./FavoriteCourse"
import {useAuth} from "../../Context/authContext";

const Courses = () => {

    // pagination config
    const PageSize = 11;
    const [currentPage, setCurrentPage] = useState(1);
    const [cateid, setcateid] = useState(null);
    const chooseCat = (id) => {
        setcateid(id);
        getallCourseList.reFetch();
    };
    const [allcourse, setallcourse] = useState([]);
    const [loadignallcourse, setloadignallcourse] = useState(true);

    const {token} = useAuth()

    const setData = (data) => {
        setloadignallcourse(false)
        setallcourse(data)
    }

    const getallCourseList = useFetch({
        url: `CourseService`,
        noHeader: token ? false : true,
        setter: setData,
        params: {categories: cateid},
    });

    const [liftRequest, setLiftRequest] = useState()
    const liftUpLatestCourseRequest = (request) => {
        setLiftRequest(request)
    }

    return (
        !loadignallcourse ? (
            <div className="container">
                <div className="courses">
                    <BreadCrump pathsname="/course"/>
                    <LatestCourse
                        liftUpLatestCourseRequest={liftUpLatestCourseRequest}
                        getallCourseList={getallCourseList}/>
                    <Searchxx/>
                    <h3 className="text-4xl font-bold mb-12">پرطرفدار ترین دوره ها</h3>
                    {/*<FavoriteCourse/>*/}
                    {/*<FilterCourses cateid={cateid} chooseCat={chooseCat} />*/}

                    <div className=" courses__grid grid grid-cols-4 gap-x-6 gap-y-8">
                        {allcourse?.results?.map((card) => {
                            return <Coursecardsm
                                liftRequest={liftRequest}
                                getallCourseList={getallCourseList}
                                key={card.uuid}
                                card={card}/>;
                        })}
                    </div>

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
        ) : null
    );
};
export default Courses;
