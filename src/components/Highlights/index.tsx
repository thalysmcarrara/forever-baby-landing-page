import { Component } from 'react';
import Slider from 'react-slick';

import products from '../../services/data/products.json';
import { Card } from '../index';
import settings from './settings';
import style from './style.module.scss';
import './slick.scss';

/* eslint-disable react/prefer-stateless-function, react/jsx-props-no-spreading */

export default class SimpleSlider extends Component {
  render() {
    return (
      <section className={style.highlight}>
        <h2 className={style.title}>
          FOREVER BABY <strong>DESTAQUES</strong>
        </h2>
        <div className={style.sliderContainer}>
          <Slider {...settings}>
            {products.map((product) => (
              <Card product={product} key={product.id} />
            ))}
          </Slider>
        </div>
      </section>
    );
  }
}
