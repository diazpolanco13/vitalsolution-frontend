import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col justify-between mt-12 text-gray-700 border border-gray-200 body-font border-t-1">
        <div className="container justify-center w-full px-5 py-8 mx-auto">
          <div className="flex flex-wrap justify-around order-first text-center md:text-left">
            <div className="flex flex-row justify-around w-1/2">
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font">
                CATEGORIES
              </h2>
              <nav className="mb-10 list-none">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    First Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Second Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Third Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font">
                CATEGORIES
              </h2>
              <nav className="mb-10 list-none">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    First Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Second Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Third Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
                        
            </div>
            
                      
            <div className="w-full px-4 lg:w-1/3 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font">
                SUBSCRIBETE
              </h2>
              <div className="flex flex-wrap items-end justify-center xl:flex-no-wrap md:flex-no-wrap lg:flex-wrap md:justify-start">
                <div className="relative w-full mr-2 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4">

                  <input
                    type="text"
                    placeholder="Email"
                    id="footer-field"
                    name="footer-field"
                    className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 border border-gray-300 rounded outline-none focus:border-blue-500"
                  />
                </div>
                <button className="inline-flex flex-shrink-0 px-6 py-2 text-white bg-blue-500 border-0 rounded lg:mt-2 xl:mt-0 focus:outline-none hover:bg-blue-600">
                  Enviar
                </button>
              </div>
              <p className="mt-2 text-sm text-center text-gray-500 md:text-left">
                Envia tu correo electronico 
                <br className="hidden lg:block" />
                y recibe notificaciones sobre nuestros descuentos 
              </p>
            </div>
          
           </div>
        </div>
        <div className="bg-gray-200">
          <div className="container flex flex-col items-center px-5 py-6 mx-auto sm:flex-row">
            <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
              <img className="w-8 h-10" src="https://res.cloudinary.com/apidev/image/upload/v1608163115/UI/lktforxez7vtiaxsavvj.png" alt="vital solution"/>
                
              <span className="ml-3 text-xl">Vital Solution Store</span>
            </a>
            <p className="mt-4 text-sm text-gray-500 sm:ml-6 sm:mt-0">
              © 2020 Vital solution Store
              
            </p>
            <span className="inline-flex justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-start">
              <a className="text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
