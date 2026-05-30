import styles from '../Css/Bolsas.module.css'
import Footer from '../Componentes/Footer'
import Navegador from '../Componentes/Navegador'
import { useState } from 'react';
import Bolsa_Preta from '../assets/imgens/Bolsa_Preta.jpeg'
import Bolsa_Azul from '../assets/imgens/Bolsa_Azul.jpeg'
import Bolsa_Laranja from '../assets/imgens/Bolsa_Laranja.jpeg'

const categorias = ['Praia', 'Casual'];

const produtos = [
  { id: 1, imagem: Bolsa_Preta, nome: 'Bolsa Casual', descricao: 'Linda Bolsa Preta Casual', avaliacao: '4.9', avaliacoes: '27', preco: 'R$ 189.90' },
  { id: 2, imagem: Bolsa_Azul, nome: 'Bolsa de Praia', descricao: 'Linda Bolsa Azul de Praia', avaliacao: '4.9', avaliacoes: '22', preco: 'R$ 189.90' },
  { id: 3, imagem: Bolsa_Laranja, nome: 'Bolsa de Praia', descricao: 'Linda Bolsa Laranja de Praia', avaliacao: '4.9', avaliacoes: '31', preco: 'R$ 189.90' },
];

function Bolsas(){
    const [categoriaAtiva, setCategoriaAtiva] = useState('Praia');

    return(
        <>
        <Navegador/>
              <section className={styles.bolsas_hero}>
                <h1 className={styles.bolsas_hero__titulo}>Bolsas em Crochê</h1>
                <p className={styles.bolsas_hero__subtitulo}>Explore nossa coleção completa de bolsas</p>
              </section>
        
              <section className={styles.bolsas_secao}>
                <div className={styles.bolsas_secao__inner}>
        
                  <div className={styles.bolsas_filtros}>
                    <span className={styles.bolsas_filtros__label}>Escolha uma categoria:</span>
                    <div className={styles.bolsas_filtros__lista}>
                      {categorias.map((cat) => (
                        <button
                          key={cat}
                          className={styles.bolsas_filtros__btn}
                          onClick={() => setCategoriaAtiva(cat)}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>
        
                  <div className={styles.bolsas_grid}>
                    {produtos.map((produto) => (
                      <div key={produto.id} className={styles.bolsas_card}>
                        <div className={styles.bolsas_card__img_wrapper}>
                          <img src={produto.imagem} alt={produto.nome} className={styles.bolsas_card__img} />
                        </div>
                        <div className={styles.bolsas_card__body}>
                          <h3 className={styles.bolsas_card__nome}>{produto.nome}</h3>
                          <p className={styles.bolsas_card__desc}>{produto.descricao}</p>
                          <div className={styles.bolsas_card__avaliacao}>
                            <span>⭐</span>
                            <span className={styles.bolsas_card__nota}>{produto.avaliacao}</span>
                            <span className={styles.bolsas_card__avaliacoes}>({produto.avaliacoes} avaliações)</span>
                          </div>
                          <div className={styles.bolsas_card__rodape}>
                            <span className={styles.bolsas_card__preco}>{produto.preco}</span>
                            <button className={styles.bolsas_card__btn}>Ver Detalhes</button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
        
                  <div className={styles.bolsas_paginacao}>
                    <button className={styles.bolsas_paginacao__btn}>Próxima página &gt;</button>
                  </div>
        
                </div>
              </section>
              <Footer/>
        </>
    )
}

export default Bolsas