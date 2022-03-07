import { toast } from 'react-toastify';

import style from './style.module.scss';

/* eslint-disable  @typescript-eslint/no-explicit-any */

export default function SearchBar() {
  const isAllLetters = (word: string): boolean => {
    let isAlphabet = true;

    for (let index = 0; index < word.length; index += 1) {
      if (/[^a-zA-Z0-9]+/g.test(word[index])) {
        isAlphabet = false;
        break;
      }
    }
    return isAlphabet;
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const word: string = event.target.search.value;
    if (word === '') {
      toast.error('O campo não pode ser vazio');
    } else if (word.includes(' ')) {
      toast.error('Não é permitido espaços');
    } else if (!isAllLetters(word)) {
      toast.error('Não é permitido caracteres especiais');
    } else if (word.length < 3) {
      toast.error('Digite pelo menos 3 caracteres');
    }
  };

  return (
    <form className={style.searchbarContainer} onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        placeholder="Qual o mimo de hoje para o seu anjinho?"
      />
      <button type="submit">BUSCAR</button>
    </form>
  );
}
