import {useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
import ItemCount from './ItemCount';
import {CartContext} from './CartContext';

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
        <div className="bgOndas">
            <div className="container">
                <div className="row col-12 g-0 py-5">
                    <div className="col-sm-6 mt-5">
                            <img src={producto.Imagen} className="img-fluid rounded-start" alt=""/>
                    </div>
                    
                    <div className="col-sm-6">
                        <div className="card-body">
                            <h2 className="card-title titulo color--tituloCuerpo mb-5">{producto.NombreProducto}.</h2>
                            <h5 className="card-text mb-5">{producto.Descripcion}.</h5>
                            <h5 className="card-text mb-5">Categoria: {producto.categoria}.</h5>
                            <h5 className="card-text text-muted mb-5">${producto.Precio} - ({producto.Stock} disponibles)</h5>
                        </div>
                        {contador === true &&<ItemCount  stock={producto.Stock} initial='1' onAdd={agregarProducto}/>}
                        {comprado === true && <Link to={`/productos`} className='btn btn-primary mx-5'>Continuar comprando</Link>}
                        {comprado === true && <Link to={`/cart`} className='btn btn-success mx-5'>Finalizar Compra</Link>}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ItemDetail;