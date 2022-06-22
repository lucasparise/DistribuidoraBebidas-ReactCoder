import './CartWidget.css';
import logoCarrito from '../assets/logoCarrito.png';

function CartWidget(cantItems){
    return(
        <div className=''>
                <a className='mx-2' href='#'>
                    <img src={logoCarrito} alt='LogoCarrito' height='50' width='auto'/>
                </a>
                <span className='cantItem'>5</span> {/* el 5 se va a reemplazar por la var cant items */}
        </div>
    )
}
export default CartWidget;