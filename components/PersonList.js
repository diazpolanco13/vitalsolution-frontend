import React from "react";

const PersonList =  ({ nombre,   apellido,   documentoIndentidad,   telefono,   email,   creado, imagen}) => {
  return (
    <>
      <tbody className="bg-white divide-y divide-gray-200 table-fixed">
        <tr className="">
          <td className="flex items-center justify-center text-sm font-medium text-gray-900 whitespace-normal border-r border-gray-200">
            {
              (imagen == "") ? (
                <span className="w-12 h-12 overflow-hidden bg-gray-100 rounded-full">
                  <svg
                    className="w-full h-full text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>
              ) : (
                <img className="flex w-12 h-12 rounded-full " src={imagen} alt="" />
              )
            }
          </td>
          <td className="text-sm font-medium text-center text-gray-900 border-r border-gray-200  whitespace-nowrap">
            {nombre} {apellido}
          </td>
          <td className="text-sm text-center text-gray-500 border-r border-gray-200 whitespace-nowrap">
            {`CIV-${documentoIndentidad}`}
          </td>
          <td className="text-sm text-center text-gray-500 border-r border-gray-200 whitespace-nowrap">
            {telefono}
          </td>
          <td className="text-sm text-center border-r border-gray-200 text-gray-500text-center whitespace-nowrap">
            {email}
          </td>
          <td className="text-sm text-center text-gray-500 whitespace-normal border-r border-gray-200">
            {creado}
          </td>
          <td className="w-1/6 text-sm font-medium text-center place-self-stretch">
            <button type="button" class="uppercase inline-flex items-center mx-2 px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Editar
            </button>
            <button type="button" class="uppercase inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Eliminar
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default PersonList;
