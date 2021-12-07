import React, { useEffect, useState } from "react";
import { Button, notification, Divider, Space } from "antd";

function PopUp(props) {
  const openNotification = (placement) => {
    notification.info({
      description: props.description,
      placement,
    });
  };
  return (
    <div>
      <div onClick={() => openNotification("topLeft")}>{props.children}</div>
    </div>
  );
}

export default PopUp;
