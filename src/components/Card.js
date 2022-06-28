import { ToastContainer, toast } from 'react-toastify';
import './Card.css';
import ItemCount from "./ItemCount.js"
import imgPrueba from "../assets/imgPrueba.webp";

function Card(){

    const onAdd =  (cantidad) =>{
        toast.success( cantidad + " items agregados al carrito", {
            position: "top-right",
            autoClose: 5000,
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
                <img src={imgPrueba} className="img-fluid rounded-start" alt=""/>
            </div>
            <div className="col-sm-8">
                <div className="card-body">
                    <h5 className="card-title">Nombre Producto.</h5>
                    <p className="card-text">Descripcion Producto.</p>
                    <p className="card-text text-muted">Precio</p>
                </div>
                <ItemCount stock='5' initial='1' onAdd={onAdd}/>
            </div>
            </div>
        </div>
    )
}
export default Card;