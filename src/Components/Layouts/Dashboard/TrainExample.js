import React, { useState } from "react";
import { Link } from "react-router-dom";
import Codeeditor from "@Components/Shared/Codeeditor";
import UseWindowSize from "@App/Sizes/UseWindowSize";
import useFetch from "../../../Context/useFetch";
import { ClipLoader } from "react-spinners";
import { Skeleton } from "antd";

function TrainExample({ contentUuid, courseUuid }) {
  const [content, setContent] = useState(null);
  const [contentLoading, setContentLoading] = useState(true);

  const setData = (data) => {
    setContent(data);
    setContentLoading(false);
  };

  const getContent = useFetch({
    url: `ContentService/${contentUuid}/getContent`,
    method: "GET",
    noHeader: false,
    setter: setData,
  });

  const windowSize = UseWindowSize();
  // let url = "https://testui.codeamooz.com/example/4/5";
  // let id = "1";
  return (
    <>
      {!contentLoading ? (
        content.context.map((item, index) => (
          <div key={index}>
            {item?.name ? (
              <div className="Sarfasl__sample flex items-center	justify-between">
                <p>مثال</p>
                <div className="Sarfasl__sampleLinkBox flex items-center justify-center ">
                  <Link
                    to={"/dashboard/course/example"}
                    state={{
                      title: item.name,
                      id: item.uuid,
                      courseUuid: courseUuid,
                    }}
                  >
                    {windowSize === "sm"
                      ? item.name.slice(0, 25) +
                        (item.name.length > 5 ? "..." : "")
                      : item.name}
                  </Link>
                </div>
              </div>
            ) : null}
            {item?.code?.length > 1 ? (
              <Codeeditor
                id={item.uuid}
                lan={content.language === "c" ? "c_cpp" : content.language}
                value={item.code}
              />
            ) : null}
            {item?.text?.length > 1 ? (
              <p className="Detaile__txt leading-loose">{item.text}</p>
            ) : null}
          </div>
        ))
      ) : (
        <div className="center m-4">
          {/* <ClipLoader color="#EF8019" loading={true} size={20} /> */}
          <Skeleton />
        </div>
      )}
    </>
  );
}

export default TrainExample;
