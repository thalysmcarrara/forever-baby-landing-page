import EmailInput from './EmailInput';
import style from './style.module.scss';

export default function Newsletter() {
  return (
    <section className={style.newsletter}>
      <h1 className={style.title}>NEWSLETTER FOREVER BABY</h1>
      <p>Cadastre-se agora para não perder nenhuma promoção</p>
      <EmailInput />
    </section>
  );
}
