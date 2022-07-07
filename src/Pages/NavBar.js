import './css/NavBar.css';
import CartWidget from '../components/CartWidget'
import logo from "../assets/Icono.png";
import Nav from 'react-bootstrap/Nav';
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
                            <NavDropdown.Item className='itemMenu' href="/productos">Todos</NavDropdown.Item>
                            <NavDropdown.Item className='itemMenu' href="/categoria/Gaseosa">Gaseosa</NavDropdown.Item>
                            <NavDropdown.Item className='itemMenu' href="/categoria/Aperitivo">Aperitivo </NavDropdown.Item>
                            <NavDropdown.Item className='itemMenu' href="/categoria/Bebida blanca">Bebida blanca</NavDropdown.Item>
                            <NavDropdown.Item className='itemMenu' href="/categoria/Espumantes">Espumantes</NavDropdown.Item>
                            <NavDropdown.Item className='itemMenu' href="/categoria/Vinos">Vinos</NavDropdown.Item>
                            <NavDropdown.Item className='itemMenu' href="/categoria/Aguas">Aguas </NavDropdown.Item>
                            <NavDropdown.Item className='itemMenu' href="/categoria/Licores">Licores</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className='nav-item itemMenu' href="/FAQ">Preguntas Frecuentes</Nav.Link>
                        <Nav.Link className='nav-item itemMenu' href="/contacto">Contacto</Nav.Link>
                    </ul>
                    <CartWidget/>
                </div>
            </div>
        </nav>
            
        </header>
    )
}

export default NavBar;