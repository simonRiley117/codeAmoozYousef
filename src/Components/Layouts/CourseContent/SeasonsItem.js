import React, { useEffect, useState } from "react";
import { Accordion, Panel } from "@Components/Shared/Accordion/Accordion";
import Clock, { ReactComponent as LockIcon } from "@Assets/Icons/clock.svg";
import Lock from "@Assets/Icons/lock.svg";
import IconBtn from "@Components/Shared/Buttons/IconBtn";
import classNames from "classnames";
import ContentItem from "./ContentItem";
import { useLocation } from "react-router";
import useFetch from "../../../Context/useFetch";
import { CollapsePanelProps } from "antd";
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
  ...props
}) => {
  const [contentList, setcontentList] = useState([]);
  const getCourseSeasons = useFetch({
    url: `SeasonService/${season.uuid}/sidebar`,
    method: "GET",
    trigger: activeSeasons === season.uuid,
    setter: setcontentList,
  });
  useEffect(() => {
    console.log("openPanel",openPanels);
    if (openPanels.includes(season.uuid)) {
      getCourseSeasons.reFetch();
    }
  }, [activeContent,openPanels]);
  const FetchContent = () => {
    if (contentList.length === 0 && !season.lockedOn) {
      getCourseSeasons.reFetch();
    }
  };
  return (
    <Panel
      collapsible={season.lockedOn ? "disabled" : "header"}
      extra={
        <SeasonHeader
          title={season.title}
          done={season.is_season_passed}
          time={season.total_time_for_each_season}
          lock={season.lockedOn}
          id={season.uuid}
          index={index}
          FetchContent={FetchContent}
          openPanels={openPanels}
        />
      }
      showArrow={false}
      key={season.uuid}
      {...props}
    >
      {contentList?.map((content, index) => (
        <ContentItem
          changeContentID={changeContentID}
          setquizUuid={setquizUuid}
          activeContent={activeContent}
          key={content.id}
          index={index}
          content={content}
          getContentName={getContentName}
          setIsContentPass={setIsContentPass}
        />
      ))}
    </Panel>
  );
};
const SeasonHeader = ({
  openPanels,
  title,
  done,
  time,
  lock,
  id,
  index,
  FetchContent,
}) => {
  return (
    <div onClick={FetchContent} className="Sarfasl__AccordionCenter">
      <div
        className="Sarfasl__AccordionCenter"
        style={{ justifyContent: "flex-start" }}
      >
        <div className="Sarfasl__Accordiondone">
          {done ? (
            <i className="fas fa-check"></i>
          ) : (
            <div className="Sarfasl__Accordionnumber">{index + 1} </div>
          )}
        </div>
        &nbsp;
        <div>{title}</div>
      </div>
      <div className="Sarfasl__AccordionCenter">
        <p>{time}</p>
        &nbsp;
        <img src={Clock} alt={Clock} className="time__icon" />
        &nbsp;&nbsp;
        {/*<img src={Lock} alt={Lock}/>*/}
        <IconBtn
          classes={classNames("Sarfasl__btn lock__icon", {
            lock: !lock,
          })}
          icon={
            <>
              <img src={Lock} alt={Lock} />
              <i />
            </>
          }
        />
       {!lock && <div
          className={classNames("accordion__arrow custom__accordion--arrow", {
            active: openPanels.includes(id),
          })}
        >
          <Arrow />
        </div>}
      </div>
    </div>
  );
};
export default SeasonsItem;
