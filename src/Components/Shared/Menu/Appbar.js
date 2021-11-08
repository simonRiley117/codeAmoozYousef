import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router";
import IconBtn from "@Components/Shared/Buttons/IconBtn";
import classNames from "classnames";
import UseScrollAppbar from "./UseScrollAppbar";
import Button from "../Buttons/Button";
import Register from "@Components/Layouts/Register/Register";

// Assets
import logo from "@Assets/Logo/logo.svg";
import { ReactComponent as ShoppingCartIcon } from "@Assets/Icons/shopping-cart.svg";
import { ReactComponent as LogoTextIcon } from "@Assets/Logo/codeamooz-text.svg";
import profile from "@Assets/Pic/profile.png";
import { useAuth } from "@App/Context/authContext";
import { useUserData } from "@App/Context/userContext";

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

const Appbar = () => {
  const [isOpenMenu, setOpenMenu] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const { userData } = useUserData();
  const { pathname } = useLocation();
  const dark = pathname === "/";
  const { sticky } = UseScrollAppbar();
  const { token } = useAuth();
  const handleToggleMenu = () => {
    setOpenMenu((prev) => !prev);

    const body = document.body;
    !isOpenMenu
      ? body.classList.add("scrolling-effect")
      : body.classList.remove("scrolling-effect");
  };

  const handleModalVisible = () => {
    setModalVisible((prev) => !prev);
  };

  return (
    <>
      <div
        className={classNames("Menu__sec", {
          sticky: sticky,
        })}
      >
        <div className="container">
          <div className="Menu-wrapper">
            <div
              className={classNames("menu_logo d-flex-align ", {
                dark: dark && !sticky,
                activeMenu: isOpenMenu,
              })}
            >
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
                  dark: dark && !sticky,
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
              {token && (
                <div className="d-flex-align Menu__nav--profile">
                  <p className="profile__name">{userData.username}</p>
                  <div className="profile__image">
                    <img src={userData.cover} alt="profile" />
                  </div>
                </div>
              )}
              <nav
                className={classNames("Menu__nav d-flex-space", {
                  active: isOpenMenu,
                })}
              >
                <ul className="Menu__ul  list">
                  {menuItem.map((item) => (
                    <li key={item.id} className="Menu__li">
                      <NavLink exact to={item.url}>
                        {item.text}
                      </NavLink>
                    </li>
                  ))}
                </ul>
                <div className="Menu_actions">
                  <IconBtn icon={<ShoppingCartIcon />} />
                  {token ? (
                    <div className="d-flex-align Menu_actions--profile">
                      <p className="profile__name">{userData.username}</p>
                      <div className="profile__image">
                        <img src={userData.cover} alt="profile" />
                      </div>
                    </div>
                  ) : (
                    <Button type="primary" onClick={handleModalVisible}>
                      ورود / ثبت نام
                    </Button>
                  )}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <Register visible={isModalVisible} onCancel={handleModalVisible} />
    </>
  );
};

export default Appbar;
