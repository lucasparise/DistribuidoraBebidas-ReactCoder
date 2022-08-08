import { toast } from 'react-toastify';
import './Card.css';
import ItemCount from "./ItemCount.js"
import { Link } from "react-router-dom";
import React from 'react';
import {CartContext} from './CartContext';
import {useContext, useState } from 'react';



function Card({Imagen, NombreProducto, Descripcion, Precio, Stock, ID, categoria}){

    const { onAdd } = useContext(CartContext);
    const [ cont, setCont ] = useState(true);
    const [ compra, setCompra ] = useState(false);

    const agregarProducto =  (cantidad) =>{
        toast.success( cantidad + " items agregados al carrito", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        onAdd({Imagen, NombreProducto, Descripcion, Precio, Stock, ID, categoria}, cantidad)
        setCont(false)
        setCompra(true)
    }
    
    return(
        <div className="card mb-3 anchoMax">
            <div className="row g-0">
            <div className="col-sm-4">
            <Link to={`/producto/${ID}`}>
                <button className='btn btn-outline-primary p-1 m-0' style={{minWidth: 200}}>
                    <img src={Imagen} className="img-fluid rounded-start" alt="" style={{
                                                                                    height: 200,
                                                                                    width: "auto"
                                                                                }}/>
                </button>
            </Link>
            </div>
            <div className="col-sm-8">
                <div className="card-body">
                    <h5 className="card-title">{NombreProducto}.</h5>
                    <p className="card-text">Categoria: {categoria}.</p>
                    <p className="card-text text-muted">${Precio} - ({Stock} disponibles)</p>
                </div>
                {cont === true && <ItemCount stock={Stock} initial='1' onAdd={agregarProducto}/>}
                {compra === true && <div className='input-group justify-content-evenly px-5'>
                                    <Link to={`/cart`} className='btn btn-success'>Finalizar compra</Link>
                                    <button to={`/productos`} className='btn btn-outline-secondary'>En carrito</button>
                                    </div> }
            </div>
            </div>
        </div>
    )
}
export default Card;