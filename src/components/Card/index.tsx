import { toast } from 'react-toastify';

import { useMediaQuery } from '../../hooks';
import { queries } from '../../utils/queries';
import style from './style.module.scss';

type Product = {
  id: number;
  image: string;
  name: string;
  price: number;
};

interface CardProps {
  product: Product;
}

export default function Card({ product }: CardProps) {
  const { image, name, price } = product;
  const isDesktop = useMediaQuery(queries.lg);

  const handleClick = () => {
    toast.success('Seu produto foi adicionado ao carrinho', {
      position: isDesktop ? 'top-right' : 'bottom-center',
    });
  };
  return (
    <div className={style.card}>
      <a className={style.imageLink} href="/">
        <img className={style.image} src={image} alt={name} />
      </a>
      <div className={style.titleContainer}>
        <a className={style.titleLink} href="/">
          <p className={style.title}>{name}</p>
        </a>
      </div>

      <span className={style.price}>
        {price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
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
