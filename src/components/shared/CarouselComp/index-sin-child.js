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
 * Banner banner o una sola imagen
 * @param {*} param0
 * @returns
 */

const SlideSingle = ({ title, buttonText, imageUrl, cssClass }) => {
  const placehold = 'https://placehold.co/1200x300/png'

  return (
    <div className={`flex flex-col items-center justify-center ${cssClass} `}
      style={{
        backgroundImage: `url(${imageUrl})`,
        // backgroundImage: `url(${placehold})`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `top`,
        backgroundSize: `cover`
      }}
    >
      {title !== '' && (
        <div className="flex flex-col items-center ">
          <h3
            className="uppercase justify-center text-white text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-3xl text-center font-black w-[90%] md:w-[85%] lg:w-[80%] mb-2 md:mb-4 lg:mb-5 "
          >{title}
          </h3>

          {buttonText && (
            <ButtonComp
              cssClassName={`flex px-3 lg:px-2 py-2 font-semibold text-nena-primary hover:text-white rounded-md bg-white  hover:bg-nena-primary focus:outline-none focus:ring focus:ring-transparent focus:ring-opacity-80 normal-case`}
              cssText='flex pl-2 text-nowrap text-xs lg:text-base xl:text-lg'
              text={buttonText}
            />
          )}
        </div>
      )}
    </div >
  )
}

/**
 * BAnner Multi o de productos
 * @returns
 */
const SlideMulti = ({ title, buttonText, imageUrl, cssClass }) => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
          <img
            src="https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
            className="object-cover w-full h-64"
            alt=""
          />
          <div className="p-5 border border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="traveling"
              >
                traveling
              </a>
              <span className="text-gray-600">— 28 Dec 2020</span>
            </p>
            <a
              href="/"
              aria-label="Category"
              title="Visit the East"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Visit the East
            </a>
            <p className="mb-2 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>


  )
};


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


/**
 * Banner carousel
 * @returns
 */


/**
 * Banner carousel
 * @returns
 */
const CarouselFull = ({ images, cssClass, settings }) => {
  console.log('CarouselFull', images, images.length)

  let sliderRef = useRef(null);

  return (
    <>
      <div className="slider-container">

        <div className={images.length === 1 ? 'hidden' : `absolute z-30 justify-between items-center xs:container  flex w-[85%] sm:w-[86%] md:w-[81%] xl:w-[82%] ml-4 px-6   ${cssClass} `}>
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
          {images && images.map(({ id, title, url, buttonText }) => {
            return (
              <SlideSingle
                key={id}
                title={title}
                imageUrl={url}
                buttonText={buttonText}
                cssClass={cssClass}
              />
            )
          })}

        </Slider>
      </div>


    </>
  )
}




/**
 * Products carousel
 * @returns
 */
const CarouselMulti = ({ images, settings, cssClass }) => {
  console.log('CarouselFull', images, images.length)

  let sliderRef = useRef(null);

  return (
    <>
      <div className="slider-container">

        <div className={images.length === 1 ? 'hidden' : `absolute z-30 justify-between items-center xs:container  flex w-[85%] sm:w-[86%] md:w-[81%] xl:w-[82%] ml-4 px-6   ${cssClass} `}>
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
          {images && images.map(({ id, title, url, buttonText }) => {
            return (
              <SlideMulti
                key={id}
                title={title}
                imageUrl={url}
                buttonText={buttonText}
                cssClass={cssClass}
              />
            )
          })}

        </Slider>
      </div>


    </>
  )
}





const CarouselComp = ({ img, model, slides, cssClass }) => {
  console.log('CarouselComp', img, model)
  const placehold = 'https://placehold.co/1200x300/png'

  const settings = {
    // className: `${cssClass}`,
    swipe: img.length === 1 ? false : true,
    arrows: model === 'banner' ? false : false,
    dots: model === 'banner' ? false : false,
    infinite: img.length === 1 ? false : true,
    initialSlide: model === 'banner' ? img.length === 1 ? 0 : 1 : slides,
    speed: 500,
    slidesToShow: slides,
    slidesToScroll: slides,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: model === 'banner' ? 1 : slides,
          slidesToScroll: model === 'banner' ? 1 : slides,
          dots: false,
          infinite: img.length === 1 ? false : true,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: model === 'banner' ? 1 : slides,
          slidesToScroll: model === 'banner' ? 1 : slides,
          initialSlide: model === 'banner' ? 1 : slides,
          dots: false,
          infinite: img.length === 1 ? false : true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: model === 'banner' ? 1 : slides,
          slidesToScroll: model === 'banner' ? 1 : slides,
          dots: false,
          infinite: img.length === 1 ? false : true,
        }
      }
    ]
  };

  const LoadCarouselComponent = model !== undefined && model !== 'banner'
    ? <CarouselFull model={model} images={img} settings={settings} cssClass={cssClass} />
    : <CarouselMulti model={model} images={img} settings={settings} cssClass={cssClass} />;

  return (
    <div className="slider-container">
      {LoadCarouselComponent}
    </div>

  )
}

export default CarouselComp