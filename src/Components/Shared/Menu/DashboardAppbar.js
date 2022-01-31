import useFetch from "@App/Context/useFetch";
import React, { useState } from "react";
import Modal from "@Components/Shared/Modal/Modal";
import Button from "@Components/Shared/Buttons/Button";

import logo from "@Assets/Logo/logo.svg";
import { ReactComponent as ShoppingCartIcon } from "@Assets/Icons/shopping-cart.svg";
import { ReactComponent as LogoTextIcon } from "@Assets/Logo/codeamooz-text.svg";
import profile from "@Assets/Pic/profile.png";
import IconBtn from "../Buttons/IconBtn";
import classNames from "classnames";
import { NavLink, useNavigate, Link } from "react-router-dom";
import UseScrollAppbar from "./UseScrollAppbar";
import { useUserData } from "@App/Context/userContext";
import { useAuth } from "@App/Context/authContext";
import { ReactComponent as HomeIcon } from "@Assets/Icons/home.svg";
import { ReactComponent as UserIcon } from "@Assets/Icons/user.svg";
import { ReactComponent as ResumeIcon } from "@Assets/Icons/resume.svg";
import { ReactComponent as CourseIcon } from "@Assets/Icons/course.svg";
import { ReactComponent as WalletIcon } from "@Assets/Icons/wallet.svg";
import { ReactComponent as MessageIcon } from "@Assets/Icons/message.svg";
import { ReactComponent as SettingIcon } from "@Assets/Icons/setting.svg";
import SidebarMenuItem from "./SidebarMenuItem";
import { Badge, Divider, Popover } from "antd";

import Propfile from "./ProfileMenu/Propfile";

import useMediaQuery from "@App/Hooks/useMediaQuery";

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
  const [modal, setModal] = useState(false);

  const { sticky } = UseScrollAppbar();
  const { token, authDispatch } = useAuth();

  const { userData } = useUserData();
  const isTablet = useMediaQuery("(max-width: 992px)");

  const handleToggleMenu = () => {
    if (isTablet) {
      setOpenMenu((prev) => !prev);
      isOpenMenu
        ? document.body.classList.remove("scrolling-effect")
        : document.body.classList.add("scrolling-effect");
    }
  };
  const logout = () => {
    authDispatch({ type: "LOGOUT" });
    navigate("/", { replace: true });
  };
  const renderSideBarItem = () => {
    return sidebarmenuItem.map((item) => (
      <SidebarMenuItem key={item.url} {...item} setOpenMenu={setOpenMenu} />
    ));
  };
  const handleClose = () => {
    setOpenMenu(false);
    setModal(true);
    // handleModalShow();
  };
  const handleModalShow = () => {
    setModal((prev) => !prev);
  };
  return (
    <div
      className={classNames("appbar__dahsboard", {
        sticky: sticky,
      })}
    >
      <div className="d-flex-space Menu-wrapper">
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
          {isTablet && (
            <div
              onClick={handleToggleMenu}
              className={classNames("Menu__nav--backdrop", {
                active: isOpenMenu,
              })}
            ></div>
          )}
          <nav
            className={classNames("Menu__nav d-flex-space", {
              active: isOpenMenu,
            })}
          >
            {isTablet && (
              <ul className="Menu__ul Menu__ul--sidebar d-flex-space list mb-8">
                {renderSideBarItem()}
              </ul>
            )}
            <ul className="Menu__ul d-flex-space list mr-16">
              {menuItem.map((item) => (
                <li
                  key={item.id}
                  className="Menu__li"
                  onClick={handleToggleMenu}
                >
                  <NavLink to={item.url}>{item.text}</NavLink>
                </li>
              ))}
              <li className="Menu__li" onClick={handleClose}>
                خروج از حساب
              </li>
            </ul>
          </nav>
        </div>

        <div className="Menu_actions">
          <IconBtn
            classes={classNames({
              activeMenu: isOpenMenu,
              // dark: dark && !sticky,
            })}
            icon={
              <Badge
                count={userData.cart}
                size="small"
                className="Menu_actions--badge"
              >
                <ShoppingCartIcon />
              </Badge>
            }
            onClick={() => navigate("/shopping-card")}
          />
          <div className="d-flex-align Menu_actions--profile">
            <div className={classNames("profile__image")}>
              <Propfile />
            </div>
          </div>
        </div>
      </div>
      {modal && (
        <Modal className="ExitModal" visible={modal} onCancel={handleModalShow}>
          <div className="ExitModal__back">
            <p className="mb-12">آیا از خروج مطمئن هستید؟</p>
            <div className="d-flex-space">
              <Button onClick={logout}>بله</Button>
              <Button onClick={handleModalShow} type="primary">
                خیر
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default DahsboardAppbar;
