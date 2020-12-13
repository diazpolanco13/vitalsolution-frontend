import React from "react";
import Dashboard from "../../components/Dashboard";
import HeaderTable from "../../components/HeaderTable";
import { gql, useQuery } from '@apollo/client'
import Pedido from "../../components/pedidos/Pedido";
import Loading from "../../components/Loading";

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


const Pedidos = () => {
  const { data, loading, error } = useQuery(OBTENER_PEDIDOS_VENDEDOR);
  
  const { obtenerPedidosVendedor } = data || { obtenerPedidosVendedor: []}

  

  return (
    <>
      <Dashboard path="pedidos">
        {loading ? (
          <Loading />
        ) : (
            <main
              className="relative flex-1 overflow-y-auto focus:outline-none"
              tabIndex="0"
            >
              <div className="py-6">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                  <HeaderTable titulo={"Pedidos"} />

                  {
                    obtenerPedidosVendedor === 0 ? (
                      <h1 className="mt-5 text-2xl text-center">No hay pedidos</h1>
                    ) : (
                        obtenerPedidosVendedor.map(pedido => (
                          <Pedido
                            key={pedido.id}
                            pedido={pedido}
                          />
                        ))
                      )
                  }
                </div>
              </div>
            </main>
          )}
      </Dashboard>
    </>
  );
};

export default Pedidos;
