import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import BreadCrump from "@Components/Shared/BreadCrump/BreadCrump";
import SideBarDiscount from "@Components/Shared/Discount/SideBarDiscount";
import HeaderDiscount from "@Components/Shared/Discount/HeaderDiscount";
import DefaultFormBox from "@Components/Shared/DeafaultFormBox/DefaultFormBox";
import Sarfasl from "@Components/Layouts/Course/Sarfasl";
import About from "@Components/Layouts/Course/About";

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
  const [id, setId] = useState(0);
  return (
    <div className="container">
      <BreadCrump item={menu} />
      <div className="Course">
        <HeaderDiscount />
        <div className="grid Course__container">
          <div></div>
          <div>
            <DefaultFormBox
              labels={labels}
              className="w-1/2"
              setId={setId}
              height="Sarfasl__form"
            >
              {id === 0 && <About />}
              {id === 1 && <Sarfasl />}
            </DefaultFormBox>
          </div>
          <div className="fixed">{/* <SideBarDiscount /> */}</div>
        </div>
      </div>
    </div>
  );
}

export default Index;
const labels = ["درباره این دوره", "سرفصل ها"];
