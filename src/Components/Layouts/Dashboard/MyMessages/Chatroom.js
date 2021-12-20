import React, { useState } from "react";
import "emoji-mart/css/emoji-mart.css";
import moment from "moment";
import ChatroomForm from "./ChatroomForm";

const Chatroom = ({ messageInfo }) => {
  return (
    <div className="Chatroom">
      <div className="Chatroom__container AskAndAnswer relative">
        {messageInfo ? (
          <div className="AskAndAnswer__content">
            {messageInfo.messages.length === 0 ? (
              <div className="items-center absolute AskAndAnswer__emptyBox ">
                <p className=" ">
                  سوالاتتان را در این بخش با استاد این دوره مطرح کنید.
                </p>
              </div>
            ) : (
              messageInfo.messages.map((message, index) =>
                !message.is_teacher_send ? (
                  <div className="AskAndAnswer__contentBox">
                    <div>
                      <div className="AskAndAnswer__askBox flex-col items-start">
                      <span>شما</span>

                        <p>{message.question_message}</p>
                      </div>
                      <div className="flex justify-end items-center w-4/5 AskAndAnswer__TimeBox-ask AskAndAnswer__TimeBox">
                        <p>{moment(message.date).format("YYYY/MM/DD")}</p>
                        <p>{message.time}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="AskAndAnswer__answareBox ">
                    <div className="AskAndAnswer__answare flex-col items-start">
                    <span>پریسا قربانی</span>

                      <p>{message.question_message}</p>
                    </div>
                    <div className="flex justify-end items-center w-4/5 AskAndAnswer__TimeBox-answer AskAndAnswer__TimeBox">
                      <p>{message.time}</p>
                      <p>{moment(message.date).format("YYYY/MM/DD")}</p>
                    </div>
                  </div>
                )
              )
            )}
          </div>
        ) : null}
        <ChatroomForm />
      </div>
    </div>
  );
};

export default Chatroom;
