import React, { useEffect, useState } from "react";
import { Accordion, Panel } from "@Components/Shared/Accordion/Accordion";
import SeasonsItem from "./SeasonsItem";
import { useLocation } from "react-router";
import useFetch from "../../../Context/useFetch";
import Clock, { ReactComponent as LockIcon } from "@Assets/Icons/clock.svg";
import { ReactComponent as QuizeIcon } from "@Assets/Icons/quizeicon.svg";
import Lock from "@Assets/Icons/lock.svg";
import { useUserData } from "@App/Context/userContext";
import { tourguid } from "@App/Recoil/StateRecoil";
import { useRecoilState } from "recoil";

const SeasonList = ({
  activeContent,
  sidebarList,
  activeSeasons,
  setquizUuid,
  getContentName,
  changeContentID,
  setIsContentPass,
  SeasonsQuizeid,
  setSeasonsQuizeid,
  setSeasonsQuizeActive,
}) => {
  const [openPanels, setOpenPanels] = useState([activeSeasons]);
  useEffect(() => {
    if (!openPanels.includes(activeSeasons)) {
      setOpenPanels((before) => [...before, activeSeasons]);
    }
  }, [, activeSeasons, activeContent]);
  const { userData } = useUserData();
  const handleSeosonQuize = (id) =>{
    setSeasonsQuizeActive(true);
    setSeasonsQuizeid(id)
  }
  const [showguid, setShowguid] = useRecoilState(tourguid);
  console.log("openPanels", openPanels);
  return (
    <div className="Sarfasl__Accordionbox">
      <Accordion
        activeKey={openPanels}
        onChange={setOpenPanels}
        destroyInactivePanel={true}
      >
        {sidebarList.seasons.map((season, index) => (
          <Panel
            collapsible={season.lockedOn ? "disabled" : undefined}
            showArrow={!season.lockedOn}
            header={
              <SeasonTitle
                title={season.title}
                done={season.is_season_passed}
                index={index}
              />
            }
            extra={
              <SeasonHeader
                time={season.total_time_for_each_season}
                lock={season.lockedOn}
                id={season.uuid}
                openPanels={openPanels}
                userData={userData}
                showguid={showguid}
              />
            }
            key={season.uuid}
          >
            <SeasonsItem
              setquizUuid={setquizUuid}
              changeContentID={changeContentID}
              activeContent={activeContent}
              openPanels={openPanels}
              activeSeasons={activeSeasons}
              key={season.uuid}
              season={season}
              index={index}
              getContentName={getContentName}
              setIsContentPass={setIsContentPass}
              setSeasonsQuizeActive={setSeasonsQuizeActive}
            />
            {season.season_quiz_id && (
              <div className="px-8 sidebar-quize cursor-pointer" onClick={()=>handleSeosonQuize(season.season_quiz_id)}>
                <QuizeIcon />
                <p>آزمون فصل</p>
              </div>
            )}
          </Panel>
        ))}
      </Accordion>
    </div>
  );
};

export default SeasonList;
const SeasonTitle = ({ title, done, index }) => {
  return (
    <span className="flex items-center gap-x-4">
      {done ? (
        <span className="Sarfasl__Accordiondone">
          <i className="fas fa-check"></i>
        </span>
      ) : (
        <div className="Sarfasl__Accordionnumber">
          <p>{index + 1}</p>
        </div>
      )}
      <span>{title}</span>
    </span>
  );
};
const SeasonHeader = ({ time, lock, FetchContent, userData, showguid }) => {
  console.log(`object`, showguid);
  return (
    <div className="Sarfasl__AccordionItem">
      {showguid && <img src={Lock} alt={Lock} data-tut="reactour__lock" />}
      {lock && (
        <img src={Lock} alt={Lock} className="Sarfasl__AccordionItem__lock" />
      )}
      <div className="Sarfasl__AccordionItem--time">
        <time>{time}</time>
        <img src={Clock} alt={Clock} />
      </div>
    </div>
  );
};
