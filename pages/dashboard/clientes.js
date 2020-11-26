import React from "react";
import { useRouter } from 'next/router';
import Dashboard from "../../components/Dashboard";
import { gql, useQuery } from "@apollo/client";
import PersonList from "../../components/PersonList";


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
    }
  }
`;



const path = () => {
  
  const { data, loading, error } = useQuery(OBTENER_CLIENTES_USUARIOS);
  
  if (loading) {
    return (
      <h1>cargando..... </h1>
    )
  }

  const { obtenerClientes } = data || { obtenerClientes: [] }
  // const { obtenerClientes = [] } = data || {}
  
  
  return (
    <>
      <Dashboard path="clientes">
        <main
          className="relative flex-1 overflow-y-auto focus:outline-none"
          tabIndex="0"
        >
          <div className="py-6">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">Clientes</h1>
            </div>
            <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
              {/* Replace with your content */}
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
                                className="px-6 py-3 text-sm font-bold tracking-wider text-left text-gray-500 bg-gray-50"
                              >
                                Nombres
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-sm font-bold tracking-wider text-left text-gray-500 bg-gray-50"
                              >
                                Identidad
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-sm font-bold tracking-wider text-left text-gray-500 bg-gray-50"
                              >
                                Telefono
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-sm font-bold tracking-wider text-left text-gray-500 bg-gray-50"
                              >
                                Email
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-sm font-bold tracking-wider text-left text-gray-500 bg-gray-50"
                              >
                                Fecha
                              </th>
                              <td className="px-6 py-3 text-sm font-bold tracking-wider text-left text-gray-500 bg-gray-50"
                              >
                                <a className="text-gray-600 hover:text-gray-900">Editar</a>
                              </td>
                            </tr>
                          </thead>
                          {obtenerClientes.map((res) => (
                            <PersonList
                              key={res.id}
                              nombre={res.nombre}
                              apellido={res.apellido}
                              documentoIndentidad={res.documentoIndentidad}
                              telefono={res.telefono}
                              email={res.email}
                              creado={res.creado}
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

export default path;
