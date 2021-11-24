import React, { useState, useEffect } from "react";
import BreadCrump from "@Components/Shared/BreadCrump/BreadCrump";
import { useParams, useLocation } from "react-router-dom";
import QuizDetail from "@Components/Layouts/Quiz/QuizDetail";

function Index() {
  const { title } = useParams();
  const location = useLocation();
  const [titles, setTitles] = useState("");
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    setTitles(location.state.title);
  }, [location]);
  return (
    <div className="Example container">
      <BreadCrump pathsname="/dash/quiz" name="آزمون 1" />
      <div className="Example__container">
        <QuizDetail />
      </div>
    </div>
  );
}

export default Index;
