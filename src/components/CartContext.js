import React, { useState, createContext} from 'react';

export const CartContext = createContext({})

const {Provider} = CartContext

/* const CartContext = createContext({
    itemsCarrito: [],
    onAdd: (producto, cantidad) =>{},
    borrarCarrito: () => {},
    borrarProducto: (id) => {},
    isInCart: (id) => {},
}); */

export const CartContextProvider = ({defaultValue=[],children}) =>{
    
    const [ productosCarrito, setProductosCarrito ] = useState(defaultValue);
    
    const borrarCarrito = () => {
        setProductosCarrito([]);
    }


    const estaEnCarrito = (id) => {  
        return productosCarrito.find((element) => element.item.ID === id)
    }

    const onAdd = (producto, cantidad) => {
        console.log(producto, cantidad)

        if (estaEnCarrito(producto.ID))  {

            const newCart = [...productosCarrito]
            for(const element of newCart){
                if(element.item.ID === producto.ID){
                    element.quantity = element.quantity + cantidad;
                }
            }
            setProductosCarrito(newCart)

        }else{
            setProductosCarrito([...productosCarrito, {item: producto, quantity:cantidad}]);
        }
    }
    
    const borrarProducto = (id) =>{
        const nuevoCarrito = productosCarrito.filter( i => i.item.ID !== id);
        setProductosCarrito(nuevoCarrito);
    }

    const context ={
        productosCarrito,
        borrarCarrito,
        borrarProducto,
        onAdd,
    }
    
    return(
        <Provider value={context}>
            {children}
        </Provider>
    )
};