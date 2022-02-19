import React, { useEffect, useState } from "react";
import { Accordion, Panel } from "@Components/Shared/Accordion/Accordion";
import Clock, { ReactComponent as LockIcon } from "@Assets/Icons/clock.svg";
import Lock from "@Assets/Icons/lock.svg";
import ContentItem from "./ContentItem";
import useFetch from "../../../Context/useFetch";
import { Skeleton } from "antd";

const SeasonsItem = ({
  openPanels,
  season,
  index,
  activeSeasons,
  constFunction,
  getContentName,
  activeContent,
  setquizUuid,
  changeContentID,
  setIsContentPass,
  setSeasonsQuizeActive,
  idd,
  ...rest
}) => {
  const [contentList, setcontentList] = useState([]);
  const getCourseSeasons = useFetch({
    url: `SeasonService/${parseInt(season.uuid)}/sidebar`,
    method: "GET",
    trigger: false,
    setter: setcontentList,
  });
  useEffect(() => {
    if (openPanels.includes(season.uuid)) {
      getCourseSeasons.reFetch();
    }
  }, [, activeContent, openPanels]);
  const FetchContent = () => {
    if (contentList.length === 0 && !season.lockedOn) {
      getCourseSeasons.reFetch();
    }
  };
  useEffect(() => {
    if (contentList.length === 0 && !season.lockedOn) {
      getCourseSeasons.reFetch();
    }
  }, []);

  return (
    <>
      {contentList.length !== 0 ? (
        contentList.map((content, index) => (
          <ContentItem
            setSeasonsQuizeActive={setSeasonsQuizeActive}
            changeContentID={changeContentID}
            setquizUuid={setquizUuid}
            activeContent={activeContent}
            key={content.id}
            index={index}
            content={content}
            getContentName={getContentName}
            setIsContentPass={setIsContentPass}
            idd={idd}
          />
        ))
      ) : (
        <>
          <Skeleton.Button block={true} active size="large" />
          <br />
          <br />
          <Skeleton.Button block={true} active size="large" />
         
        </>
      )}
    </>
  );
};

export default SeasonsItem;
