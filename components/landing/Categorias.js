import React from "react";

const Categorias = () => {
  return (
    <>
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap w-full mb-8">
            <div className="w-full mb-2 lg:w-1/2 lg:mb-0">
              <h1 className="text-3xl font-medium text-gray-900 sm:text-3xl title-font">
                Categorias
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap -m-4">
           
            <div className="p-4 xl:w-1/3 md:w-1/2">
              <div className="p-6 rounded-lg shadow-md bg-blue-50">
                <img
                  className="object-contain object-center w-full h-40 mb-6 rounded"
                  src="https://res.cloudinary.com/apidev/image/upload/v1608082284/tglswwqcy2h3ltoucdei.png"
                  alt="contenido"
                />
                <h2 className="mb-4 text-lg font-medium text-gray-900 title-font">
                  <font className="vertical-align: inherit;">
                    <font className="vertical-align: inherit;">
                      Dioxido de Cloro 500ml
                    </font>
                  </font>
                </h2>
                <div className="flex object-scale-down w-full p-3 antialiased bg-white rounded-lg shadow-lg"
                  >
                  
                <p className="text-base leading-relaxed text-black">
                  <font className="vertical-align: inherit;">
                    <font className="vertical-align: inherit;">
                      Chaleco flexitario de 8 bits con diseño de dedos en la
                      calle.{" "}
                    </font>
                    <font className="vertical-align: inherit;">
                      El hexágono de la destilería interrumpe la bombilla de
                      Edison.
                    </font>
                  </font>
                </p>
              </div>
              </div>
            </div>
            <div className="p-4 xl:w-1/3 md:w-1/2">
              <div className="p-6 rounded-lg shadow-md bg-blue-50">
                <img
                  className="object-contain object-center w-full h-40 mb-6 rounded"
                  src="https://res.cloudinary.com/apidev/image/upload/v1608082284/tglswwqcy2h3ltoucdei.png"
                  alt="contenido"
                />
                <h2 className="mb-4 text-lg font-medium text-gray-900 title-font">
                  <font className="vertical-align: inherit;">
                    <font className="vertical-align: inherit;">
                      Dioxido de Cloro 500ml
                    </font>
                  </font>
                </h2>
                <div className="flex object-scale-down w-full p-3 antialiased rounded-lg shadow-lg bg-gradient-to-r from-blue-400 to-green-200"
                  >
                  
                <p className="text-base leading-relaxed text-white">
                  <font className="vertical-align: inherit;">
                    <font className="vertical-align: inherit;">
                      Chaleco flexitario de 8 bits con diseño de dedos en la
                      calle.{" "}
                    </font>
                    <font className="vertical-align: inherit;">
                      El hexágono de la destilería interrumpe la bombilla de
                      Edison.
                    </font>
                  </font>
                </p>
              </div>
              </div>
            </div>
            <a className="p-4 cursor-pointer xl:w-1/3 md:w-1/2">
              <div className="p-6 rounded-lg shadow-md bg-gradient-to-r from-blue-400 to-green-200">
                  <img
                    className="object-contain object-center w-full h-40 mb-6 rounded"
                    src="https://res.cloudinary.com/apidev/image/upload/v1608082284/tglswwqcy2h3ltoucdei.png"
                    alt="contenido"
                  />
                  <h2 className="mb-4 text-lg font-medium text-gray-900 title-font">
                    <font className="vertical-align: inherit;">
                      <font className="vertical-align: inherit;">
                        Dioxido de Cloro 500ml
                      </font>
                    </font>
                  </h2>
                  <div className="flex object-scale-down w-full p-3 antialiased bg-white rounded-lg shadow-lg"
                    >
                    
                  <p className="text-base leading-relaxed text-black">
                    <font className="vertical-align: inherit;">
                      <font className="vertical-align: inherit;">
                        Chaleco flexitario de 8 bits con diseño de dedos en la
                        calle.{" "}
                      </font>
                      <font className="vertical-align: inherit;">
                        El hexágono de la destilería interrumpe la bombilla de
                        Edison.
                      </font>
                    </font>
                  </p>
                </div>
              </div>
            </a>
            
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Categorias;
