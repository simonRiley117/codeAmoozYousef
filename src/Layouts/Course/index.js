import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
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

const { TabPane } = Tabs;

function Index() {
  const location = useLocation();
  useEffect(() => {
    setMenu(location.state.name);
    setId(location.state.id);
  }, [location]);
  const [menu, setMenu] = useState("");
  console.log(`object`, menu);
  const [id, setId] = useState();
  return (
    <div className="container">
      <BreadCrump title={menu} />
      <div className="Course">
        <HeaderDiscount />
        <div className="grid Course__container relative">
          <div style={{ position: "relative", minHeight: "100vh" }}>
            <div style={{ height: "100%" }}>
              <TeacherInfo />
            </div>
          </div>
          <div>
            <Tabs className="TabBox" type="card">
              <TabPane tab="درباره این دوره" key="1">
                <About />
              </TabPane>
              <TabPane tab="سرفصل ها" key="2">
                <Sarfasl />
              </TabPane>
            </Tabs>
            <div className="Course__Comment">
              <Tabs className="TabBox " type="card">
                <TabPane tab="نظرات" key="1" className="Sarfasl__commentpart">
                  <Comment />
                </TabPane>
                <TabPane
                  tab="پرسش و پاسخ"
                  key="2"
                  className="Sarfasl__commentpart"
                >
                  <AskAndAnswer />
                </TabPane>
              </Tabs>
            </div>
          </div>
          <div
            style={{ position: "relative", minHeight: "100vh" }}
          >
            <CourseTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
