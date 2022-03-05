import './style.scss';

interface HamburguerButtonProps {
  menuStatus: string;
  setMenuStatus: (status: string) => void;
}

export default function HamburguerButton({
  menuStatus,
  setMenuStatus,
}: HamburguerButtonProps) {
  // const [status, setStatus] = useState('open');
  return (
    <section className="container">
      <button
        type="button"
        className="hamburguer"
        onClick={() => setMenuStatus(menuStatus === 'open' ? 'close' : 'open')}
      >
        <span className={`line line-1 ${menuStatus}`} />
        <span className={`line line-2 ${menuStatus}`} />
        <span className={`line line-3 ${menuStatus}`} />
      </button>
    </section>
  );
}
