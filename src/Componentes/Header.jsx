import styles from '../Css/Header.module.css'

function Header(){
    return(
    <header className={styles.header}>

      <div className={styles.header__overlay} />

      <div className={styles.header__content}>
        <h1 className={styles.header__title}>Artesanato com Amor</h1>
        <p className={styles.header__subtitle}>
          Peças em crochê para transformar sua casa<br />
          em um lar acolhedor
        </p>
        <div className={styles.header__buttons}>
          <a href="/tapetes" className={styles.header__btn_rosa}>
            Ver Tapetes
          </a>
          <a href="/bolsas" className={styles.header__btn_branco}>
            Ver Bolsas
          </a>
        </div>
      </div>

    </header>
    )
}

export default Header