import React from "react";



const ProducList = ({ id, nombre, imagen, descripcion, existencia, precio, moneda, creado }) => {
  
  return (
    <>
      <tbody className="bg-white divide-y divide-gray-200 table-fixed">
        <tr className="table-fixed">
          <td className="flex items-center justify-center w-full h-24 text-sm font-medium text-gray-900 whitespace-normal border-r border-gray-200">
            {
              (imagen == "") ? (
                <span className="w-24 h-24 overflow-hidden bg-gray-100 rounded-full">
                  <svg
                    className="w-full h-full text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>
              ) : (
                <img className="flex w-20 h-20 rounded-full " src={imagen} alt="" />
              )
            }
          </td>
          <td className="text-sm font-medium text-center text-gray-900 border-r border-gray-200 w-36 whitespace-nowrap">
            {nombre} 
          </td>
          <td className="text-sm text-center text-gray-500 border-r border-gray-200 whitespace-nowrap">
            {descripcion}
          </td>
          <td className="text-sm text-center text-gray-500 border-r border-gray-200 whitespace-nowrap">
            {existencia}
          </td>
          <td className="text-sm text-center border-r border-gray-200 text-gray-500text-center whitespace-nowrap">
            {
              `${precio.toFixed(2)}, ${moneda}`
            }
          </td>
          {/* <td className="text-sm text-center text-gray-500 whitespace-normal border-r border-gray-200">
            {creado}
          </td> */}
          <td className="text-sm font-medium text-center w-44 min-w-44 ">
            <button
              type="button"
              // onClick={() => ediarCliente()}
              className="inline-flex items-center w-16 text-xs font-medium text-center text-white uppercase bg-blue-600 border border-transparent rounded shadow-sm lg:w-20 xl:ml-1 xl:py-1 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <span className="w-full text-center xs:p-1"> modificar </span>
            </button>
            <button
              type="button"
              // onClick={() => confirarEliminarCliente(id)}
              className="inline-flex items-center w-16 text-xs font-medium text-center text-white uppercase bg-red-600 border border-transparent rounded shadow-sm lg:w-20 xl:ml-1 xl:py-1 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <span className="w-full text-center">Eliminar </span>
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default ProducList;
