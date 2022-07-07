import ItemDetail from "./itemDetail";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ItemDetailContainer(){
    
    const [ producto, setProducto ] = useState([]);
    const params = useParams();
    console.log(params.productName)

        useEffect( () =>{
            setTimeout(
                ()=>{
                    fetch('../DATOS_PRUEBA.json')
                        .then(resp => resp.json())
                        .then(data => setProducto(data.filter( (i) => i.NombreProducto===params.productName)))
                },2000
            )
        }, [] );
        console.log(producto)
        console.log(producto[2])


    return(
        <div>
                
                { producto.length !== 0 && <ItemDetail producto={producto} /> }  
            
        </div>
    )
}

export default ItemDetailContainer;