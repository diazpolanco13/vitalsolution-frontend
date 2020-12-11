import React, { useState, useEffect } from "react";
import { gql, useMutation } from "@apollo/client";
import Swal from "sweetalert2";

const ATUALIZAR_PEDIDO = gql`
  mutation actualizarPedido($id: ID!, $input: PedidoInput) {
    actualizarPedido(id: $id, input: $input) {
      estado
    }
  }
`;

const ELIMINAR_PEDIDO = gql`
    mutation eliminarPedido($id: ID!){
     eliminarPedido(id:$id)
    }
`;

const OBTENER_PEDIDOS_VENDEDOR = gql`
  query obtenerPedidosVendedor {
    obtenerPedidosVendedor {
      id
    }
  }
`;

const Pedido = ({ pedido }) => {
    const {
        id,
        total,
        cliente: {
        nombre,
        apellido,
        telefono,
        email,
        imagen,
        direccion,
        planAfiliacion,
        },
        estado,
        cliente
  } = pedido;

  //Mutation para cambiar el estado del pedido
    const [ actualizarPedido ] = useMutation(ATUALIZAR_PEDIDO);
    const [eliminarPedido] = useMutation(ELIMINAR_PEDIDO, {
        update(cache) {
            const { obtenerPedidosVendedor } = cache.readQuery({
                query: OBTENER_PEDIDOS_VENDEDOR
            });

            cache.writeQuery({
                query: OBTENER_PEDIDOS_VENDEDOR,
                data: {
                    obtenerPedidosVendedor: obtenerPedidosVendedor.filter(pedido => pedido.id !== id)
                }
            })
        }
    });
    
    
  const [estadoPedido, setEstadoPedido] = useState(estado);
  const [clase, setClase] = useState();

  useEffect(() => {
    if (estadoPedido) {
      setEstadoPedido(estadoPedido);
    }
    clasePedido();
  }, [estadoPedido]);

    
    
    const clasePedido = () => {
        if (estadoPedido === "PENDIENTE") {
        setClase("border-yellow-500");
        } else if (estadoPedido === "COMPLETADO") {
        setClase("border-green-500");
        } else {
        setClase("border-red-800");
        }
    };

    const cambiarEstadoPedido = async (nuevoEstado) => {
       try {
           const { data } = await actualizarPedido({
               variables: {
                   id,
                   input: {
                    cliente: cliente.id,
                    estado: nuevoEstado,
                   }
               }
           })

           setEstadoPedido(data.actualizarPedido.estado)
       } catch (error) {
           console.log(error)
       }
    }
    
    const confirmarEliminarPedido = async (id) => {
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
              const { data } = await eliminarPedido({
                variables: {
                  id,
                }
              });
              
              //Mostrar una alerta
              Swal.fire(
                'Eliminado!',
                data.eliminarPedido,
                'success'
              )
            } catch (error) {
              console.log(error)
            }
      
            }
          })
    }
    
  return (
    <>
      <div
        className={` ${clase} border-l-4 my-2 overflow-hidden bg-white shadow sm:rounded-md`}
      >
        <ul className="divide-y divide-gray-200">
          <li>
            <div className="block hover:bg-gray-50">
              <div className="flex items-center px-4 py-4 sm:px-6">
                <div className="flex items-center flex-1 min-w-0">
                  <div className="flex-1 min-w-0 px-4 md:grid md:grid-cols-12 md:gap-4">
                    {/* panel 1 */}
                    <div className="col-span-4 border border-gray-400 rounded-lg">
                      <div className="flex items-center justify-between w-full p-6 space-x-6">
                        <div className="flex-1 truncate">
                          <div className="flex items-center space-x-3">
                            <h3 className="text-sm font-medium text-gray-900 truncate">
                              {nombre} {apellido}
                            </h3>

                            {planAfiliacion.suscripcion === true ? (
                              <p className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                                Afiliado
                              </p>
                            ) : null}
                          </div>
                          <p className="mt-1 text-sm text-gray-500 truncate">
                            {`${direccion.estado}, ${direccion.municipio}`}
                          </p>
                        </div>
                        <img
                          className="flex-shrink-0 w-10 h-10 bg-gray-300 rounded-full"
                          src={imagen}
                          alt={nombre}
                        />
                      </div>
                      <div>
                        <div className="flex -mt-px border-t border-gray-400 divide-x divide-gray-200">
                          <div className="flex flex-1 w-full">
                            <a
                              href="#"
                              className="relative inline-flex items-center justify-start flex-1 w-0 py-4 ml-2 text-sm font-medium text-gray-700 border border-transparent rounded-bl-lg hover:text-gray-500"
                            >
                              {/* Heroicon name: mail */}
                              <svg
                                className="w-5 h-5 text-gray-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                              </svg>
                              <span className="pl-1 text-xs text-left">
                                {email}
                              </span>
                            </a>
                          </div>

                          <div className="flex flex-1 w-0 -ml-px">
                            <a
                              href="#"
                              className="relative inline-flex items-center justify-start flex-1 w-0 py-4 ml-2 text-sm font-medium text-gray-700 border border-transparent rounded-bl-lg hover:text-gray-500"
                            >
                              {/* Heroicon name: phone */}
                              <svg
                                className="w-5 h-5 text-gray-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                              </svg>
                              <span className="pl-2 text-xs text-left">
                                {telefono}
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* panel 2 */}
                    <div className="flex items-stretch justify-between col-span-8 p-2 px-4 border border-gray-400 rounded-lg">
                      <div className="">
                        <p className="text-sm font-medium text-indigo-600 truncate">
                          Resumen del pedido
                        </p>
                        <p className="mt-2 text-sm font-medium text-gray-500">
                          Productos:
                        </p>
                        <ol className="mt-1 ml-5 text-sm text-gray-500 list-disc">
                          {pedido.pedido.map((articulo) => (
                            <li key={articulo.id}>
                              {articulo.nombre}, Cantidad: {articulo.cantidad}
                            </li>
                          ))}
                        </ol>
                        <p className="mt-3 font-semibold text-gray-800 ">
                          Total a pagar:
                          <span className="font-light"> $ {total} </span>
                        </p>
                      </div>

                      <div className="flex flex-col justify-around w-1/5 col-span-2">
                        <select
                          className={`block w-full max-w-xl px-3 py-2 placeholder-gray-400 border-gray-400 rounded-md shadow-sm appearance-none focus:outline-none  sm:text-sm focus:border-blue-500 focus:ring-blue-500 border sm:max-w-xs sm:text-s`}
                            defaultValue={estadoPedido}
                            onChange={ e => cambiarEstadoPedido(e.target.value)}
                        >
                          <option value="COMPLETADO">COMPLETADO</option>
                          <option value="PENDIENTE">PENDIENTE</option>
                          <option value="CANCELADO">CANCELADO</option>
                        </select>

                        <button
                          type="button"
                          onClick={() => confirmarEliminarPedido(id)}
                          className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-red-800 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 uppercase w-full    "
                        >
                          <span className="w-full text-center">
                            Eliminar pedido{" "}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Pedido;
