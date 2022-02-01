import React, { useEffect, useState } from "react";
import { Accordion, Panel } from "@Components/Shared/Accordion/Accordion";
import Clock, { ReactComponent as LockIcon } from "@Assets/Icons/clock.svg";
import Lock from "@Assets/Icons/lock.svg";
import ContentItem from "./ContentItem";
import useFetch from "../../../Context/useFetch";
import { ReactComponent as Arrow } from "@Assets/Icons/arrow-down.svg";

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
  ...rest
}) => {
  const [contentList, setcontentList] = useState([]);
  console.log("contentList", contentList);
  const getCourseSeasons = useFetch({
    url: `SeasonService/${season.uuid}/sidebar`,
    method: "GET",
    trigger: false,
    setter: setcontentList,
  });
  useEffect(() => {
    console.log("openPanel", openPanels);
    if (openPanels.includes(season.uuid)) {
      getCourseSeasons.reFetch();
    }
  }, [, activeContent, openPanels]);
  const FetchContent = () => {
    if (contentList.length === 0 && !season.lockedOn) {
      getCourseSeasons.reFetch();
    }
  };
  return (
    <>
     
       { contentList.map((content, index) => (
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
          />
        ))
       }
    </>
  );
};

export default SeasonsItem;
