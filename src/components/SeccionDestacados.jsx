import { Link } from "react-router-dom";
import "../css/SeccionDestacados.css";
import { ArticuloProducto } from "./ArticuloProducto";
export const SeccionDestacados = () => {
  const producto = [{
    id: 1,
    nombre: "Centro de mesa",
    img: "src/assets/img/Artesanias/IMG_20210715_120447.jpg",
    precio:"$3.500,00"

  },
  {
    id: 2,
    nombre: "Cactus Chin",
    img:"src/assets/img/Plantas/cactus_chin.jpg",
    precio:"$8.200,00"
  },
  {
    id: 3,
    nombre: "Kalanchoe",
    img:"src/assets/img/Plantas/kalanchoe.jpeg",
    precio:"$5.020,00"
  }];

  return (
    <div className="destacados">
      <h3>Destacados</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Reprehenderit, modi.
      </p>
      <section>
      {
          producto.map((pro) => {
            return <ArticuloProducto producto={pro} key={pro.id}></ArticuloProducto>
          })
        }
        


      </section>
      <div>
        <Link to="/productos" className="btn btn-dark">Ver Todo ➡</Link>
      </div>
    </div>
  )
}
