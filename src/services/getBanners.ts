import desktopBanners from './data/desktopBanners.json';
import tabletBanners from './data/tabletBanners.json';

type Banner = {
  id: number;
  image: string;
  alt: string;
};

interface GetReturnType {
  banners: Banner[];
}

const getBanners = (deviceWidthType: string): GetReturnType => {
  if (deviceWidthType === 'desktop') {
    return { banners: desktopBanners };
  }

  if (deviceWidthType === 'tablet' || deviceWidthType === 'mobile') {
    return { banners: tabletBanners };
  }

  throw new Error('O deviceWidthType precisa ser (desktop | tablet | mobile)');
};

export default getBanners;
