"use client"

import { Autoplay, } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Img1 from '../../../../assets/images/hero-img.jpg';
import Img2 from '../../../../assets/images/hero-img1.jpg';
import 'swiper/css';
import cls from './styles.module.css';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Hero() {

       const t = useTranslations('Hero')


       return <div className={cls.hero}>
       <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay]}
       // className={cls.mySwiper}
      >
       <SwiperSlide>
              <Image className={cls.hero_img} src={Img1} alt='has img' style={{maxWidth: "1224px", width: "100%", height: "100%"}} />
       </SwiperSlide>
       <SwiperSlide>
              <Image className={cls.hero_img} src={Img2} alt='has img' style={{maxWidth: "1224px", width: "100%", height: "100%"}} />
       </SwiperSlide>
      </Swiper>
       <div className={cls.hero_section}>
              <h1 className={cls.hero_text_heading}>{t('title')}</h1>
              <button className={cls.hero_btn}>{t('btn-title')}</button>
       </div>
       </div>
}