import React, { useEffect } from "react";
import IconBtn from "@Components/Shared/Buttons/IconBtn";
import classNames from "classnames";
import Clock, { ReactComponent as LockIcon } from "@Assets/Icons/clock.svg";
import Lock from "@Assets/Icons/lock.svg";
import { Skeleton } from "antd";

const ContentItem = ({
  content,
  index,
  activeContent,
  setquizUuid,
  getContentName,
  changeContentID,
  setIsContentPass,
  setSeasonsQuizeActive,
  idd,
}) => {
  useEffect(() => {
    if (activeContent === content.id) {
      setquizUuid(content.quiz_id);
      setIsContentPass(content.is_content_passed);
    }
  }, [activeContent]);
  const handleClick = () => {
    setSeasonsQuizeActive(false);
    if (!content.lockedOn || idd === content.id) {
      changeContentID(content.id, content.title);
    }
  };
  return content ? (
    <div>
      <div
        className={
          content.lockedOn
            ? activeContent === content.id
              ? "flex justify-between items-center cursor-pointer px-8"
              : idd === content.id
              ? "flex justify-between items-center cursor-pointer px-8"
              : "flex justify-between items-center cursor-not-allowed px-8"
            : "flex justify-between items-center cursor-pointer px-8"
        }
        onClick={handleClick}
      >
        <div className="flex items-center Sarfasl__Accordiontxtbox">
          {content.is_content_passed ? (
            <div className={"Sarfasl__Accordiondone"}>
              <i className="fas fa-check"></i>
            </div>
          ) : (
            <div className={"Sarfasl__Accordionnumber"}>
              <p>{index + 1}</p>{" "}
            </div>
          )}
          <p
            className={`${
              activeContent === content.id ? "text-primary" : null
            }`}
          >
            {content.title}
          </p>
        </div>
        <div
          className="flex items-start Sarfasl__AccordionTimeBox"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>{content.duration_time}</p>
          &nbsp;
          <img src={Clock} alt={Clock} className="Sarfasl__Accordionclock" />
          &nbsp;&nbsp;
          <IconBtn
            classes={classNames(
              "Sarfasl__btn",
              content.lockedOn ? " cursor-not-allowed " : "cursor-pointer",
              {
                lock: !content.lockedOn,
              }
            )}
            icon={
              <>
                <img
                  src={Lock}
                  alt={Lock}
                  style={{
                    maxHeight: "20px",
                    maxWidth: "20px",
                  }}
                />
                <i />
              </>
            }
          />
        </div>
      </div>
    </div>
  ) : (
    <Skeleton />
  );
};

export default ContentItem;
