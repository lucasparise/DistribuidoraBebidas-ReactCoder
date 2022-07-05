import ItemDetail from "./itemDetail";


function ItemDetailContainer(ID){
    const idProducto = ID;

    let producto = setTimeout(() =>{
        fetch('DATOS_PRUEBA.json')
        .then((resp) => resp.json())
        .then((datosProductos) => setInfo(datosProductos.filter(e=>e.id === 'ID')))
        },2000)


    return(
        <ItemDetail producto={producto[0]}/>
    )
}

export default ItemDetail;