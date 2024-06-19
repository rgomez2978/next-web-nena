/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useRef } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "react-feather";
import ButtonComp from "@/components/ButtonComp/index";


const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'red' }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'green' }}
      onClick={onClick}
    />
  );
};





const CarouselComp = ({ data, type, slides, children, cssClass }) => {
  console.log('CarouselComp', data, type)
  const placehold = 'https://placehold.co/1200x300/png'
  let sliderRef = useRef(null);

  const settings = {
    // className: `${cssClass}`,
    swipe: data.length === 1 ? false : true,
    arrows: type === 'single' ? false : false,
    dots: type === 'single' ? false : true,
    infinite: data.length === 1 ? false : true,
    initialSlide: slides,
    speed: 500,
    slidesToShow: slides,
    slidesToScroll: slides,
    autoplay: true,
    autoplaySpeed: 2000,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: slides,
          slidesToScroll: slides,
          dots: false,
          infinite: data.length === 1 ? false : true,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: slides,
          slidesToScroll: slides,
          initialSlide: slides,
          dots: false,
          infinite: data.length === 1 ? false : true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: slides,
          slidesToScroll: slides,
          dots: false,
          infinite: data.length === 1 ? false : true,
        }
      }
    ]
  };


  return (
    <div className="slider-container">

      <div className={data.length === 1 ? 'hidden' : `absolute z-30 justify-between items-center xs:container  flex w-[85%] sm:w-[86%] md:w-[81%] xl:w-[82%] ml-4 px-6   ${cssClass} `}>
        <button className="button rounded-full bg-white opacity-60 focus:outline-none transition-colors duration-300 ease-in-out hover:bg-nena-primary" onClick={() => sliderRef.slickPrev()}>
          <ChevronLeft className=" text-gray-500 w-6 md:w-8 h-6 md:h-8" />
        </button>
        <button className="button rounded-full bg-white opacity-60 focus:outline-none transition-colors duration-300 ease-in-out hover:bg-nena-primary" onClick={() => sliderRef.slickNext()}>
          <ChevronRight className=" text-gray-500 w-6 md:w-8 h-6 md:h-8" />
        </button>
      </div>

      <Slider {...settings}
        ref={slider => { sliderRef = slider; }}
      >
        {children}
      </Slider>
    </div>

  )
}

export default CarouselComp