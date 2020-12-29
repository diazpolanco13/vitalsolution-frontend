import React from "react";
import { useRouter } from "next/router";
import Layout from "../../components/landing/Layout";
import { gql, useQuery } from "@apollo/client";

const OBTENER_PRODUCTO = gql`
  query obtenerProducto($id: ID!) {
    obtenerProducto(id: $id) {
      id
      imagen
      nombre
      descripcion
      categoria
      precio
      moneda
      existencia
    }
  }
`;

const RealizarCompra = () => {
  //1. Obtener el id del producto desde la ruta del navegador
  const router = useRouter();
  const {
    query: { id },
  } = router;

  //2. Obtener el producto
  const { data, loading, error } = useQuery(OBTENER_PRODUCTO, {
    variables: {
      id,
    },
  });

  // Desestructuramos la informacion del producto
  const { obtenerProducto } = data || { obtenerProducto: {} };
  const {imagen, nombre, descripcion, categoria, precio, moneda, existencia } = obtenerProducto
  return (
    <div>
      <Layout>
        <section className="h-full overflow-hidden text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap mx-auto lg:w-4/5">
              <div className="w-full mb-6 lg:w-1/2 lg:pr-10 lg:py-6 lg:mb-0">
                <h2 className="text-sm tracking-widest text-gray-500 title-font">
                  PRODUCTO
                </h2>
                <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font">
                  {nombre}
                </h1>
                <div className="flex mb-4">
                  <a className="flex-grow px-1 py-2 text-lg text-blue-500 border-b-2 border-blue-500">
                    Descripción
                  </a>
                 
                </div>
                <p className="mb-4 leading-relaxed">
                  {descripcion}
                </p>
                <div className="flex py-2 border-t border-gray-200">
                  <span className="text-gray-500">Categoria</span>
                  <span className="ml-auto text-gray-900">{categoria}</span>
                </div>
                <div className="flex py-2 border-t border-gray-200">
                  <span className="text-gray-500">Cantidad</span>
                  <span className="ml-auto text-gray-900">10</span>
                </div>
                <div className="flex py-2 mb-6 border-t border-b border-gray-200">
                  <span className="text-gray-500">Disponibles</span>
                  <span className="ml-auto text-gray-900">{existencia}</span>
                </div>
                <div className="flex">
                  <span className="text-2xl font-medium text-gray-900 title-font">
                   $ {precio} {moneda}
                  </span>
                  <button className="flex px-6 py-2 ml-auto text-white bg-blue-500 border-0 rounded focus:outline-none hover:bg-blue-600">
                    Comprar
                  </button>
                </div>
              </div>
              <img
                alt={nombre}
                className="object-cover object-center w-full h-64 rounded lg:w-1/2 lg:h-auto"
                src={imagen}
              />
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default RealizarCompra;
