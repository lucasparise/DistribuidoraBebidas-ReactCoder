import './ItemCount.css';
import {useState} from 'react';
import {toast} from 'react-toastify';

function ItemCount({stock, initial, onAdd}){

    const [num, setNum] = useState(parseInt(initial))

    const sumar = () =>{
        if(num < stock){
            setNum(num+1)
        }
        else{
            toast.error('No hay mas stock!', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
    }

    const restar = () =>{
        if(num>0){
            setNum(num-1)
        }
    }

    
    return(
        
        <div className='input-group justify-content-evenly px-5'>
            
            <button className='btn btn-outline-primary' onClick={restar}>-</button>
            <input className='form-control text-center fw-bold' type='text' value={num} disabled readOnly></input>
            <div className='d-flex'>
                <button className='btn btn-outline-primary' onClick={sumar}>+</button>
                <button className='btn btn-primary' onClick={() =>onAdd(num)}>Agregar</button>
            </div>
        </div> 
    )
}

export default ItemCount;