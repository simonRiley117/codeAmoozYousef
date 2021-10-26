import React from "react";
import Detaile from "./Detaile";
import { Link } from "react-router-dom";
import Codeeditor from "@Components/Shared/Codeeditor";
import Accordion from "@Components/Shared/Accordion/Accordion";
import clock from "@Assets/Pic/clock.png";

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
      <div className="Sarfasl__Accordionbox">
        {cor.map((item) => (
          <Accordion header={item.nam}>
            {item.all.map((arr, id) => (
              <div className="flex justify-between items-center	">
                <div className="flex items-center Sarfasl__Accordiontxtbox">
                  <div className="Sarfasl__Accordionnumber">{id + 1} </div>
                  <p>{arr.txt}</p>
                </div>
                <div className="flex items-center Sarfasl__AccordionTimeBox">
                  <p>04:33</p>
                  <img src={clock} alt={clock} />
                </div>
              </div>
            ))}
          </Accordion>
        ))}
      </div>
    </div>
  );
}

export default index;

const cor = [
  {
    nam: "جلسه اول: آشنایی",
    all: [{ txt: "چرا پایتون؟" }, { txt: "پایتون چیست؟" }],
  },
  {
    nam: "جلسه دوم: آشنایی",
    all: [{ txt: "چرا پایتون؟" }, { txt: "پایتون چیست؟" }],
  },
  {
    nam: "جلسه سوم: آشنایی",
    all: [{ txt: "چرا پایتون؟" }, { txt: "پایتون چیست؟" }],
  },
  {
    nam: "جلسه چهارم: آشنایی",
    all: [{ txt: "چرا پایتون؟" }, { txt: "پایتون چیست؟" }],
  },
];
