import style from './style.module.scss';

export default function Menu() {
  return (
    <nav className={style.menu}>
      <a href="/">
        <span>PERFUME INFANTIL</span>
      </a>
      <a href="/">
        <span>SABONETE</span>
      </a>
      <a href="/">
        <span>PÓS-BANHO</span>
      </a>
      <a href="/">
        <span>ASSADURAS</span>
      </a>
      <a href="/">
        <span>HIDRATANTES</span>
      </a>
      <a href="/">
        <span>LENÇOS UMEDECIDOS</span>
      </a>
    </nav>
  );
}
