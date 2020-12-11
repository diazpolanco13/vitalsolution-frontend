import React, { useContext } from "react";
import PedidoContext from "../../context/pedidos/PedidosContext";
import ProductoResumen from "./ProductoResumen";
import Total from "./Total";

const ResumenPedido = () => {
  // Context de Pedidos
  const pedidoContext = useContext(PedidoContext);
  const { productos, total } = pedidoContext;

  
  return (
    <div>
      <div className="w-full mt-4 h-11">
        <p
          htmlFor="location"
          className="flex items-center pl-2 ml-3 font-medium text-gray-700 border-l-4 border-black justify-items-center boder text-md h-11"
        >
          3. - Ajunta las cantidades del producto
        </p>

        {(productos.length > 0) ? (
            <>
              <div className="w-full mt-4 ml-3 overflow-hidden bg-white shadow sm:rounded-md">
                <ul className="divide-y divide-gray-200 ">
                  {productos.map((producto) => (
                    <ProductoResumen key={producto.id} producto={producto} />
                  ))}
                </ul>
              </div>
              <Total total={total} />
            </>
          ) : (
            <p className="mt-5 ml-4 font-medium text-gray-700">
            No hay productos
          </p> 
          )
        }
      </div>
    </div>
  );
};

export default ResumenPedido;
