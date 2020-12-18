import React from 'react'
import Loading from '../Loading'

const Producto = ({ id,  nombre,  imagen,  categoria, descripcion,  existencia,  precio,  moneda }) => {
   
    
    
    return (
      <>
        <div className="w-full p-4 transition duration-500 ease-in-out transform cursor-pointer lg:w-1/4 sm:w-1/2 md:w-1/3 hover:bg-gray-50 hover:-translate-y-1 hover:scale-95 group">
          <a className="relative block h-48 overflow-hidden transition duration-300 ease-in-out delay-150 rounded ">
            <img
              alt="ecommerce"
              className="block object-contain w-full h-full"
              src={imagen}
            />
          </a>
          <div className="mt-4 ">
            <h3 className="mb-1 text-xs tracking-widest text-gray-500 uppercase title-font">
              {categoria}
            </h3>
            <h2 className="text-lg font-medium text-gray-900 title-font group-hover:text-blue-700">
              {nombre}
            </h2>
            <p className="mt-1 group-hover:text-blue-700">{`$ ${precio}`}</p>
          </div>
        </div>
      </>
    );
}

export default Producto
