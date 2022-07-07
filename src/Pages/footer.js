import './css/footer.css';
import iconoWP from '../assets/whatsapp-icon.png';
import iconoTW from '../assets/twitter-icon.png';
import iconoIG from '../assets/instagram-icon.png';
import iconoFB from '../assets/facebook-icon.png';

function footer(){
    return(

    <footer className="pieDePagina">
    <div class="itemPie">
        <img className="imgfoot" src={iconoWP} alt="Wpicono"/>
        <p class="my-3 color--textoCuerpo">1512345678</p>
    </div>
    <div class="itemPie textoPie align-items-center" >
        <p class="color--textoCuerpo">Seguinos en nuestras redes sociales:</p>
    </div>
    <div class="itemPie">
        <a href="https://twitter.com/">
            <img class="imgfoot"  src={iconoTW} alt="Twicono"/>
        </a>

        <a href="https://instagram.com/">
            <img class="imgfoot" src={iconoIG} alt="Igicono"/>
        </a>

        <a href="https://Facebook.com/">
            <img class="imgfoot" src={iconoFB} alt="Fbicono"/>
        </a>
    </div>
</footer>)
}
export default footer;