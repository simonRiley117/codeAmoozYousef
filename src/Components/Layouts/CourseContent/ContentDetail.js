import React, { useEffect, useState } from "react";
import VideoPlayer from "@Components/Shared/VideoPlayer/VideoPlayer";
import useFetch from "@App/Context/useFetch";
import { useAuth } from "@App/Context/authContext";
import { Skeleton } from "antd";

function ContentDetail({
  contentUuid,
  setActiveSeason,
  iscontent,
  setSeosononquizeid,
}) {
  const [content, setContent] = useState(null);
  const { token, authDispatch } = useAuth();
  const getContent = useFetch({
    url: `ContentService/${contentUuid}/getModalContent`,
    method: "GET",
    noHeader: token ? false : true,
    setter: setContent,
    trigger: false,
    argFunc: (res) => {
      if (iscontent === true) {
        setActiveSeason(res.season);
        console.log(res.season);
        setSeosononquizeid(res.season_quiz_uuid);
        console.log("quize uuid", res.season_quiz_uuid);
      }
    },
    argErrFunc: (res) => {
      if (res.detail === "You didnt pass former contents") {
        getContentbefor.reFetch();
      }
    },
  });
  const getContentbefor = useFetch({
    url: `ContentService/${contentUuid}/getModalContent`,
    method: "GET",
    noHeader: token ? false : true,
    setter: setContent,
    trigger: false,
    argFunc: (res) => {
      if (iscontent === true) {
        setActiveSeason(res.season);
        console.log(res.season);
        setSeosononquizeid(res.season_quiz_uuid);
        console.log("quize uuid", res.season_quiz_uuid);
      }
    },
    argErrFunc: (res) => {
      if (res.detail === "You didnt pass former contents") {
      }
    },
  });
  useEffect(() => {
    if (contentUuid !== null) {
      getContent.reFetch();
    }
  }, [contentUuid]);

  return (
    <div>
      {getContent?.response ? (
        <div className="Detaile ContentDetail">
          <div className="Detaile__hederBox">
            <p>{content.title}</p>
          </div>
          <div className="ContentDetail__videoBox">
            <VideoPlayer src={content.video} />
          </div>

          <p className="Detaile__txt leading-loose">
            {content.short_description}
          </p>
        </div>
      ) : (
        <Skeleton active />
      )}
    </div>
  );
}

export default ContentDetail;
