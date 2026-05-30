import styles from '../Css/Por_dentro.module.css'

function Por_dentro(){
    return(
    <section className={styles.fique}>
      <div className={styles.fique__container}>
        <h2 className={styles.fique__titulo}>Fique Por Dentro das Novidades</h2>
        <p className={styles.fique__subtitulo}>
          Cadastre-se e receba em primeira mão sobre novos produtos<br />
          e promoções especiais
        </p>
        <button className={styles.fique__btn}>Cadastre-se</button>
      </div>
    </section>
    )
}

export default Por_dentro