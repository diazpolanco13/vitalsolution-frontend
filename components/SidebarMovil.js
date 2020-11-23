import React, { useContext } from "react";
import { Transition } from "@headlessui/react";
import { TransitionContext } from "../context/TransitionContext";
import { useRouter } from "next/router";
import Link from "next/link";

const SidebarMovil = () => {
  const { showSidebar, setShowSidebar } = useContext(TransitionContext);

  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const router = useRouter();
  const path = router.query.path;

  return (
    <>
      <Transition show={showSidebar}>
        {/* Off-canvas menu for mobile, show/hide based on off-canvas menu state. */}
        <div className="md:hidden">
          <div className="fixed inset-0 flex z-40">
            {/* menú de lienzo para dispositivos móviles, mostrar / ocultar según el estado del menú fuera del lienzo */}
            <Transition.Child
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0" aria-hidden="true">
                <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
              </div>
            </Transition.Child>
            {/* El menú fuera del lienzo cubre, muestra / oculta según el estado del menú fuera del lienzo */}
            <Transition.Child
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative flex-1 flex flex-col h-screen max-w-xs w-64 pt-5 pb-4 bg-gray-800">
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    onClick={handleShowSidebar}
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  >
                    <span className="sr-only">Close sidebar</span>
                    {/* Heroicon name: x */}
                    <svg
                      className="h-6 w-6 text-white"
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex-shrink-0 flex items-center px-4">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="mt-5 flex-1 h-0 overflow-y-auto">
                  <nav className="px-2 space-y-1">
                    <div
                      onClick={handleShowSidebar}
                      className={`${
                        path === undefined && "bg-gray-900"
                      } group flex items-center px-2 py-2 text-sm font-medium text-white rounded-md `}
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
                      onClick={handleShowSidebar}
                      className={`${
                        path == "clientes" && "bg-gray-900"
                      } group flex items-center px-2 py-2 text-sm font-medium text-white rounded-md `}
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
                      onClick={handleShowSidebar}
                      className={`${
                        path == "productos" && "bg-gray-900"
                      } group flex items-center px-2 py-2 text-sm font-medium text-white rounded-md `}
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
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        ></path>
                      </svg>
                      <Link href="/dashboard/productos">
                        <a>Productos</a>
                      </Link>
                    </div>

                    <div
                      onClick={handleShowSidebar}
                      className={`${
                        path == "pedidos" && "bg-gray-900"
                      } group flex items-center px-2 py-2 text-sm font-medium text-white rounded-md `}
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
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        ></path>
                      </svg>
                      <Link href="/dashboard/pedidos">
                        <a>Pedidos</a>
                      </Link>
                    </div>

                    <div
                      onClick={handleShowSidebar}
                      className={`${
                        path == "reportes" && "bg-gray-900"
                      } group flex items-center px-2 py-2 text-sm font-medium text-white rounded-md `}
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
              <div className="flex-shrink-0 w-14" aria-hidden="true">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </Transition.Child>
          </div>
        </div>
      </Transition>
    </>
  );
};

export default SidebarMovil;
