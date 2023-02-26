import React from "react";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import StoreMain from "../components/main/StoreMain";

const Store = () => {
  return (
    <>
      <Navbar />
      <div>
        <Sidebar />
        <StoreMain />
      </div>
    </>
  );
};

export default Store;
