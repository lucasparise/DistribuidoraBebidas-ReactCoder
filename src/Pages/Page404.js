import './css/Page404.css'
import { Link } from "react-router-dom";

function Page404(){

    return(
        <div className="body">
            <div id="particles" className="particles">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <main>
                <section>
                    <h1>Página No Encontrada!</h1>
                    <div>
                        <span>4</span>
                        <span className="circle">0</span>
                        <span>4</span>
                    </div>
                    <p>No se ha podido encontrar la página que buscabas.</p>
                    <div>
                    <Link to={`/inicio`}><button>Volver a pagina principal</button></Link>
                    </div>
                </section>
            </main>
        </div>
        )


}

export default Page404;
