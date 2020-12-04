import React from "react";
import Dashboard from "../../components/Dashboard";
import { gql, useQuery } from "@apollo/client";
import HeaderTable from "../../components/HeaderTable";
import ProducList from "../../components/ProductList";

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

const Productos = () => {
  //? Consultar los productos
  const { data, loading, error } = useQuery(OBTENER_PRODUCTOS);

  const { obtenerProductos } = data || { obtenerProductos: [] };

  // console.log(obtenerProductos);

  return (
    <>
      <Dashboard path="productos">
        <main
          className="relative flex-1 overflow-y-auto focus:outline-none"
          tabIndex="0"
        >
          <div className="py-6">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
              {/* Replace with your content */}
              <HeaderTable titulo={"Productos"} />
              <div className="py-4">
                {/* Cabecera de la table */}
                <div className="flex flex-col">
                  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                      <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead>
                            <tr>
                              <th
                                scope="col"
                                className="w-1/6 px-6 py-3 text-sm font-bold tracking-wider text-center text-gray-500 uppercase border-r bg-gray-50"
                              >
                                Imagen
                              </th>
                              <th
                                scope="col"
                                className="w-1/6 px-6 py-3 text-sm font-bold tracking-wider text-center text-gray-500 uppercase whitespace-normal border-r bg-gray-50"
                              >
                                Nombre
                              </th>
                              <th
                                scope="col"
                                className="w-1/4 px-6 py-3 text-sm font-bold tracking-wider text-center text-gray-500 uppercase border-r bg-gray-50"
                              >
                                Descripción
                              </th>
                              <th
                                scope="col"
                                className="w-1/12 px-6 py-3 text-sm font-bold tracking-wider text-center text-gray-500 uppercase border-r bg-gray-50"
                              >
                                Existencia
                              </th>
                              <th
                               scope="col"
                               className="w-1/12 px-12 py-3 text-sm font-bold tracking-wider text-center text-gray-500 uppercase border-r bg-gray-50"
                             >
                                Precio
                              </th>
                              <th
                                scope="col"
                                className="w-1/12 px-6 py-3 text-sm font-bold tracking-wider text-center text-gray-500 uppercase border-r bg-gray-50"
                              >
                                Modificar
                              </th>
                              <th
                               scope="col"
                                className="w-1/12 px-6 py-3 text-sm font-bold tracking-wider text-center text-gray-500 uppercase border-r bg-gray-50">
                                Eliminar
                              </th>
                            </tr>
                          </thead>
                          {obtenerProductos.map((prod) => (
                            <ProducList
                              key={prod.id}
                              id={prod.id}
                              imagen={prod.imagen}
                              nombre={prod.nombre}
                              descripcion={prod.descripcion}
                              existencia={prod.existencia}
                              precio={prod.precio}
                              moneda={prod.moneda}
                              // creado={prod.creado}
                            />
                          ))}
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /End replace */}
              </div>
            </div>
          </div>
        </main>
      </Dashboard>
    </>
  );
};

export default Productos;
