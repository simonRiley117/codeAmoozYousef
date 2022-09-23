import {  ConfigProvider } from "antd";
import React from "react";
import Router from "./Router/Router";
import "./App.less";
import "./Styles/main.scss";
import faLocal from "antd/lib/locale/fa_IR";


const App = () => {
  return (
    <>
      <ConfigProvider direction="rtl" locale={faLocal}>
        <Router />
      </ConfigProvider>
    </>
  );
};
export default App;
