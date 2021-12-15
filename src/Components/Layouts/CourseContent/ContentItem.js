import React, { useEffect } from "react";
import IconBtn from "@Components/Shared/Buttons/IconBtn";
import classNames from "classnames";
import Clock, { ReactComponent as LockIcon } from "@Assets/Icons/clock.svg";
import Lock from "@Assets/Icons/lock.svg";
const ContentItem = ({
  content,
  index,
  activeContent,
  setquizUuid,
  getContentName,
  changeContentID,
  setIsContentPass,
}) => {
  useEffect(() => {
    if (activeContent === content.id) {
      setquizUuid(content.quiz_id);
      setIsContentPass(content.is_content_passed);
      
    }

  }, [activeContent]);
  const handleClick= ()=>{
    if(!content.lockedOn){
      changeContentID(content.id, content.title)
    }
  }
  return (
    <div>
      <div
        className="flex justify-between items-center cursor-pointer px-8"
        onClick={ handleClick}
      >
        <div className="flex items-center Sarfasl__Accordiontxtbox">
          {content.is_content_passed ? (
            <div className={"Sarfasl__Accordiondone"}>
              <i className="fas fa-check"></i>
            </div>
          ) : (
            <div className={"Sarfasl__Accordionnumber"}>{index + 1} </div>
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
            classes={classNames("Sarfasl__btn", {
              lock: !content.lockedOn,
            })}
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
  );
};

export default ContentItem;
