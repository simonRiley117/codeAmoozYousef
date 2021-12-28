import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import useFetch from "@App/Context/useFetch";

import IconBtn from "@Components/Shared/Buttons/IconBtn";
import classNames from "classnames";
import UseScrollAppbar from "./UseScrollAppbar";
import Button from "../Buttons/Button";
import Register from "@Components/Layouts/Register/Register";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import Modal from "@Components/Shared/Modal/Modal";

// Assets
import logo from "@Assets/Logo/logo.svg";
import { ReactComponent as ShoppingCartIcon } from "@Assets/Icons/shopping-cart.svg";
import { ReactComponent as LogoTextIcon } from "@Assets/Logo/codeamooz-text.svg";
import { Divider, Popover } from "antd";
import {
  DownOutlined,
  LeftOutlined,
  HomeOutlined,
  HeartOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useAuth } from "@App/Context/authContext";
import { useUserData } from "@App/Context/userContext";
import { useEffect } from "react";
import { ReactComponent as ExiteIcon } from "@Assets/Icons/quite.svg";
import { ReactComponent as UserIcon } from "@Assets/Icons/user.svg";
import { ReactComponent as Heart } from "@Assets/Icons/heart.svg";

const Appbar = () => {
  const navigate = useNavigate();
  const [isOpenMenu, setOpenMenu] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [hoverMenu, setHoverMenu] = useState(false);
  const [modal, setModal] = useState(false);
  const { userData } = useUserData();
  const { pathname, search } = useLocation();
  const dark = pathname === "/";
  const { sticky } = UseScrollAppbar();
  const { token } = useAuth();
  const { authDispatch } = useAuth();

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

  const handleModalShow = (uuid, lock) => {
    setModal((prev) => !prev);
  };

  useEffect(() => {
    if (dark && !token && search == "?redirectTeacher") {
      handleModalVisible();
    }

    if (token && search == "?redirectTeacher") {
      navigate(pathname, {
        replace: true,
      });
    }
  }, []);

  const logout = () => {
    authDispatch({ type: "LOGOUT" });
    navigate("/", { replace: true });
  };

  // const Logout = useFetch({
  //   url: `auth/logout`,
  //   method: "POST",
  //   trigger: false,
  //   argFunc: (res) => {
  //     toast.success("شما از حساب خود خارج شدید");
  //     Cookies.remove("token");

  //     navigate("/", { replace: true });
  //     window.location.reload();
  //   },
  // });

  const profileMenu = (
    <div className="profile-menu">
      <div className="px-8 pt-4">
        <div className="profile-menu-item px-8 py-4">
          <div className="profile-menu-item-icon">
            <UserOutlined style={{ fontSize: "26px" }} />
          </div>
          <p className="profile__name font-bold -mb-2">{userData.username}</p>
        </div>
      </div>
      <Divider
        style={{
          margin: "5px 0",
        }}
      />
      <div className="px-8 pb-4">
        <div className="profile-menu-item">
          <div className="profile-menu-item-icon">
            <HomeOutlined />
          </div>
          <Link to="/dashboard" className=" ml-40">
            حساب کاربری
          </Link>
          <div className="profile-menu-item-arrow">
            <LeftOutlined />
          </div>
        </div>
        {/* <Divider style={{ margin: "5px 0" }} /> */}
        <div className="profile-menu-item">
          <div className="profile-menu-item-icon">
            <HeartOutlined />
          </div>
          <Link to="/fav" className=" ml-40">
            علاقه مندی‌ها
          </Link>
          <div className="profile-menu-item-arrow">
            <LeftOutlined />
          </div>
        </div>
        {/* <Divider style={{ margin: "5px 0" }} /> */}
        <div className="profile-menu-item text-red-500">
          <div className="profile-menu-item-icon">
            <LogoutOutlined />
          </div>
          <a href="#" onClick={handleModalShow} className=" ml-40">
            خروج
          </a>
          <div className="profile-menu-item-arrow">
            <LeftOutlined />
          </div>
        </div>
      <Divider style={{ margin: "5px 0" }} />
      <div className="profile-menu-item exite">
        <ExiteIcon />
        <a href="#" onClick={handleModalShow}>
          خروج
        </a>
      </div>
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
    </div>
  );
  return (
    <>
      <div
        className={classNames("Menu__sec primary", {
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
                    <li
                      key={item.id}
                      className="Menu__li"
                      onClick={() => setOpenMenu(false)}
                    >
                      <NavLink to={item.url}>{item.text}</NavLink>
                    </li>
                  ))}
                </ul>
                <div className="Menu_actions">
                  {token && (
                    <div className=" relative">
                      <IconBtn
                        icon={<ShoppingCartIcon />}
                        onClick={() => navigate("/shopping-card")}
                      />
                      <div className="Menu_action--badge ">
                        <p>{userData.cart}</p>
                      </div>
                    </div>
                  )}
                  {token ? (
                    <div className="d-flex-align Menu_actions--profile">
                      <div className={classNames("profile__image")}>
                        <Popover
                          trigger="click"
                          placement="bottomLeft"
                          content={profileMenu}
                        >
                          <div className="flex justify-center items-center relative profile__image-content">
                            <img src={userData.cover} alt="profile" />
                            <div className="absolute w-8 h-8 flex items-center justify-center">
                              <DownOutlined />
                            </div>
                          </div>
                        </Popover>
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
{
  /* <div
    classes={classNames("profile__image", {
      hoverMenu: hoverMenu,
    })}
  >
    <img src={userData.cover} alt="profile" />
  </div>; */
}
