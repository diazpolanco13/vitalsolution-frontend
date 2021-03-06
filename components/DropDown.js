import React, { useEffect, useMemo } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useQuery, gql } from '@apollo/client';
import { useRouter } from 'next/router';
import Loading from "./Loading";




const OBTENER_USUARIO = gql`
  query obtenerUsuario {
    obtenerUsuario {
      id
      nombre
      apellido
      email
      telefono
    }
  }
`;


const DropDown = () => {

  const router = useRouter();

  //query apolo
  const { data, loading, error } = useQuery(OBTENER_USUARIO);
  
  if (loading || error) return null

    //Sino hay token y por ende no hay informacion enviar al login
    if (!data.obtenerUsuario) {
      router.push('/auth/login');
    }
 
  
  if ( loading ) return <Loading />

  const { nombre } = data.obtenerUsuario || {};
  const { apellido } = data.obtenerUsuario || {};
  const { email } = data.obtenerUsuario || {};
  
  //Cerrar Sesion - eliminar el token y enviar al login
  const cerrarSesion = () => {
    localStorage.removeItem('token')
    router.push('/auth/login')
  }


  return (
    <>
        <div className="relative ml-3">
          <Menu>
            {({ open }) => (
              <>
                <span>
                  <Menu.Button
                    className="flex items-center max-w-xs text-sm rounded-full focus:outline-none focus:shadow-outline"
                    id="user-menu"
                    aria-label="User menu"
                    aria-haspopup="true"
                  >
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </Menu.Button>
                </span>

                <Transition
                  show={open}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 w-48 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">
                    <div
                      className="py-1 bg-white rounded-md shadow-xs"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu"
                    >
                      <div>
                      <div className="px-4 py-3">
                          <p className="text-sm leading-5">
                            {`${nombre} ${apellido}`}
                          </p>
                          <p className="text-xs font-medium leading-5 text-gray-900 truncate">
                            {`${email}`}
                          </p>
                        </div>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/auth/login"
                              className={`${
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700"
                              } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                            >
                              Perfil
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                      <div>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/"
                              className={`${
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700"
                              } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                              role="menuitem"
                            >
                              Configuración
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                      <div>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                            //   onClick={handleLogout}
                              onClick={ () => cerrarSesion()  }
                              className={`${
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700"
                              } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left cursor-pointer`}
                              role="menuitem"
                            >
                              Salir
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                    </div>
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu>
        </div>
      </>
  );
};

export default DropDown;
