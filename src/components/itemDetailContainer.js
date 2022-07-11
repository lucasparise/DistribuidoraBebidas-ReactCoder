import ItemDetail from "./itemDetail";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ItemDetailContainer(){
    
    const [ producto, setProducto ] = useState([]);
    const params = useParams();
    let IDproducto = params.ID;

        useEffect( () =>{
            setTimeout(
                ()=>{
                    fetch('../DATOS_PRUEBA.json')
                        .then(resp => resp.json())
                        .then(data => setProducto(data.filter( (i) => parseInt(i.ID)===parseInt(IDproducto))))
                },2000
            )
        }, [] );
        

    return(
        <div>
                
                { producto.length !== 0 && <ItemDetail producto={producto} /> }  
            
        </div>
    )
}

export default ItemDetailContainer;