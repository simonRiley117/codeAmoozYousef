import React, { useState, useEffect } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import BreadCrump from "@Components/Shared/BreadCrump/BreadCrump";
import SideBarDiscount from "@Components/Shared/Discount/SideBarDiscount";
import HeaderDiscount from "@Components/Shared/Discount/HeaderDiscount";
import Sarfasl from "@Components/Layouts/Course/Sarfasl";
import About from "@Components/Layouts/Course/About";
import Comment from "@Components/Layouts/Course/Comment/Comment";
import AskAndAnswer from "@Components/Layouts/Course/Comment/AskAndAnswer";
import TeacherInfo from "@Components/Layouts/Course/Teacher/TeacherInfo";
import CourseTable from "@Components/Layouts/Course/Course/CourseTable";
import { Tabs } from "antd";
import UseWindowSize from "@App/Sizes/UseWindowSize";
import useFetch from "@App/Context/useFetch";

const { TabPane } = Tabs;

function Index() {
  const { courseId } = useParams();
  console.log("PARAMS: ", courseId);
  const location = useLocation();
  console.log("LOCATION: ", location);
  const [data, setData] = useState("");
  useEffect(() => {
    // setMenu(location.state.name);
    setId(location.state.id);
    setName(location.state.name);
  }, [location]);
  // const [menu, setMenu] = useState("");
  const [id, setId] = useState();
  const [name, setName] = useState();
  const windowSize = UseWindowSize();
  // const addToCart = useFetch({
  //   url: `CartService/discount`,
  //   method: "GET",
  //   trigger: true,
  //   argFunc: (res) => {
  //     setData(res);
  //   },
  // });
  console.log(`data`, data);
  return (
    <div className="container">
      <BreadCrump name={name} />
      <div className="Course">
        {windowSize !== "sm" && <HeaderDiscount />}
        <div className="grid Course__container relative">
          {windowSize !== "sm" && (
            <div className="Course__sideBar relative">
              <TeacherInfo courseId={id} resume={false} />
            </div>
          )}

          <div>
            <Tabs className="TabBox" type="card">
              <TabPane tab="درباره این دوره" key="1">
                <About courseId={id} />
              </TabPane>
              <TabPane tab="سرفصل ها" key="2">
                <Sarfasl courseId={id} />
              </TabPane>
            </Tabs>
            {windowSize !== "sm" && (
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
                    <AskAndAnswer courseId={id} />
                  </TabPane>
                </Tabs>
              </div>
            )}
          </div>
          {windowSize !== "sm" && (
            <div className="Course__sideBar relative">
              <CourseTable courseId={id} />
            </div>
          )}

          {windowSize === "sm" && (
            <div>
              <div className="Course__sideBar relative">
                <TeacherInfo courseId={id} />
              </div>
              <div className="Course__sideBar relative">
                <CourseTable courseId={id} />
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
                <AskAndAnswer courseId={id} />
              </TabPane>
            </Tabs>
          </div>
        )}
      </div>
    </div>
  );
}

export default Index;
