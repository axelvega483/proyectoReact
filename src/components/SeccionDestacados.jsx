import { Link } from "react-router-dom";
import imagen from "../assets/img/cactus_cebra_n6.jpg";
import "../css/SeccionDestacados.css";
export const SeccionDestacados = () => {
  return (
    <div className="destacados">
      <h3>Destacados</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Reprehenderit, modi.
      </p>
      <section>
        <article>
          <img
            src={imagen}
            alt="imagen"
          />
          <cite>Cactus</cite>
          <h4>Cactus Cebra</h4>
          <p>$5.020,00</p>
        </article>

        <article>
          <img
            src={imagen}
            alt="imagen"
          />
          <cite>Cactus</cite>
          <h4>Cactus Cebra</h4>
          <p>$5.020,00</p>
        </article>

        <article>
          <img
            src={imagen}
            alt="imagen"
          />
          <cite>Cactus</cite>
          <h4>Cactus Cebra</h4>
          <p>$5.020,00</p>
        </article>


      </section>
      <div>
      <Link to="/productos" className="btn btn-dark">Ver Todo ➡</Link>
      </div>
    </div>
  )
}
