import { toast } from 'react-toastify';
import './Card.css';
import ItemCount from "./ItemCount.js"
import { Link } from "react-router-dom";
import React from 'react';

function Card({Img, Nombre, Descripcion, Precio, Stock, ID, categoria}){

    const onAdd =  (cantidad) =>{
        toast.success( cantidad + " items agregados al carrito", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
    
    return(
        <div className="card mb-3 anchoMax">
            <div className="row g-0">
            <div className="col-sm-4">
            <Link to={`/producto/${ID}`}>
                <button className='btn btn-outline-primary p-1 m-0'>
                    <img src={Img} className="img-fluid rounded-start" alt=""/>
                </button>
            </Link>
            </div>
            <div className="col-sm-8">
                <div className="card-body">
                    <h5 className="card-title">{Nombre}.</h5>
                    <p className="card-text">Categoria: {categoria}.</p>
                    <p className="card-text text-muted">${Precio}</p>
                </div>
                <ItemCount stock={Stock} initial='1' onAdd={onAdd}/>
            </div>
            </div>
        </div>
    )
}
export default Card;