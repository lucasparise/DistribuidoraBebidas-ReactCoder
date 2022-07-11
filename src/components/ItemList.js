import Card from './Card'
import React from 'react';

function ItemList(props){

    return(
        <>
        {props.productos.map(info => <Card ID={info.ID} 
                            Img={info.Imagen} 
                            Nombre={info.NombreProducto} 
                            Descripcion={info.Descripcion} 
                            Precio={info.Precio} 
                            Stock={info.Stock}
                            categoria={info.categoria}
                            />)}
                            
        </>
    )
}
export default ItemList;