import { Avatar, Badge, Dropdown, Menu } from "antd";
import React from "react";
// import { FaChevronDown } from "react-icons/fa";
import ProfileMenu from "./ProfileMenu";
import {
  DownOutlined,
  LeftOutlined,
  HomeOutlined,
  HeartOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";

// image
// import profileImage from "@Images/pic/p.png";
import { useUserData } from "@App/Context/userContext";

const Propfile = () => {
  const { userData } = useUserData();
  const Icon = (
    <span>
      <DownOutlined />
    </span>
  );
  return (
    <Dropdown overlay={<ProfileMenu />}>
      <div className="appbar__profile">
        <Badge count={Icon}>
          <Avatar src={userData.cover} alt="name" shape="square">
            name
          </Avatar>
        </Badge>
      </div>
    </Dropdown>
  );
};
export default Propfile;
