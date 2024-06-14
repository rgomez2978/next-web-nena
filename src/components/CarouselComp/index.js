/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useRef } from "react";
import Slider from "react-slick";
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
const CarouselFull = ({ images, settings }) => {
  console.log('CarouselFull', images, settings)

  let sliderRef = useRef(null);

  return (
    <>

      <div className="absolute z-30 flex w-full justify-between items-center xs:container  mt-20 sm:mt-32 md:mt-40  border border-red-500 ">
        <button className=" bg-gray-400 button" onClick={() => sliderRef.slickPrev()}>
          Previous
        </button>
        <button className="bg-gray-400 button" onClick={() => sliderRef.slickNext()}>
          Next
        </button>
      </div>

      <div className="slider-container w-full">
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
                  className="w-[100%] bg-slate-400 object-cover h-[200px] sm:h-[300px]  md:h-[300px]  lg:h-[350px] rounded-xl"
                />
              </div>
            )
          })}
        </Slider>
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





const CarouselComp = ({ img, type, slides }) => {
  console.log('CarouselComp', img, type)
  const placehold = 'https://placehold.co/1200x300/png'

  const settings = {
    className: 'w-[100%] object-cover h-[200px] md:h-[400px] rounded-xl',
    arrows: type === 'single' ? false : false,
    dots: type === 'single' ? true : false,
    infinite: true,
    speed: 500,
    // initialSlide: 1,
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
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: type = 'single' ? 1 : slides,
          slidesToScroll: type = 'single' ? 1 : slides,
          initialSlide: type = 'single' ? 1 : slides,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: type = 'single' ? 1 : slides,
          slidesToScroll: type = 'single' ? 1 : slides,
        }
      }
    ]
  };

  const LoadCarouselComponent = type !== undefined && type !== 'single'
    ? <CarouselFull images={img} settings={settings} />
    : <CarouselMulti images={img} settings={settings} />;

  return (
    LoadCarouselComponent
  )
}

export default CarouselComp