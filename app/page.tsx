
import { Container } from '@mui/material';
import React from 'react';
import style from './style.module.scss';
import 'swiper/css';
import 'swiper/css/autoplay'; 
import "swiper/css/navigation";
import "swiper/css/pagination";
import  Homecards  from './_components/HomeCards/HomeCards';
import Mainswiper from './_components/Swipers/Mainswiper';
import { Product } from '@prisma/client';
import { Cards } from './_components/productCards/cards';

const Home = ({product}:{product:Product}) => {
  return (
    <>
    <div className={style.swiperContainer}>
        <Mainswiper/>
      </div>
    <Container>
      <h2 className={style.NewDeals}>NEW DEALS</h2>
      <Cards/>
    </Container>
    </>
  );
}

export default Home;
