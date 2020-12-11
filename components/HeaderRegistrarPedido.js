import React, { useContext, useReducer, useState } from "react";
import { TransitionContext } from "../context/TransitionContext";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from 'next/router';
import Swal from 'sweetalert2'

import PedidoContext from "../context/pedidos/PedidosContext";
import MensjaeError from "./MensjaeError";


const REGISTRAR_PEDIDO = gql`
  mutation nuevoPedido($input: PedidoInput) {
    nuevoPedido(input: $input) {
      id     
    }
  }
`;

const OBTENER_PEDIDOS_VENDEDOR = gql`
  query obtenerPedidosVendedor {
    obtenerPedidosVendedor {
      id
      pedido {
        id
        cantidad
        nombre
        precio
      }
      total
      estado
      cliente {
        id
        nombre
        apellido
        email
        imagen
        telefono
        direccion {
          estado
          municipio
          lugar
        }
        planAfiliacion {
        suscripcion
        }
      }
      creado
    }
  }
`;

const HeaderRegistrarPedido = () => {
  const router = useRouter();

  // const { darkOn } = useContext(TransitionContext);
  const [mensaje, setMensaje] = useState(null)
  const pedidoContext = useContext(PedidoContext);
  const { cliente, productos, total } = pedidoContext;

  //Mutation para crear un nuevo pedido
  const [nuevoPedido] = useMutation(REGISTRAR_PEDIDO, {
    update(cache, { data: { nuevoPedido } }) {
      const { obtenerPedidosVendedor } = cache.readQuery({
        query: OBTENER_PEDIDOS_VENDEDOR
      })

      cache.writeQuery({
        query: OBTENER_PEDIDOS_VENDEDOR,
        data: {
          obtenerPedidosVendedor: [...obtenerPedidosVendedor, nuevoPedido]
        }
      })

    }
  });


  const validarRegistrarPedido = () => {
    return !productos.every((producto) => producto.cantidad > 0) ||
      total === 0 ||
      cliente.length === 0
      ? "pointer-events-none bg-gray-400"
      : "bg-gray-800";
  };

  const crearNuevoPedido = async () => {
    
    //Extraemos el id del cliente para pasarselo al imput
    const { id } = cliente;
    
    //remover las propiedades de producto que no acepta el Input
    const pedido = productos.map(({
        __typename,
        existencia,
        imagen,
        moneda,
        descripcion,
        creado,
        ...producto
      }) => producto)
   

    try {
      
      const { data } = await nuevoPedido({
        variables: {
          input: {
            cliente: id,
            total: total,
            pedido
         }
        }
      })

      //Redireccionar y mostrar alerta
      router.push('/dashboard/pedidos')

      //Mostrar alerta
      Swal.fire(
        'Correcto',
        'El pedido se registró correctamente',
        'success'
      )

    } catch (error) {
      setMensaje(error.message.replace('Error:', ''))
    }

    setTimeout(() => {
      setMensaje(null)
    }, 5000);

  }

  return (
    <>
      <div className="px-4 py-5 bg-white border-b border-gray-200 rounded-md sm:px-6">
        <div className="flex flex-wrap items-center justify-between -mt-2 -ml-4 sm:flex-nowrap">
          <div className="mt-2 ml-4">
            <h3 className="mb-2 text-xl font-medium leading-6 text-gray-900">
              Registre un pedido
            </h3>
            <p className="text-gray-700">
              Todos los campos de la tabla son obligatorios, llénelos
              secuencialmente.
            </p>
          </div>
          <div className="flex-shrink-0 mt-2 ml-4">
            <button
              onClick={() => crearNuevoPedido()}
              className={`${validarRegistrarPedido()} relative inline-flex items-center px-4 py-2 text-sm font-medium  border border-transparent rounded-md shadow-sm cursor-pointer focus:ring-gray-500  hover:bg-gray-800 text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 uppercase`}
            >
              Registar pedido
            </button>
          </div>
        </div>
      </div>
      {
        mensaje && <MensjaeError mensaje={mensaje} />
      }
    </>
  );
};

export default HeaderRegistrarPedido;
