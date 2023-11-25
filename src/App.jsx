import { Route, Routes } from 'react-router-dom';
import './css/App.css';
import { Inicio } from './components/Inicio';
import { Productos } from './components/Productos';
import { Carrito } from './components/Carrito';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Menu } from './components/Menu';
import { Footer } from './components/Footer';
import { Nosotros } from './components/Nosotros';
function App() {

  return (
    <div className='aplicacion'>
      <Menu></Menu>
      <Routes>
        <Route path='/' element={<Inicio></Inicio>} ></Route>
        <Route path='/productos' element={<Productos></Productos>} ></Route>
        <Route path='/carrito' element={<Carrito></Carrito>} ></Route>
        <Route path='/nosotros' element={<Nosotros></Nosotros>} ></Route>

      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
