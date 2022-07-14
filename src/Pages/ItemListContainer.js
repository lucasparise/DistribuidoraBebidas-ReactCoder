import './css/ItemListContainer.css';
import ItemList from '../components/ItemList'
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import LoadingPage from '../components/LoadingPage'

function ItemListContainer(){

    const [ loading, setLoading ] = useState(true)
    const [ productos, setProductos ] = useState([]);
    const params = useParams();
    let Categoria = params.category;
    

    useEffect( () =>{
        if(Categoria === undefined ) {
        setTimeout(()=>{
            fetch('DATOS_PRUEBA.json')
            .then(resp => resp.json())
            .then(data => setProductos(data))
            setLoading(false)
            },3000)
        }else{
            
            setTimeout(()=>{
                fetch('../DATOS_PRUEBA.json')
                .then(resp => resp.json())
                .then(data => setProductos(data.filter( (i) => i.categoria===Categoria)))
                setLoading(false)
            },2000)
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