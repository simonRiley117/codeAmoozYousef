import React from "react";
import CodeeditorWithRun from "./CodeeditorWithRun";
import ResponsiveCodeeditor from "./ResponsiveCodeeditor";
import UseWindowSize from "@App/Sizes/UseWindowSize";

function index(props) {
  const windowSize = UseWindowSize();
  return (
    <div>
      {windowSize === "sm" || windowSize === "md-2" ? (
        <ResponsiveCodeeditor lan={props.lan} value={props.value} />
      ) : (
        <CodeeditorWithRun lan={props.lan} value={props.value} />
      )}
    </div>
  );
}

export default index;
