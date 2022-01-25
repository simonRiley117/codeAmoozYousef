import React, { useEffect } from "react";
import DashboardAppbar from "../Menu/DashboardAppbar";
import SidebarMenu from "../Menu/SidebarMenu";
import { Layout } from "antd";
import BreadCrumb from "../BreadCrump/BreadCrump";
import { Outlet } from "react-router-dom";
const { Content } = Layout;

const DashboardLayout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout className="layout__dashboard">
      <header className="layout__header">
        <DashboardAppbar />
      </header>
      <section className="layout__wrapper">
        <aside className="layout__sidebar">
          <SidebarMenu />
        </aside>
        <Content className="layout__content">
          <BreadCrumb classes="breadcrumbs__dashboard" />
          <Outlet />
        </Content>
      </section>
    </Layout>
  );
};
export default DashboardLayout;
