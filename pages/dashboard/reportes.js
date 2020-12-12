import React, { useEffect } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import Dashboard from "../../components/Dashboard";
import { gql, useQuery } from '@apollo/client'


const MEJORES_VENDEDORES = gql`
  query mejoresVendedores {
    mejoresVendedores { 
      vendedor {
        nombre
        apellido
        email
        telefono
      }
      total
    }
  }
`;

const MEJORES_CLIENTES = gql`
    query mejoresClientes {
    mejoresClientes {
        cliente{
          nombre
          apellido
          documentoIndentidad
          email
          telefono
        }
      total
      }
    }
`;

const Reportes = () => {

  const { data, loading, error, startPolling, stopPolling } = useQuery(MEJORES_VENDEDORES);
  const { data: dataClientes , loading: loadingClientes, error: errorClientes } = useQuery(MEJORES_CLIENTES);
  
  useEffect(() => {
    startPolling(1000)
    return () => {
      stopPolling() 
    }
  }, [startPolling, stopPolling])

  if (loading) return 'cargando...'
  
  const { mejoresVendedores } = data || {mejoresVendedores: []}
  const { mejoresClientes } = dataClientes || {mejoresClientes: []}
   
  console.log(mejoresClientes)

//Estandarizando objeto de vendedores a formato compatible 
  const vendedorGrafica = [];
 
  mejoresVendedores.map((vendedor, index) => {
    vendedorGrafica[index] = {
      ...vendedor.vendedor[0],
      total: vendedor.total
    }
  })
  
//Estandarizando objeto de vendedores a formato compatible 
  const clienteGrafica = [];
 
  mejoresClientes.map((cliente, index) => {
    clienteGrafica[index] = {
      ...cliente.cliente[0],
      total: cliente.total
    }
  })
  

  return (
    <>
      <Dashboard path="reportes">
        <main
          className="relative flex-1 overflow-y-auto focus:outline-none"
          tabIndex="0"
        >
          <div className="py-6">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">Reportes</h1>
            </div>
            <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
              
              <div className="flex flex-row flex-wrap flex-grow mt-2">

              <div className="w-full p-6 md:w-1/2">
                  {/*Graph Card*/}
                  <div className="flex flex-col bg-white border-transparent rounded-lg shadow-xl">
                      <div className="p-2 text-gray-800 uppercase border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg bg-gradient-to-b from-gray-300 to-gray-100">
                          <h5 className="font-bold text-gray-600 uppercase">Mejores vendedores</h5>
                      </div>
                    <BarChart
                        className="mt-5 align-middle"
                        width={500}
                        height={300}
                        data={vendedorGrafica}
                        margin={{
                          top: 5, right: 30, left: 20, bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="email" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="total" fill="#2980b9" />
                      </BarChart>
                                  
                  </div>
                  {/*/Graph Card*/}
              </div>

                <div className="w-full p-6 md:w-1/2">
                    {/*Graph Card*/}
                    <div className="justify-center bg-white border-transparent rounded-lg shadow-xl ">
                        <div className="p-2 text-gray-800 uppercase border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg bg-gradient-to-b from-gray-300 to-gray-100">
                            <h5 className="font-bold text-gray-600 uppercase">Mejores Clientes</h5>
                        </div>
                        
                      <BarChart
                         className="mt-5 align-middle"
                        width={500}
                        height={300}
                        data={clienteGrafica}
                        margin={{
                          top: 5, right: 30, left: 20, bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="email" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="total" fill="#2980b9" />
                      </BarChart>
                        
                    </div>
                    {/*/Graph Card*/}
                </div>
              </div>
            </div>
          </div>
        </main>
      </Dashboard>
    </>
  );
};

export default Reportes;
