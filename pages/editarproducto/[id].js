import React, { useState } from "react";
import Dashboard from "../../components/Dashboard";
import { useRouter } from "next/router";
import { gql, useQuery, useMutation } from "@apollo/client";
import { Formik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { fileUpload } from "../../helpers/fileUpload";
import Sping from "../../components/Sping";

const OBTENER_PRODUCTO = gql`
  query obtenerProducto($id: ID!) {
    obtenerProducto(id: $id) {
      imagen
      nombre
      descripcion
      precio
      moneda
      existencia
    }
  }
`;

const OBTENER_PRODUCTOS = gql`
  query obtenerProductos {
    obtenerProductos {
      id
      imagen
      nombre
      descripcion
      existencia
      precio
      moneda
      creado
    }
  }
`;

const ACTUALIZAR_PRODUCTO = gql`
  mutation actualizarProducto($id: ID!, $input: ProductoInput) {
    actualizarProducto(id: $id, input: $input) {
      imagen
      nombre
      descripcion
      existencia
      precio
      moneda
    }
  }
`;

const EditarProducto = () => {
  const [imagenUrl, setImagenUrl] = useState("");
    
  //1. Obtener el id del producto desde la ruta del navegador
  const router = useRouter();
  const {
    query: { id },
  } = router;

  //2. Obtener el producto
  const { data, loading, error } = useQuery(OBTENER_PRODUCTO, {
    variables: {
      id,
    },
  });

  //3. Mutation para actualizar producto y funcion para actualizar el cache de la app
    const [actualizarProducto] = useMutation(ACTUALIZAR_PRODUCTO, {
        
        //Se efectua la funcion "update" para actualizar el cache
        update(cache, { data: { actualizarProducto } }) {
            
            //1.  Obtener el objeto de cache que deseamos actualizar
            const { obtenerProductos } = cache.readQuery({ query: OBTENER_PRODUCTOS });

            //2. Rescribimos el cache (el cahe no se debe modificar, mas si rescribir)
            cache.writeQuery({
                query: OBTENER_PRODUCTOS, //Se listan los productos
                data: {
                    obtenerProductos: [...obtenerProductos, actualizarProducto] // Se anade el nuevo producto
                }
            })
        }
    });

  //Schema de validacion
  const schemaValidacion = Yup.object({
    nombre: Yup.string().required("El nombre del producto es obligatorio"),
    descripcion: Yup.string().required(
      "La descrición del producto es obligatoria"
    ),
    existencia: Yup.number()
      .required("Indique la cantidad de producto")
      .positive("No se aceptan numeros negativos")
      .integer("Deben ser numeros enteros"),
    precio: Yup.number()
      .required("Indique el precio del producto")
      .positive("No se aceptan numeros negativos")
      .integer("Deben ser numeros enteros"),
    moneda: Yup.string().required("Indique un tipo de cambio"),
  });

  //Proteger que no accedamos a data antes de tener los resultados
  if (loading) return (
    <Sping/>
  )
  if (!data) {
      return 'Accion no permitida'
  }
    
  // Desestructuramos la informacion del producto
  const { obtenerProducto } = data || { obtenerProducto: {} };

  //Modificar el producto de la Base de datos
  const actualizarProductoConDatosNuevos = async (valores) => {
    let { nombre, descripcion, existencia, imagen, precio, moneda } = valores;

    //! Deuda tecnica :'(
    if (imagen && (imagenUrl === "")) {
        imagen = imagen
        // console.log('No realizaron cambios de foto del producto')
    } else if (imagen && (imagenUrl !== "")) {
        imagen = imagenUrl
        // console.log('Renovaron una imagen del producto existente')
    } else if ((imagen === "" && imagenUrl === "")) {
        imagen = imagen
        // console.log('No existia imagen ni vieja ni nueva y no se hizo nada')
    } else if (imagen === "" &&  imagenUrl) {
        imagen = imagenUrl
        // console.log('No existia imagen del producto, se agrego la nueva')
    }

      
    try {
        const { data } = await actualizarProducto({
            variables: {
                id,
                input: {
                    imagen,
                    nombre,
                    descripcion,
                    existencia,
                    precio,
                    moneda,
                }
            }
        });

        // Notificacion de exito!
        Swal.fire(
            'Correcto',
            'El producto se actualizó correctamente',
            'success'
        );


      //Redireccionar a la pagina principal
      router.push('/dashboard/productos') 
        

    } catch (error) {
      console.log(error);
    }
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileUrl = await fileUpload(file); //Helper para subir imagenes a cloudinary
      setImagenUrl(fileUrl);
    }
  };

  const cancelarEdicionProducto = () => {
    setImagenUrl("");
    router.push("/dashboard/productos"); //redireccionar hacia clientes
  };

  return (
    <>
      <Dashboard path="productos">
        <Formik
          validationSchema={schemaValidacion}
          enableReinitialize
          initialValues={obtenerProducto}
          onSubmit={(valores) => {
            actualizarProductoConDatosNuevos(valores);
          }}
        >
          {(props) => {
  
                      
            return (
              <main
                className="relative flex justify-center flex-1 overflow-y-auto focus:outline-none"
                tabIndex="0"
              >
                <div className="py-0">
                  <div className="justify-center px-4 mx-auto sm:px-6 md:px-8">
                    <form
                      onSubmit={props.handleSubmit}
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
                                        onChange={handleFileChange}
                                        onBlur={props.handleBlur}
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
                               {
                                  ((props.values.imagen) === "") && (imagenUrl === "") ? (
                                    <span className="flex items-start overflow-hidden bg-gray-100 rounded-md w-28">
                                    <svg
                                      className="flex items-center w-full h-full text-gray-300"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                      />
                                    </svg>
                                  </span>
                                  ) : (props.values.imagen) && (imagenUrl === "") ? (
                                    <img
                                    className="flex w-32 h-32 rounded-md "
                                    src={props.values.imagen}
                                    alt="Imagen de perfil"
                                  />    
                                    ) : (props.values.imagen) !== imagenUrl ? (
                                      <img
                                      className="flex w-32 h-32 rounded-md "
                                      src={imagenUrl}
                                      alt="Imagen de perfil"
                                    /> 
                                  ) : (props.values.imagen === "") && (imagenUrl !== "") ? (
                                    <img
                                    className="flex w-32 h-32 rounded-md "
                                    src={imagenUrl}
                                    alt="Imagen de perfil"
                                     />
                                  ) : null
                                }
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
                              Describa los detalles, cantidad, precio y
                              existencia del producto.
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
                                    props.errors.nombre
                                      ? "focus:border-red-500 focus:ring-red-500 placeholder-opacity-100 placeholder-red-300 border-red-500 border-2"
                                      : "focus:border-blue-500 focus:ring-blue-500 border"
                                  }  sm:text-s`}
                                  placeholder={`${
                                    props.errors.nombre
                                      ? props.errors.nombre
                                      : "Ingrese el nombre del producto"
                                  }`}
                                  value={props.values.nombre}
                                  onChange={props.handleChange}
                                  onBlur={props.handleBlur}
                                />
                              </div>
                              {props.touched.nombre && props.errors.nombre ? (
                                <span className="inline-flex items-center justify-self-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-red-500 text-white">
                                  {props.errors.nombre}
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
                                    props.errors.descripcion
                                      ? "focus:border-red-500 focus:ring-red-500 placeholder-opacity-100 placeholder-red-300 border-red-500 border-2"
                                      : "focus:border-blue-500 focus:ring-blue-500 border"
                                  }   sm:text-s`}
                                  placeholder={`${
                                    props.errors.descripcion
                                      ? props.errors.descripcion
                                      : "Describa el producto"
                                  }`}
                                  value={props.values.descripcion}
                                  onChange={props.handleChange}
                                  onBlur={props.handleBlur}
                                />
                              </div>
                              {props.touched.descripcion &&
                              props.errors.descripcion ? (
                                <span className="inline-flex items-center justify-self-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-red-500 text-white">
                                  {props.errors.descripcion}
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
                                    props.errors.existencia
                                      ? "focus:border-red-500 focus:ring-red-500 placeholder-opacity-100 placeholder-red-300 border-red-500 border-2"
                                      : "focus:border-blue-500 focus:ring-blue-500 border"
                                  } sm:text-s`}
                                  placeholder={`${
                                    props.errors.existencia
                                      ? props.errors.existencia
                                      : "Cantidad"
                                  }`}
                                  value={props.values.existencia}
                                  onChange={props.handleChange}
                                  onBlur={props.handleBlur}
                                />
                              </div>
                              {props.touched.existencia &&
                              props.errors.existencia ? (
                                <span className="inline-flex items-center justify-self-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-red-500 text-white">
                                  {props.errors.existencia}
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
                                    props.errors.precio
                                      ? "focus:border-red-500 focus:ring-red-500 placeholder-opacity-100 placeholder-red-300 border-red-500 border-2"
                                      : "focus:border-blue-500 focus:ring-blue-500 border"
                                  }  sm:max-w-xs sm:text-s`}
                                  placeholder={`${
                                    props.errors.precio
                                      ? props.errors.precio
                                      : "Monto"
                                  }`}
                                  value={props.values.precio}
                                  onChange={props.handleChange}
                                  onBlur={props.handleBlur}
                                />
                              </div>
                              {props.touched.precio && props.errors.precio ? (
                                <span className="inline-flex items-center justify-self-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-red-500 text-white">
                                  {props.errors.precio}
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
                                  className={`block w-full max-w-lg px-3 py-2 placeholder-gray-400  border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none  sm:text-sm   ${
                                    props.errors.moneda
                                      ? "focus:border-red-500 focus:ring-red-500 placeholder-opacity-100 placeholder-red-300 border-red-500 border-2"
                                      : "focus:border-blue-500 focus:ring-blue-500 border"
                                  }  sm:max-w-xs sm:text-s`}
                                  placeholder={`${
                                    props.errors.moneda && props.errors.moneda
                                  }`}
                                  value={props.values.moneda}
                                  onChange={props.handleChange}
                                  onBlur={props.handleBlur}
                                >
                                  <option value="none" hidden>
                                    Seleccione un tipo
                                  </option>
                                  <option>Dolares</option>
                                  <option>Euros</option>
                                  <option>Bolivares</option>
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
                            onClick={cancelarEdicionProducto}
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
            );
          }}
        </Formik>
      </Dashboard>
    </>
  );
};

export default EditarProducto;
