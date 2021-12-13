import React, { useState } from "react";

import logo from "@Assets/Logo/logo.svg";
import { ReactComponent as ShoppingCartIcon } from "@Assets/Icons/shopping-cart.svg";
import { ReactComponent as LogoTextIcon } from "@Assets/Logo/codeamooz-text.svg";
import profile from "@Assets/Pic/profile.png";
import IconBtn from "../Buttons/IconBtn";
import classNames from "classnames";
import { NavLink, useNavigate, Link } from "react-router-dom";
import UseScrollAppbar from "./UseScrollAppbar";
import { useUserData } from "@App/Context/userContext";

import { ReactComponent as HomeIcon } from "@Assets/Icons/home.svg";
import { ReactComponent as UserIcon } from "@Assets/Icons/user.svg";
import { ReactComponent as ResumeIcon } from "@Assets/Icons/resume.svg";
import { ReactComponent as CourseIcon } from "@Assets/Icons/course.svg";
import { ReactComponent as WalletIcon } from "@Assets/Icons/wallet.svg";
import { ReactComponent as MessageIcon } from "@Assets/Icons/message.svg";
import { ReactComponent as SettingIcon } from "@Assets/Icons/setting.svg";
import SidebarMenuItem from "./SidebarMenuItem";

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
    url: "/about-me",
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
const sidebarmenuItem = [
  {
    text: "پیشخوان",
    icon: <HomeIcon />,
    url: "/dashboard",
  },
  {
    text: "پروفایل",
    icon: <UserIcon />,
    url: "dashboard/profile",
  },
  {
    text: "رزومه",
    icon: <ResumeIcon />,
    url: "dashboard/resume",
  },
  {
    text: "دوره های من",
    icon: <CourseIcon />,
    url: "dashboard/my-course",
  },
  {
    text: "کیف پول",
    icon: <WalletIcon />,
    url: "dashboard/wallet",
  },
  {
    text: "پیام ها",
    icon: <MessageIcon />,
    url: "dashboard/messages",
  },
  {
    text: "تنظیمات",
    icon: <SettingIcon />,
    url: "dashboard/setting",
  },
];

const DahsboardAppbar = () => {
  const navigate = useNavigate();

  const [isOpenMenu, setOpenMenu] = useState(false);
  const [hoverMenu, setHoverMenu] = useState(false);
  const { sticky } = UseScrollAppbar();

  const { userData } = useUserData();

  const handleToggleMenu = () => {
    setOpenMenu((prev) => !prev);

    const html = document.querySelector("html");
    !isOpenMenu
      ? (html.style.overflowY = "hidden")
      : (html.style.overflowY = "auto");
  };

  const renderSideBarItem = () => {
    return sidebarmenuItem.map((item) => (
      <SidebarMenuItem key={item.url} {...item} />
    ));
  };

  return (
    <div
      className={classNames("appbar__dahsboard", {
        sticky: sticky,
      })}
    >
      <div className="d-flex-space">
        <div className="menu_logo d-flex-align ">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          {/* <img src={Codeamoozlogo} alt='codeamooz' /> */}
          <div className="logo-text">
            <LogoTextIcon />
          </div>
        </div>
        <div className="Menu__nav--wrapper">
          <IconBtn
            classes={classNames("Menu__nav--btn", {
              open: isOpenMenu,
            })}
            icon={
              <>
                <span></span>
                <span></span>
                <span></span>
              </>
            }
            onClick={handleToggleMenu}
          />
          <nav className="Menu__nav d-flex-space">
            {isOpenMenu && (
              <ul className="Menu__ul d-flex-space list">
                {renderSideBarItem()}
              </ul>
            )}
            <ul className="Menu__ul d-flex-space list">
              {menuItem.map((item) => (
                <li key={item.id} className="Menu__li">
                  <NavLink to={item.url}>{item.text}</NavLink>
                </li>
              ))}
            </ul>
            {/* <img src={CardIcon} alt='card' /> */}
            <div className="Menu_actions">
              <IconBtn
                icon={<ShoppingCartIcon />}
                onClick={() => navigate("/shopping-card")}
              />
              <div className="d-flex-align Menu_actions--profile">
                <p className="profile__name">{userData.username}</p>
                <div
                  className={classNames("profile__image")}
                  onMouseEnter={() => setHoverMenu(true)}
                  onMouseLeave={() => setHoverMenu(false)}
                >
                  <img src={userData.cover} alt="profile" />
                  {hoverMenu && (
                    <div className="profile-menu">
                      <Link to="/dashboard">حساب کاربری</Link>
                      <Link to="/fav">علاقه مندی‌ها</Link>
                      <Link to="/">خروج</Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default DahsboardAppbar;
