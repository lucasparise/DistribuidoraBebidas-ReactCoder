import './css/FAQ.css'

function FAQ(){
    return(
        <div className="cuerpoFaq my-0"> 

        <div className="encabezado bgOndas text-center">
            <h1 className="mb-4 mt-0 py-3"> PREGUNTAS FRECUENTES </h1>
        </div>

        <div className="accordion" id="accordionExample">
            <div className="accordion-item shadow-sm m-1 bg-light">
            <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button collapsed textoPreguntas" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                ¿Cómo funciona nuestro servicio?
                </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                <p>PASO 1: Elegí desde tu casa todos los productos que necesitás.</p>
                <p>PASO 2: Completa el formulario de entrega indicando direccion, día y horaio para el envio. </p>
                <p>PASO 3: Hacemos la entrega en tu domicilio en el día y horario pactado.</p>
                </div>
            </div>
            </div>
            <div className="accordion-item shadow-sm m-1 bg-light">
            <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed textoPreguntas" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                ¿Cúanto cuesta el servicio de entrega a domicilio de nuestros productos?
                </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    El servicio de entrega a domicilio es gratis para CABA, y $500 para el GBA
                </div>
            </div>
            </div>
            <div className="accordion-item shadow-sm m-1 bg-light">
            <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed textoPreguntas" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                ¿En qué dias y horario pasarían por mi domicilio?
                </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    Siempre te ofrecemos diferentes alternativas para poder encontrarte. Para tener más información, por favor, comunicate por medio de nuestros canales.
                </div>
            </div>
            </div>
            <div className="accordion-item shadow-sm m-1 bg-light">
            <h2 className="accordion-header" id="headingFour">
                <button className="accordion-button collapsed textoPreguntas" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                ¿Qué pasa si no estoy en mi domicilio cuando entregan los productos?
                </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    Si no estás, no hay inconveniente. Puede recibir los productos cualquier persona mayor de 18 años.
                </div>
            </div>
            </div>
            <div className="accordion-item shadow-sm m-1 bg-light">
            <h2 className="accordion-header" id="headingFive">
                <button className="accordion-button collapsed textoPreguntas" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                ¿Se puede recoordinar el dia y horario de visita?
                </button>
            </h2>
            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    No hay ningún problema. Con gusto te ofreceremos alternativas para encontrar la opción que te quede cómoda.
                </div>
            </div>
            </div>

            <div className="accordion-item shadow-sm m-1 bg-light">
                <h2 className="accordion-header" id="headingEight">
                    <button className="accordion-button collapsed textoPreguntas" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                    ¿Cómo puedo cancelar o cambiar mi pedido?
                    </button>
                </h2>
                <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    Puedes ponerte en contacto con nosotros a través  de nuestras redes sociales o WhatsApp.
                    </div>
                </div>
            </div>

            <div className="accordion-item shadow-sm m-1 bg-light">
                <h2 className="accordion-header" id="headingNine">
                    <button className="accordion-button collapsed textoPreguntas" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                    ¿Cómo hago para enterarme de los nuevos ingresos?
                    </button>
                </h2>
                <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    Todos los ingresos y novedades serán publicados en nuestras redes sociales.
                    Seguínos en Instagram. Además agendanos en WhatsApp para recibir las novedades a travéz de los mensajes de difusión.
                    </div>
                </div>
            </div>

        </div>
    </div>
    )
}
export default FAQ;