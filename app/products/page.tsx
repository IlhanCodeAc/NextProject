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
    
    </>        
  )
}

export default Product