import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <body className="App">
      <NavBar/>
      <ItemListContainer/>
      <ToastContainer />
    </body>
  );
}

export default App;
