import React from "react";
import Courses from "@Components/Layouts/Dashboard/Courses";
import Messages from "@Components/Layouts/Dashboard/Messages";
import Suggested from "@Components/Layouts/Dashboard/Suggested";
import TeacherLogin from "@Components/Layouts/Dashboard/TeacherLogin";
import Pdf from "../../Assets/Images/Icons/tutorialpdf.svg";
import Vid from "../../Assets/Images/Icons/tutorialvid.svg";

const Dashboard = () => {
  return (
    <section className="container mt-40">
      <div className="dashboard grid md:grid-cols-3 auto-rows-min gap-8 items-stretch grid-cols-1">
        <div className="dashboard-header-welcome flex items-center md:col-span-2 ">
          <h2>سلام علیرضا، خوش اومدی!</h2>
        </div>
        <div className="dashboard-header-tutorial flex justify-between p-3 row-start-7 md:row-start-1 md:col-start-3">
          <a className="dashboard-header-tutorial-vid flex items-center justify-center flex-nowrap">
            <img src={Vid} />
            <h6>آموزش ایجاد دوره</h6>
          </a>
          <a className="dashboard-header-tutorial-pdf flex items-center mr-auto justify-center flex-nowrap">
            <img src={Pdf} />
            <h6>آموزش ایجاد دوره</h6>
          </a>
        </div>
        <Courses />
        <TeacherLogin />
        <Messages />
        <Suggested />
      </div>
    </section>
  );
};

export default Dashboard;
