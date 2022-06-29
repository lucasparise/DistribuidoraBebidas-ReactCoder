import { useEffect, useState } from 'react';
import Card from './Card'


function ItemList(){

    const [info, setInfo] =useState([])

    useEffect(()=>{
        setTimeout(() =>{
        fetch('DATOS_PRUEBA.json')
        .then((resp) => resp.json())
        .then((datosProductos) => setInfo(datosProductos))
        },3000)
    }, [])
        
    
    return(
        <>
        {info.map((i) =>  (<Card Img={i.Imagen} 
                            Nombre={i.NombreProducto} 
                            Descripcion={i.Descripcion} 
                            Precio={i.Precio} 
                            Stock={i.Stock}/>))}
        </>
    )
}
export default ItemList;