import { toast } from 'react-toastify';

import { useMediaQuery } from '../../hooks';
import { queries } from '../../utils/queries';
import style from './style.module.scss';

export default function Card() {
  const value = 99.99;
  const isDesktop = useMediaQuery(queries.lg);

  const handleClick = () => {
    toast.success('Seu produto foi adicionado ao carrinho', {
      position: isDesktop ? 'top-right' : 'bottom-center',
    });
  };
  return (
    <div className={style.card}>
      <a className={style.imageLink} href="/">
        <img
          className={style.image}
          src="https://foreverliss.vteximg.com.br/arquivos/ids/161317-240-240/mascara-cresce-cabelo-forever-liss-250g.jpg?v=637586673109200000"
          alt=""
        />
      </a>

      <a className={style.titleLink} href="/">
        <p className={style.title}>Mascara cresce cabelo</p>
      </a>

      <span className={style.price}>
        {value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
      </span>

      <div className={style.ratingsContainer}>
        <span className={style.star}>&#9733;</span>
        <span className={style.star}>&#9733;</span>
        <span className={style.star}>&#9733;</span>
        <span className={style.star}>&#9733;</span>
        <span className={style.star}>&#9733;</span>
      </div>

      <button
        onClick={handleClick}
        className={style.buttonAddToCart}
        type="button"
      >
        <img src="./assets/shoppingCart.svg" alt="shopping cart" />
        <span>ADICIONAR AO CARRINHO</span>
      </button>
    </div>
  );
}
