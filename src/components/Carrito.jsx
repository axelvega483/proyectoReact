
import "../css/Carrito.css";
export const Carrito = (props) => {
  const calcularSubtotal = (planta) => {
    const precioNumerico = parseFloat(planta.precio.replace('$', '').replace(',', ''));
    const cantidad = planta.cantidad || 1; 
     return (precioNumerico * cantidad).toFixed(2);
  };

  return (
    <div className='carrito'>
      <div className="carrito-section">


      {props.Carrito && props.Carrito.map((planta) => (
          <div className="carrito-article" key={planta.id}>
            <img src={planta.img} alt={planta.nombre} />
            <div>
              <h3>{planta.nombre}</h3>
              <p>Cantidad: {planta.cantidad || 1}</p>
              <p>Precio: {planta.precio}</p>
              <p>Subtotal: ${calcularSubtotal(planta)}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="pie-carrito">

        <p>Total $2222</p>
        <button className="btn btn-success">Comprar</button>
      </div>
    </div>
  )
}