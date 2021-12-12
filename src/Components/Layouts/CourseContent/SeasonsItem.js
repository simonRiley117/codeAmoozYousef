import React, { useEffect, useState } from "react";
import { Accordion, Panel } from "@Components/Shared/Accordion/Accordion";
import Clock, { ReactComponent as LockIcon } from "@Assets/Icons/clock.svg";
import Lock from "@Assets/Icons/lock.svg";
import IconBtn from "@Components/Shared/Buttons/IconBtn";
import classNames from "classnames";
import ContentItem from "./ContentItem";
import { useLocation } from "react-router";
import useFetch from "../../../Context/useFetch";

const SeasonsItem = ({ season, index }) => {
   const [courseList, setstate] = useState();

  return (
    <Panel
      collapsible={season.lockedOn ? "disabled" : "header"}
      header={
        <SeasonHeader
          title={season.title}
          done={season.is_season_passed}
          time={season.total_time_for_each_season}
          lock={season.lockedOn}
          id={season.uuid}
          index={index}
        />
      }
      key={season.uuid}
    >
        hi
        {/* {ContentItem.map(<ContentItem />)} */}
    </Panel>
  );
};
const SeasonHeader = ({ title, done, time, lock, id, index }) => {
  return (
    <div className="Sarfasl__AccordionCenter">
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
        <img src={Clock} alt={Clock} />
        &nbsp;&nbsp;
        {/*<img src={Lock} alt={Lock}/>*/}
        <IconBtn
          classes={classNames("Sarfasl__btn", {
            lock: !lock,
          })}
          icon={
            <>
              <img src={Lock} alt={Lock} />
              <i />
            </>
          }
        />
      </div>
    </div>
  );
};
export default SeasonsItem;
