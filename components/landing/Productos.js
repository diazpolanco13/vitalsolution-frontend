import React from "react";
import { gql, useQuery } from '@apollo/client'
import Producto from "./Producto";
import Loading from "../Loading";

const OBTENER_PRODUCTOS = gql`
query obtenerProductos {
    obtenerProductos {
      id
      imagen
      nombre
      categoria
      descripcion
      existencia
      precio
      moneda
      creado
    }
  }
`;

const Productos = () => {

//Consultar Productos
  
  const { data, loading, error } = useQuery(OBTENER_PRODUCTOS);

  const { obtenerProductos } = data || { obtenerProductos: [] };
  
  console.log(obtenerProductos)
  const { id,  nombre,  imagen,  descripcion,  existencia,  precio,  moneda, categoria } = obtenerProductos
  

  return (
    <>
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-12 mx-auto">
          
        <div className="flex flex-wrap w-full mb-8">
            <div className="w-full mb-2 lg:w-1/2 lg:mb-0">
              <h1 className="text-3xl font-medium text-gray-900 sm:text-3xl title-font">
              Productos
              </h1>
            </div>
        </div>
          
          <div className="flex flex-wrap -m-4 ">
            {
            
                obtenerProductos.map(producto => (
                  <Producto
                    key={producto.id}
                    nombre={producto.nombre}
                    imagen={producto.imagen}
                    categoria={producto.categoria}
                    descripcion={producto.descripcion}
                    existencia={producto.existencia}
                    precio={producto.precio}
                    moneda={producto.moneda}
                  />
                ))
            
              }
          </div>
        </div>
      </section>
    </>
  );
};

export default Productos;
