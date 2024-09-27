import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import { Cards } from '../_components/productCards/cards';
import style from './style.module.scss'
import Dropdown from '../_components/Dropdown/Dropdown';

const Product = () => {
  return (
    <>
                <Dropdown/>

    <Cards/>
    <div className={style.pagination}>
  <a href="#">&laquo;</a>
  <a href="#">1</a>
  <a href="#">2</a>
  <a href="#">3</a>
  <a href="#">4</a>
  <a href="#">5</a>
  <a href="#">6</a>
  <a href="#">&raquo;</a>
</div>
    </>        
  )
}

export default Product