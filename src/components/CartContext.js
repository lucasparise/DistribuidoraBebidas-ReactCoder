import React, { useState, createContext} from 'react';

export const CartContext = createContext({})

const {Provider} = CartContext

export const CartContextProvider = ({defaultValue=[],children}) =>{
    
    const [ productosCarrito, setProductosCarrito ] = useState(defaultValue);
    
    const borrarCarrito = () => {
        setProductosCarrito([]);
    }


    const estaEnCarrito = (id) => {  
        return productosCarrito.find((element) => element.item.ID === id)
    }

    const onAdd = (producto, cantidad) => {

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

    const totalProductos = () =>{
        let cantidad = 0
        productosCarrito.forEach((element) => cantidad = cantidad + element.quantity)
        return cantidad
    }

    const precioTotal = () =>{
        let total = 0
        productosCarrito.forEach((element) => {
            total = parseInt(total) + ( parseInt(element.quantity) * parseInt(element.item.Precio))
        })
        return total
    }

    const context ={
        productosCarrito,
        borrarCarrito,
        borrarProducto,
        onAdd,
        totalProductos,
        precioTotal
    }
    
    return(
        <Provider value={context}>
            {children}
        </Provider>
    )
};