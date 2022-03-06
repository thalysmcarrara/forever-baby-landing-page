import { ToastContainer } from 'react-toastify';

import { Header, DesktopCarousel, TabletCarousel, Card } from './components';
import { useMediaQuery } from './hooks';
import { queries } from './utils/queries';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const isDesktop = useMediaQuery(queries.lg);
  const isTablet = useMediaQuery(queries.md);
  const isMobile = useMediaQuery(queries.sm);
  return (
    <div className="App">
      <Header />

      {/* Carousel */}
      {isDesktop && <DesktopCarousel />}
      {(isTablet || isMobile) && <TabletCarousel />}
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default App;
