import React from "react";

const PersonList = ({ nombre,   apellido,   documentoIndentidad,   telefono,   email,   creado, }) => {
  return (
    <>
      <tbody className="bg-white divide-y divide-gray-200">
        <tr>
          <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
            {nombre} {apellido}
          </td>
          <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
            {`CIV-${documentoIndentidad}`}
          </td>
          <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
            {telefono}
          </td>
          <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
            {email}
          </td>
          <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
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
