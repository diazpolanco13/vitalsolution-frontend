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
              <div className="p-6 bg-gray-100 rounded-lg">
                <img
                  className="object-cover object-center w-full h-40 mb-6 rounded"
                  src="https://dummyimage.com/721x401"
                  alt="contenido"
                />
                <h3 className="text-xs font-medium tracking-widest text-teal-500 title-font">
                  <font className="vertical-align: inherit;">
                    <font className="vertical-align: inherit;">SUBTITULAR</font>
                  </font>
                </h3>
                <h2 className="mb-4 text-lg font-medium text-gray-900 title-font">
                  <font className="vertical-align: inherit;">
                    <font className="vertical-align: inherit;">
                      Coliseo Roma
                    </font>
                  </font>
                </h2>
                <p className="text-base leading-relaxed">
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
            <div className="p-4 xl:w-1/3 md:w-1/2">
              <div className="p-6 bg-gray-100 rounded-lg">
                <img
                  className="object-cover object-center w-full h-40 mb-6 rounded"
                  src="https://dummyimage.com/722x402"
                  alt="contenido"
                />
                <h3 className="text-xs font-medium tracking-widest text-teal-500 title-font">
                  <font className="vertical-align: inherit;">
                    <font className="vertical-align: inherit;">SUBTITULAR</font>
                  </font>
                </h3>
                <h2 className="mb-4 text-lg font-medium text-gray-900 title-font">
                  <font className="vertical-align: inherit;">
                    <font className="vertical-align: inherit;">
                      La gran pirámide de Giza
                    </font>
                  </font>
                </h2>
                <p className="text-base leading-relaxed">
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
            <div className="p-4 xl:w-1/3 md:w-1/2">
              <div className="p-6 bg-gray-100 rounded-lg">
                <img
                  className="object-cover object-center w-full h-40 mb-6 rounded"
                  src="https://dummyimage.com/723x403"
                  alt="contenido"
                />
                <h3 className="text-xs font-medium tracking-widest text-teal-500 title-font">
                  <font className="vertical-align: inherit;">
                    <font className="vertical-align: inherit;">SUBTITULAR</font>
                  </font>
                </h3>
                <h2 className="mb-4 text-lg font-medium text-gray-900 title-font">
                  <font className="vertical-align: inherit;">
                    <font className="vertical-align: inherit;">
                      San Francisco
                    </font>
                  </font>
                </h2>
                <p className="text-base leading-relaxed">
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
        </div>
      </section>
    </>
  );
};

export default Categorias;
