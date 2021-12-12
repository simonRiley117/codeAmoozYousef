import React, { useEffect, useState } from "react";
import { Accordion, Panel } from "@Components/Shared/Accordion/Accordion";
import Clock, { ReactComponent as LockIcon } from "@Assets/Icons/clock.svg";
import Lock from "@Assets/Icons/lock.svg";
import IconBtn from "@Components/Shared/Buttons/IconBtn";
import classNames from "classnames";
import SeasonsItem from "./SeasonsItem";
import { useLocation } from "react-router";
import useFetch from "../../../Context/useFetch";

const SeasonList = ({ sidebarList, activeSeasons }) => {
  const [seasonID, setSeasonID] = useState(activeSeasons);
  
  const getSeasonId = (id) => {
    setSeasonID(id);
  };

  return (
    <div className="Sarfasl__Accordionbox">
      <Accordion defaultActiveKey={activeSeasons}>
         {sidebarList.seasons.map((season, index) => (
           <SeasonsItem key={season.uuid} season={season} index={index}/>
         ))}
      </Accordion>
    </div>
  );
};

export default SeasonList;
