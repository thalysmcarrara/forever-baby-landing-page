import { toast } from 'react-toastify';

import { useMediaQuery } from '../../../hooks';
import api from '../../../services/api';
import { queries } from '../../../utils/queries';
import style from './style.module.scss';

const DUPLICATE_DATA = 'dados duplicados. e-mail já existe na base de dados.';

/* eslint-disable @typescript-eslint/no-explicit-any */

export default function EmailInput() {
  const isDesktop = useMediaQuery(queries.lg);

  const validateEmail = (email: string): boolean => {
    if (!email.includes('@')) {
      return false;
    }

    const user = email.substring(0, email.indexOf('@'));
    const domain = email.substring(email.indexOf('@') + 1);

    const isValid =
      user.length >= 1 &&
      domain.length >= 3 &&
      !user.includes('@') &&
      !domain.includes('@') &&
      !user.includes(' ') &&
      !domain.includes(' ') &&
      domain.includes('.') &&
      domain.indexOf('.') >= 1 &&
      domain.lastIndexOf('.') < domain.length - 1;

    return isValid;
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const isValid = validateEmail(event.target.email.value);

    if (!isValid) {
      toast.error('Formato de email inválido', {
        position: isDesktop ? 'bottom-right' : 'bottom-center',
      });
    } else {
      const { Erro, Mensagem } = await api.postEmail(event.target.email.value);

      if (Erro) {
        toast.error(Erro, {
          position: isDesktop ? 'bottom-right' : 'bottom-center',
        });
      } else if (Mensagem.toLowerCase() === DUPLICATE_DATA) {
        toast.warning(Mensagem, {
          position: isDesktop ? 'bottom-right' : 'bottom-center',
        });
      } else {
        toast.success(Mensagem, {
          position: isDesktop ? 'bottom-right' : 'bottom-center',
        });
      }
    }
  };

  return (
    <form className={style.searchbarContainer} onSubmit={handleSubmit}>
      <input
        type="text"
        name="email"
        placeholder="Digite aqui o seu melhor e-mail"
      />
      <button type="submit">CADASTRAR</button>
    </form>
  );
}
