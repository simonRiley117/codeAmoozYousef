import React, { useState } from "react";
import useFetch from "@App/Context/useFetch";
import { ReactComponent as HomeIcon } from "@Assets/Icons/home.svg";
import { ReactComponent as UserIcon } from "@Assets/Icons/user.svg";
import { ReactComponent as ResumeIcon } from "@Assets/Icons/resume.svg";
import { ReactComponent as CourseIcon } from "@Assets/Icons/course.svg";
import { ReactComponent as WalletIcon } from "@Assets/Icons/wallet.svg";
import { ReactComponent as MessageIcon } from "@Assets/Icons/message.svg";
import { ReactComponent as SettingIcon } from "@Assets/Icons/setting.svg";
import { ReactComponent as CloseIcon } from "@Assets/Icons/close.svg";
import { ReactComponent as ExiteIcon } from "@Assets/Icons/quite.svg";
import Modal from "@Components/Shared/Modal/Modal";
import Button from "@Components/Shared/Buttons/Button";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import SidebarMenuItem from "./SidebarMenuItem";
import { useNavigate } from "react-router";
import { useAuth } from "@App/Context/authContext";

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

const SidebarMenu = () => {
  const [modal, setModal] = useState(false);
  const {  authDispatch } = useAuth();

  const [expand, setExpand] = useState(false);

  const closeNav = () => {
    setExpand((prev) => !prev);
  };
  const handleModalVisible = () => {
    setModal(false);
  };

  const handleModalShow = (uuid, lock) => {
    setModal(true);
  };
  const logout = () => {
    authDispatch({ type: "LOGOUT" });
    navigate("/", { replace: true });
  };
  const navigate = useNavigate();

  // const Logout = useFetch({
  //   url: `auth/logout`,
  //   method: "POST",
  //   trigger: false,
  //   argFunc: (res) => {
  //     toast.success("شما از حساب خود خارج شدید");
  //     Cookies.remove("token");

  //     navigate("/", { replace: true });
  //     window.location.reload()
  //   },
  // });
  return (
    <div
      className="sidebarMenu"
      style={!expand ? { width: "176px" } : { width: "68px" }}
    >
      <ul className="sidebarMenu__ul list">
        <ul>
          {sidebarmenuItem.map((item) => (
            <SidebarMenuItem key={item.url} {...item} />
          ))}
        </ul>
        <ul className="sidebarMenu__nestedul">
          <li className="sidebarMenu__li d-flex-align close" onClick={closeNav}>
            <div className="menuIcon">
              <CloseIcon />
            </div>
            <p>بستن</p>
          </li>
          <li
            className="sidebarMenu__li d-flex-align exit"
            onClick={handleModalShow}
          >
            <div className="menuIcon">
              <ExiteIcon />
            </div>
            <p>خروج</p>
          </li>
        </ul>
      </ul>
      <Modal
        className="ExitModal"
        visible={modal}
        onCancel={handleModalVisible}
      >
        <div className="ExitModal__back">
          <p className="mb-12">آیا از خروج مطمئن هستید؟</p>
          <div className="d-flex-space">
            <Button onClick={logout}>بله</Button>
            <Button onClick={handleModalVisible} type="primary">
              خیر
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SidebarMenu;
