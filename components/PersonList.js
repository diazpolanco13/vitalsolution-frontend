import React from "react";
import Swal from "sweetalert2";
import { gql, useMutation } from '@apollo/client'
import Router from 'next/router';


const ELIMINAR_CLIENTE = gql`
    mutation  eliminarCliente($id: ID!){
      eliminarCliente(id: $id)
    }
`;

const OBTENER_CLIENTES_USUARIOS = gql`
      query obtenerClientes {
        obtenerClientes {
          id
          nombre
          apellido
          documentoIndentidad
          telefono
          email
          vendedor
          creado
          direccion {
            estado
            lugar
            municipio
          }
          imagen
          profesion
          planAfiliacion {
            ofertas
            recordatorio
            suscripcion
          }
         }
      }
`;

const PersonList = ({ id, nombre, apellido, documentoIndentidad, telefono, email, creado, imagen }) => {
  
  //mutation para eliminar confirarEliminarCliente y limpieza del cache
  const [eliminarCliente] = useMutation(ELIMINAR_CLIENTE, {
    update(cache) {
      //obtener una copia de los clientes
      const { obtenerClientes } = cache.readQuery({ query: OBTENER_CLIENTES_USUARIOS });

      //Rescribir el cache
      cache.writeQuery({
        query: OBTENER_CLIENTES_USUARIOS,
        data: {
          obtenerClientes : obtenerClientes.filter( clienteActual => clienteActual.id !== id)
        }
      })
    }
  });
  
  
  //Elimiar 1 cliente
  const confirarEliminarCliente = (id) => {

    Swal.fire({
      title: '¿Estas seguro?',
      text: "Tu no podras revertir esta acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, Eliminar',
      cancelButtonText: 'No, Cancelar!',
    }).then( async (result) => {
      if (result.isConfirmed) {
        
      try {
        //Eliminar por ID
        const { data } = await eliminarCliente({
          variables: {
            id,
          }
        });
        
        //Mostrar una alerta
        Swal.fire(
          'Eliminado!',
          data.eliminarCliente,
          'success'
        )
      } catch (error) {
        console.log(error)
      }

      }
    })
  }

//Editar clientes
  
  const ediarCliente = () => {
    Router.push({
      pathname: '/editarcliente/[id]',
      query: { id }
    })  
}

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
          <td className="text-sm font-medium text-center text-gray-900 border-r border-gray-200 whitespace-nowrap">
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
          <td className="w-1/6 text-sm font-medium text-center min-w-min">
            <button
              type="button"
              onClick={() => ediarCliente()}
              className="inline-flex items-center w-20 py-1 mr-1 text-xs font-medium text-center text-white uppercase bg-indigo-600 border border-transparent rounded shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span className="w-full text-center"> modificar </span>
            </button>
            <button
              type="button"
              onClick={() => confirarEliminarCliente()}
              className="inline-flex items-center w-20 py-1 ml-1 text-xs font-medium text-center text-white uppercase bg-red-600 border border-transparent rounded shadow-sm md:w-20 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span className="w-full text-center">Eliminar </span>
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default PersonList;
