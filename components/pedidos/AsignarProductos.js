import React, { useContext, useEffect, useState } from 'react'
import Select from 'react-select'
import { gql, useQuery } from '@apollo/client';
import PedidoContext from '../../context/pedidos/PedidosContext';
import Loading from '../Loading';

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


const AsignarProductos = () => {

     // state local del componente
    const [productos, setProductos] = useState([]);
    
    // Context de Pedidos
    const pedidoContext = useContext(PedidoContext)
    const { agregarProductos } = pedidoContext;

    // Consultar la Base de datos
    const { data, loading, error } = useQuery(OBTENER_PRODUCTOS);  
    
    //Enviar productos seleccionados al estado
    useEffect(() => {
        // Función para pasar a PedidoState.js
        agregarProductos(productos)

    }, [productos])
    
    const seleccionarProductos = (producto) => {
        setProductos(producto)
    }

    if (loading) return null

    const { obtenerProductos } = data;
    // const { obtenerProductos } = data || { obtenerProductos: {} };


    return (
        <>
            <div className="flex w-full mt-4 h-11">
                <p htmlFor="location" className="flex items-center pl-2 ml-3 font-medium text-gray-700 border-l-4 border-black justify-items-center boder text-md">2. - Asignar productos al cliente</p>
            </div>
            <Select
                className="block w-full py-2 pl-3 mt-1 text-base border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                classNamePrefix=""
                options={obtenerProductos}
                isMulti={true}
                onChange={(seleccion) => seleccionarProductos(seleccion)}
                getOptionValue={(opciones) => opciones.id} 
                getOptionLabel={(opciones) => `${opciones.nombre}, Disponibles: ${opciones.existencia}`}
                placeholder='Busque o seleccione un producto'
                noOptionsMessage={() => 'No hay resultados'}
            />
        </>
    )
}

export default AsignarProductos
