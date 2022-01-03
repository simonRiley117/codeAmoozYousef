import { Menu } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@App/Context/authContext";
import { useUserData } from "@App/Context/userContext";
import Button from "../../Buttons/Button";
import Modal from "@Components/Shared/Modal/Modal";

// icon
import { LeftOutlined } from "@ant-design/icons";
import { ReactComponent as ExiteIcon } from "@Assets/Icons/quite.svg";
import { ReactComponent as UserIcon } from "@Assets/Icons/user.svg";
import { ReactComponent as Heart } from "@Assets/Icons/heart.svg";
import { ReactComponent as HomeIcon } from "@Assets/Icons/home.svg";

// import { useUserInfo } from "@App/Context/UserInfoContext";

const ProfileMenu = () => {
  const [modal, setModal] = useState(false);

  const { userData } = useUserData();
  const navigate = useNavigate();
  const { authDispatch } = useAuth();

  const handleSelectMenu = ({ key }) => {
    if (key === "info") {
      return;
    }
  };

  const handleModalShow = (uuid, lock) => {
    setModal((prev) => !prev);
  };

  const logout = () => {
    authDispatch({ type: "LOGOUT" });
    navigate("/", { replace: true });
  };

  const favNav = () => {
    navigate("/fav", { replace: true });
  };
  const dashNav = () => {
    navigate("/dashboard", { replace: true });
  };
  return (
    <Menu className="appbar__profile--menu" onClick={handleSelectMenu}>
      <Menu.Item className="information" key="info">
        <div className="appbar__profile--info">
          <UserIcon />
          <div className="appbar__profile--info-content">
            <h4>{userData.first_name}</h4>
            <span>{userData.username}</span>
          </div>
        </div>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item icon={<LeftOutlined />} onClick={dashNav} key="dashboard">
        <HomeIcon />
        <span>داشبورد</span>
      </Menu.Item>
      <Menu.Item icon={<LeftOutlined />} onClick={favNav} key="favorites">
        <Heart />
        <span>علاقه مندی‌ها</span>
      </Menu.Item>
      <Menu.Item
        icon={<LeftOutlined />}
        onClick={handleModalShow}
        danger
        key="exit"
      >
        <ExiteIcon />
        <span>خروج از حساب</span>
      </Menu.Item>
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
    </Menu>
  );
};
export default ProfileMenu;
