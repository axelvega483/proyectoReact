
import "../css/SeccionCategorias.css";
import { ArticuloCategoria } from "./ArticuloCategoria";
export const SeccionCategorias = () => {
  const categorias = [{
    id: 1,
    nombre: "Exterior",
    img: "src/assets/img/Plantas/cactus cebra n6.jpg"

  },
  {
    id: 2,
    nombre: "Interoir",
    img:"src/assets/img/Plantas/singonio t12.jpg"
  },
  {
    id: 3,
    nombre: "Accesorios",
    artesania:"src/assets/img/Artesanias/IMG_20210715_115738.jpg"

  }];
  return (
    <div className="categorias">
      <h3>Categorias</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Reprehenderit, modi.
      </p>
      <section>
        {
          categorias.map((cat) => {
            return <ArticuloCategoria categoria={cat} key={cat.id}></ArticuloCategoria>
          })
        }
      </section>
    </div >
  )
}
