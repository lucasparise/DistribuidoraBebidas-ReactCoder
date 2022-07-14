import React, { useState, createContext} from 'react';

export const CartContextProvider = ({defaultValue=[],children}) =>{
    
    const [ productosCarrito, setProductosCarrito ] = useState(defaultValue);
    
    const borrarCarrito = () => {
        setProductosCarrito([]);
    }


    const estaEnCarrito = (id) => {
            console.log(productosCarrito)
            console.log(id)
        return productosCarrito.some((element) => element.producto.ID === id)
    }

    const onAdd = (producto, cantidad) => {
        
        if (estaEnCarrito(producto.ID)) {
            const newCarrito = [...productosCarrito]
            for (const element of newCarrito) {
                if (element.producto.ID === producto.ID) {
                    element.cantidad+=cantidad
                }
            }
            setProductosCarrito(newCarrito)
        } else {
            setProductosCarrito(
                [productosCarrito.push({producto,cantidad})]
            ) 
            
        }
        
    }
    
    const borrarProducto = (id) =>{
        const nuevoCarrito = productosCarrito.filter( i => i.item.ID !== id);
        setProductosCarrito(nuevoCarrito);
    }

    
    
    return(
        <CartContext.Provider value={{
            itemsCarrito:productosCarrito,
            onAdd: onAdd,
            borrarProducto: borrarProducto,
            borrarCarrito: borrarCarrito,
            estaEnCarrito: estaEnCarrito,
        }}>
            {children}
        </CartContext.Provider>
    )
};

const CartContext = createContext({
    itemsCarrito: [],
    onAdd: (producto, cantidad) =>{},
    borrarCarrito: () => {},
    borrarProducto: (id) => {},
    isInCart: (id) => {},
});

export default CartContext;