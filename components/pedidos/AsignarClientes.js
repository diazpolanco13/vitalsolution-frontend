import React from 'react'
import Select from 'react-select';
import { useEffect, useState, useContext } from 'react';
import { gql, useQuery } from '@apollo/client';
import Loading from '../Loading';
import PedidoContext from '../../context/pedidos/PedidosContext'


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




const AsignarClientes = () => {

    const [cliente, setCliente] = useState([]);

    //Context Pedidos
    const pedidoContext = useContext(PedidoContext);
    const { agregarCliente } = pedidoContext;
    
    //? Consultar la base de datos
    const { data, loading, error } = useQuery(OBTENER_CLIENTES_USUARIOS)
   
    const { obtenerClientes } = data || { obtenerClientes: {} };
    
    useEffect(() => {
        agregarCliente(cliente)

    }, [cliente])

    const seleccionarCliente = (clientes) => {
        setCliente(clientes)
    }

    if (loading) return (
        <Loading />
    )

    return (
        <>
             <div className="flex w-full mt-8 h-11">
            <p htmlFor="location" className="flex items-center pl-2 ml-3 font-medium text-gray-700 border-l-4 border-black justify-items-center boder text-md">1. - Asignar cliente al pedido</p>
            </div>
            <Select
                className="block w-1/2 py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                classNamePrefix=""
                options={obtenerClientes}
                isMulti={false}
                onChange={(seleccion) => seleccionarCliente(seleccion)}
                getOptionValue={(opciones) => opciones.id} 
                getOptionLabel={(opciones) => `${opciones.nombre} ${opciones.apellido} - ${opciones.email}`}
                placeholder='Busque o seleccione un cliente'
                noOptionsMessage={() => 'No hay resultados'}
            />
        </>
    )
}

export default AsignarClientes
