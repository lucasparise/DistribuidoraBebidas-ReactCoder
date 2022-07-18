import './css/NavBar.css';
import CartWidget from '../components/CartWidget'
import logo from "../assets/Icono.png";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import React from 'react';

function NavBar(){
    return(
        <header className='boxHeader sticky-top'>
                    <nav className='navbar navbar-expand-lg navbar-light menu'>
            <div className='container-fluid'>
                <NavLink  className='navbar-brand' to='/inicio'>
                    <img src={logo} alt='Logo' height='75' width='auto'/>
                </NavLink>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse  justify-content-end' id='navbarNav'>
                    <ul className='navbar-nav'>
                        <NavDropdown className='nav-item itemMenu' title="Productos" id="basic-nav-dropdown">
                            <NavLink className='itemMenu dropdown-item' to="/productos">Todos</NavLink>
                            <NavLink className='itemMenu dropdown-item' to="/categoria/Gaseosa">Gaseosa</NavLink>
                            <NavLink className='itemMenu dropdown-item' to="/categoria/Aperitivo">Aperitivo </NavLink>
                            <NavLink className='itemMenu dropdown-item' to="/categoria/Bebida blanca">Bebida blanca</NavLink>
                            <NavLink className='itemMenu dropdown-item' to="/categoria/Espumantes">Espumantes</NavLink>
                            <NavLink className='itemMenu dropdown-item' to="/categoria/Vinos">Vinos</NavLink>
                            <NavLink className='itemMenu dropdown-item' to="/categoria/Aguas">Aguas </NavLink>
                            <NavLink className='itemMenu dropdown-item' to="/categoria/Licores">Licores</NavLink>
                        </NavDropdown>
                        <NavLink className='nav-item itemMenu nav-link' to="/FAQ">Preguntas Frecuentes</NavLink>
                        <NavLink className='nav-item itemMenu nav-link' to="/contacto">Contacto</NavLink>
                    </ul>
                    <CartWidget/>
                </div>
            </div>
        </nav>
            
        </header>
    )
}

export default NavBar;