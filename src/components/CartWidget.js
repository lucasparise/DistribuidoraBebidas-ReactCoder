import './CartWidget.css';
import logoCarrito from '../assets/logoCarrito.png';
import React, { useContext } from 'react';
import {CartContext} from './CartContext';
import { NavLink } from 'react-router-dom';

function CartWidget(cantItems){

    const { totalProductos } = useContext(CartContext)

    const totalProd = totalProductos();

    if(totalProd !== 0){
    return(
        <div className=''>

                <NavLink className='mx-2' to='/cart'>
                    <img src={logoCarrito} alt='LogoCarrito' height='50' width='auto'/>
                </NavLink>
                <span className='cantItem'>{totalProd}</span>
        </div>
    )
    }else{
        return <div></div>
    }
}
export default CartWidget;