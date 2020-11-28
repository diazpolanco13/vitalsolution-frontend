import React, { useContext } from 'react'
import Link from 'next/link';
import { TransitionContext } from '../context/TransitionContext';

const HeaderTable = () => {
    const { darkOn } = useContext(TransitionContext);
    
    return (
      <>
        <div className="px-4 py-5 bg-white border-b border-gray-200 rounded-md sm:px-6">
          <div className="flex flex-wrap items-center justify-between -mt-2 -ml-4 sm:flex-nowrap">
            <div className="mt-2 ml-4">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Clientes
              </h3>
              <p className="text-gray-700">Se mostrara un máximo de 10 clientes</p>
            </div>
            <div className="flex-shrink-0 mt-2 ml-4">
              <Link
                href="/dashboard/nuevocliente"
              >
               <a 
               className={`relative inline-flex items-center px-4 py-2 text-sm font-medium  border border-transparent rounded-md shadow-sm cursor-pointer ${darkOn ? "focus:ring-gray-500 bg-gray-700 hover:bg-blue-900 text-white" : "focus:ring-gray-500 bg-gray-300 hover:bg-gray-400  hover:text-gray-900 text-gray-800"}  focus:outline-none focus:ring-2 focus:ring-offset-2 uppercase `}
               >Nuevo cliente</a>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
}

export default HeaderTable;
