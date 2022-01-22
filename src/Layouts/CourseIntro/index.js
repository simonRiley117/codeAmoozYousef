import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import BreadCrump from "@Components/Shared/BreadCrump/BreadCrump";
import SideBarDiscount from "@Components/Shared/Discount/SideBarDiscount";
import HeaderDiscount from "@Components/Shared/Discount/HeaderDiscount";
import Sarfasl from "@Components/Layouts/Course/Sarfasl";
import About from "@Components/Layouts/Course/About";
import Comment from "@Components/Layouts/Course/Comment/Comment";
import AskAndAnswer from "@Components/Layouts/Course/Comment/AskAndAnswer";
import TeacherInfo from "@Components/Layouts/Course/Teacher/TeacherInfo";
import CourseTable from "@Components/Layouts/Course/Course/CourseTable";
import { Tabs, Tag } from "antd";
import UseWindowSize from "@App/Sizes/UseWindowSize";
import useFetch from "@App/Context/useFetch";
import { useAuth } from "@App/Context/authContext";
import { Skeleton } from "antd";
import { FramerTreeLayoutContext } from "framer-motion";

const { TabPane } = Tabs;

const CourseIntro = () => {
  const location = useLocation();
  const [data, setData] = useState("");
  const [courseSeasons, setCourseSeasons] = useState([]);
  const [pos, setPos] = useState(FramerTreeLayoutContext);

  useEffect(() => {
    // setMenu(location.state.name);
    setId(location.state.id);
    setName(location.state.name);
  }, [location]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScrolll = () => {
    // const windowHeight =
    //   "innerHeight" in window
    //     ? window.innerHeight
    //     : document.documentElement.offsetHeight;
    // const docHeight = document.getElementById("TabBoxxx").clientHeight;
    // const windowBottom = windowHeight + window.pageYOffset;
    // if (windowBottom >= docHeight) {
    //   setPos(true);
    // } else {
    //   console.log(`not at bottom`);
    // }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrolll);
  }, []);
  // const [menu, setMenu] = useState("");
  const [id, setId] = useState();
  const [name, setName] = useState();
  const windowSize = UseWindowSize();
  const { token } = useAuth();
  const discount = useFetch({
    url: `CartService/discount`,
    method: "GET",
    noHeader: true,
    argFunc: (res) => {
      setData(res);
    },
  });
  const makeCouponExpire = useFetch({
    url: `DiscountService/makeCouponExpire`,
    method: "POST",
    trigger: false,
    noHeader: true,
    data: {
      coupon_uuid: data.uuid,
    },
  });
  const getCourseSeasons = useFetch({
    url: `CourseService/${id}/seasons`,
    method: "GET",
    noHeader: token ? false : true,
    setter: setCourseSeasons,
  });
  const [tags, setTags] = useState();
  const liftingUpTags = (tags) => {
    setTags(tags);
  };

  const [has_user_course, set_has_user_course] = useState();
  const liftUpHas_user_course = (data) => {
    set_has_user_course(data);
  };
  const ids = id;
  const url1 = name;
  return (
    <div className="container">
      <BreadCrump name={name} />
      <div className="Course">
        {windowSize !== "sm"
          ? data !== "" && (
              <HeaderDiscount data={data} makeCouponExpire={makeCouponExpire} />
            )
          : data !== "" && (
              <SideBarDiscount
                data={data}
                makeCouponExpire={makeCouponExpire}
              />
            )}

        <div className="grid Course__container relative">
          {windowSize !== "sm" && (
            <div className="Course__sideBar relative">
              <TeacherInfo courseId={id} resume={false} isSticky/>
            </div>
          )}

          <div>
            <Tabs className="TabBox" type="card" id="TabBoxxx">
              <TabPane tab="درباره این دوره" key="1">
                <About courseId={id} />
              </TabPane>
              <TabPane tab="سرفصل ها" key="2">
                {getCourseSeasons?.response ? (
                  <Sarfasl courseId={id} courseSeasons={courseSeasons} />
                ) : (
                  <Skeleton />
                )}
              </TabPane>
            </Tabs>
            {windowSize !== "sm" && pos && (
              <div className="Course__Comment">
                <Tabs className="TabBox " type="card">
                  <TabPane
                    size={"small"}
                    tab="نظرات"
                    key="1"
                    className="Sarfasl__commentpart"
                  >
                    <Comment courseId={id} />
                  </TabPane>
                  <TabPane
                    tab="پرسش و پاسخ"
                    key="2"
                    className="Sarfasl__commentpart"
                  >
                    <AskAndAnswer
                      has_user_course={has_user_course}
                      courseId={id}
                    />
                  </TabPane>
                </Tabs>
              </div>
            )}
          </div>
          {windowSize !== "sm" && (
            <div className="Course__sideBar relative">
              <CourseTable
                liftUpHas_user_course={liftUpHas_user_course}
                courseId={id}
                ids={ids}
                url1={url1}
              />
            </div>
          )}

          {windowSize === "sm" && (
            <div>
              <div className="Course__sideBar relative">
                <TeacherInfo courseId={id} liftingUpTags={liftingUpTags} />
              </div>
              <div className="Course__sideBar relative">
                <CourseTable
                  liftUpHas_user_course={liftUpHas_user_course}
                  courseId={id}
                  ids={ids}
                  url1={url1}
                />
              </div>
            </div>
          )}
        </div>
        {windowSize === "sm" && (
          <div className="Course__Comment">
            <Tabs className="TabBox " type="card">
              <TabPane tab="نظرات" key="1" className="Sarfasl__commentpart">
                <Comment courseId={id} />
              </TabPane>
              <TabPane
                tab="پرسش و پاسخ"
                key="2"
                className="Sarfasl__commentpart"
              >
                <AskAndAnswer has_user_course={has_user_course} courseId={id} />
              </TabPane>
            </Tabs>
          </div>
        )}
        {windowSize === "sm" && (
          <div className="TeacherInfo__tags">
            {tags?.map((tag, id) => (
              <Tag key={id}>{tag}</Tag>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseIntro;
