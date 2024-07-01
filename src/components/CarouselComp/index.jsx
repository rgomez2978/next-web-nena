/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "react-feather";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


/**
 * Prev button component
 * @param {*} param0
 * @returns
 */
const PrevArrow = ({ className, onClick, model }) => {
  return (
    <div className={`${className}  ${model === 'top' ? 'custom-next-arrow !w-full absolute -mt-10 ' : 'ml-12 z-20'}`}>
      <button className="button rounded-full bg-white opacity-60 focus:outline-none transition-colors duration-300 ease-in-out hover:bg-nena-primary" onClick={onClick}>
        <ChevronLeft className=" text-gray-500 w-6 md:w-8 h-6 md:h-8" />
      </button>
    </div>
  );
};


/**
 * Next button component
 * @param {*} param0
 * @returns
 */
const NextArrow = ({ className, onClick, model }) => {
  return (
    <div className={`${className}  ${model === 'top' ? 'custom-next-arrow' : 'mr-16 z-20'}`}>

      <button className="button rounded-full bg-white opacity-60 focus:outline-none transition-colors duration-300 ease-in-out hover:bg-nena-primary" onClick={onClick}>
        <ChevronRight className=" text-gray-500 w-6 md:w-8 h-6 md:h-8" />
      </button>
    </div>
  );
};



/**
 * Carousel component
 * @param {} p
 * @returns
 */
const CarouselComp = ({ data, type, model, speed, autoplay, speedAutoplay, arrows, dots, slides, children, cssClass }) => {

  const settings = {
    swipe: type === 'slide' || type === 'grid' ? data.length === 1 ? false : true : false,
    fade: type === 'slide' || type === 'grid' ? false : true,
    lazyLoad: true,
    waitForAnimate: false,
    pauseOnHover: false,
    arrows: arrows,
    dots: dots,
    infinite: true,
    initialSlide: slides,
    speed: speed,
    slidesToShow: slides,
    slidesToScroll: 1,
    autoplay: autoplay,
    autoplaySpeed: speedAutoplay,
    nextArrow: <NextArrow model={model} />,
    prevArrow: <PrevArrow model={model} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: dots,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: slides,
          dots: false,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          infinite: true,
        }
      }
    ]
  };



  return (


    <div className="slider-container">
      <Slider {...settings}>
        {children}
      </Slider>
    </div>

  )
}

export default CarouselComp