import './css/Home.css'
import Carousel from 'react-bootstrap/Carousel';
import icoHome1 from '../assets/iconos-home-01.svg'
import icoHome2 from '../assets/iconos-home-02.svg'
import icoHome3 from '../assets/iconos-home-03.svg'
import imgcar2 from '../assets/imgCar2.webp'
import imgcar3 from '../assets/imgCar3.jpg'


function Home(){

    return(
        <>
            <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src={imgcar3} alt="First slide"/>
                <Carousel.Caption>
                <h1>Distribuidora DP</h1>
                <h4>Tu tienda de bebidas</h4>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100"src={imgcar2}alt="Second slide"/>
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        

    <div className="bgOndas nuestros_servicios d-grid">

        <div className="container mb-5" >
            <h2 className="titulo color--tituloCuerpo">¿Por qué elegirnos?</h2>
        </div>
        <div className="d-flex flex-row container">
            <div className="col-4 px-0 px-lg-2">
                <div className="iconos-home d-flex flex-column align-items-center align-items-lg-start flex-lg-row p-2">
                    <img src={icoHome1} className="mr-2 mb-2 mb-lg-0" alt='icono1'/>
                    <div className="text-center text-lg-left">
                        <h5 className="color--tituloCuerpo">PRACTICIDAD</h5>
                        <p className="color--textoCuerpo mx-2">Elegí día y hora. Evitá cargar bolsas desde el supermercado.</p>
                    </div>
                </div>
            </div>

            <div className="col-4 px-0 px-lg-2">
                <div className="iconos-home d-flex flex-column align-items-center align-items-lg-start flex-lg-row p-2">
                    <img src={icoHome2} className="mr-2 mb-2 mb-lg-0" alt='icono2'/>
                    <div className="text-center text-lg-left">
                        <h5 className="color--tituloCuerpo">CONFIANZA</h5>
                        <p className="color--textoCuerpo mx-2">Garantía de cumplimiento y servicio de tu repartidor.</p>
                    </div>
                </div>
            </div>

            <div className="col-4 px-0 px-lg-2">
                <div className="iconos-home d-flex flex-column align-items-center align-items-lg-start flex-lg-row p-2">
                    <img src={icoHome3} className="mr-2 mb-2 mb-lg-0" alt='icono3'/>
                    <div className="text-center text-lg-left">
                    <h5 className="color--tituloCuerpo">CONVENIENCIA</h5>
                    <p className="color--textoCuerpo mx-2">Menor precio y bajo costo de envio.</p>
                    </div>
                </div>
            </div>
        </div>


    <div className="container mb-5">
        <div className="col-lg-12 m-0">
            <h2 className="titulo color--tituloCuerpo">Nuestro Servicio:</h2>
        </div>
        <div className="row col-lg-5 mb-0 px-4 align-top color--textoCuerpo divNuestroServicio">
            <div className="ItemNuestroServicio m-3">
                ► El catalogo mas completo de bedidas y stock permanente.
            </div>
            <div className="ItemNuestroServicio m-3">
                ► Envios a todo CABA y AMBA (consultar precios).
            </div>
            <div className="ItemNuestroServicio m-3">
                ► Aceptamos todas las tarjetas y medios de pago.
            </div>
        </div>
    </div>
    </div>
    </>
    )
}

export default Home;