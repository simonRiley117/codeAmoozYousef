import React from "react";
import CodeeditorWithRun from "./CodeeditorWithRun";

function index(props) {
  return (
    <div>
      <CodeeditorWithRun lan={props.lan} value={props.value} />
    </div>
  );
}

export default index;
