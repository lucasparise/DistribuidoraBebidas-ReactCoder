import ItemDetail from "./itemDetail";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingPage from '../components/LoadingPage'

function ItemDetailContainer(){
    const [ loading, setLoading ] = useState(true)
    const [ producto, setProducto ] = useState([]);
    const params = useParams();
    let IDproducto = params.ID;

        useEffect( () =>{
            
            setTimeout(
                ()=>{
                    fetch('../DATOS_PRUEBA.json')
                        .then(resp => resp.json())
                        .then(data => setProducto(data.find( (i) => parseInt(i.ID)===parseInt(IDproducto))))
                        setLoading(false)
                },2000
            )
        }, [IDproducto] );
        

    return(
        <div>
                { loading === true && <LoadingPage/> }
                { producto.length !== 0 && <ItemDetail producto={producto} /> }  
            
        </div>
    )
}

export default ItemDetailContainer;