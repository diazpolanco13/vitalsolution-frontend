import React from "react";
import Swal from "sweetalert2";
import { gql, useMutation } from "@apollo/client";
import Router from 'next/router'


const EMILINAR_PRODUCTO = gql`
  mutation eliminarProducto($id: ID!) {
    eliminarProducto(id: $id)
  }
`;

const OBTENER_PRODUCTOS = gql`
  query obtenerProductos {
    obtenerProductos {
      id
      imagen
      nombre
      descripcion
      existencia
      precio
      moneda
      creado
    }
  }
`;

const ProducList = ({ id,  nombre,  imagen,  descripcion,  existencia,  precio,  moneda,  }) => {
  

  //Elimiar 1 producto
  const [eliminarProducto] = useMutation(EMILINAR_PRODUCTO, {
    //Actualizar cache
    update(cache) {
      const { obtenerProductos } = cache.readQuery({
        query: OBTENER_PRODUCTOS,
      });
      cache.writeQuery({
        query: OBTENER_PRODUCTOS,
        data: {
          obtenerProductos: obtenerProductos.filter(
            (productoActual) => productoActual.id !== id
          ),
        },
      });
    },
  });


  const confirmarEliminarProducto = (id) => {
    Swal.fire({
      title: "¿Estas seguro?",
      text: "Tu no podras revertir esta acción!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, Eliminar",
      cancelButtonText: "No, Cancelar!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const { data } = await eliminarProducto({
            variables: {
              id,
            },
          });
          Swal.fire("Eliminado!", data.eliminarProducto, "success");
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  const editarProducto = () => {
    Router.push({
      pathname: "/editarproducto/[id]",
      query: { id }
    });
    
  }

  return (
    <>
      <tbody className="bg-white divide-y divide-gray-200 table-fixed">
        <tr className="table-fixed">
          <td className="flex items-center justify-center w-full h-24 text-sm font-medium text-gray-900 whitespace-normal border-r border-gray-200">
            {imagen == "" ? (
               <div className="space-y-1 text-center">
                  <svg
                      className="flex items-center w-24 h-24 text-gray-300"
                      fill="none" viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
            ) : (
              <img
                className="flex w-20 h-20 rounded-full "
                src={imagen}
                alt=""
              />
            )}
          </td>
          <td className="text-sm font-medium text-center text-gray-900 whitespace-pre-wrap border-r border-gray-200 w-36">
            {nombre}
          </td>
          <td className="text-sm font-medium text-center text-gray-900 whitespace-pre-wrap border-r border-gray-200 w-36">
            {descripcion}
          </td>
          <td className="text-sm text-center text-gray-500 whitespace-pre-wrap border-r border-gray-200">
            {existencia}
          </td>
          <td className="text-sm text-center text-gray-500 whitespace-pre-wrap border-r border-gray-200">
            {`${precio.toFixed(2)}, ${moneda}`}
          </td>
          <td className="text-sm font-medium text-center text-gray-900 whitespace-pre-wrap border-r border-gray-200">
            <button
              type="button"
              onClick={editarProducto}
              className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 uppercase"
            >
              Modificar
            </button>
          </td>
          <td className="text-sm font-medium text-center text-gray-900 whitespace-pre-wrap border-r border-gray-200">
            <button
              type="button"
              onClick={() => confirmarEliminarProducto(id)}
              className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 uppercase"
            >
              <span className="w-full text-center">Eliminar </span>
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default ProducList;
