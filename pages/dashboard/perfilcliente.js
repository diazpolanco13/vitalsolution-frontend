import React, { useState } from "react";
import Dashboard from "../../components/Dashboard";
import { useFormik } from "formik";
import * as Yup from "yup";
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { fileUpload } from "../../helpers/fileUpload";
import Swal from "sweetalert2";

const NUEVO_CLIENTE = gql`
    mutation nuevoCliente($input: ClienteInput){
        nuevoCliente(input: $input){
          id
          imagen
          nombre
          documentoIndentidad
          profesion
          email
          telefono
          vendedor
          direccion {
            estado
            municipio
            lugar
          }
        planAfiliacion {
          ofertas
          recordatorio
          suscripcion
          }
        }
      }
`;

const OBTENER_CLIENTES_USUARIOS = gql`
      query obtenerClientes {
        obtenerClientes {
          id
          nombre
          apellido
          documentoIndentidad
          telefono
          email
          vendedor
          creado
          direccion {
            estado
            lugar
            municipio
          }
          imagen
          profesion
          planAfiliacion {
            ofertas
            recordatorio
            suscripcion
          }
         }
      }
`;


const PerfilCliente = () => {

  //*---------------------- MUTATION PARA CREAR NUEVO CLIENTE --------------------
  const router = useRouter();
  const [imagenUrl, setImagenUrl] = useState('')
  // Mutation para crear nuevos clientes, y funcion para actualizar el cache de la app
  //   Mutation para crear nuevos clientes
    const [ nuevoCliente ] = useMutation(NUEVO_CLIENTE, {
    
      update(cache, { data: { nuevoCliente } }) {

      
      //Obtener el objeto de cache que deseamos actualizar
      const { obtenerClientes } = cache.readQuery({ query: OBTENER_CLIENTES_USUARIOS });
      
      //Rescribimos el cache (el cahe no se debe modificar, mas si rescribir)
      cache.writeQuery({
        query: OBTENER_CLIENTES_USUARIOS, //cual se modifica? 
        data: {
          obtenerClientes : [...obtenerClientes, nuevoCliente] // Con que se modifica
        }
      })
    }
  })

  // const [ nuevoCliente ] = useMutation(NUEVO_CLIENTE);
  
  //*---------------------- ENVIAR FORMULARIO A LA BD --------------------

  const formik = useFormik({
    // 1- Denifimos el formulario
    initialValues: {
      imagen: "",
      nombre: "",
      apellido: "",
      documentoIndentidad: "",
      profesion: "",
      email: "",
      telefono: "",
      direccion: {
        estado: "",
        municipio: "",
        lugar: "",
      },
      planAfiliacion: {
        ofertas: false,
        recordatorio: false,
        suscripcion: false,
      },
    },
    //2- Validamos el los campos con Yup
    validationSchema: Yup.object({
      nombre: Yup.string().required("El nombre es obligatorio"),
      apellido: Yup.string().required("El apellido es obligatorio"),
      documentoIndentidad: Yup.string().required(
        "La cédula de identidad es obligatoria"
      ),
      telefono: Yup.string().required("El telefono es obligatorio"),
      profesion: Yup.string(),
      email: Yup.string()
        .email("El email no es correcto")
        .required("El email es obligatorio"),
      estado: Yup.string(),
      municipio: Yup.string(),
      lugar: Yup.string(),
      ofertas: Yup.bool(),
      recordatorio: Yup.bool(),
      suscripcion: Yup.bool(),
    }),
    //3- Enviamos el formulario al Backend
    onSubmit: async valores => {
      let {  nombre, apellido, documentoIndentidad, profesion, email, telefono, direccion, planAfiliacion } = valores;   
        try {
          const { data } = await nuevoCliente({
          variables: {
            input: {
              imagen: imagenUrl,
              nombre,
              apellido,
              email,
              documentoIndentidad,
              profesion,
              telefono,
              direccion,
              planAfiliacion
            }
          }
        });
        // console.log(data.nuevoCliente)

        router.push('/dashboard/clientes') //redireccionar hacia clientes

      } catch (error) {
        Swal.fire({
          // position: 'top-end',
          icon: 'error',
          title: error.message,
          showConfirmButton: false,
          timer: 3000
        })
      }
    },
  });

  const handleFileChange = async (e) => {
    const file = e.target.files[0]
    if (file) {
      const fileUrl = await fileUpload(file); //Helper para subir imagenes a cloudinary
      setImagenUrl(fileUrl)
    }
  }
  const handleCancelNewUser = () => {
    setImagenUrl('')
    router.push('/dashboard/clientes') //redireccionar hacia clientes

  }

  return (
    <>
      <Dashboard>
        <main
          className="relative flex justify-center flex-1 overflow-y-auto focus:outline-none"
          tabIndex="0"
        >
          <div className="py-0">
            <div className="justify-center px-4 mx-auto sm:px-6 md:px-8">
              {/* Replace with your contesnt */}

              <form 
              onSubmit={formik.handleSubmit}
              className="justify-center max-w-full py-12 space-y-8 divide-y divide-gray-200"
              >
                <div className="space-y-8 divide-y divide-gray-200">
                  <div>
                    <div>
                      <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Perfil
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                      Esta información se mostrará públicamente, así que tenga cuidado con lo que comparte.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 mt-6 gap-y-6 gap-x-4 sm:grid-cols-6">
                    
                      <div className="sm:col-span-3">
                        <label
                          htmlFor="cover_photo"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Cargar foto
                        </label>
                        <div className="flex justify-center px-6 pt-5 pb-6 mt-2 border-2 border-gray-300 border-dashed rounded-md">
                          <div className="space-y-1 text-center">
                            <svg
                              className="w-12 h-12 mx-auto text-gray-400"
                              stroke="currentColor"
                              fill="none"
                              viewBox="0 0 48 48"
                              aria-hidden="true"
                            >
                              <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <div className="flex text-sm text-gray-600">
                              <label
                                htmlFor="imagen"
                                className="relative font-medium text-indigo-600 bg-gray-100 rounded-md cursor-pointer hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                              >
                                <span className="bg-gray-100">Cargar un archivo</span>
                                <input
                                  id="imagen"
                                  type="file"
                                  className="sr-only"
                                  value={formik.values.imagen}
                                  // onChange={formik.handleChange}
                                  onChange={handleFileChange}
                                  onBlur={formik.handleBlur}
                                />
                              </label>
                              <p className="pl-1">o arrastrar y soltar</p>
                            </div>
                            <p className="text-xs text-gray-500">
                              PNG, JPG, GIF hasta 10MB
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className=" sm:col-span-3">
                        <label
                          htmlFor="photo"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Imagen
                        </label>
                        <div className="flex items-start justify-center h-full p-2 mt-1">
                          {
                            (imagenUrl === "") ? (
                              <span className="flex items-start overflow-hidden bg-gray-100 rounded-md w-28">
                                <svg
                                  className="flex items-center w-full h-full text-gray-300"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                              </span>
                            ) : (
                              <img className="flex w-32 h-32 rounded-md " src={imagenUrl} alt="" />
                            )
                          }
                         
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8">
                    <div>
                      <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Informacion personal
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                      Utilice una dirección permanente donde pueda recibir correo.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 mt-6 gap-y-6 gap-x-4 sm:grid-cols-6">
                      
                      
                      <div className="sm:col-span-3">
                        <label
                          htmlFor="nombre"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Nombres
                        </label>
                        <div className="mt-1">
                          <input
                              type="text"
                              id="nombre"
                              className={`block w-full px-3 py-2 placeholder-gray-400  border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none sm:text-sm  ${
                              (formik.errors.nombre)
                                ? "focus:border-red-500 focus:ring-red-500 placeholder-opacity-100 placeholder-red-300 border-red-500 border-2"
                                : "focus:border-blue-500 focus:ring-blue-500 border"
                            }  sm:max-w-xs sm:text-s`}
                              placeholder={`${(formik.errors.nombre) ? formik.errors.nombre : "Ingrese su nombre"}`
                              }
                              value={formik.values.nombre}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                        </div>
                          {
                              formik.touched.nombre && formik.errors.nombre ? (
                              <span className="inline-flex items-center justify-self-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-red-500 text-white">
                             {formik.errors.nombre}
                              </span>
                            ) : null
                          }
                      </div>

                      <div className="sm:col-span-3">
                        <label
                          htmlFor="apellido"
                          className="block text-sm font-medium text-gray-700"
                        >
                           Apellidos
                        </label>
                        <div className="mt-1">
                        <input
                              type="text"
                              id="apellido"
                              className={`block w-full max-w-lg px-3 py-2 placeholder-gray-400 sm:text-sm border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none ${
                                (formik.errors.apellido)
                                  ? "focus:border-red-500 focus:ring-red-500 placeholder-opacity-100 placeholder-red-300 border-red-500 border-2"
                                  : "focus:border-blue-500 focus:ring-blue-500 border"
                              }  sm:max-w-xs sm:text-s`}
                                placeholder={`${(formik.errors.apellido) ? formik.errors.apellido : "Ingrese su apellido"}`
                                }
                              value={formik.values.apellido}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                        </div>
                        {
                              formik.touched.apellido && formik.errors.apellido ? (
                              <span className="inline-flex items-center justify-self-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-red-500 text-white">
                             {formik.errors.apellido}
                              </span>
                            ) : null
                          }
                      </div>
                      
                      <div className="sm:col-span-3">
                        <label
                          htmlFor="nombre"
                          className="block text-sm font-medium text-gray-700"
                        >
                         Documento de identidad
                        </label>
                        <div className="mt-1">
                          <input
                              type="text"
                              id="documentoIndentidad"
                              className={`block w-full px-3 py-2 placeholder-gray-400  border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none sm:text-sm  ${
                              (formik.errors.documentoIndentidad)
                                ? "focus:border-red-500 focus:ring-red-500 placeholder-opacity-100 placeholder-red-300 border-red-500 border-2"
                                : "focus:border-blue-500 focus:ring-blue-500 border"
                            }  sm:max-w-xs sm:text-s`}
                              placeholder={`${(formik.errors.documentoIndentidad) ? formik.errors.documentoIndentidad : "V-12346789"}`
                              }
                              value={formik.values.documentoIndentidad}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                        </div>
                        {
                              formik.touched.documentoIndentidad && formik.errors.documentoIndentidad ? (
                              <span className="inline-flex items-center justify-self-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-red-500 text-white">
                             {formik.errors.documentoIndentidad}
                              </span>
                            ) : null
                          }
                      </div>

                      <div className="sm:col-span-3">
                        <label
                          htmlFor="apellido"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Telefono
                        </label>
                        <div className="mt-1">
                        <input
                              id="telefono"
                              type="text"
                              className={`block w-full max-w-lg px-3 py-2 placeholder-gray-400  border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none  sm:text-sm   ${
                                (formik.errors.telefono)
                                  ? "focus:border-red-500 focus:ring-red-500 placeholder-opacity-100 placeholder-red-300 border-red-500 border-2"
                                  : "focus:border-blue-500 focus:ring-blue-500 border"
                              }  sm:max-w-xs sm:text-s`}
                                placeholder={`${(formik.errors.telefono) ? formik.errors.telefono : "0414-1234567"}`
                                }
                              value={formik.values.telefono}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                        </div>
                          {
                              formik.touched.telefono && formik.errors.telefono ? (
                              <span className="inline-flex items-center justify-self-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-red-500 text-white">
                             {formik.errors.telefono}
                              </span>
                            ) : null
                          }
                      </div>

                      

                      <div className="sm:col-span-3">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email
                        </label>
                        <div className="mt-1">
                          <input
                              id="email"
                              className={`block w-full px-3 py-2 placeholder-gray-400  border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none  sm:text-sm   ${
                                (formik.errors.email)
                                  ? "focus:border-red-500 focus:ring-red-500 placeholder-opacity-100 placeholder-red-300 border-red-500 border-2"
                                  : "focus:border-blue-500 focus:ring-blue-500 border"
                              }  sm:max-w-xs sm:text-s`}
                                placeholder={`${(formik.errors.email) ? formik.errors.email : "Ingrese su email de contacto"}`
                                }
                              value={formik.values.email}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                        </div>
                        {
                              formik.touched.email && formik.errors.email ? (
                              <span className="inline-flex items-center justify-self-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-red-500 text-white">
                             {formik.errors.email}
                              </span>
                            ) : null
                          }
                      </div>

                      <div className="sm:col-span-3">
                        <label
                          htmlFor="profesion"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Profesión
                        </label>
                        <div className="mt-1">
                        <input
                              id="profesion"
                              type="text"
                              className={`block w-full max-w-lg px-3 py-2 placeholder-gray-400  border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none  sm:text-sm   ${
                                (formik.errors.profesion)
                                  ? "focus:border-red-500 focus:ring-red-500 placeholder-opacity-100 placeholder-red-300 border-red-500 border-2"
                                  : "focus:border-blue-500 focus:ring-blue-500 border"
                              }  sm:max-w-xs sm:text-s`}
                                placeholder={`${(formik.errors.profesion) ? formik.errors.profesion : "Indique su profesión"}`
                                }
                              value={formik.values.profesion}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                        </div>
                        
                      </div>
                      <div className="col-start-1 sm:col-span-4">
                        <label
                          htmlFor="country"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Estado / Ciudad
                        </label>
                        <div className="mt-1">
                        <select
                              id="direccion.estado"
                              className={`block w-full max-w-lg px-3 py-2 placeholder-gray-400  border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none  sm:text-sm   ${
                                (formik.errors.estado)
                                  ? "focus:border-red-500 focus:ring-red-500 placeholder-opacity-100 placeholder-red-300 border-red-500 border-2"
                                  : "focus:border-blue-500 focus:ring-blue-500 border"
                              }  sm:max-w-xs sm:text-s`}
                                placeholder={`${(formik.errors.estado) && formik.errors.estado}`
                                }
                              value={formik.values.direccion.estado}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            >
                              <option>Amazonas</option>
                              <option>Anzoátegui</option>
                              <option>Apure</option>
                              <option>Aragua</option>
                              <option>Barinas</option>
                              <option>Bolívar</option>
                              <option>Carabobo</option>
                              <option>Cojedes</option>
                              <option>Delta Amacuro</option>
                              <option>Distrito Capital</option>
                              <option>Falcón</option>
                              <option>Guárico</option>
                              <option>La Guaira</option>
                              <option>Lara</option>
                              <option>Mérida</option>
                              <option>Miranda</option>
                              <option>Monagas</option>
                              <option>Nueva Esparta:</option>
                              <option>Portuguesa</option>
                              <option>Sucre</option>
                              <option>Táchira</option>
                              <option>Trujillo</option>
                              <option>Yaracuy</option>
                              <option>Zulia</option>
                            </select>
                        </div>
                      </div>

                      

                      <div className="sm:col-end-5 sm:col-start-1 sm:col-span-4">
                        <label
                          htmlFor="direccion.municipio"
                          className="block text-sm font-medium text-gray-700"
                        >
                        Municipio
                        </label>
                        <div className="mt-1">
                        <input
                              type="text"
                              id="direccion.municipio"
                              className={`block w-full max-w-lg px-3 py-2 placeholder-gray-400  border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none  sm:text-sm   ${
                                (formik.errors.municipio)
                                  ? "focus:border-red-500 focus:ring-red-500 placeholder-opacity-100 placeholder-red-300 border-red-500 border-2"
                                  : "focus:border-blue-500 focus:ring-blue-500 border"
                              }  sm:max-w-xs sm:text-s`}
                                placeholder={`${(formik.errors.municipio) ? formik.errors.municipio : "Ingrese el municipio de su residencia"}`
                                }
                              value={formik.values.direccion.municipio}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="sm:col-span-6">
                    <label
                      htmlFor="direccion.lugar"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Dirección
                    </label>
                    <div className="mt-1">
                    <input
                          type="text"
                          id="direccion.lugar"                              
                          className={`block w-full max-w-screen-lg px-3 py-2 placeholder-gray-400  border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none  sm:text-sm   ${
                            (formik.errors.lugar)
                              ? "focus:border-red-500 focus:ring-red-500 placeholder-opacity-100 placeholder-red-300 border-red-500 border-2"
                              : "focus:border-blue-500 focus:ring-blue-500 border"
                          }  sm:max-w-xs sm:text-s`}
                            placeholder={`${(formik.errors.lugar) ? formik.errors.lugar : "Ingrese su dirección de residencia"}`
                            }
                          value={formik.values.direccion.lugar}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        </div>
                      </div>
                  <div className="pt-8">
                    <div>
                      <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Notificaciones
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                      Siempre te informaremos sobre cambios importantes, pero
                        tu eliges si deseas automatizar tus pedidos. 
                      </p>
                    </div>
                    <div className="mt-6">
                      <fieldset>
                        <legend className="text-base font-medium text-gray-900">
                        Plan de afiliacion
                        </legend>

                        <div className="mt-4 space-y-4">

                          <div className="relative flex items-start">
                            <div className="flex items-center h-5">
                            <input
                                id="planAfiliacion.ofertas"
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                value={formik.values.planAfiliacion.ofertas}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                              />
                            </div>

                            <div className="ml-3 text-sm">
                              <label
                                htmlFor="planAfiliacion.ofertas"
                                className="font-medium text-gray-700"
                              >
                                Ofertas
                              </label>
                              <p className="text-gray-500">
                              Recibe una notificación cuando existan ofertas en nuestra plataforma.
                              </p>
                            </div>
                          </div>


                          <div className="relative flex items-start">
                            <div className="flex items-center h-5">
                            <input
                                id="planAfiliacion.recordatorio"
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                value={formik.values.planAfiliacion.recordatorio}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                              />
                            </div>

                          <div className="ml-3 text-sm">
                              <label
                                htmlFor="planAfiliacion.recordatorio"
                                className="font-medium text-gray-700"
                              >
                                Recordatorio
                              </label>
                              <p className="text-gray-500">
                              Recibe un recordatorio para adquirir nuestros productos 30 dias despues de tu ultima compra. 
                              </p>
                            </div>
                          </div>
                          
                          <div className="relative flex items-start">
                            <div className="flex items-center h-5">
                            <input
                                id="planAfiliacion.suscripcion"
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                value={formik.values.planAfiliacion.suscripcion}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label
                                htmlFor="planAfiliacion.suscripcion"
                                className="font-medium text-gray-700"
                              >
                               Suscripción
                              </label>
                              <p className="text-gray-500">
                              Pasados 30 dias de mi ultimo pedido, deseo repetir mi ultima compra.  
                              </p>
                            </div>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                </div>

                <div className="pt-5">
                  <div className="flex justify-end">
                  <button
                      type="button"
                      onClick={handleCancelNewUser}
                        className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Cancelar
                      </button>
                      <button
                        type="submit"
                        className="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-white bg-blue-900 border border-transparent rounded-md shadow-sm disable hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                      >
                        Guardar
                      </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </main>
      </Dashboard>
    </>
  );
};

export default PerfilCliente;
