import './css/footer.css';
import iconoWP from '../assets/whatsapp-icon.png';
import iconoTW from '../assets/twitter-icon.png';
import iconoIG from '../assets/instagram-icon.png';
import iconoFB from '../assets/facebook-icon.png';

function footer(){
    return(

    <footer className="pieDePagina">
    <div className="itemPie">
        <img className="imgfoot" src={iconoWP} alt="Wpicono"/>
        <p className="my-3 color--textoCuerpo">1512345678</p>
    </div>
    <div className="itemPie textoPie align-items-center" >
        <p className="color--textoCuerpo">Seguinos en nuestras redes sociales:</p>
    </div>
    <div className="itemPie">
        <a href="https://twitter.com/">
            <img className="imgfoot"  src={iconoTW} alt="Twicono"/>
        </a>

        <a href="https://instagram.com/">
            <img className="imgfoot" src={iconoIG} alt="Igicono"/>
        </a>

        <a href="https://Facebook.com/">
            <img className="imgfoot" src={iconoFB} alt="Fbicono"/>
        </a>
    </div>
</footer>)
}
export default footer;