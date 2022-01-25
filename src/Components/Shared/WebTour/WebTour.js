import React, { useState, useLayoutEffect, useRef } from "react";
import Tour from "reactour";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { useAuth } from "@App/Context/authContext";
import IconBtn from "@Components/Shared/Buttons/IconBtn";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";

function WebTour(props) {
  const { setShowGuid, showGuid } = useAuth();
  const disableBody = (target) => disableBodyScroll(target);
  const enableBody = (target) => enableBodyScroll(target);
  const re = useRef(true);

  useLayoutEffect(() => {
    if (re.current) {
      re.current = false;
      return;
    }

    if (showGuid) {
      document.documentElement.style.overflowX = "inherit";
      document.documentElement.style.scrollBehavior = "inherit";
    } else {
      document.documentElement.style.overflowX = "hidden";
      document.documentElement.style.scrollBehavior = "smooth";
    }
  }, [showGuid]);
  // useEffect(() => {
  //   console.log(`showguid`, showGuid);

  // }, [showGuid]);
  const openTour = () => {
    setShowGuid(true);
  };
  const closeTour = () => {
    // setIsTourOpen(false);
    setShowGuid(false);
  };
  return (
    <Tour
      onRequestClose={closeTour}
      steps={props.tourConfig}
      isOpen={showGuid}
      maskClassName="mask"
      className="helper"
      rounded={5}
      accentColor={"#F68521"}
      onAfterOpen={disableBody}
      onBeforeClose={enableBody}
      lastStepNextButton={<button onClick={closeTour}>{"تمام"}</button>}
      // showCloseButton={false}
      showNavigation={false}
      showNumber={false}
      showButtons={true}
      stepInteraction={true}
      closeWithMask={false}
      startAt={0}
      prevButton={
        <IconBtn classes=" ml-12" title="قبل" icon={<RightOutlined />} />
      }
      nextButton={
        <IconBtn classes=" mr-12" title="بعد" icon={<LeftOutlined />} />
      }

      // style={{ direction: "rtl" }}
    />
  );
}

export default WebTour;
