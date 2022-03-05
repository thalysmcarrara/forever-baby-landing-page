import SearchBar from '../SearchBar';
import styles from './styles.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <img src="./assets/logo.png" alt="logo" />

      <SearchBar />
      <div className={styles.userContent}>
        <a href="/" className={styles.link} type="button">
          <div className={styles.content}>
            <div className={styles.circle}>
              <img src="./assets/user.svg" alt="user profile" />
            </div>
          </div>
          <span>MINHA CONTA</span>
        </a>

        <a href="/" className={styles.link} type="button">
          <div className={styles.content}>
            <div className={styles.circle}>
              <img src="./assets/shoppingCart.svg" alt="shopping cart" />
            </div>
          </div>
          <span>CARRINHO</span>
        </a>
      </div>
    </header>
  );
}
