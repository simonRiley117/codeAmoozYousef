import React from "react";
import { Link } from "react-router-dom";

const UserBox = ({ src, title, date, time, des,id }) => {
  return (
    <Link to={`/dashboard/messages/${id}`}>
      <div className="UserBox d-flex-align cursor-pointer">
        <div className="UserBox__avatar">
          <img src={src} alt={title} />
        </div>
        <div className="UserBox__info">
          <div className=" d-flex-space">
            <h6 className="UserBox__info--title">{title}</h6>
            <div className="UserBox__info--row d-flex">
              <p>{date}</p>
              <p className="mr-8">{time}</p>
            </div>
          </div>
          <p className="UserBox__info--des">{des}</p>
        </div>
      </div>
    </Link>
  );
};

export default UserBox;
