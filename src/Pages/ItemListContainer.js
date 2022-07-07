import './css/ItemListContainer.css';
import ItemList from '../components/ItemList'
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

function ItemListContainer(){

    
    const [ productos, setProductos ] = useState([]);
    const params = useParams();
    let Categoria = params.category;
    

    useEffect( () =>{
        if(Categoria === undefined ) {
        setTimeout(()=>{
            fetch('DATOS_PRUEBA.json')
            .then(resp => resp.json())
            .then(data => setProductos(data))
            },1000)
        }else{
            console.log(Categoria)
            setTimeout(()=>{
                fetch('../DATOS_PRUEBA.json')
                .then(resp => resp.json())
                .then(data => setProductos(data.filter( (i) => i.categoria===Categoria)))
            },2000)
        }
    },[]); 
    

    return(
        <div className='bgOndas cuerpoProducto justify-content-evenly m-0 '>
            <ItemList productos={productos}/>
        </div>
    )
}
export default ItemListContainer;