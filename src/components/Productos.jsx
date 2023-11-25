import { useState, useEffect } from 'react'
import { Cargando } from './Cargando';

export const Productos = () => {

  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchApi = async () => {
    setLoading(true);
    await fetch("https://jsonplaceholder.typicode.com/photos")
      .then(response => response.json())
      .then(data => {
        setPhotos(data);
      })
      .finally(() => setLoading(false))
  }


  useEffect(() => {
    fetchApi()
  }, []);

  return (
    <>
      <div className='productos'>
        <h1>Productos</h1>
        {loading && <Cargando></Cargando>}
        <section className='seccion-productos'>
          {
            props.photos.map((photo) => {
              return <article key={photo.id}>
                <img loading='eager' src={photo.url} alt={photo.title} />
                <h2>{photo.title}</h2>
              </article>


            })
          }
        </section>
      </div>
    </>
  )
}
