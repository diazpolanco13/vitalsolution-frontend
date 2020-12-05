import React, { useState } from "react";
import Dashboard from "../../components/Dashboard";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { fileUpload } from "../../helpers/fileUpload";
import Swal from "sweetalert2";
import { gql, useMutation } from '@apollo/client'


const NUEVO_PRODUCTO = gql`
    mutation nuevoProducto($input: ProductoInput){
        nuevoProducto(input: $input){
            id
            imagen
            nombre
            descripcion
            existencia
            precio
            moneda
            
        }
    }
`;

const NuevoProducto = () => {
  //*---------------------- MUTATION PARA CREAR NUEVO CLIENTE --------------------
  const router = useRouter();
  const [imagenUrl, setImagenUrl] = useState("");
  
  // Mutation para crear nuevos productos, y funcion para actualizar el cache de la app
    const [nuevoProducto] = useMutation(NUEVO_PRODUCTO);
    
    

  // const [ nuevoCliente ] = useMutation(NUEVO_CLIENTE);

  //*---------------------- ENVIAR FORMULARIO A LA BD --------------------

  const formik = useFormik({
    // 1- Denifimos el formulario
    initialValues: {
        imagen: "",
        nombre: "",
        descripcion: "",
        existencia: "",
        precio: "",
        moneda: ""
    },
    //2- Validamos el los campos con Yup
    validationSchema: Yup.object({
        nombre: Yup.string()
            .required("El nombre del producto es obligatorio"),
        descripcion: Yup.string()
            .required("La descrición del producto es obligatoria"),
        existencia: Yup.number()
            .required("Indique la cantidad de producto")
            .positive('No se aceptan numeros negativos')
            .integer('Deben ser numeros enteros'),
        precio: Yup.number()
            .required("Indique el precio del producto")
            .positive('No se aceptan numeros negativos')
            .integer('Deben ser numeros enteros'),
        moneda: Yup.string()
            .required("Indique un tipo de cambio"),
    }),
    //3- Enviamos el formulario al Backend
    onSubmit: async (valores) => {

        let { nombre, descripcion, existencia, precio, moneda } = valores;

        precio = parseInt(precio, 10)
        existencia = parseInt(existencia, 10)

        console.log(imagenUrl, nombre, descripcion, existencia, precio, moneda)
        
        
        try {
        const { data } = await nuevoProducto({
          variables: {
                input: {
                nombre,
                descripcion,
                existencia,
                precio,
                moneda,
                imagen: imagenUrl
            },
          },
        });
        console.log(data)

        //redireccionar hacia clientes
        // router.push("/dashboard/productos");
        } catch (error) {
            console.log(error)
        // Swal.fire({
        //   icon: "error",
        //   title: error.message,
        //   showConfirmButton: false,
        //   timer: 3000,
        // });
      }
    },
  });

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileUrl = await fileUpload(file); //Helper para subir imagenes a cloudinary
      setImagenUrl(fileUrl);
    }
  };
  const handleCancelNewUser = () => {
    setImagenUrl("");
    router.push("/dashboard/productos"); //redireccionar hacia clientes
  };

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
                        Información de prodúcto
                      </h3>
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
                                <span className="bg-gray-100">
                                  Cargar un archivo
                                </span>
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
                          Foto del producto
                        </label>
                       
                        <div className="flex items-start justify-center h-full p-2 mt-1">
                          {imagenUrl === "" ? (
                            <span className="flex items-start overflow-hidden bg-gray-100 rounded-md w-28">
                               <svg
                                className="flex items-center w-full h-full text-gray-300"
                                fill="none" viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            </span>
                          ) : (
                            <img
                              className="flex w-32 h-32 rounded-md "
                              src={imagenUrl}
                              alt=""
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8">
                    <div>
                      <h3 className="text-lg font-medium leading-6 text-gray-900">
                       Detalles del producto
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Describa los detalles, cantidad, precio y existencia del producto. 
                      </p>
                    </div>
                    <div className="grid grid-cols-1 mt-6 gap-y-6 gap-x-4 sm:grid-cols-6">
                      <div className="col-span-6 md:col-span-6">
                        <label
                          htmlFor="nombre"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Nombre del producto
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            id="nombre"
                            className={`block w-full px-3 py-2 placeholder-gray-400  border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none sm:text-sm  ${
                              formik.errors.nombre
                                ? "focus:border-red-500 focus:ring-red-500 placeholder-opacity-100 placeholder-red-300 border-red-500 border-2"
                                : "focus:border-blue-500 focus:ring-blue-500 border"
                            }  sm:text-s`}
                            placeholder={`${
                              formik.errors.nombre
                                ? formik.errors.nombre
                                : "Ingrese el nombre del producto"
                            }`}
                            value={formik.values.nombre}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                        </div>
                        {formik.touched.nombre && formik.errors.nombre ? (
                          <span className="inline-flex items-center justify-self-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-red-500 text-white">
                            {formik.errors.nombre}
                          </span>
                        ) : null}
                      </div>

                      <div className="col-span-6 sm:col-span-6">
                        <label
                          htmlFor="descripcion"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Descripción
                        </label>
                        <div className="mt-1">
                          <textarea
                            type="text"
                            id="descripcion"
                            className={`block w-full max-w-xl px-3 py-2 placeholder-gray-400 sm:text-sm border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none ${
                              formik.errors.descripcion
                                ? "focus:border-red-500 focus:ring-red-500 placeholder-opacity-100 placeholder-red-300 border-red-500 border-2" 
                                : "focus:border-blue-500 focus:ring-blue-500 border"
                            }   sm:text-s`}
                            placeholder={`${
                              formik.errors.descripcion
                                ? formik.errors.descripcion
                                : "Describa el producto"
                                
                            }`}
                            value={formik.values.descripcion}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            
                          />
                        </div>
                        {formik.touched.descripcion && formik.errors.descripcion ? (
                          <span className="inline-flex items-center justify-self-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-red-500 text-white">
                            {formik.errors.descripcion}
                            
                          </span>
                        ) : null}
                      </div>

                      <div className="col-span-6 sm:col-span-2">
                        <label
                          htmlFor="existencia"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Existencia
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            id="existencia"
                            className={`block w-full px-3 py-2 placeholder-gray-400  border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none sm:text-sm  ${
                              formik.errors.existencia
                                ? "focus:border-red-500 focus:ring-red-500 placeholder-opacity-100 placeholder-red-300 border-red-500 border-2"
                                : "focus:border-blue-500 focus:ring-blue-500 border"
                            } sm:text-s`}
                            placeholder={`${
                              formik.errors.existencia
                                ? formik.errors.existencia
                                : "Cantidad"
                            }`}
                            value={formik.values.existencia}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                        </div>
                        {formik.touched.existencia &&
                        formik.errors.existencia ? (
                          <span className="inline-flex items-center justify-self-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-red-500 text-white">
                            {formik.errors.existencia}
                          </span>
                        ) : null}
                      </div>

                      <div className="col-span-6 sm:col-span-2">
                        <label
                          htmlFor="precio"
                          className="block text-sm font-medium text-gray-700"
                        >
                         Precio
                        </label>
                        <div className="mt-1">
                          <input
                            id="precio"
                            type="text"
                            className={`block w-full max-w-lg px-3 py-2 placeholder-gray-400  border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none  sm:text-sm   ${
                              formik.errors.precio
                                ? "focus:border-red-500 focus:ring-red-500 placeholder-opacity-100 placeholder-red-300 border-red-500 border-2"
                                : "focus:border-blue-500 focus:ring-blue-500 border"
                            }  sm:max-w-xs sm:text-s`}
                            placeholder={`${
                              formik.errors.precio
                                ? formik.errors.precio
                                : "Monto"
                            }`}
                            value={formik.values.precio}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                        </div>
                        {formik.touched.precio && formik.errors.precio ? (
                          <span className="inline-flex items-center justify-self-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-red-500 text-white">
                            {formik.errors.precio}
                          </span>
                        ) : null}
                      </div>
                      <div className="col-span-6 sm:col-span-2">
                        <label
                          htmlFor="moneda"
                          className="block text-sm font-medium text-gray-700"
                        >
                         Moneda
                        </label>
                        <div className="mt-1">
                          <select
                            id="moneda"
                            type="text"
                            className={`block w-full max-w-lg px-3 py-2 placeholder-gray-400  border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none  sm:text-sm focus:border-blue-500 focus:ring-blue-500 border"
                            sm:max-w-xs sm:text-s`}
                            placeholder="Tipo de moneda"
                            value={formik.values.moneda}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          > 
                            <option  value="none" hidden>Seleccione un tipo</option>
                            <option >Dolares</option>
                            <option >Euros</option>
                            <option >Bolivares</option>
                          </select>
                        </div>
                      </div>
                      
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

export default NuevoProducto;
