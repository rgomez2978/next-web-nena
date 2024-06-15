/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useRef } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "react-feather";
import ButtonComp from "@/components/ButtonComp/index";

// import { Skeleton } from 'primereact/skeleton';

// const imageLoader = () => {
//   return (
//     <Skeleton width="100%" height="350px"></Skeleton>
//   )
// };





/**
 * Banner carousel
 * @returns
 */
const CarouselFull = ({ images, settings, cssClass }) => {

  let sliderRef = useRef(null);

  return (
    <>
      <div className="slider-container">

        <div className={images.length === 1 ? 'hidden' : `absolute z-30 justify-between items-center xs:container  px-4 flex w-[90%] md:w-[80%] border border-red-500 ${cssClass} `}>
          <button className="button rounded-full bg-white opacity-60 focus:outline-none transition-colors duration-300 ease-in-out hover:bg-nena-primary" onClick={() => sliderRef.slickPrev()}>
            <ChevronLeft className=" text-gray-500 w-6 md:w-8 h-6 md:h-8" />
          </button>
          <button className="button rounded-full bg-white opacity-60 focus:outline-none transition-colors duration-300 ease-in-out hover:bg-nena-primary" onClick={() => sliderRef.slickNext()}>
            <ChevronRight className=" text-gray-500 w-6 md:w-8 h-6 md:h-8" />
          </button>
        </div>

        <Slider
          {...settings}
          ref={slider => { sliderRef = slider; }}
          className=""
        >
          {images && images.map(({ id, title, alt, item }) => {
            return (
              <div key={id}>
                {title !== '' && (
                  <div className="absolute">
                    <div className={`flex flex-col items-center justify-center ${cssClass} border border-blue-500`}>
                      <h3
                        className="uppercase justify-center text-white text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-3xl text-center font-black w-[90%] md:w-[85%] lg:w-[80%] mb-2 md:mb-4 lg:mb-5 border border-purple-500"
                      >{title}
                      </h3>
                      <ButtonComp
                        cssClassName={`flex px-3 lg:px-2 py-2 font-semibold text-nena-primary hover:text-white rounded-md bg-white  hover:bg-nena-primary focus:outline-none focus:ring focus:ring-transparent focus:ring-opacity-80 normal-case`}
                        cssText='flex pl-2 text-nowrap text-xs lg:text-base xl:text-lg'
                        text='Postulate como proveedor '
                      />
                    </div>
                  </div>

                )}
                {/* <img
                  src={item}
                  alt={title}
                  className={`object-cover outline-none ${cssClass} `}
                /> */}
              </div>
            )
          })}
        </Slider >
      </div >
    </>
  )
}


/**
 * Products carousel
 * @returns
 */
const CarouselMulti = ({ images, settings }) => {
  let sliderRef = useRef(null);

  return (
    <>
      {/* <div className="static flex space-x-6 w-100  justify-end mb-5">
        <button className=" bg-gray-400 button" onClick={() => sliderRef.slickPrev()}>
          Previous
        </button>
        <button className="bg-gray-400 button" onClick={() => sliderRef.slickNext()}>
          Next
        </button>
      </div>

      <div className="slider-container">
        <Slider
          {...settings}
          ref={slider => { sliderRef = slider; }}
        >
          {images && images.map(({ id, title, alt, item }) => {
            return (
              <div key={id}>
                <img
                  src={item}
                  alt={title}
                  className="w-full object-cover h-[200px] md:h-[400px] rounded-xl"
                />
              </div>
            )
          })}
        </Slider>
      </div > */}
    </>
  )
}





const CarouselComp = ({ img, type, slides, cssClass }) => {
  console.log('CarouselComp', img, type)
  const placehold = 'https://placehold.co/1200x300/png'

  const settings = {
    className: `${cssClass}`,
    swipe: img.length === 1 ? false : true,
    arrows: type === 'single' ? false : false,
    dots: type === 'single' ? false : false,
    infinite: img.length === 1 ? false : true,
    initialSlide: type = 'single' ? img.length === 1 ? 0 : 1 : slides,
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
          slidesToShow: type = 'single' ? 1 : slides,
          slidesToScroll: type = 'single' ? 1 : slides,
          dots: false,
          infinite: img.length === 1 ? false : true,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: type = 'single' ? 1 : slides,
          slidesToScroll: type = 'single' ? 1 : slides,
          initialSlide: type = 'single' ? 1 : slides,
          dots: false,
          infinite: img.length === 1 ? false : true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: type = 'single' ? 1 : slides,
          slidesToScroll: type = 'single' ? 1 : slides,
          dots: false,
          infinite: img.length === 1 ? false : true,
        }
      }
    ]
  };

  const LoadCarouselComponent = type !== undefined && type !== 'single'
    ? <CarouselFull images={img} settings={settings} cssClass={cssClass} />
    : <CarouselMulti images={img} settings={settings} cssClass={cssClass} />;

  return (
    LoadCarouselComponent
  )
}

export default CarouselComp