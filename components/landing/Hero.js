import React from "react";

const Hero = () => {
  return (
    <>
      <div className="relative z-0 overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl">
          
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg className="absolute inset-y-0 right-0 hidden w-48 h-full text-white transform translate-x-1/2 lg:block"    fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
               
            <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
                <nav className="relative flex items-center mt-10 sm:h-10 lg:justify-start">
                    <h1 className="text-5xl font-extrabold tracking-tight text-center text-blue-600 sm:text-6xl md:text-7xl">
                    Purifica tu vida
                    </h1>
                </nav>
            </div>
            
            <main className="px-4 mx-auto mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <p className="text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                 Recupera tu salud y la de tu familia con nuestra gama de productos para purificar el agua. 
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                    >
                     Suscríbete
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#"
                      className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-blue-700 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                    >
                     Contáctanos
                    </a>
                  </div>
                </div>
              </div>
            </main>
            
          </div>
        </div>
        <div className="bg-fixed lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="object-cover w-full h-56 sm:h-72 md:h-96 lg:max-w-2xl lg:h-full"
            src="https://firebasestorage.googleapis.com/v0/b/vital-solution-store.appspot.com/o/%C2%BFCua%CC%81nta-agua-debes-tomar-al-di%CC%81a-.jpg?alt=media&token=8b366391-9f61-479b-91fc-8bc94e6eebf7"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
