import React from "react";
import CardIcon from "@Assets/Icons/card Icon.svg";
import profile from "@Assets/Pic/profile.png";
import Codeamoozlogo from "@Assets/Logo/codeamoozLogo.svg";
import logo from "@Assets/Logo/logo.svg";
import { NavLink } from "react-router-dom";

const Appbar = () => {
  const menuItem = [
    {
      url: "/",
      text: "صفحه ی اصلی",
      id: 1,
    },
    {
      url: "/courses",
      text: " دوره ها ",
      id: 2,
    },
    {
      url: "/",
      text: "درباره ی ما ",
      id: 3,
    },
    {
      url: "/contact-us",
      text: "ارتباط با ما",
      id: 4,
    },
    {
      url: "/faq",
      text: " سوالات متدوال",
      id: 5,
    },
    {
      url: "/coWorkers",
      text: "همکاری و اساتید",
      id: 6,
    },
  ];
  return (
    <div className="Menu__sec">
      <div className="d-flex-space">
        <div className="menu_logo d-flex-align ">
          <img src={logo} alt="logo" className="logo" />
          <img src={Codeamoozlogo} alt="codeamooz" />
        </div>
        <nav className="Menu__nav d-flex-space">
          <ul className="Menu__ul d-flex-space list">
            {menuItem.map((i) => (
              <li className="Menu__li">
                <NavLink
                  exact
                  to={i.url}
                  activeStyle={{
                    color: "#f68521",
                  }}
                >
                  {i.text}{" "}
                </NavLink>
              </li>
            ))}
          </ul>
          <img src={CardIcon} alt="card" />
          <div className="d-flex-align ">
            <p className="profile__name">alireza_mzf</p>
            <div className="profile__image">
              <img src={profile} alt="profile" />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Appbar;
