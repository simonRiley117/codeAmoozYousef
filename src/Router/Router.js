import React from "react";
import { Route, Routes } from "react-router-dom";
import { useAuth } from "@App/Context/authContext";

import Authenticated from "@App/Authenticated";
import UnAuthenticated from "@App/UnAuthenticated";

// ----------------- Pages -----------------
import Home from "@Layouts/Home";

import CoWorkers from "@Layouts/CoWorkers";
import Master from "@Layouts/CoWorkers/Master/Master";
import TechnicalTeam from "@Layouts/CoWorkers/TechnicalTeam";
import Employer from "@Layouts/CoWorkers/Employer/Employer";
import TechnicalTeams from "@Components/Layouts/CoWorkers/TechnicalTeam/TechnicalTeams";
import Layout from "@Components/Shared/Layout/Layout";
import News from "@Layouts/News";
import NewsDetails from "@Layouts/News/NewsDetails";
import Faq from "@Layouts/Faq";
import Contact from "@Layouts/Contact us";
import AboutUs from "@Layouts/About us";
import Courses from "@Layouts/Courses";
import Course from "@Layouts/Course";
import Favorites from "@Layouts/Favorites/Favorites";
import Rules from "@Layouts/Rules/Rules";
import Example from "@Layouts/Example";
import TeacherResume from "@Layouts/Teacher Resume/TeacherResume";

import ShoppingCard from "@Layouts/ShoppingCard/ShoppingCard";
import Search from "@Layouts/Search/Search";
import CourseContent from "@Layouts/CourseContent/CourseContent";

const Router = () => {
  const { token } = useAuth();
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}>
            <Route index path="/:redirectTeacher?" element={<Home />} />
          </Route>
          <Route path="/coWorkers" element={<CoWorkers />} />
          <Route path="coWorkers/master" element={<Master />} />
          <Route path="coWorkers/technicalteam" element={<TechnicalTeam />} />
          <Route
            path="coWorkers/technicalteam/information"
            element={<TechnicalTeams />}
          />
          <Route path="coWorkers/employer" element={<Employer />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/news-info" element={<NewsDetails />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/about-me" element={<AboutUs />} />

          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/content/:courseId" element={<Course />} />
          <Route path="/courses/content/teacher" element={<TeacherResume />} />
          <Route path="/courses/example" element={<Example />} />

          <Route path="/rules" element={<Rules />} />
          <Route path="/fav" element={<Favorites />} />

          <Route path="/shopping-card" element={<ShoppingCard />} />

          <Route path="/search/:name" element={<Search />} />
          <Route path="/course/:courseId" element={<CourseContent />} />
        </Route>
      </Routes>
      {token ? <Authenticated /> : <UnAuthenticated />}
    </>
  );
};
export default Router;
