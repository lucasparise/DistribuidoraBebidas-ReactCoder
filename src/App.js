import './App.css';
import { Routes, Route} from 'react-router-dom';
import NavBar from './Pages/NavBar';
import Home from './Pages/Home';
import Footer from './Pages/footer';
/* import Contacto from "./pages/contacto" */
import ItemListContainer from './Pages/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer';
import { ToastContainer} from 'react-toastify';

function App() {
  return (
    <body className="App">
      <NavBar/>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/inicio" element={<Home/>}></Route>
        <Route path="/productos" element={<ItemListContainer />}></Route>
        {/* <Route path="/contacto" element={<Contacto/>}></Route> */}
          <Route path="/producto/:ID" element={<ItemDetailContainer />}></Route>
          <Route path="/categoria/:category" element={<ItemListContainer />}></Route>
      </Routes>
      
      
      <ToastContainer />
      <Footer/>
    </body>
  );
}

export default App;
