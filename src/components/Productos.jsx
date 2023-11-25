import { useState, useEffect } from 'react'
import { Cargando } from './Cargando';
import "../css/SeccionProductos.css";
import { Link } from 'react-router-dom';
export const Productos = ({ plantas, setPlantas, carrito, setCarrito }) => {

  //const [photos, setPhotos] = useState([]);

  return (
    <>
      <div className='productos'>
        <h1>Productos</h1>
        <section className='seccion-productos'>
          {
            plantas.map((planta) => {
              return <article key={planta.id}>
                <img
                  src={planta.img}
                  alt="imagen"
                />
                <cite>{planta.categoria}</cite>
                <h4>{planta.nombre}</h4>
                <p>{planta.precio}</p>
                <button onClick={() => {
                  setCarrito([...carrito, planta])
                }} className='btn btn-sm btn-primary'>Agregar</button>
              </article>


            })
          }
        </section>
      </div>
    </>
  )
}
