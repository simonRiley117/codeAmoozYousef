import React, { useState } from "react";
import homeIcon from "../../assets/img/sidebarmenu/home.svg";
import profileIcon from "../../assets/img/sidebarmenu/user.svg";
import resumeIcon from "../../assets/img/sidebarmenu/resume.svg";
import courseIcon from "../../assets/img/sidebarmenu/course.svg";
import walletIcon from "../../assets/img/sidebarmenu/wallet.svg";
import messageIcon from "../../assets/img/sidebarmenu/message.svg";
import settingIcon from "../../assets/img/sidebarmenu/setting.svg";
import closeIcon from "../../assets/img/sidebarmenu/close.svg";
import exiteIcon from "../../assets/img/sidebarmenu/quite.svg";
import activehomeIcon from "../../assets/img/sidebarmenu - active/home.svg";
import activeprofileIcon from "../../assets/img/sidebarmenu - active/user.svg";
import activeresumeIcon from "../../assets/img/sidebarmenu - active/resume.svg";
import activecourseIcon from "../../assets/img/sidebarmenu - active/course.svg";
import activewalletIcon from "../../assets/img/sidebarmenu - active/wallet.svg";
import activemessageIcon from "../../assets/img/sidebarmenu - active/message.svg";
import activesettingIcon from "../../assets/img/sidebarmenu - active/setting.svg";

import { NavLink, useLocation } from "react-router-dom";

const SidebarMenu = () => {
  const [expand, setExpand] = useState(false);
  const sidebarmenuItem = [
    {
      text: "پیشخوان",
      icon: homeIcon,
      url: "/",
      activeIcon: activehomeIcon,
    },
    {
      text: "پروفایل",
      icon: profileIcon,
      url: "/profile",
      activeIcon: activeprofileIcon,
    },
    {
      text: "رزومه",
      icon: resumeIcon,
      url: "/resume",
      activeIcon: activeresumeIcon,
    },
    {
      text: "دوره های من",
      icon: courseIcon,
      url: "/mycourse",
      activeIcon: activecourseIcon,
    },
    {
      text: "کیف پول",
      icon: walletIcon,
      url: "/wallet",
      activeIcon: activewalletIcon,
    },
    {
      text: "پیام ها",
      icon: messageIcon,
      url: "/messages",
      activeIcon: activemessageIcon,
    },
    {
      text: "تنظیمات",
      icon: settingIcon,
      url: "/setting",
      activeIcon: activesettingIcon,
    },
    {
      text: "بستن",
      icon: closeIcon,
      color: "#FFEFAE",
      onclick: true,
    },
    {
      text: "خروج",
      icon: exiteIcon,
      color: "#FF8572",
    },
  ];
  const closeNav = () => {
    setExpand(!expand);
  };
  const location = useLocation();
  console.log(location);
  return (
    <div className="sidebarMenu__back">
      <div
        className="sidebarMenu "
        style={!expand ? { width: "176px" } : { width: "84px" }}
      >
        <ul className="sidebarMenu__ul list">
          {sidebarmenuItem.map((i) => (
            <>
              {i.url !== undefined ? (
                <li className="sidebarMenu__li d-flex-align">
                  <NavLink
                    exact
                    to={`${i.url}`}
                    className="d-flex-align"
                    activeClassName="selected"
                  >
                    {location.pathname === i.url ? (
                      <img src={i.activeIcon} alt="Menu_icon" />
                    ) : (
                      <img src={i.icon} alt="Menu_icon" />
                    )}
                    {!expand ? <p>{i.text}</p> : null}
                  </NavLink>
                </li>
              ) : (
                <li
                  className="sidebarMenu__li d-flex-align"
                  onClick={i.onclick ? closeNav : null}
                >
                  {location.pathname === i.url ? (
                    <img src={i.activeIcon} alt="Menu_icon" />
                  ) : (
                    <img src={i.icon} alt="Menu_icon" />
                  )}
                  {!expand ? <p>{i.text}</p> : null}
                </li>
              )}
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidebarMenu;
