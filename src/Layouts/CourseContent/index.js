import React, { useState, useEffect } from "react";
import WebTour from "@Components/Shared/WebTour/WebTour";
import CourseContent from "./CourseContent";
import { useUserData } from "@App/Context/userContext";
import { tourConfig } from "./steps";

function Index() {
  const { userData } = useUserData();

  const handleClose = () => {};
  return (
    <div>
      <CourseContent />
      <WebTour tourConfig={tourConfig} />
    </div>
  );
}

export default Index;
