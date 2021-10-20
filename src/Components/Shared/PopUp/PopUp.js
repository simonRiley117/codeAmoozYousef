import React, { useEffect, useState } from "react";
import { Alert } from "antd";

function PopUp(props) {
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(!show);
    }, 5000);
  }, []);
  return (
    <div>
      {show && (
        <div className={`PopUp ${props.className}`}>{props.children}</div>
      )}
    </div>
  );
}

export default PopUp;
