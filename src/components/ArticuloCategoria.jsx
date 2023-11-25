import { Link } from 'react-router-dom'
import imagen from "";
export const ArticuloCategoria = ({ categoria }) => {

  return (
    <article>
      <Link to={"/productos/" + categoria.id}>
        <img
          src={imagen}
          alt="imagen"
        />
        <h4>{categoria.nombre}</h4>
      </Link>
    </article>
  )
}
