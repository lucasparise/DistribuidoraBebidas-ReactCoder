import {useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
import ItemCount from './ItemCount';
import CartContext from './CartContext';

function ItemDetail(props){
    const producto = props.producto;
    const { onAdd } = useContext(CartContext);
    const [ contador, setContador ] = useState(true);
    const [ comprado, setComprado ] = useState(false);

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
        onAdd(producto, cantidad)
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
                {contador === true &&<ItemCount stock={producto.Stock} initial='1' onAdd={agregarProducto}/>}
                {comprado === true && <Link to={`/cart`} className='btn btn-success'>Finalizar Compra</Link>}
                {comprado === true && <Link to={`/productos`} className='btn btn-primary'>Continuar comprando</Link>}
            </div>
            </div>
        </div>
    )
}

export default ItemDetail;