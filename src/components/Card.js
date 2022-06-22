import './Card.css';
import imgPrueba from "../assets/imgPrueba.webp";

function Card(){
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
                <button className='btn btn-primary'>Agregar al carrito</button>
            </div>
            </div>
        </div>
    )
}
export default Card;