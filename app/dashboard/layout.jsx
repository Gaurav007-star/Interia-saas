import React from "react";
import Header from "../_components/Header";

const DashboardLayout = ({ children }) => {
  return (
    <div style={{padding:"0 10vw"}}>
      <Header />
      {children}
    </div>
  );
};

export default DashboardLayout