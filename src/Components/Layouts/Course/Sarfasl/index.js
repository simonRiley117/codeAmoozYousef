import React from "react";
import Detaile from "./Detaile";
import { Link } from "react-router-dom";
import Codeeditor from "@Components/Shared/Codeeditor";

function index() {
  return (
    <div className="Sarfasl">
      <Detaile />
      <div className="Sarfasl__sample flex items-center	justify-between">
        <p>مثال1</p>
        <div className="Sarfasl__sampleLinkBox flex items-center	justify-center">
          <Link to="">https://testui.codeamooz.com/example/4/5</Link>
        </div>
      </div>
      <Codeeditor lan={"c_cpp"} value={'printf("hello, %s", name)'} />
    </div>
  );
}

export default index;
