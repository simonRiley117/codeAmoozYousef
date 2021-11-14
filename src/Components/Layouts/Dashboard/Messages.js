import messagePic from "@Assets/Pic/nomessage.png";
import avatar from "@Assets/Pic/avatar.png";
import { Card } from "antd";
import React, { useState } from "react";

const Messages = () => {
  const [isMessage, setIsMessage] = useState(false);

  const messages = [
    {
      avatar: avatar,
      userName: "علیرضا میرزایی فرد",
      date: "17/5/1400",
      time: "03:17",
      preview: "از طراحان لورم ایپسوم متن ساختگی با ...",
      messagesNum: 1,
    },
    {
      avatar: avatar,
      userName: "علیرضا میرزایی فرد",
      date: "17/5/1400",
      time: "03:17",
      preview: "از طراحان لورم ایپسوم متن ساختگی با ...",
      messagesNum: 1,
    },
    {
      avatar: avatar,
      userName: "علیرضا میرزایی فرد",
      date: "17/5/1400",
      time: "03:17",
      preview: "از طراحان لورم ایپسوم متن ساختگی با ...",
      messagesNum: 1,
    },
  ];

  return (
    <div>
      {isMessage ? (
        <div className="dashboard-courses dash-messages">
          <Card
            title="پیام‌های شما:"
            bordered={false}
            headStyle={{ border: "none", fontSize: "1.4rem" }}
            bodyStyle={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
            style={{
              borderRadius: "1.5rem",
              height: "26.7rem",
              boxShadow: "0px 2px 8px 2px rgba(0, 0, 0, 0.15)",
            }}
          >
            <img src={messagePic} style={{ paddingBottom: "2rem" }} />
            <p style={{ paddingBottom: "2rem" }}>در حال حاضر پیامی ندارید</p>
          </Card>
        </div>
      ) : (
        <div>
          <Card
            title="پیام‌های شما:"
            bordered={false}
            headStyle={{ border: "none", fontSize: "1.4rem" }}
            bodyStyle={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
            style={{
              borderRadius: "1.5rem",
              height: "26.7rem",
              boxShadow: "0px 2px 8px 2px rgba(0, 0, 0, 0.15)",
            }}
          >
            <div className="messages-card w-full sm:w-auto">
              {messages.map((message) => {
                return (
                  <div className="message-card max-w-full">
                    <img
                      src={message.avatar}
                      style={{ padding: "0.4rem 1rem 0.4rem 0" }}
                    />
                    <div className="message-card-content grid grid-cols-4 grid-rows-2">
                      <span className="message-card-content-name col-span-2">
                        {message.userName}
                      </span>
                      <span className="message-card-content-num">
                        {message.date}
                      </span>
                      <span className="message-card-content-num">
                        {message.time}
                      </span>
                      <p className="col-span-3 message-card-content-preview">
                        {message.preview}
                      </p>
                      <div className="message-card-content-total">
                        {message.messagesNum}
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="flex justify-end">
                <a className="text-primary self-end">بیشتر...</a>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Messages;
