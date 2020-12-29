import React from 'react'
import { useRouter } from "next/router";

const RealizarCompra = () => {

//1. Obtener el id del producto desde la ruta del navegador
const router = useRouter();
const { query: { id } } = router;

    return (
        <div>
            esta es la compra con el siguiente {id}
        </div>
    )
}

export default RealizarCompra
