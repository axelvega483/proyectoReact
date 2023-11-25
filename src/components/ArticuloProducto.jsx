import React from 'react'
import { Link } from 'react-router-dom'

export const ArticuloProducto = ({ producto }) => {
    return (
        <article>
            <Link to={"/productos/" + producto.id}>
            <img src={producto.img}
            />
            <h4>{producto.nombre}</h4>
            <p>{producto.precio}</p>
            </Link>
        </article>
    )
}


