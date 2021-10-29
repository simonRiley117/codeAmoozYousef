import React from "react";
import { Tabs } from "antd";

const { TabPane } = Tabs;

function TabBox(props) {
  function callback(key) {
    console.log(key);
  }
  return (
    <div className={`TabBox w-4/5 ${props.className}`}>
      <Tabs
        defaultActiveKey="1"
        onChange={callback}
        className={props.className}
        key={props.key}
      >
        {/* <TabPane tab="Tab 1" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>    */}
        {props.children}
      </Tabs>
    </div>
  );
}

export default TabBox;
