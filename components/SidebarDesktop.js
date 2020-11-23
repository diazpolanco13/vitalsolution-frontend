import React, { useState } from "react";
import { useRouter } from 'next/router';
import Link from "next/link";

const SidebarDesktop = ( ) => {
  
  const router = useRouter()  
  const path = router.query.path

  return (
    <>
      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col h-0 flex-1">
            <div className="flex items-center h-16 flex-shrink-0 px-4 bg-gray-900">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                alt="Workflow"
              />
            </div>
            <div className="flex-1 flex flex-col overflow-y-auto">
              <nav className="flex-1 px-2 py-4 bg-gray-800 space-y-1">
              <div
                  className={`${path === undefined && 'bg-gray-900'} group flex items-center px-2 py-2 text-sm font-medium text-white rounded-md `}
                >
                    <svg
                      className="mr-3 h-6 w-6 text-gray-300"
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
                  <Link href="/dashboard/">
                    <a>Panel</a>
                  </Link> 
                </div>
                <div
                  className={`${path == 'clientes' && 'bg-gray-900'} group flex items-center px-2 py-2 text-sm font-medium text-white rounded-md `}
                >
                  {/* Heroicon name: users */}
                  <svg
                    className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-300"
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
                    <a>Clientes</a>
                  </Link> 
                </div>

                <div
                  className={`${path == 'productos' && 'bg-gray-900'} group flex items-center px-2 py-2 text-sm font-medium text-white rounded-md `}
                >
                  {/* Heroicon name: folder */}
                  <svg
                    className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                  </svg>
                  <Link href="/dashboard/productos">
                    <a>Productos</a>
                  </Link> 
                </div>

                <div
                  className={`${path == 'pedidos' && 'bg-gray-900'} group flex items-center px-2 py-2 text-sm font-medium text-white rounded-md `}
                >
                  {/* Heroicon name: calendar */}
                  <svg
                    className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                  <Link href="/dashboard/pedidos">
                    <a>Pedidos</a> 
                  </Link> 
                </div>

                <div
                  className={`${path == 'reportes' && 'bg-gray-900'} group flex items-center px-2 py-2 text-sm font-medium text-white rounded-md `}
                >
                  {/* Heroicon name: chart-bar */}
                  <svg
                    className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-300"
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
                    <a>Reportes</a>
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
