
import "../css/SeccionCategorias.css";
import { ArticuloCategoria } from "./ArticuloCategoria";
export const SeccionCategorias = () => {
  const categorias = [{
    id: 1,
    nombre: "Plantas"
  },
  {
    id: 2,
    nombre: "Accesorios"
  },
  {
    id: 3,
    nombre: "Macetas"
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
