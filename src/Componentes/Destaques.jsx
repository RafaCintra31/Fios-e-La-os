import styles from '../Css/Destaque.module.css'
import Tapete_Cozinha from '../assets/imgens/Tapete_cozinha.jpeg'
import Tapete_Banheiro from '../assets/imgens/Tapete_banheiro.jpeg'
import Tapete_Mesa from '../assets/imgens/Mesa.jpeg'

const produtos = [
  {
    id: 1,
    imagem: Tapete_Cozinha,
    nome: 'Jogo de Cozinha',
    descricao: 'Lindo jogo de croche para a cozinha, perfeito para decorar sua...',
    avaliacao: '4.9',
    avaliacoes: '20 avaliações',
    preco: 'R$ 189.90',
    destaque: true,
    hover: false, // card esquerdo NÃO tem hover
  },
  {
    id: 2,
    imagem: Tapete_Banheiro,
    nome: 'Jogo de Banheiro',
    descricao: 'Lindo jogo de croche para o banheiro, perfeito para decorar seu...',
    avaliacao: '4.9',
    avaliacoes: '30 avaliações',
    preco: 'R$ 189.90',
    destaque: true,
    hover: true, // card do meio TEM hover
  },
  {
    id: 3,
    imagem: Tapete_Mesa,
    nome: 'Jogo de Mesa',
    descricao: 'Lindo jogo de croche para a mesa, perfeito para decorar sua...',
    avaliacao: '4.9',
    avaliacoes: '25 avaliações',
    preco: 'R$ 189.90',
    destaque: true,
    hover: true, // card direito TEM hover
  },
];

function Destaques(){
    return(
        <section className={styles.destaque}>
      <div className={styles.destaque_container}>

        {/* Cabeçalho */}
        <h2 className={styles.destaque_titulo}>Produtos em Destaque</h2>
        <p className={styles.destaque_subtitulo}>
          Nossas peças mais amadas pelos clientes.<br />
          Feitas à mão com materiais de alta qualidade.
        </p>

        {/* Cards */}
        <div className={styles.destaque_grid}>
          {produtos.map((produto) => (
            <div
              key={produto.id}
              className={styles.destaque_card}
            >
              {/* Imagem com badge */}
              <div className={styles.destaque_card_img_wrapper}>
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className={styles.destaque_card_img}
                />
                {produto.destaque && (
                  <span className={styles.destaque_badge}>Destaque</span>
                )}
              </div>

              {/* Corpo do card */}
              <div className={styles.destaque_card_body}>
                <h3 className={styles.destaque_card_nome}>{produto.nome}</h3>
                <p className={styles.destaque_card_desc}>{produto.descricao}</p>
                <div className={styles.destaque_card_avaliacao}>
                  <span className={styles.destaque_estrela}>⭐</span>
                  <span className={styles.destaque_nota}>{produto.avaliacao}</span>
                  <span className={styles.destaque_avaliacoes}>({produto.avaliacoes})</span>
                </div>
                <div className={styles.destaque_card_rodape}>
                  <span className={styles.destaque_preco}>{produto.preco}</span>
                  <button className={styles.destaque_btn}>Ver Detalhes</button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
    )
}

export default Destaques