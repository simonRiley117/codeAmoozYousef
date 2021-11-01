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
import { Tabs } from "antd";

const { TabPane } = Tabs;

function Index() {
  const location = useLocation();
  useEffect(() => {
    setMenu([
      {
        name: "صفحه اصلی",
        rout: "",
      },
      {
        name: "دوره ها",
        rout: "/courses",
      },
      {
        name: location.state.name,
        rout: "/course",
      },
    ]);
  }, [location]);
  const [menu, setMenu] = useState([]);
  return (
    <div className="container">
      <BreadCrump item={menu} />
      <div className="Course">
        <HeaderDiscount />
        <div className="grid Course__container relative">
          <div style={{ position: "relative" }}>
            <div>
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
          <div className="fixed">{/* <SideBarDiscount /> */}</div>
        </div>
      </div>
    </div>
  );
}

export default Index;
