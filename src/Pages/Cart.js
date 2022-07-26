import './css/Cart.css'
import {useContext } from 'react';
import {CartContext} from '../components/CartContext';
import Swal from 'sweetalert2'
import CartList from '../components/CartList'
import FormCompra from '../components/FormCopra'


function Cart(){

    const { totalProductos, precioTotal, borrarCarrito, productosCarrito, popUpCarritoVacio  } = useContext(CartContext);
    const  totalCompra = precioTotal();
    const  contador = totalProductos();
    const listaProductos = productosCarrito;

    const VaciarCarrito = () =>{  
        if (contador === 0){
            popUpCarritoVacio();
        }
        else{
            Swal.fire({
                icon: 'warning',
                iconColor: '#bf0202',
                title: 'Desea vaciar el carrito?',
                confirmButtonColor: '#bf0202',
                showCancelButton: true,
                confirmButtonText: 'Si, vaciar',
                cancelButtonText: `Cancelar`,
            }).then((result) => {
                if (result.isConfirmed) {
                    borrarCarrito();
                }
            })
        }
    }

    return(

        <section className="bgOndas p-5">
            <div className="row g-5">
                <div className="col-md-5 col-lg-4 order-md-last">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-primary">Tu Compra</span>
                    <span id="contador" className="badge bg-primary rounded-pill">{contador}</span>
                    </h4>
                    <ul id="carritoCompra" className="list-group mb-3"> 

                    {listaProductos.map(info => <CartList producto={info}/>)}

                    </ul>
                    <li className="list-group-item d-flex justify-content-between mb-3">
                        <span><strong>Total</strong></span>
                        <p id="precioTotal" className="fw-bold">${totalCompra}</p>
                    </li>
                    <button id="botonVaciar" className="btn btn-danger" onClick={VaciarCarrito} >Vaciar Carrito</button>
                </div>
                <FormCompra/>
            </div>
            
        </section>
    )
}
export default Cart;