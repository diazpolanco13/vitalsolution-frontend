import React from "react";

const Categorias = () => {
  return (
    <>
      <section class="text-gray-700 body-font">
        <div class="container px-5 py-8 mx-auto">
          <h1 className="mb-12 text-3xl font-medium text-left text-gray-900 title-font">
            Categorias
          </h1>
          <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/3 md:w-1/2  transition duration-500 p-4 group relative transform hover:scale-110 motion-reduce:transform-none ease-in-out">
              <img
                className="z-0 shadow-lg cursor-pointer group-hover:bg-gray-700"
                src="https://res.cloudinary.com/apidev/image/upload/v1608156849/UI/rozpbzvb9hsqoftgcg1g.jpg"
                alt=""
              />
              <button
                type="button"
                className="absolute inline-flex items-center px-12 py-2 text-sm font-medium text-white transition duration-500 ease-in-out transform bg-gray-800 border border-transparent rounded-md shadow-sm right-4 bottom-12 group-hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 "
              >
                Vamos
              </button>
            </div>
            <div class="xl:w-1/3 md:w-1/2  transition duration-500 p-4 group relative transform hover:scale-110 motion-reduce:transform-none ease-in-out">
              <img
                className="z-0 shadow-lg cursor-pointer group-hover:bg-gray-700"
                src="https://res.cloudinary.com/apidev/image/upload/v1608156849/UI/rozpbzvb9hsqoftgcg1g.jpg"
                alt=""
              />
              <button
                type="button"
                className="absolute inline-flex items-center px-12 py-2 text-sm font-medium text-white transition duration-500 ease-in-out transform bg-gray-800 border border-transparent rounded-md shadow-sm right-4 bottom-12 group-hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 "
              >
                Vamos
              </button>
            </div>
            <div class="xl:w-1/3 md:w-1/2  transition duration-500 p-4 group relative transform hover:scale-110 motion-reduce:transform-none ease-in-out">
              <img
                className="z-0 shadow-lg cursor-pointer group-hover:bg-gray-700"
                src="https://res.cloudinary.com/apidev/image/upload/v1608156849/UI/rozpbzvb9hsqoftgcg1g.jpg"
                alt=""
              />
              <button
                type="button"
                className="absolute inline-flex items-center px-12 py-2 text-sm font-medium text-white transition duration-500 ease-in-out transform bg-gray-800 border border-transparent rounded-md shadow-sm right-4 bottom-12 group-hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 "
              >
                Vamos
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categorias;
