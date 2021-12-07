import React from "react";
import { Link } from "react-router-dom";

function Card() {
  return (
    <div className="card-sm">
      <div>
        <div className="card-sm-img">
          <div className="card-sm-img-title">
            {/* <img src={card.cover} /> */}
          </div>
        </div>
        <div className="card-sm-content">
          <h5 className="cursor-pointer	">
            {/* <Link
              to={{
                pathname: "/dash/mysendes",
                state: { name: " دوره آنلاین برنامه نویسی HTML", id: "1" },
              }}
            > */}
              دوره آنلاین برنامه نویسی HTML
            {/* </Link> */}
          </h5>
          {/* <div className="card-sm-img-pic">
            <img src={card.teacher_avatar} />
            <h4>
              {card.teacher_first_name} {card.teacher_last_name}
            </h4>
          </div> */}

          {/* <div className="d-flex-space card-sm-footer">
            <div className="card-sm-footer-level">{card.level}</div>
            <Statistic
              value={card.get_price_without_degree_with_some_extra_info}
              valueStyle={{ color: "#329c00", marginTop: "-1.5rem" }}
            />
          </div> */}
          {/* <div className="card-sm-content-rating">
            <Rate
              disabled
              allowClear={false}
              defaultValue={card.mean_of_participant_points.grade}
              style={{
                color: "#F68521",
                // direction: "ltr",
                paddingBottom: "0.5rem",
                marginRight: "6vmax",
              }}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Card;
