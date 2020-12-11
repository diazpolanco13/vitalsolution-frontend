import React, { useContext, useEffect, useState } from "react";
import PedidosContext from "../../context/pedidos/PedidosContext";

const ProductoResumen = ({ producto }) => {
  const pedidoContext = useContext(PedidosContext);
  const { cantidadProductos, actualizarTotal } = pedidoContext;

  const [cantidad, setCantidad] = useState(0);

  useEffect(() => {
    actualizarCantidad();
    actualizarTotal();
  }, [cantidad]);

  const actualizarCantidad = () => {
    const nuevoProducto = {
      ...producto,
      cantidad: Number(cantidad),
    };
    //Enviamos la cantidad de productos al state
    cantidadProductos(nuevoProducto);
  };

  return (
    <>
      <li className="w-full">
        <div className="flex px-4 py-4 sm:px-6">
          <div className="flex justify-between w-full min-w-0 ">
            <div className="flex items-center justify-center w-1/2 md:w-1/12">
              <img
                className="rounded-full md:w-12 md:h-12"
                src={producto.imagen}
                alt={producto.nombre}
              />
            </div>

            <div className="flex flex-col justify-between w-full min-w-0 px-4 md:flex-row ">
              <div className="w-4/5">
                <p className="text-sm font-medium text-indigo-600 truncate">
                  {producto.nombre}
                </p>
                <p className="flex items-center mt-2 text-sm text-gray-500">
                  {producto.descripcion}
                </p>
              </div>

              <div className="w-1/3">
                <div>
                  <label
                    htmlFor="text"
                    className="block text-sm font-medium text-gray-700 "
                  >
                    Costo
                  </label>
                  <p className="flex items-center mt-2 text-sm text-gray-500">
                    {producto.precio}{" "}
                    {producto.moneda === "Dolares" && `Dólares`}
                  </p>
                </div>
              </div>

              <div className="w-1/3">
                <div>
                  <label
                    htmlFor="text"
                    className="block text-sm font-medium text-gray-700 "
                  >
                    Disponibles
                  </label>
                  <p className="flex items-center mt-2 text-sm text-gray-500">
                    {producto.existencia}
                  </p>
                </div>
              </div>

              <div className="w-3/5">
                <label
                  htmlFor="text"
                  className="block text-sm font-medium text-gray-700 "
                >
                  Ajuste Cantidad
                </label>
                <input
                  type="number"
                  name="text"
                  id="cantidad"
                  className={`${
                    cantidad == 0 ? "border-red-400" : "border-gray-300"
                  } block w-full h-8 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
                  placeholder="Ingrese la cantidad"
                  onChange={(e) => setCantidad(e.target.value)}
                  value={cantidad}
                />
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default ProductoResumen;
