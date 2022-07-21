import ItemDetail from "./itemDetail";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingPage from '../components/LoadingPage'
import {getFirestore, getDoc, doc} from 'firebase/firestore'

function ItemDetailContainer(){
    const [ loading, setLoading ] = useState(true)
    const [ producto, setProducto ] = useState([]);
    const params = useParams();
    let IDproducto = params.ID;
    
        useEffect( () =>{
                const db = getFirestore();

                const itemRef = doc(db, "items", (IDproducto))
            
                getDoc(itemRef).then ((snapshot) => {
                if(snapshot.exists()){
                setProducto(snapshot.data())
                console.log(producto)
                setLoading(false)
                }
            })
        }, [IDproducto] );
        

    return(
        <div>
                { loading === true && <LoadingPage/> }
                <ItemDetail producto={producto} />
            
        </div>
    )
}

export default ItemDetailContainer;