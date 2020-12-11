import React, { useContext } from 'react'
import Link from 'next/link';
import { TransitionContext } from '../context/TransitionContext';

const HeaderTable = ({titulo}) => {
    const { darkOn } = useContext(TransitionContext);
    // console.log(titulo)
    return (
      <>
        <div className="px-4 py-5 bg-white border-b border-gray-200 rounded-md sm:px-6">
          <div className="flex flex-wrap items-center justify-between -mt-2 -ml-4 sm:flex-nowrap">
            <div className="mt-2 ml-4">
              <h3 className="mb-2 text-xl font-medium leading-6 text-gray-900">
                {titulo}
              </h3>
              <p className="text-gray-700">Se mostrara un máximo de 10 items en esta tabla</p>
            </div>
            <div className="flex-shrink-0 mt-2 ml-4"> 
            {
              (titulo === "Clientes") && (
              <Link
                  href="/dashboard/nuevocliente"
                >
                    <a 
                    className={`relative inline-flex items-center px-4 py-2 text-sm font-medium  border border-transparent rounded-md shadow-sm cursor-pointer ${darkOn ? "focus:ring-gray-500 bg-gray-700 hover:bg-blue-900 text-white" : "focus:ring-gray-500 bg-gray-300 hover:bg-gray-400  hover:text-gray-900 text-gray-800"}  focus:outline-none focus:ring-2 focus:ring-offset-2 uppercase `}
                  >Nuevo cliente</a>
              </Link>
              )
            }
            {
              (titulo === "Productos") && (
              <Link
                  href="/dashboard/nuevoproducto"
                >
                    <a 
                    className={`relative inline-flex items-center px-4 py-2 text-sm font-medium  border border-transparent rounded-md shadow-sm cursor-pointer ${darkOn ? "focus:ring-gray-500 bg-gray-700 hover:bg-blue-900 text-white" : "focus:ring-gray-500 bg-gray-300 hover:bg-gray-400  hover:text-gray-900 text-gray-800"}  focus:outline-none focus:ring-2 focus:ring-offset-2 uppercase `}
                  >Nuevo producto</a>
              </Link>
                )
            }
            {
              (titulo === "Pedidos") && (
              <Link
                  href="/dashboard/nuevopedido"
                >
                    <a 
                    className={`relative inline-flex items-center px-4 py-2 text-sm font-medium  border border-transparent rounded-md shadow-sm cursor-pointer ${darkOn ? "focus:ring-gray-500 bg-gray-700 hover:bg-blue-900 text-white" : "focus:ring-gray-500 bg-gray-300 hover:bg-gray-400  hover:text-gray-900 text-gray-800"}  focus:outline-none focus:ring-2 focus:ring-offset-2 uppercase `}
                  >Nuevo pedido</a>
              </Link>
                )
            }
            </div>
          </div>
        </div>
      </>
    );
}

export default HeaderTable;
