import { Header, DesktopCarousel, TabletCarousel } from './components';
import { useMediaQuery } from './hooks';
import { queries } from './utils/queries';

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
    </div>
  );
}

export default App;
