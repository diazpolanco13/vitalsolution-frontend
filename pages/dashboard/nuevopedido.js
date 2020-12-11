import React, { useContext } from "react";
import Dashboard from "../../components/Dashboard";
import HeaderTable from "../../components/HeaderTable";
import AsignarClientes from "../../components/pedidos/AsignarClientes";
import AsignarProductos from "../../components/pedidos/AsignarProductos";
import ResumenPedido from "../../components/pedidos/ResumenPedido";


//Context de pedidos
import PedidoContext from '../../context/pedidos/PedidosContext'


const NuevoPedido = () => {

    //Utilizar context y extraer sus valores
    const pedidoContext = useContext(PedidoContext);


  return (
    <>
      <Dashboard path="pedidos">
        <main
          className="relative flex-1 overflow-y-auto focus:outline-none"
          tabIndex="0"
        >
        <div className="py-6">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
            <HeaderTable titulo={"Pedidos"} />
              <div className="w-4/5 ">
              
                <AsignarClientes />
                <AsignarProductos />
                <ResumenPedido />
              </div>
            </div>
          </div>
        </main>
      </Dashboard>
    </>
  );
};

export default NuevoPedido;
