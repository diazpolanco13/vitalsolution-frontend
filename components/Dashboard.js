import React, { useState } from "react";
import { TransitionContext } from "../context/TransitionContext";
import SearchBar from "./SearchBar";
import SidebarDesktop from "./SidebarDesktop";
import SidebarMovil from "./SidebarMovil";

const Dashboard = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isOn, setIsOn] = useState(false);

  return (
    <>
      <div className="h-screen flex overflow-hidden bg-gray-100">
        <TransitionContext.Provider
          value={{
            showSidebar,
            setShowSidebar,
            isOn,
            setIsOn,
          }}
        >
          {/*  El componente <SidebarMovil/> se ocultara cuando la pantalla sea menor  a  768px (hidden md:flex)*/}
          <SidebarMovil />
          {/*  El componente <SidebarDesktop/> se mostrara cuando la pantalla sea mayor  a  768px (hidden md:flex)*/}
          <SidebarDesktop />

          <div className="flex flex-col w-0 flex-1 overflow-hidden">
            <SearchBar />
            {children}
          </div>
        </TransitionContext.Provider>
      </div>
    </>
  );
};

export default Dashboard;
