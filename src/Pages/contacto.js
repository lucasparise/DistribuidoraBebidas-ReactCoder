import './css/contacto.css'

function contacto(){
    return(
        

        <div className="cuerpoContacto bgOndas">  

        <div className="contactForm my-0 p-5 ">
            <div className="formulario">
                <h2 className="mb-4" >Contactate con nosotros</h2>
                <h5 className="mb-5">Escribenos y pronto nos comunicaremos contigo.</h5>

                <form action="" method="get" encType="text/plain">
                    <fieldset>
                        <div className="row mb-4">
                            <div className="col-md mb-4 mx-5 mb-md-0 form-group">
                                <label className="textoForm" htmlFor="name">Nombre:</label>
                                <input className="imputTexto" type="text" id="name" required/>
                            </div>
                            <div className="col-md mx-5 form-group">    
                                <label className="textoForm" htmlFor="apellido">Apellido:</label>
                                <input className="imputTexto" type="text" id="apellido" required/>
                            </div>
                        </div>

                        <div className="form-group mb-4 mx-5">
                            <label className="textoForm mx-5" htmlFor="mail">E-mail:</label>
                            <input className="imputTexto" type="email" id="mail" required/>
                        </div>

                        <div className="form-group mb-4 mx-5">
                            <label className="textoForm mx-5" htmlFor="direccion">Dirección:</label>
                            <input className="imputTexto" type="text" id="direccion" required/>
                        </div>

                        <div className="form-group mb-4 mx-5">
                            <div className="col-md mb-4 mb-md-0 form-group"> 
                                <label className="textoForm mx-5" htmlFor="telefono">Teléfono:</label>
                                <input className="imputTexto" type="tel" id="telefono" required/>
                            </div>
                        </div>

                            <div className="mb-4 mx-5">
                                <p>¿Cuál es el motivo de tu mensaje?</p>
                                <div className="form-check form-check-inline">
                                    <label htmlFor="es_cliente"> Hacer un pedido</label> 
                                    <input className="" type="radio" name="motivo" value="1" required/>
                                </div>
                                <div className="form-check form-check-inline">
                                    <label htmlFor="es_cliente"> Sugerencias</label> 
                                    <input type="radio" name="motivo" value="2" required/> 
                                </div>
                                <div className="form-check form-check-inline">
                                    <label htmlFor="es_cliente"> Reclamos</label> 
                                    <input type="radio" name="motivo" value="3" required/> 
                                </div>
                                <div className="form-check form-check-inline">
                                    <label htmlFor="es_cliente"> Otros</label> 
                                    <input type="radio" name="motivo" value="4" required/> 
                                </div>
                            </div>

                            
                        <div className="form-group mb-5 mx-5">
                            <label htmlFor="comentarios"> Tu mensaje: </label>
                            <textarea className="form-control m-2" name="comentarios" id="comentarios" rows="8" required ></textarea>
                        </div>    

                        <div className="d-flex justify-content-center">
                            <input type="submit" className="btn btn-primary mx-5" value="Enviar"/> 
                            <input type="reset" className="btn btn-secondary mx-5" value="Limpiar"/>
                        </div>
                        
                    </fieldset>
                </form>
            </div>
        </div>
    </div>



    )
}
export default contacto;