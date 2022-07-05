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
        {info.map((info) =>  (<Card key={info.Id} Img={info.Imagen} 
                            Nombre={info.NombreProducto} 
                            Descripcion={info.Descripcion} 
                            Precio={info.Precio} 
                            Stock={info.Stock}
                            ID={info.Id}/>))}
        </>
    )
}
export default ItemList;