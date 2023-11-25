import { Link } from 'react-router-dom'

export const ArticuloCategoria = ({ categoria }) => {

  return (
    <article>
      <Link to={"/productos/" + categoria.id}>
        <img
          src={categoria.img}
          alt="imagen"
        />
        <h4>{categoria.nombre}</h4>
      </Link>
    </article>
  )
}
