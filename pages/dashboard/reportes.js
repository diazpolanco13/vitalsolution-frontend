import React from "react";
import SearchBar from "../../components/SearchBar";
import SidebarDesktop from "../../components/SidebarDesktop";
import SidebarMovil from "../../components/SidebarMovil";
import ContendDashboard from "../../components/ContendDashboard";

import { TransitionContext } from "../../context/TransitionContext";
import { useState } from "react";

const reportes = () => {
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
            <main
              className="flex-1 relative overflow-y-auto focus:outline-none"
              tabIndex="0"
            >
              <div className="py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                  <h1 className="text-2xl font-semibold text-gray-900">
                    Reportes
                  </h1>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                  {/* Replace with your content */}
                  <div className="py-4">
                    <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
                  </div>
                  {/* /End replace */}
                </div>
              </div>
            </main>
          </div>
        </TransitionContext.Provider>
      </div>
    </>
  );
};

export default reportes;
