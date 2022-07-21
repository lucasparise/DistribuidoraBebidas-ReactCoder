import './css/ItemListContainer.css';
import ItemList from '../components/ItemList'
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import LoadingPage from '../components/LoadingPage'
import {getFirestore, getDocs, collection, query, where } from 'firebase/firestore'


function ItemListContainer(){

    const [ loading, setLoading ] = useState(true)
    const [ productos, setProductos ] = useState([]);
    const params = useParams();
    let Categoria = params.category;
    useEffect( () =>{

        if(Categoria === undefined ) {
            const db = getFirestore();
            const itemsRef = collection(db, "items")
            getDocs(itemsRef).then ((snapshot) => {
                setProductos(snapshot.docs.map((doc) => doc.data()))
                setLoading(false)
            })
            
        }else{
            const db = getFirestore();
            const itemsCat = query(collection(db,"items"), where("categoria", "==", Categoria))
            getDocs(itemsCat).then ((snapshot) => {
                setProductos(snapshot.docs.map((doc) => doc.data()))
                setLoading(false)
            })
        }
    },[Categoria]); 

    return(
        <div className='bgOndas cuerpoProducto justify-content-evenly m-0 '>
            { loading === true && <LoadingPage/> }
            <ItemList productos={productos}/>
        </div>
    )
}
export default ItemListContainer;