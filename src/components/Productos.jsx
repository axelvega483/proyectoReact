import { useState } from 'react'
import "../css/SeccionProductos.css"

export const Productos = () => {
  const [carrito, setCarrito]= useState([])
  const [photos, setPhotos] = useState([
    {
      id: 1,
      categoria: "Exterior",
      img: "src/assets/img/Plantas/escila.jpg",
      nombre: "Escilla",
      precio: "$4.500,00",
    },
    {
      id: 2,
      categoria: "Exterior",
      img: "src/assets/img/Plantas/cactus_chin.jpg",
      nombre: "Cactus Chin",
      precio: "$4.500,00",
    },
    {
      id: 3,
      categoria: "Exterior",
      img: "src/assets/img/Plantas/echinocereus_coccineus.jpg",
      nombre: "Echionocerus Coccineus",
      precio: "$3.500,00",
    },
    {
      id: 4,
      categoria: "Exterior",
      img: "src/assets/img/Plantas/cactus_cebra.jpg",
      nombre: "Cactus Cebra",
      precio: "$4.500,00",
    },
    {
      id: 5,
      categoria: "Exterior",
      img: "src/assets/img/Plantas/kalanchoe.jpeg",
      nombre: "Kalanchoe",
      precio: "$6.500.00",
    },
    {
      id: 6,
      categoria: "Interior",
      img: "src/assets/img/Plantas/singonio.jpg",
      nombre: "Singonio",
      precio: "$4.500.00",
    },
    {
      id: 7,
      categoria: "Interior",
      img: "src/assets/img/Plantas/maihueniopsis_molinensis.jpg",
      nombre: "Maihueniopsis Molinesis",
      precio: "$3.500,00",
    },
    {
      id: 8,
      categoria: "Interior",
      img: "src/assets/img/Plantas/malvon_rosado.jpeg",
      nombre: "Malvon Rosado",
      precio: "$6.500,00",
    },
    {
      id: 9,
      categoria: "Interior",
      img: "src/assets/img/Plantas/ombligo_de_reina.jpg",
      nombre: "Ombligo de Reina",
      precio: "$6.450,00",
    },
    {
      id: 10,
      categoria: "Interior",
      img: "src/assets/img/Plantas/tradescantia_sillamontana.jpg",
      nombre: "Tradescantia Sillamontana",
      precio: "$3.200,00",
    },
    {
      id: 11,
      categoria: "Accesorio",
      img: "src/assets/img/Artesanias/IMG_20210715_115738.jpg",
      nombre: "Porta Aros",
      precio: "$4.500.00",
    },
    {
      id: 12,
      categoria: "Accesorio",
      img: "src/assets/img/Artesanias/IMG_20210715_120447.jpg",
      nombre: "Centro de Mesa",
      precio: "$3.500,00",
    },
    {
      id: 13,
      categoria: "Accesorio",
      img: "src/assets/img/Artesanias/IMG_20210901_144651.jpg",
      nombre: "Imanes",
      precio: "$2.500,00",
    },
    {
      id: 14,
      categoria: "Accesorio",
      img: "src/assets/img/Artesanias/IMG_20210901_144943.jpg",
      nombre: "Porta Saumerios",
      precio: "$1.500,00",
    },
    {
      id: 15,
      categoria: "Accesorio",
      img: "src/assets/img/Artesanias/IMG_20210901_102859.jpg",
      nombre: "Clips",
      precio: "$1.000,00",
    },
    {
      id: 16,
      categoria: "Accesorio",
      img: "src/assets/img/Artesanias/IMG_20220225_112423.jpg",
      nombre: "Porta Saumerio",
      precio: "$2.500,00",
    },
    {
      id: 17,
      categoria: "Accesorio",
      img: "src/assets/img/Artesanias/IMG_20220715_115139.jpg",
      nombre: "Porta Vela",
      precio: "$7.500,00",
    },
    {
      id: 18,
      categoria: "Accesorio",
      img: "src/assets/img/Artesanias/IMG_20220715_121652.jpg",
      nombre: "Llamador de Angel",
      precio: "$15.000,00",
    },

  ]);



  return (
    <>
      <div className='productos'>
        <h1>Productos</h1>
        
        <section className='seccion-productos'>
          {
            photos.map((photo) => {
              return <article key={photo.id}>
                <h3>{photo.categoria}</h3>
                <img src={photo.img} alt={photo.nombre} />
                <p>{photo.precio}</p>
                <button onClick={() => {
                  setCarrito([...carrito, photo])
                }} className='btn btn-sm btn-primary'>Agregar</button>
              </article>
            })
          }
        </section>
      </div>
      
    </>
  );
}
