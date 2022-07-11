import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
import ItemCount from './ItemCount';

function ItemDetail(props){
    const producto = props.producto[0];
    const [ contador, setContador ] = useState(true);
    const [ comprado, setComprado ] = useState(false);

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
        setContador(false)
        setComprado(true)
    }

    return(

        <div className="card mb-3 anchoMax">
            <div className="row g-0">
            <div className="col-sm-4">
                    <img src={producto.Imagen} className="img-fluid rounded-start" alt=""/>
            </div>
            <div className="col-sm-8">
                <div className="card-body">
                    <h5 className="card-title">{producto.NombreProducto}.</h5>
                    <p className="card-text">{producto.Descripcion}.</p>
                    <p className="card-text">Categoria: {producto.categoria}.</p>
                    <p className="card-text text-muted">{producto.Precio}</p>
                </div>
                {contador === true &&<ItemCount stock={producto.Stock} initial='1' onAdd={onAdd}/>}
                {comprado === true && <Link to={`/cart`} className='btn btn-primary'>Finalizar Compra</Link>}
            </div>
            </div>
        </div>
    )
}

export default ItemDetail;