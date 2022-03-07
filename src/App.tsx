import { ToastContainer } from 'react-toastify';

import {
  Header,
  DesktopCarousel,
  TabletCarousel,
  Highlights,
  Newsletter,
} from './components';
import { useMediaQuery } from './hooks';
import { queries } from './utils/queries';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const isDesktop = useMediaQuery(queries.lg);
  const isTablet = useMediaQuery(queries.md);
  const isXTablet = useMediaQuery(queries.xmd);
  const isMobile = useMediaQuery(queries.sm);
  return (
    <div className="App">
      <Header />

      {/* Carousel */}
      {(isDesktop || isXTablet) && <DesktopCarousel />}
      {(isTablet || isMobile) && <TabletCarousel />}

      <Highlights />
      <Highlights />
      <Newsletter />
      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default App;
