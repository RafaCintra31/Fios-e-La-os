import styles from '../Css/Motivos.module.css'

const motivos = [
  {
    id: 1,
    emoji: '🤚',
    nome: 'Feito à Mão',
    descricao: 'Cada peça é cuidadosamente confeccionada à mão, com atenção a cada detalhe',
  },
  {
    id: 2,
    emoji: '💚',
    nome: 'Sustentável',
    descricao: 'Utilizamos materiais de qualidade e práticas sustentáveis em nossa produção',
  },
  {
    id: 3,
    emoji: '⭐',
    nome: 'Alta Qualidade',
    descricao: 'Produtos selecionados com os melhores materiais para garantir durabilidade',
  },
  {
    id: 4,
    emoji: '🚚',
    nome: 'Entrega Rápida',
    descricao: 'Enviamos para todo o Brasil com agilidade e segurança até sua porta',
  },
];

function Motivos(){
    return(
    <section className={styles.porque}>
      <div className={styles.porque__container}>

        {/* Cabeçalho */}
        <h2 className={styles.porque__titulo}>Por Que Escolher Fios &amp; Laços?</h2>

        {/* Cards */}
        <div className={styles.porque__grid}>
          {motivos.map((motivo) => (
            <div key={motivo.id} className={styles.porque__card}>
              <div className={styles.porque__icone}>
                <span className={styles.porque__emoji}>{motivo.emoji}</span>
              </div>
              <h3 className={styles.porque__card_nome}>{motivo.nome}</h3>
              <p className={styles.porque__card_desc}>{motivo.descricao}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
    )
}

export default Motivos