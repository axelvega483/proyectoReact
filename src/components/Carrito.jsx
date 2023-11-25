import "../css/Carrito.css";
export const Carrito = ({ carrito }) => {
  return (
    <div className='carrito'>
      <div className="carrito-section">
        <div className="carrito-article">
          <img src="src/assets/img/logo.png" alt="" />
          <div>

            <h3>Cactus</h3>
            <p>Cantidad: 3</p>
            <p>Precio: $5.500</p>
            <p>Subtotal: $10.200</p>
          </div>
        </div>
        <div className="carrito-article">
          <img src="src/assets/img/logo.png" alt="" />
          <div>

            <h3>Cactus</h3>
            <p>Cantidad: 3</p>
            <p>Precio: $5.500</p>
            <p>Subtotal: $10.200</p>
          </div>
        </div>
        <div className="carrito-article">
          <img src="src/assets/img/logo.png" alt="" />
          <div>

            <h3>Cactus</h3>
            <p>Cantidad: 3</p>
            <p>Precio: $5.500</p>
            <p>Subtotal: $10.200</p>
          </div>
        </div>

      </div>

      <div className="pie-carrito">

        <p>Total $2222</p>
        <button className="btn btn-success">Comprar</button>
      </div>
    </div>
  )
}
