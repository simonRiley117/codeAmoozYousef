import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";

import IconBtn from "@Components/Shared/Buttons/IconBtn";
import classNames from "classnames";
import UseScrollAppbar from "./UseScrollAppbar";
import Button from "../Buttons/Button";
import Register from "@Components/Layouts/Register/Register";
import { useCartData } from "@App/Context/cartContext";
import Modal from "@Components/Shared/Modal/Modal";

// Assets
import logo from "@Assets/Logo/logo.svg";
import { ReactComponent as ShoppingCartIcon } from "@Assets/Icons/shopping-cart.svg";
import { ReactComponent as LogoTextIcon } from "@Assets/Logo/codeamooz-text.svg";

import { useAuth } from "@App/Context/authContext";
import { useUserData } from "@App/Context/userContext";
import { useEffect } from "react";

import Propfile from "./ProfileMenu/Propfile";
import { Badge } from "antd";
import useMediaQuery from "@App/Hooks/useMediaQuery";
import { ReactComponent as HomeIcon } from "@Assets/Icons/home.svg";
import { ReactComponent as UserIcon } from "@Assets/Icons/user.svg";
import { ReactComponent as ResumeIcon } from "@Assets/Icons/resume.svg";
import { ReactComponent as CourseIcon } from "@Assets/Icons/course.svg";
import { ReactComponent as WalletIcon } from "@Assets/Icons/wallet.svg";
import { ReactComponent as MessageIcon } from "@Assets/Icons/message.svg";
import { ReactComponent as SettingIcon } from "@Assets/Icons/setting.svg";
const Appbar = () => {
  const { cartData } = useCartData();
  const navigate = useNavigate();
  const [isOpenMenu, setOpenMenu] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const { userData } = useUserData();
  const { pathname, search } = useLocation();
  const dark = pathname === "/";
  const { sticky } = UseScrollAppbar();
  const { token, authDispatch } = useAuth();

  const isTablet = useMediaQuery("(max-width: 992px)");

  // console.log('cartData: ',cartData)

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

  const handleToggleMenu = () => {
    if (isTablet) {
      setOpenMenu((prev) => !prev);
      isOpenMenu
        ? document.body.classList.remove("scrolling-effect")
        : document.body.classList.add("scrolling-effect");
    }
  };

  const handleModalVisible = () => {
    setModalVisible((prev) => !prev);
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
  const [modal, setModal] = useState(false);
  const handleModalShow = () => {
    setModal((prev) => !prev);
  };
  const handleClose = () => {
    setOpenMenu(false);
    setModal(true);
    // handleModalShow();
  };

  const logout = () => {
    authDispatch({ type: "LOGOUT" });
    navigate("/", { replace: true });
  };
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
              })}
            >
              <div className="logo">
                <img src={logo} alt="logo" />
              </div>

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
              {/* {token && (
								<div className='d-flex-align Menu__nav--profile'>
									<p className='profile__name'>{userData?.username}</p>
									<div className='profile__image'>
										<img src={userData.cover} alt='profile' />
									</div>
								</div>
							)} */}
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
                <ul className="Menu__ul  list">
                  {menuItem.map((item) => (
                    <NavLink
                      to={item.url}
                      onClick={() => setOpenMenu(false)}
                      className="Menu__li"
                    >
                      <li
                        key={item.id}
                        className="Menu__li"
                        onClick={() => handleToggleMenu()}
                      >
                        {item.text}
                      </li>
                    </NavLink>
                  ))}
                  {isTablet &&
                    sidebarmenuItem.map((item) => (
                      <NavLink
                        to={item.url}
                        onClick={() => setOpenMenu(false)}
                        className="Menu__li"
                      >
                        <li
                          key={item.id}
                          className="Menu__li"
                          onClick={() => handleToggleMenu()}
                        >
                          {item.text}
                        </li>
                      </NavLink>
                    ))}
                  {isTablet && (
                    <li className="Menu__li" onClick={handleClose}>
                      خروج از حساب
                    </li>
                  )}
                </ul>
              </nav>
            </div>

            <div className="Menu_actions">
              {token && (
                <IconBtn
                  classes={classNames({
                    activeMenu: isOpenMenu,
                    dark: dark && !sticky,
                  })}
                  icon={
                    <Badge
                      count={cartData?.cart_nums}
                      size="small"
                      className="Menu_actions--badge"
                    >
                      <ShoppingCartIcon />
                    </Badge>
                  }
                  onClick={() => navigate("/shopping-card")}
                />
              )}
              {token ? (
                <div className="d-flex-align Menu_actions--profile">
                  <div className={classNames("profile__image")}>
                    <Propfile />
                  </div>
                </div>
              ) : (
                <Button type="primary" onClick={handleModalVisible}>
                  ورود / ثبت نام
                </Button>
              )}
              {modal && (
                <Modal
                  className="ExitModal"
                  visible={modal}
                  onCancel={handleModalShow}
                >
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
