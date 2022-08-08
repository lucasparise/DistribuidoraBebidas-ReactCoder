import './App.css';
import {Navigate, Routes, Route} from 'react-router-dom';
import { CartContextProvider } from './components/CartContext';
import NavBar from './Pages/NavBar';
import Home from './Pages/Home';
import Footer from './Pages/footer';
import Contacto from "./Pages/contacto"
import FAQ from "./Pages/FAQ"
import Page404 from "./Pages/Page404"
import ItemListContainer from './Pages/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer';
import { ToastContainer} from 'react-toastify';
import Cart from "./Pages/Cart";

function App() {
  return (
    <CartContextProvider>
      <div className="App">
        <NavBar/> 
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path="/inicio" element={<Home/>}></Route>
          <Route path="/productos" element={<ItemListContainer />}></Route>
          <Route path="/contacto" element={<Contacto/>}></Route>
          <Route path="/FAQ" element={<FAQ/>}></Route>
          <Route path="/producto/:ID" element={<ItemDetailContainer />}></Route>
          <Route path="/categoria/:category" element={<ItemListContainer />}></Route>
          <Route path="/cart" element={<Cart />}></Route> 
          <Route path="/notFound" element={<Page404 />} />
          <Route path="*" element={<Navigate replace to="/notFound"/>} />
        </Routes>
        <ToastContainer />
      </div>
        <Footer/>
    </CartContextProvider>
  );
}

export default App;
