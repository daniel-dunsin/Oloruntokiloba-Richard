import React, { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import { LayoutContainer } from "../styles/components/Layout.styled";
import Navbar from "./Navbar";
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <LayoutContainer>
      <div>
        <Navbar />
        {children}
      </div>
    </LayoutContainer>
  );
};

export default Layout;
