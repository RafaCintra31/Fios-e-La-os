import styles from '../Css/Sobre_nos.module.css'
import Footer from './Footer'
import Navegador from './Navegador'
import Foto from '../assets/imgens/Foto_Lidia.jpeg'

function Sobre_nos(){
    return(
        <>
              <Navegador />
        
              <section className={styles.sobre_hero}>
                <div className={styles.sobre_hero__content}>
                  <h1 className={styles.sobre_hero__titulo}>Nossa História</h1>
                  <p className={styles.sobre_hero__subtitulo}>
                    Transformando fios em arte e criando laços através do artesanato
                  </p>
                </div>
              </section>
        
              <section className={styles.sobre_conteudo}>
                <div className={styles.sobre_conteudo__inner}>
        
                  <div className={styles.sobre_conteudo__texto}>
                    <h2 className={styles.sobre_conteudo__titulo}>
                      Fios &amp; Laços: Artesanato com Amor
                    </h2>
        
                    <p className={styles.sobre_conteudo__paragrafo}>
                      Bem-vindo ao Fios &amp; Laços, sou a Lídiomar Rosita tem 59 anos e carrega nas mãos muito mais do que fios — carrega amor, força e uma história que emociona. Há mais de 15 anos, enquanto acompanhava seu filho nos tratamentos de uma doença rara, encontrou no crochê um refúgio para a angústia e a espera.
                    </p>
                    <p className={styles.sobre_conteudo__paragrafo}>
                      O que começou como uma forma de ocupar as mãos nas salas de hospital virou também uma forma de ajudar nas contas: cada peça vendida era um remédio a mais, um alívio a mais. Lídia tricotava com o coração apertado, mas com uma determinação que poucos conhecem.
                    </p>
        
                    <p className={styles.sobre_conteudo__paragrafo}>
                      Hoje, o crochê é o hobby que cura a alma de Lídia. Cada tapete e cada bolsa que sai de suas mãos carrega um pouquinho dessa jornada — de uma mãe que transformou a dor em arte, e o amor em cada ponto.
                    </p>
                  </div>
        
                  <div className={styles.sobre_conteudo__foto_wrapper}>
                    <img
                      src={Foto}
                      alt="Foto da artesã"
                      className={styles.sobre_conteudo__foto}
                    />
                  </div>
        
                </div>
              </section>
        
              <Footer />
            </>
    )
}

export default Sobre_nos