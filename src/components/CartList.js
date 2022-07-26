import React, { useContext } from 'react';
import {CartContext} from './CartContext';
import {toast} from 'react-toastify';

function CartList (producto){
    const {borrarProducto} = useContext(CartContext);
    const item = producto
    let subtotal = parseInt(item.producto.item.Precio)* parseInt(item.producto.quantity)

    const eliminarProducto = () =>{
    toast.error('Producto Eliminado', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
        borrarProducto(item.producto.item.ID);
}

    return(
    
        <li className="list-group-item d-flex justify-content-between lh-sm">
            <button className="btn btn-danger me-4"  onClick={eliminarProducto}>X</button>
            <div className="flex-grow-1">
                <h6 className="my-0">{item.producto.quantity}  x  {item.producto.item.NombreProducto}</h6>
                <small className="text-muted">{item.producto.item.Descripcion}</small>
            </div>
            <span className="text-muted">${subtotal}</span>
        </li>
    )
}


export default CartList;
