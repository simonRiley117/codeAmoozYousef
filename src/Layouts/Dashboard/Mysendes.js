import React, { useState } from "react";
import BreadCrump from "@Components/Shared/BreadCrump/BreadCrump";
import Card from "@Components/Layouts/Dashboard/MySendes/Card";
import { Link } from "react-router-dom";
import UseWindowSize from "@App/Sizes/UseWindowSize";
import Codeeditor from "@Components/Shared/Codeeditor";

function Mysendes() {
  const [step, setStep] = useState(2);
  let name = "آزمون اول";
  const windowSize = UseWindowSize();

  return (
    <div className="Mysendes">
      <BreadCrump pathsname="/dash/mysendes" name="ارسال های من" />
      {step === 1 && <p className="Transaction__Title">ارسال های من</p>}
      <div className="Transaction__box">
        {step === 1 ? (
          <div className=" courses__grid grid grid-cols-4 gap-x-6 gap-y-8">
            {cards.map((card) => {
              return <Card key={card.id} card={card} />;
            })}
          </div>
        ) : (
          <div className="Detaile">
            {" "}
            <div className="Detaile__hederBox">
              <p>پایتون چیست؟</p>
            </div>
            <div className="w-7/12 m-auto">
              <div className="Sarfasl__sample flex items-center	justify-between">
                <p>مثال</p>
                <div className="Sarfasl__sampleLinkBox flex items-center justify-center ">
                  <Link
                    to={{
                      pathname: "/dashboard/quiz",
                      state: {
                        title: name,
                      },
                    }}
                  >
                    {windowSize === "sm"
                      ? "آزمون اول".slice(0, 25) +
                        (name.length > 5 ? "..." : "")
                      : "آزمون اول"}
                  </Link>
                </div>
              </div>
              <Codeeditor id={"1"} lan={"c_cpp"} value={"console.log(hi)"} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Mysendes;
const cards = [{ id: 1, name: "دوره آنلاین برنامه نویسی HTML" }];
