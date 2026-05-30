import { Link } from 'react-router-dom';
import styles from '../Css/Categorias.module.css'
import Bolsas from '../assets/imgens/Bolsa_Preta.jpeg'
import Tapete from '../assets/imgens/Tapete_sala.jpeg'

const categorias = [
  {
    id: 1,
    imagem: Tapete,
    nome: 'Tapetes',
    descricao: 'Venha Conhecer Nossos Tapetes',
    rota: '/Tapetes',
  },
  {
    id: 2,
    imagem: Bolsas,
    nome: 'Bolsas',
    descricao: 'Venha Conhecer Nossas Bolsas',
    rota: '/Bolsas',
  },
]

function Categorias(){
    return(
        <section className={styles.categorias}>
        <div className={styles.categorias__container}>

        <h2 className={styles.categorias__titulo}>Explore Nossas Categorias</h2>
        <p className={styles.categorias__subtitulo}>
          Encontre a peça perfeita para cada ambiente da sua casa
        </p>

        <div className={styles.categorias__grid}>
          {categorias.map((categoria) => (
            <div key={categoria.id} className={styles.categorias__card}>

              <div className={styles.categorias__card_img_wrapper}>
                <img
                  src={categoria.imagem}
                  alt={categoria.nome}
                  className={styles.categorias__card_img}
                />
              </div>

              <div className={styles.categorias__card_body}>
                <h3 className={styles.categorias__card_nome}>{categoria.nome}</h3>
                <p className={styles.categorias__card_desc}>{categoria.descricao}</p>
                <Link to={categoria.rota} className={styles.categorias__card_link}>
                  Ver coleção →
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
    )
}

export default Categorias