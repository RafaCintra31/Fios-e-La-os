import { useState } from 'react';
import styles from '../Css/Contato.module.css'
import Footer from './Footer';
import Navegador from './Navegador';

const faqs = [
    {
      pergunta: 'Qual o prazo de entrega?',
      resposta: 'Cada peça é feita à mão com dedicação. O prazo é de 7 a 15 dias úteis após a confirmação do pagamento.',
    },
    {
      pergunta: 'Vocês fazem produtos personalizados?',
      resposta: 'Sim! Entre em contato conosco para discutir suas ideias e criar uma peça exclusiva para você.',
    },
    {
      pergunta: 'Como cuidar dos produtos de crochê?',
      resposta: 'Recomendamos lavá-los à mão com água morna e sabão neutro. Seque à sombra e evite torcer.',
    },
  ];

  
function Contato(){
    const [aberta, setAberta] = useState(null);
    return(
        <>
        <Navegador/>
      <section className={styles.contato_hero}>
        <div className={styles.contato_hero__overlay} />
        <div className={styles.contato_hero__content}>
          <h1 className={styles.contato_hero__titulo}>Entre em Contato</h1>
          <p className={styles.contato_hero__subtitulo}>
            Estamos aqui para ajudar! Entre em contato conosco e teremos prazer<br />
            em atendê-lo
          </p>
        </div>
      </section>

      <section className={styles.contato_main}>
        <div className={styles.contato_main__inner}>

          {/* Formulário */}
          <div className={styles.contato_form}>
            <h2 className={styles.contato_form__titulo}>Envie uma Mensagem</h2>
            <div className={styles.contato_campo}>
              <label>Nome Completo</label>
              <input type="text" placeholder="Seu nome" />
            </div>
            <div className={styles.contato_campo}>
              <label>E-mail</label>
              <input type="email" placeholder="Seu @email.com" />
            </div>
            <div className={styles.contato_campo}>
              <label>Telefone</label>
              <input type="tel" placeholder="(00)00000-0000" />
            </div>
            <div className={styles.contato_campo}>
              <label>Assunto</label>
              <input type="text" placeholder="Como podemos ajudar" />
            </div>
            <div className={styles.contato_campo}>
              <label>Mensagem</label>
              <textarea placeholder="Escreva sua mensagem..." rows={4} />
            </div>
            <button className={styles.contato_form__btn}>Enviar Mensagem</button>
          </div>

          <div className={styles.contato_info}>
            <h2 className={styles.contato_info__titulo}>Informações de Contato</h2>

            <div className={styles.contato_info__item}>
              <span className={styles.contato_info__icone}>📞</span>
              <div>
                <strong>Telefone / WhatsApp</strong>
                <p>(11) 96365-4482</p>
                <p>Telefone / Seg – Sex, 9h às 18h</p>
              </div>
            </div>

            <div className={styles.contato_info__item}>
              <span className={styles.contato_info__icone}>✉️</span>
              <div>
                <strong>E-mail</strong>
                <p>Lidiomar.rosita@gmail.com</p>
                <p>Respondemos em até 24 horas</p>
              </div>
            </div>

            <div className={styles.contato_info__item}>
              <span className={styles.contato_info__icone}>📍</span>
              <div>
                <strong>Localização</strong>
                <p>São Paulo, Brasil</p>
                <p>Atendemos todo o Brasil</p>
              </div>
            </div>

            <div className={styles.contato_info__item}>
              <span className={styles.contato_info__icone}>📷</span>
              <div>
                <strong>Instagram</strong>
                <p>@lidiomarrosita</p>
                <p>Siga-nos para novidades</p>
              </div>
            </div>

            <div className={styles.contato_faq}>
              <h3 className={styles.contato_faq__titulo}>Perguntas Frequentes</h3>
              {faqs.map((faq, i) => (
                <div key={i} className={styles.contato_faq__item}>
                  <button
                    className={styles.contato_faq__pergunta}
                    onClick={() => setAberta(aberta === i ? null : i)}
                  >
                    {faq.pergunta}
                    <span>{aberta === i ? '▲' : '▼'}</span>
                  </button>
                  {aberta === i && (
                    <p className={styles.contato_faq__resposta}>{faq.resposta}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
      <Footer/>
    </>
    )
}

export default Contato