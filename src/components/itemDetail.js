import React, { useState } from 'react';
import ItemCount from './ItemCount';
import { Link } from "react-router-dom";


function ItemDetail(props){
    const producto = props.productoDetalle[0];

    return(
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="row g-0">
                <div className="col-sm-4">
                <img src={producto.Imagen} className="img-fluid rounded-start" alt=""/>
                </div>
                <div className="col-sm-8">
                    <div className="card-body">
                        <h5 className="card-title">{producto.Nombre}.</h5>
                        <p className="card-text">{producto.Descripcion}.</p>
                        <p className="card-text text-muted">{producto.Precio}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;