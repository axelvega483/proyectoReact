import { useState, useEffect } from 'react'
import { Cargando } from './Cargando';
import "../css/SeccionProductos.css";
import { Link } from 'react-router-dom';
export const Productos = (props) => {

  //const [photos, setPhotos] = useState([]);

  return (
    <>
      <div className='productos'>
        <h1>Productos</h1>
        <section className='seccion-productos'>
          {
            props.photos.map((photo) => {
              return <article key={photo.id}>
                <img
                  src={photo.url}
                  alt="imagen"
                />
                <cite>Cactus</cite>
                <h4>Cactus Cebra</h4>
                <p>$5.020,00</p>
                <button onClick={() => {
                  props.setCarrito(props.carrito + 1)
                }} className='btn btn-sm btn-primary'>Agregar</button>
              </article>


            })
          }
        </section>
      </div>
    </>
  )
}
