import React from "react";
import Swal from "sweetalert2";
import { gql, useMutation } from '@apollo/client';

const EMILINAR_PRODUCTO = gql`
    mutation eliminarProducto($id: ID!){
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

const ProducList = ({
  id,
  nombre,
  imagen,
  descripcion,
  existencia,
  precio,
  moneda,
  creado,
}) => {

  //Elimiar 1 producto
  const [eliminarProducto] = useMutation(EMILINAR_PRODUCTO, {
    
    //Actualizar cache
      update(cache) {
      const { obtenerProductos } = cache.readQuery({
        query: OBTENER_PRODUCTOS
      });
      cache.writeQuery({
        query: OBTENER_PRODUCTOS,
        data: {
          obtenerProductos: obtenerProductos.filter(productoActual => productoActual.id !== id)
        }
      })
      }
  });


  const confirarEliminarProducto = (id) => {
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
              id
            }
          });
          Swal.fire(
            'Eliminado!',
            data.eliminarProducto,
            'success'
          )
        } catch (error) {
          console.log(error)
        }
      }
    });
  };

  return (
    <>
      <tbody className="bg-white divide-y divide-gray-200 table-fixed">
        <tr className="table-fixed">
          <td className="flex items-center justify-center w-full h-24 text-sm font-medium text-gray-900 whitespace-normal border-r border-gray-200">
            {imagen == "" ? (
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
              // onClick={() => confirarEliminarCliente(id)}
              className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 uppercase"
            >
              Modificar
            </button>
          </td>
          <td className="text-sm font-medium text-center text-gray-900 whitespace-pre-wrap border-r border-gray-200">
            <button
              type="button"
              onClick={() => confirarEliminarProducto(id)}
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
