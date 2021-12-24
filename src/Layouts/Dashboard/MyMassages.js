import React, { Fragment } from "react";
import MessageUser from "@Components/Layouts/Dashboard/MyMessages/MessageUser";
import Chatroom from "@Components/Layouts/Dashboard/MyMessages/Chatroom";
import EmptyChatroom from "@Components/Layouts/Dashboard/MyMessages/EmptyChatroom";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import { Outlet } from 'react-router-dom';

const MyMassages = () => {
  return (
   
    <div className="MyMassages">
      <div className="MyMassages__user--col">
        <MessageUser />
      </div>
      <div>
      <Outlet />

      </div>
     
    </div>
  );
};

export default MyMassages;
