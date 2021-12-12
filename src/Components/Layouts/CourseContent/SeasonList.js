import React, { useEffect, useState } from "react";
import { Accordion, Panel } from "@Components/Shared/Accordion/Accordion";
import Clock, { ReactComponent as LockIcon } from "@Assets/Icons/clock.svg";
import Lock from "@Assets/Icons/lock.svg";
import IconBtn from "@Components/Shared/Buttons/IconBtn";
import classNames from "classnames";
import SeasonsItem from "./SeasonsItem";
import { useLocation } from "react-router";
import useFetch from "../../../Context/useFetch";

const SeasonList = ({
  activeContent,
  sidebarList,
  activeSeasons,
  setquizUuid,
  getContentName,
  changeContentID,
}) => {
  let [openPanels, setOpenPanels] = React.useState([activeSeasons]);
  return (
    <div className="Sarfasl__Accordionbox">
      <Accordion
        defaultActiveKey={activeSeasons}
        activeKey={openPanels}
        onChange={setOpenPanels}
      >
        {sidebarList.seasons.map((season, index) => (
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
          />
        ))}
      </Accordion>
    </div>
  );
};

export default SeasonList;
