import React, { useState } from "react";
import { Collapse } from "antd";
import { ReactComponent as Arrow } from "@Assets/Icons/arrow-down.svg";

const genExtra = () => (
  <div className="arrow__color">
    <Arrow />
  </div>
);
const Accordion = ({ children, header, ...rest }) => {
  const { Panel } = Collapse;

  return (
    <div className="Accordion">
      <Collapse expandIcon={() => <div className="" />}>
        <Panel header={header} key="1" {...rest} extra={genExtra()}>
          {children}
        </Panel>
      </Collapse>
    </div>
  );
};

export default Accordion;
