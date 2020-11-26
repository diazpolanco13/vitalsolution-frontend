import React, { useEffect, useState } from "react";
import { TransitionContext } from "../context/TransitionContext";
import SearchBar from "./SearchBar";
import SidebarDesktop from "./SidebarDesktop";
import SidebarMovil from "./SidebarMovil";

const Dashboard = ({ children, path }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isOn, setIsOn] = useState(false);
  const [darkOn, setDarkOn] = useState(
    JSON.parse(localStorage.getItem('DarkMode'))
  );


  return (
    <>
      <TransitionContext.Provider
        value={{
          showSidebar,
          setShowSidebar,
          isOn,
          setIsOn,
          darkOn,
          setDarkOn,
        }}
      >
        <div className="dark">
          <div className="flex h-screen overflow-hidden bg-white dark:bg-gray-100">
            {/*  El componente <SidebarMovil/> se ocultara cuando la pantalla sea menor  a  768px (hidden md:flex)*/}
            <SidebarMovil />
            {/*  El componente <SidebarDesktop/> se mostrara cuando la pantalla sea mayor  a  768px (hidden md:flex)*/}
            <SidebarDesktop path={path} />

            <div className="flex flex-col flex-1 w-0 overflow-hidden">
              <SearchBar />
              {children}
            </div>
          </div>
        </div>
      </TransitionContext.Provider>
    </>
  );
};

export default Dashboard;
