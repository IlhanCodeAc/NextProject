'use client'

import { Container } from '@mui/material';
import React from 'react';
import style from './style.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Added Autoplay
import 'swiper/css';
import 'swiper/css/autoplay'; 
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from 'next/image';
import summer from './maxresdefault.jpg';
import autumn from './maxresdefault (1).jpg';
import winter from './maxresdefault (2).jpg';

const Home = () => {
  return (
    <Container>
      <div className={style.swiperContainer}>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          modules={[Autoplay, Navigation, Pagination]}
        >
          <SwiperSlide className={style.swiperSlide}>
            <Image
              src={summer}
              alt="Summer"
              layout="responsive" 
              width={800}         
              height={600}       
            />
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <Image
              src={autumn}
              alt="Autumn"
              layout="responsive" 
              width={800}         
              height={600}        
            />
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <Image
              src={winter}
              alt="Winter"
              layout="responsive" 
              width={800}         
              height={600}        
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </Container>
  );
}

export default Home;
