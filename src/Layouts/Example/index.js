import React, { useState, useEffect } from "react";
import BreadCrump from "@Components/Shared/BreadCrump/BreadCrump";
import { useParams, useLocation } from "react-router-dom";
import ExampleDetail from "@Components/Layouts/Example/ExampleDetail";

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
      <BreadCrump pathsname="/example" name="مثال 1" />
      <div className="Example__container">
        <ExampleDetail />
      </div>
    </div>
  );
}

export default Index;
