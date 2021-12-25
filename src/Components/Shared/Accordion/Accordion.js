import React from "react";
import { Collapse } from "antd";
import { ReactComponent as Arrow } from "@Assets/Icons/arrow-down.svg";
// import {ReactComponent as Clock} from '@Assets/Icons/clock.svg';
// import {ReactComponent as Lock} from '@Assets/Icons/lock.svg';
import classNames from "classnames";

const { Panel } = Collapse;

const ArrowIcon = ({ active }) => (
  <div
    className={classNames("accordion__arrow", {
      active: active,
    })}
  >
    <Arrow />
  </div>
);

const Accordion = ({ children, half, ...rest }) => {
  return (
    <Collapse
      {...rest}
      className={classNames("accordion", {
        accordion__circle: half,
      })}
      expandIcon={({ isActive }) => <ArrowIcon active={isActive} />}
      ghost
      expandIconPosition="left"
    >
      {children}
    </Collapse>
  );
};

export { Accordion, Panel };
