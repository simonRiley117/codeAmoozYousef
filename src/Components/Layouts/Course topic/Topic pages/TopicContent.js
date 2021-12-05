import { Accordion, Panel } from "@Components/Shared/Accordion/Accordion";
import React from "react";
import clock from "@Assets/Icons/clock.svg";

const Topiccontent = (props) => {
  return (
    <div className="w-full">
      {props.topics.map((topic) => {
        return (
          <Accordion half>
            <Panel header={<span className="text-3xl">{topic.title}</span>}>
              {topic.videos.map((video) => {
                return (
                  <div className="pb-4 px-11 flex items-center justify-center">
                    <div className="flex items-center justify-center">
                      <div
                        style={{
                          color: "#F68521",
                          padding: "0.7rem",
                          border: "#F68521 solid 2px",
                          borderRadius: "50%",
                          fontSize: "1.6rem",
                          marginLeft: "0.8rem",
                        }}
                      >
                        <span>{video.num}</span>
                      </div>
                      <span
                        style={{
                          fontSize: "1.6rem",
                          color: "rgba(18, 18, 18, 0.8)",
                        }}
                      >
                        {video.vidTitle}
                      </span>
                    </div>
                    <div className="mr-auto text-3xl flex items-center justify-center">
                      <span>{video.vidTime}</span>
                      <img
                        src={clock}
                        className="mr-3"
                        style={{ width: "24px" }}
                      />
                    </div>
                  </div>
                );
              })}
            </Panel>
          </Accordion>
        );
      })}
    </div>
  );
};

export default Topiccontent;
