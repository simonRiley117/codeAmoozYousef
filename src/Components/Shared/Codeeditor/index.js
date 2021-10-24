import React from "react";
import Codeeditor from "./Codeeditor";

function index(props) {
  return (
    <div>
      <Codeeditor lan={props.lan} value={props.value} />
    </div>
  );
}

export default index;
