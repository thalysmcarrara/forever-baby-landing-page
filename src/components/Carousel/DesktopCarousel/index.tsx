import { Component } from 'react';
import Slider from 'react-slick';

import getBanners from '../../../services/getBanners';
import style from './style.module.scss';

/* eslint-disable react/prefer-stateless-function, react/jsx-props-no-spreading */

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 4000,
  swipe: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default class SimpleSlider extends Component {
  render() {
    const { banners } = getBanners('desktop');

    return (
      <div className={style.sliderContainer}>
        <Slider {...settings}>
          {banners.map((banner) => (
            <a key={banner.id} className={style.link} href="/">
              <img
                className={style.image}
                src={banner.image}
                alt={banner.alt}
              />
            </a>
          ))}
        </Slider>
      </div>
    );
  }
}
