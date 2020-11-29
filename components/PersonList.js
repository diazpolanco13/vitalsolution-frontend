import React from "react";

const PersonList = ({ nombre,   apellido,   documentoIndentidad,   telefono,   email,   creado, imagen}) => {
  return (
    <>
      <tbody className="bg-white divide-y divide-gray-200">
        <tr className="">
          <td className="flex items-center justify-center text-sm font-medium text-gray-900 border-r border-gray-200 whitespace-nowrap">
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
          <td className="px-6 py-4 text-sm font-medium text-gray-900 border-r border-gray-200 whitespace-nowrap">
            {nombre} {apellido}
          </td>
          <td className="px-6 py-4 text-sm text-gray-500 border-r border-gray-200 whitespace-nowrap">
            {`CIV-${documentoIndentidad}`}
          </td>
          <td className="px-6 py-4 text-sm text-gray-500 border-r border-gray-200 whitespace-nowrap">
            {telefono}
          </td>
          <td className="px-6 py-4 text-sm text-gray-500 border-r border-gray-200 whitespace-nowrap">
            {email}
          </td>
          <td className="px-6 py-4 text-sm text-gray-500 border-r border-gray-200 whitespace-nowrap">
            {creado}
          </td>
          <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
            <a href="#" className="text-indigo-600 hover:text-indigo-900">
              Editar
            </a>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default PersonList;
