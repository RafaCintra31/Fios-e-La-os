import styles from '../Css/Footer.module.css'
import Logo from '../assets/imgens/Logo.svg'

function Footer(){
    return(
    <footer className={styles.footer}>
      <div className={styles.footer__container}>

        <div className={styles.footer__col}>
          <div className={styles.footer__logo}>
            <img src={Logo} alt='logo' className={styles.footer__logo_emoji}/>
            <span className={styles.footer__logo_nome}>Fios e Laços</span>
          </div>
          <p className={styles.footer__desc}>
            Peças artesanais em crochê<br />
            feitas com amor e dedicação.
          </p>
        </div>

        <div className={styles.footer__col}>
          <h4 className={styles.footer__col_titulo}>Links Rápidos</h4>
          <ul className={styles.footer__lista}>
            <li><a href="#" className={styles.footer__link}>Bolsas</a></li>
            <li><a href="#" className={styles.footer__link}>Tapetes</a></li>
            <li><a href="#" className={styles.footer__link}>Sobre nós</a></li>
            <li><a href="#" className={styles.footer__link}>Contato</a></li>
          </ul>
        </div>

        <div className={styles.footer__col}>
          <h4 className={styles.footer__col_titulo}>Categoria</h4>
          <ul className={styles.footer__lista}>
            <li><a href="#" className={styles.footer__link}>Tapetes de Sala</a></li>
            <li><a href="#" className={styles.footer__link}>Tapetes de Banheiro</a></li>
            <li><a href="#" className={styles.footer__link}>Bolsas de Praia</a></li>
            <li><a href="#" className={styles.footer__link}>Bolsas Casuais</a></li>
          </ul>
        </div>

        <div className={styles.footer__col}>
          <h4 className={styles.footer__col_titulo}>Contato</h4>
          <ul className={styles.footer__lista}>
            <li><span className={styles.footer__texto}>(11) 98765-4321</span></li>
            <li><a href="mailto:contato@fioselacos.com.br" className={styles.footer__link}>contato@fioselacos.com.br</a></li>
            <li><span className={styles.footer__texto}>São Paulo, Brasil</span></li>
            <li><a href="#" className={styles.footer__link}>@fioselacos</a></li>
          </ul>
        </div>

      </div>

      <div className={styles.footer__divisor} />

      <div className={styles.footer__bottom}>
        <p className={styles.footer__copyright}>© 2026 Fios &amp; Laços. Todos os direitos reservados.</p>
        <p className={styles.footer__feito}>Feito com ❤️ e muito carinho</p>
      </div>
    </footer>
    )
}

export default Footer