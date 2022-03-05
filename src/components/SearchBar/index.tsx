import { FormEvent } from 'react';

import style from './style.module.scss';

export default function SearchBar() {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <form className={style.searchbarContainer} onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        pattern="[a-z\s]+$"
        placeholder="Qual o mimo de hoje para o seu anjinho?"
        minLength={3}
        maxLength={40}
        required
      />
      <button type="submit">BUSCAR</button>
    </form>
  );
}
