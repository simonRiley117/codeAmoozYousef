import React, { useState } from "react";
import WebTour from "@Components/Layouts/CourseContent/WebTour";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import CourseContent from "./CourseContent";
function Index() {
  const disableBody = (target) => disableBodyScroll(target);
  const enableBody = (target) => enableBodyScroll(target);
  const [isTourOpen, setIsTourOpen] = useState(true);
  const [isShowingMore, setIsShowingMore] = useState(true);
  const openTour = () => {
    setIsTourOpen(true);
  };
  const closeTour = () => {
    setIsTourOpen(false);
  };
  const toggleShowMore = () => {
    setIsShowingMore((prevState) => !prevState);
  };
  return (
    <div>
      <CourseContent
        openTour={openTour}
        toggleShowMore={toggleShowMore}
        isShowingMore={isShowingMore}
      />
      <WebTour
        onAfterOpen={disableBody}
        onBeforeClose={enableBody}
        onRequestClose={closeTour}
        isOpen={isTourOpen}
        rounded={5}
      />
    </div>
  );
}

export default Index;
