import { Component } from 'react';
import Slider from 'react-slick';

import getBanners from '../../../services/getBanners';
import style from './style.module.scss';
import './slick.scss';

/* eslint-disable react/prefer-stateless-function, react/jsx-props-no-spreading */

const settings = {
  dots: true,
  dotsClass: 'button__bar',
  infinite: true,
  autoplaySpeed: 3000,
  autoplay: true,
  speed: 500,
  slidesToScroll: 1,
  slidesToShow: 1,
  arrows: false,
  swipe: true,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};

export default class SimpleSlider extends Component {
  render() {
    const { banners } = getBanners('tablet');

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
