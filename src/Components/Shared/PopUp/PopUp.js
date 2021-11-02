import React, { useEffect, useState } from "react";
import { message, Button } from "antd";

function PopUp(props) {
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(!show);
    }, 5000);
  }, []);
  const info = () => {
    message.info(props.message);
  };
  return (
    <div>
      {show && (
        <div className={`PopUp ${props.className}`}>{props.children}</div>
        // <Button
        //   type="primary"
        //   onClick={info}
        //   className={`PopUp ${props.className}`}
        // >
        //   Display normal message
        // </Button>
      )}
    </div>
  );
}

export default PopUp;
