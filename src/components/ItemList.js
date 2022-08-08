import Card from './Card'
import React from 'react';

function ItemList(props){

    return(
        <>
        {props.productos.map(info => <Card key={info.ID}
                            ID={info.ID}
                            Imagen={info.Imagen} 
                            NombreProducto={info.NombreProducto} 
                            Descripcion={info.Descripcion} 
                            Precio={info.Precio} 
                            Stock={info.Stock}
                            categoria={info.categoria}
                            />)}
                            
        </>
    )
}
export default ItemList;