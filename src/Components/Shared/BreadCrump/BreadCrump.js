import React from "react";
import { Breadcrumb } from "antd";

function BreadCrump(props) {
  return (
    <div className="BreadCrump">
      <Breadcrumb separator=">">
        {props.item.map((index) => (
          <Breadcrumb.Item>
            {" "}
            <a href={`/${index.rout}`}>{index.name}</a>
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </div>
  );
}

export default BreadCrump;
