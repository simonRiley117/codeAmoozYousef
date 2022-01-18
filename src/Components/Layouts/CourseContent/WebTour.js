import React, { useState, useLayoutEffect, useRef } from "react";
import Tour from "reactour";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { tourguid } from "@App/Recoil/StateRecoil";
import { useRecoilState } from "recoil";
import { useAuth } from "@App/Context/authContext";

function WebTour(props) {
  // const [showguid, setShowguid] = useRecoilState(tourguid);
  const { setShowGuid, showGuid } = useAuth();

  const [isTourOpen, setIsTourOpen] = useState(true);
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

      // style={{ direction: "rtl" }}
    />
  );
}

export default WebTour;
