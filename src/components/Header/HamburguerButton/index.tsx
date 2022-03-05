import { useState } from 'react';
import './style.scss';

export default function HamburguerButton() {
  const [status, setStatus] = useState('open');
  return (
    <section className="container">
      <button
        type="button"
        className="hamburguer"
        onClick={() => setStatus(status === 'open' ? 'close' : 'open')}
      >
        <span className={`line line-1 ${status}`} />
        <span className={`line line-2 ${status}`} />
        <span className={`line line-3 ${status}`} />
      </button>
    </section>
  );
}
