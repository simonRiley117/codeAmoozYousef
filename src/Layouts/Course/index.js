import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import BreadCrump from "@Components/Shared/BreadCrump/BreadCrump";
import SideBarDiscount from "@Components/Shared/Discount/SideBarDiscount";
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
    <div className="container Course">
      <BreadCrump item={menu} />
      <div className="grid Course__container">
        <div></div>
        <div></div>
        <div className="fixed">
          <SideBarDiscount />
        </div>
      </div>
    </div>
  );
}

export default Index;
