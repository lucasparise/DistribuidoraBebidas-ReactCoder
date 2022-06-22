import './ItemListContainer.css';
import Card from './Card'

function ItemListContainer(){
    return(
        <div className='bgOndas cuerpoProducto justify-content-evenly m-0 '>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
}
export default ItemListContainer;