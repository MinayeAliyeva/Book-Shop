import React from "react";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";
import { Outlet } from "react-router-dom";

const MainRoute = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainRoute;
