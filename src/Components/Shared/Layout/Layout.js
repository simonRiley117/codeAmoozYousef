import React from "react";
import Footer from "../Footer/Footer";
import Appbar from "../Menu/Appbar";

const Layout = ({ children }) => {
  return (
    <>
      <Appbar />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};
export default Layout;
