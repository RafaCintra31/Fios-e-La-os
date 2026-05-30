
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import styles from '../Css/Navegador.module.css'
import Logo from '../assets/imgens/Logo.svg'
import Carrinho from '../assets/imgens/carrinho.svg'
import Sobre from  "../Componentes/Sobre_nos"

function Navegador(){
    return(
    <nav className={styles.navbar}>
      <div className={styles.navbar__container}>

        <div className={styles.navbar__logo}>
          <div className={styles.navbar__logo_img_wrapper}>
            <img
              src={Logo}
              alt="Logo Fios e Laços"
              className={styles.navbar__logo_img}
            />
          </div>
          <span className={styles.navbar__logo_text}>Fios e Laços</span>
        </div>

        <ul className={styles.navbar__links}>
          <li><Link to="/" className={styles.navbar__link}>Home</Link></li>
          <li><Link to="/Tapetes" className={styles.navbar__link}>Tapetes</Link></li>
          <li><Link to="/Bolsas" className={styles.navbar__link}>Bolsas</Link></li>
          <li><Link to="/Sobre_nos" className={styles.navbar__link}>Sobre</Link></li>
          <li><Link to="/Contato" className={styles.navbar__link}>Contato</Link></li>
        </ul>

        <div className={styles.navbar__cart}>
          <img
            src={Carrinho}
            alt="Carrinho de compras"
            className={styles.navbar__cart_img}
          />
        </div>

      </div>
    </nav>
    
    )
}

export default Navegador


