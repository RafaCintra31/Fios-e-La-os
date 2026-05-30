import styles from '../Css/Tapetes.module.css'
import { useState } from 'react';
import Footer from './Footer';
import Navegador from './Navegador';
import Tapete_Conzinha from '../assets/imgens/Tapete_cozinha.jpeg'
import Tapete_Conzinha2 from '../assets/imgens/Tapete_cozinha2.jpeg'
import Tapete_Banheiro from '../assets/imgens/Tapete_banheiro.jpeg'
import Tapete_sala from '../assets/imgens/tapete_sala.jpeg'
import Mesa from '../assets/imgens/Mesa.jpeg'
import Mesa2 from '../assets/imgens/Mesa2.jpeg'
import Mesa3 from '../assets/imgens/Mesa3.jpeg'


const categorias = ['Sala', 'Cozinha', 'Banheiro', 'Quarto', 'Área Externa'];

const produtos = [
  { id: 1, imagem: Tapete_Conzinha, nome: 'Jogo de Cozinha', descricao: 'Lindo jogo de croche para a cozinha, perfeito para decorar a sua...', avaliacao: '4.9', avaliacoes: '20', preco: 'R$ 189.90' },
  { id: 2, imagem: Tapete_Conzinha2, nome: 'Jogo de Cozinha', descricao: 'Lindo jogo de croche para a cozinha, perfeito para decorar a sua...', avaliacao: '4.9', avaliacoes: '30', preco: 'R$ 189.90' },
  { id: 3, imagem: Tapete_Banheiro, nome: 'Jogo de Banheiro', descricao: 'Lindo jogo de croche para o banheiro, perfeito para decorar o seu...', avaliacao: '4.9', avaliacoes: '30', preco: 'R$ 189.90' },
  { id: 4, imagem: Tapete_sala, nome: 'Jogo de Sala', descricao: 'Lindo jogo de croche para a sala, perfeito para decorar a sua...', avaliacao: '4.9', avaliacoes: '25', preco: 'R$ 189.90' },
  { id: 5, imagem: Mesa, nome: 'Jogo de Mesa', descricao: 'Lindo jogo de croche para a mesa, perfeito para decorar a sua...', avaliacao: '4.9', avaliacoes: '23', preco: 'R$ 189.90' },
  { id: 6, imagem: Mesa2, nome: 'Jogo de Mesa', descricao: 'Lindo jogo de croche para a mesa, perfeito para decorar a sua...', avaliacao: '4.9', avaliacoes: '35', preco: 'R$ 189.90' },
  { id: 7, imagem: Mesa3, nome: 'Jogo de Mesa', descricao: 'Lindo jogo de croche para a mesa, perfeito para decorara sua...', avaliacao: '4.9', avaliacoes: '40', preco: 'R$ 189.90' },
];

function Tapetes(){
    const [categoriaAtiva, setCategoriaAtiva] = useState('Sala');
   
          return (
            <>
            <Navegador/>
              {/* ── Hero ─────────────────────────────────────── */}
              <section className={styles.tapetes_hero}>
                <h1 className={styles.tapetes_hero__titulo}>Tapetes em Crochê</h1>
                <p className={styles.tapetes_hero__subtitulo}>Explore nossa coleção completa de tapetes</p>
              </section>
        
              {/* ── Filtros + Grid ────────────────────────────── */}
              <section className={styles.tapetes_secao}>
                <div className={styles.tapetes_secao__inner}>
        
                  {/* Filtros */}
                  <div className={styles.tapetes_filtros}>
                    <span className={styles.tapetes_filtros__label}>Escolha uma categoria:</span>
                    <div className={styles.tapetes_filtros__lista}>
                      {categorias.map((cat) => (
                        <button
                          key={cat}
                          className={styles.tapetes_filtros__btn}
                          onClick={() => setCategoriaAtiva(cat)}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>
        
                  {/* Grid de cards */}
                  <div className={styles.tapetes_grid}>
                    {produtos.map((produto) => (
                      <div key={produto.id} className={styles.tapetes_card}>
                        <div className={styles.tapetes_card__img_wrapper}>
                          <img src={produto.imagem} alt={produto.nome} className={styles.tapetes_card__img} />
                        </div>
                        <div className={styles.tapetes_card__body}>
                          <h3 className={styles.tapetes_card__nome}>{produto.nome}</h3>
                          <p className={styles.tapetes_card__desc}>{produto.descricao}</p>
                          <div className={styles.tapetes_card__avaliacao}>
                            <span>⭐</span>
                            <span className={styles.tapetes_card__nota}>{produto.avaliacao}</span>
                            <span className={styles.tapetes_card__avaliacoes}>({produto.avaliacoes} avaliações)</span>
                          </div>
                          <div className={styles.tapetes_card__rodape}>
                            <span className={styles.tapetes_card__preco}>{produto.preco}</span>
                            <button className={styles.tapetes_card__btn}>Ver Detalhes</button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
        
                  <div className={styles.tapetes_paginacao}>
                    <button className={styles.tapetes_paginacao__btn}>Próxima página &gt;</button>
                  </div>
        
                </div>
              </section>
              <Footer/>
            </>
    )
}

export default Tapetes