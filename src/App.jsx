import { Route, Routes, useParams } from 'react-router-dom';
import './css/App.css';
import { Inicio } from './components/Inicio';
import { Productos } from './components/Productos';
import { Carrito } from './components/Carrito';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Menu } from './components/Menu';
import { Footer } from './components/Footer';
import { Nosotros } from './components/Nosotros';
import { useEffect, useState } from 'react';
function App() {
  const [photos, setPhotos] = useState([{

  }]);

  const [carrito, setCarrito] = useState(0);

  const fetchApi = async () => {
    await fetch("https://jsonplaceholder.typicode.com/photos")
      .then(response => response.json())
      .then(data => {
        setPhotos(data);
      })
  }


  useEffect(() => {
    fetchApi()
  }, []);



  return (
    <div className='aplicacion'>
      <Menu carrito={carrito}></Menu>
      <Routes>
        <Route path='/' element={<Inicio></Inicio>} ></Route>
        <Route path='/productos' element={<Productos photos={photos} setPhotos={setPhotos} carrito={carrito} setCarrito={setCarrito}></Productos>} ></Route>
        <Route path='/carrito' element={<Carrito carrito={carrito}></Carrito>} ></Route>
        <Route path='/nosotros' element={<Nosotros></Nosotros>} ></Route>

      </Routes>
      <Footer></Footer>
    </div >
  )
}

export default App
