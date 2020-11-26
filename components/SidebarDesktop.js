import React, { useContext } from "react";
import { TransitionContext } from "../context/TransitionContext";
import Link from "next/link";

const SidebarDesktop = ( { path } ) => {
  const { darkOn } = useContext(TransitionContext);

  
  return (
    <>
      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col flex-1 h-0 ">
            <div className={`flex items-center flex-shrink-0 h-16 px-4 ${darkOn ? "bg-gray-800 " : "bg-white border-r border-b border-gray-200"} `}>
              <img
                
                className="w-auto h-8"
                src="https://firebasestorage.googleapis.com/v0/b/vital-solution-store.appspot.com/o/logo-512x512.png?alt=media&token=e96eace5-d948-461d-96e6-eb5f9bde99b6"
                alt="Workflow"
              />
              <h1 className={`ml-3 text-xl font-medium ${darkOn ? "text-white" : "text-black"}`}>VITAL SOLUTION</h1>
            </div>
            <div className="flex flex-col flex-1 overflow-y-auto">
              <nav className={`flex-1 px-2 py-4 space-y-1 ${darkOn ? "bg-gray-800" : "bg-white border-r border-gray-200"} `} >
              <div
                  className={`${(path == "panel" && darkOn) && "bg-gray-900 text-white" || (path == "panel" && !darkOn) && "bg-gray-100 text-gray-900" || (path !== "panel" && darkOn) && "bg-gray-800 text-white" || (path !== "panel" && !darkOn) && "bg-white text-gray-900"}} group flex items-center px-2 py-2 text-sm font-medium rounded-md `}
                >
                    <svg
                      className={`w-6 h-6 mr-3 ${darkOn ? "text-gray-400" : "text-gray-500"}`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  <Link href="/dashboard/panel">
                    <a className={`${darkOn ? "text-gray-100" : "text-gray-900"}`}>Panel</a>
                  </Link> 
                </div>
                <div
                  className={`${(path == "clientes" && darkOn) && "bg-gray-900 text-white" || (path == "clientes" && !darkOn) && "bg-gray-100 text-gray-900" || (path !== "clientes" && darkOn) && "bg-gray-800 text-white" || (path !== "clientes" && !darkOn) && "bg-white text-gray-900"}} group flex items-center px-2 py-2 text-sm font-medium rounded-md `}
                >
                    <svg
                      className={`w-6 h-6 mr-3 ${darkOn ? "text-gray-400" : "text-gray-500"}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  <Link href="/dashboard/clientes">
                  <a className={`${darkOn ? "text-gray-100" : "text-gray-900"}`}>Clientes</a>
                  </Link> 
                </div>

                <div
                  className={`${(path == "productos" && darkOn) && "bg-gray-900 text-white" || (path == "productos" && !darkOn) && "bg-gray-100 text-gray-900" || (path !== "productos" && darkOn) && "bg-gray-800 text-white" || (path !== "productos" && !darkOn) && "bg-white text-gray-900"}} group flex items-center px-2 py-2 text-sm font-medium rounded-md `}
                >
                  {/* Heroicon name: folder */}
                  <svg
                    className={`w-6 h-6 mr-3 ${darkOn ? "text-gray-400" : "text-gray-500"}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                  </svg>
                  <Link href="/dashboard/productos">
                  <a className={`${darkOn ? "text-gray-100" : "text-gray-900"}`}>Productos</a>
                  </Link> 
                </div>

                <div
                  className={`${(path == "pedidos" && darkOn) && "bg-gray-900 text-white" || (path == "pedidos" && !darkOn) && "bg-gray-100 text-gray-900" || (path !== "pedidos" && darkOn) && "bg-gray-800 text-white" || (path !== "pedidos" && !darkOn) && "bg-white text-gray-900"}} group flex items-center px-2 py-2 text-sm font-medium rounded-md `}
                >
                  {/* Heroicon name: calendar */}
                  <svg
                    className={`w-6 h-6 mr-3 ${darkOn ? "text-gray-400" : "text-gray-500"}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                  <Link href="/dashboard/pedidos">
                  <a className={`${darkOn ? "text-gray-100" : "text-gray-900"}`}>Pedidos</a>
                  </Link> 
                </div>

                <div
                  className={`${(path == "reportes" && darkOn) && "bg-gray-900 text-white" || (path == "reportes" && !darkOn) && "bg-gray-100 text-gray-900" || (path !== "reportes" && darkOn) && "bg-gray-800 text-white" || (path !== "reportes" && !darkOn) && "bg-white text-gray-900"}} group flex items-center px-2 py-2 text-sm font-medium rounded-md `}
                >
                  {/* Heroicon name: chart-bar */}
                  <svg
                    className={`w-6 h-6 mr-3 ${darkOn ? "text-gray-400" : "text-gray-500"}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  <Link href="/dashboard/reportes">
                  <a className={`${darkOn ? "text-gray-100" : "text-gray-900"}`}>Reportes</a>
                  </Link> 
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarDesktop;
