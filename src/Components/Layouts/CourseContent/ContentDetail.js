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
    argFunc: (res) => {
      if (iscontent) {
        setActiveSeason(res.season);
        setSeosononquizeid(res.season.season_quiz_uuid);
      }
    },
  });
  useEffect(() => {
    getContent.reFetch();
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
        <Skeleton />
      )}
    </div>
  );
}

export default ContentDetail;
