import "../css/Carrito.css";
export const Carrito = (props) => {
  return (
    <div className='carrito'>
      <div className="carrito-section">


        {
          props.carrito && props.carrito.map((planta) => {
            return <div className="carrito-article" key={planta.id}>
              <img src={planta.img} alt="" />
              <div>

                <h3>{planta.nombre}</h3>
                <p>Cantidad: 3</p>
                <p>Precio: {planta.precio}</p>
                <p>Subtotal: $10.200</p>
              </div>
            </div>
          })
        }
      </div>

      <div className="pie-carrito">

        <p>Total $2222</p>
        <button className="btn btn-success">Comprar</button>
      </div>
    </div>
  )
}