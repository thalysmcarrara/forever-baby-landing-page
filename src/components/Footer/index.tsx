import style from './style.module.scss';

export default function Footer() {
  return (
    <section className={style.footer}>
      <h1 className={style.title}>VISITE NOSSAS REDES SOCIAIS</h1>

      <div className={style.linksContainer}>
        <a
          href="https://www.instagram.com/foreverliss/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="./assets/instagram.png" alt="instagram link" />
        </a>
        <a
          href="https://www.facebook.com/foreverliss"
          target="_blank"
          rel="noreferrer"
        >
          <img src="./assets/facebook.png" alt="facebook link" />
        </a>
        <a
          href="https://www.youtube.com/c/ForeverLissOficial"
          target="_blank"
          rel="noreferrer"
        >
          <img src="./assets/youtube.png" alt="youtube link" />
        </a>
        <a
          href="https://www.tiktok.com/@foreverlissprofessional"
          target="_blank"
          rel="noreferrer"
        >
          <img src="./assets/tiktok.png" alt="tiktok link" />
        </a>
      </div>

      <nav className={style.footerMenu}>
        <a className={style.link} href="/">
          PERFUME INFANTIL
        </a>
        <a className={style.link} href="/">
          SABONETES
        </a>
        <a className={style.link} href="/">
          PÓS-BANHO
        </a>
        <a className={style.link} href="/">
          ASSADURAS
        </a>
        <a className={style.link} href="/">
          HIDRATANTES
        </a>
        <a className={style.link} href="/">
          LENÇOS UMEDECIDOS
        </a>
      </nav>

      <h1 className={style.title}>FORMAS DE PAGAMENTO</h1>

      <img src="./assets/credit_card_badges.png" alt="cartoes de credito" />
    </section>
  );
}
