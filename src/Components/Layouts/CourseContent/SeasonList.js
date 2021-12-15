import React, { useEffect, useState } from "react";
import { Accordion } from "@Components/Shared/Accordion/Accordion";
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
  setIsContentPass
}) => {
  let [openPanels, setOpenPanels] = React.useState([activeSeasons]);
  useEffect(() => {
    if(!openPanels.includes(activeSeasons)){
      openPanels.push(activeSeasons)
    }
  }, [activeSeasons])
  return (
    <div className="Sarfasl__Accordionbox">
      <Accordion
        defaultActiveKey={activeSeasons}
        activeKey={openPanels}
        onChange={setOpenPanels}
        destroyInactivePanel={true}
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
            setIsContentPass={setIsContentPass}
          />
        ))}
      </Accordion>
    </div>
  );
};

export default SeasonList;
