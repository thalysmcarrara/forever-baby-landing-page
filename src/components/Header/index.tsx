import { useState } from 'react';

import { useMediaQuery } from '../../hooks';
import { queries } from '../../utils/queries';
import SearchBar from '../SearchBar';
import HamburguerButton from './HamburguerButton';
import Menu from './menu';
import styles from './styles.module.scss';

export default function Header() {
  const isDesktop = useMediaQuery(queries.lg);

  const [menuStatus, setMenuStatus] = useState('close');

  return (
    <>
      <header className={styles.header}>
        <div className={styles.menuContainer}>
          {!isDesktop && (
            <HamburguerButton
              menuStatus={menuStatus}
              setMenuStatus={setMenuStatus}
            />
          )}
          <img className={styles.logo} src="./assets/logo.png" alt="logo" />
        </div>

        {isDesktop && <SearchBar />}

        <div className={styles.userContent}>
          <a href="/" className={styles.link} type="button">
            <div className={styles.content}>
              <div className={styles.circle}>
                <img src="./assets/user.svg" alt="user profile" />
              </div>
            </div>
            <span className={styles.text}>MINHA CONTA</span>
          </a>

          <a href="/" className={styles.link} type="button">
            <div className={styles.content}>
              <div className={styles.circle}>
                <img src="./assets/shoppingCart.svg" alt="shopping cart" />
              </div>
            </div>
            <span className={styles.text}>CARRINHO</span>
          </a>
        </div>

        {!isDesktop && menuStatus === 'open' && <Menu />}
      </header>

      {!isDesktop && <SearchBar />}
      {isDesktop && <Menu />}
    </>
  );
}
