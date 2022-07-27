import Form from 'react-bootstrap/Form';
import React, { useContext, useState } from "react";
import {CartContext} from '../components/CartContext';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import Swal from 'sweetalert2'

function FormCopra (){
    const {popUpCarritoVacio, productosCarrito, borrarCarrito, precioTotal} = useContext(CartContext)
    const [validated, setValidated] = useState(false);

    /* verificador de form */
    const handleSubmit = (event) => { 
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        setValidated(true);
    }else{
        event.preventDefault();
        setValidated(true);
        popUpFinalizarCompra();}
    };

    /* verificador de carrito y confirmacion de compra */
    const popUpFinalizarCompra = () => {
        if (productosCarrito.length === 0){
            popUpCarritoVacio();
        }else{
            Swal.fire({
                icon: 'warning',
                iconColor: '#1ea300',
                title: 'Desea finalizar su compra?',
                confirmButtonColor: '#1ea300',
                showCancelButton: true,
                confirmButtonText: 'Si, finalizar',
                cancelButtonText: `Seguir comprando`,
            }).then((result) => {
                if (result.isConfirmed) {
                    finalizarCompra();
                }
            })
        }
    }

    /* proceso de subir orden a db */

    const [ nombre, setNombre ] = useState("");
    const [ apellido, setApellido ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ telefono, setTelefono ] = useState("");
    const [ direccion, setDireccion ] = useState("");
    const [ dia, setDia ] = useState("");
    const [ turno, setTurno ] = useState("");
    const [ medioPago, setMedioPago ] = useState("");

    const tiempoTranscurrido = Date.now();
    const fecha = new Date(tiempoTranscurrido);

    const db = getFirestore();

    const finalizarCompra = () =>{
        const sendOrder = {
            "buyer": {
                "name" : nombre,
                "lastName" : apellido,
                "phone" : telefono,
                "email" : email,
                "direccion": direccion,
            },
            "entrega": {
                "dia" : dia,
                "turno" : turno,
                "medioPago" : medioPago,
            },
            "items": productosCarrito,
            "date": fecha.toLocaleDateString(),
            "total": "$ "+precioTotal(),
        };
        addDoc(collection(db, "orders"), sendOrder).then(({id}) => compraFinalizada(id));
        borrarCarrito();
    }

    const compraFinalizada = (numero) =>{
        Swal.fire({
            icon: 'success',
            iconColor: '#1ea300',
            title: 'Su compra ha sido procesada su ID de compra es ' + numero ,
            showConfirmButton: false,
            timer: 3500
        })

    }

    return(
    <div className="col-md-7 col-lg-8">
        <h4 className="mb-3">Formulario de entrega</h4>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <div className="row g-3">

                <div className="col-sm-6">
                    <label htmlFor="firstName" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="firstName"  required name="firstName" onChange={(event) => setNombre(event.target.value)}/>
                    <div className="invalid-feedback">
                    Ingresar un nombre valido.
                    </div>
                </div>

                <div className="col-sm-6">
                    <label htmlFor="lastName" className="form-label">Apellido</label>
                    <input type="text" className="form-control" id="lastName" required name="lastName" onChange={(event) => setApellido(event.target.value)}/>
                    <div className="invalid-feedback">
                        Ingresar un apellido valido.
                    </div>
                </div>

                <div className="col-12">
                    <label htmlFor="address" className="form-label">Direccion</label>
                    <input type="text" className="form-control" id="address" required name="address" onChange={(event) => setDireccion(event.target.value)}/>
                    <div className="invalid-feedback">
                        Ingresa una direccion valida.
                    </div>
                </div>

                <div className="col-6">
                        <label htmlFor="Telefono" className="form-label">Telefono</label>
                        <input type="Telefono" className="form-control" id="Telefono" placeholder="1512345678" required name="telefono" onChange={(event) => setTelefono(event.target.value)}/>
                        <div className="invalid-feedback">
                            Ingresa un telefono valido.
                        </div>
                </div>

                <div className="col-6">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="nombre@ejemplo.com" required name="email" onChange={(event) => setEmail(event.target.value)}/>
                    <div className="invalid-feedback">
                            Por favor ingresar un E-mail valido.
                    </div>
                </div>

                <div className="col-md-4">
                    <label htmlFor="diaEntrega" className="form-label">Dia de entrega</label>
                        <select className="form-select" id="diaEntrega" required name="diaEntrega" onChange={(event) => setDia(event.target.value)}>  
                            <option value="">elegir...</option>
                            <option>Lunes</option>
                            <option>Martes</option>
                            <option>Miercoles</option>
                            <option>Jueves</option>
                            <option>Viernes</option>
                            <option>Sabado</option>
                        </select>
                        <div className="invalid-feedback">
                            Ingresar un dia de entrega.
                        </div>
                </div>

                <div className="col-md-4">
                    <label htmlFor="Turno" className="form-label">Turno</label>
                        <select className="form-select" id="Turno" required name="Turno" onChange={(event) => setTurno(event.target.value)}>
                            <option value="">elegir...</option>
                            <option>Mañana (8-12hs)</option>
                            <option>Tarde (12-18hs)</option>
                        </select>
                        <div className="invalid-feedback">
                            Ingresa una opcion.
                        </div>
                </div>

                <div className="col-md-4">
                    <label htmlFor="formaPago" className="form-label">Forma de Pago</label>
                        <select className="form-select" id="formaPago" required name="formaPago" onChange={(event) => setMedioPago(event.target.value)}>
                            <option value="">elegir...</option>
                            <option>Efectivo</option>
                            <option>MercadoPago</option>
                            <option>Tarjeta de debito</option>
                        </select>
                        <div className="invalid-feedback">
                            Ingresa una opcion.
                        </div>
                </div>

                <hr className="my-4"/>

                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="same-address"/>
                        <label className="form-check-label" htmlFor="same-address">Acepto que se me envíen notificaciones por Email.</label>
                    </div>

                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="save-info" required/>
                    <label className="form-check-label" htmlFor="save-info">Acepto Bases y Condiciones.</label>
                    <div className="invalid-feedback">
                        Tiene que aceptar antes de finalizar.
                    </div>
                </div>

                <hr className="my-4"/>
                    
                <button id="finalizarCompra" className="w-100 btn btn-primary btn-lg" type="submit">Finalizar compra</button>
            </div>
            
        </Form>
    </div>
    
    )

}

export default FormCopra;
