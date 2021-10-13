import React from "react";
import CardIcon from "../../assets/img/menu/card Icon.svg";
import profile from "../../assets/img/profile.png";
import Codeamoozlogo from "../../assets/img/codeamoozLogo.svg";
import logo from "../../assets/img/logo.svg";

const Menu = () => {
  const menuItem = [
    {
      url: "",
      text: "صفحه ی اصلی",
      id: 1,
    },
    {
      url: "",
      text: " دوره ها ",
      id: 2,
    },
    {
      url: "",
      text: "درباره ی ما ",
      id: 3,
    },
    {
      url: "",
      text: "ارتباط با ما",
      id: 4,
    },
    {
      url: "",
      text: " سوالات متدوال",
      id: 5,
    },
    {
      url: "",
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
              <li className="Menu__li">{i.text}</li>
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

export default Menu;
