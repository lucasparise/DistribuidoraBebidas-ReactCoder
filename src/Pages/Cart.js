function Cart(){
    return(
        <div className="row g-5">
            <div className="col-md-5 col-lg-4 order-md-last">
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-primary">Tu Compra</span>
                <span id="contador" className="badge bg-primary rounded-pill"></span>
                </h4>
                <ul id="carritoCompra" className="list-group mb-3" name="carritoCompra"> 

                

                </ul>
                <li className="list-group-item d-flex justify-content-between mb-3">
                    <span><strong>Total</strong></span>
                    <p id="precioTotal" className="fw-bold"></p>
                </li>
                <button id="botonVaciar" className="btn btn-danger">Vaciar Carrito</button>
            </div>
        </div>
    )
}
export default Cart;