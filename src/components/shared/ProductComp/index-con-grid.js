
/* eslint-disable @next/next/no-img-element */
'use client';

import CarouselComp from "@/components/CarouselComp/index";
import ButtonComp from "@/components/ButtonComp/index";
import Slider from "react-slick";
import React, { useRef } from "react";


/**
 * Template slide product banner
 * @param {*} param0
 * @returns
 */
const ProductBannerComp = ({ title, buttonText, imageUrl, cssClass }) => {
  console.log('ProductBannerComp', title, imageUrl, cssClass)

  const placehold = 'https://placehold.co/1200x300/png'
  return (
    <div className={` ${cssClass}`}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `top`,
        backgroundSize: `cover`
      }}
    >
      <div className=" h-[200px] w-[300px]"> </div>
    </div >
  )
}


/**
 * Template slide product card
 * @param {*} param0
 * @returns
 */
const ProductCardComp = ({ title, buttonText, imageUrl, cssClass }) => {
  const placehold = 'https://placehold.co/1200x300/png'
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
}

const ProductGridComp = ({ data, cssClass, type, slides }) => {
  console.log('ProductGridComp', data)

  const placehold = 'https://placehold.co/1200x300/png'
  let sliderRef = useRef(null);

  const settings = {
    swipe: data.length === 1 ? false : true,
    arrows: type === 'single' ? false : false,
    dots: type === 'single' ? false : true,
    infinite: data.length === 1 ? false : true,
    initialSlide: slides,
    speed: 500,
    slidesToShow: slides,
    slidesToScroll: slides,
    // autoplay: true,
    autoplaySpeed: 2000,
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
    <>
      <div className={`mx-auto  ${cssClass} px-3`}>
        <div className={`grid grid-rows-1 md:grid-flow-col gap-3 h-full ${cssClass}`}>

          <div className="md:row-span-3 md:col-span-2 rounded-2xl ">
            <div className="h-[190px] w-auto">

              <ProductBannerComp
                key={data[0].items[0].id}
                title={data[0].items[0].title}
                imageUrl={data[0].items[0].url}
                cssClass={cssClass}
              />


              {/* <CarouselComp
                data={data[0]}
                type={data[0] && data[0].length > 1 ? 'multi' : 'single'}
                slides={1}
              // cssClass={cssClass}
              >


              </CarouselComp>

              */}

              {/* <div className="slider-container">
                <Slider {...settings}
                  ref={slider => { sliderRef = slider; }}
                >

                  {data[0] && data[0].items.map(({ id, url }) => {
                    return (
                      <ProductBannerComp
                        key={id}
                        imageUrl={url}
                        cssClass={cssClass}
                      />
                    )
                  })}
                </Slider>
              </div> */}
            </div>
          </div>


          <div className={` ${cssClass} grid gap-3`}>
            <div
              className={`md:col-span-2 rounded-2xl bg-red-500 text-white p-4`}
              style={{
                backgroundImage: `url(${data[1].url})`,
                backgroundRepeat: `no-repeat`,
                backgroundPosition: `top`,
                backgroundSize: `cover`
              }}
            >
              <div className="h-[100px]"></div>
            </div>

            <div
              className={`md:col-span-2 rounded-2xl bg-green-500 text-white p-4 `}
              style={{
                backgroundImage: `url(${data[2].url})`,
                backgroundRepeat: `no-repeat`,
                backgroundPosition: `top`,
                backgroundSize: `cover`,
              }}
            >
              <div className="h-[100px]"></div>
              {/* <h2 className="text-xl font-bold mb-2">Banner 3</h2> */}
              {/* <p>Contenido del banner 3.</p> */}
            </div>
          </div>

        </div>
      </div >

    </>
  )
}








const ProductComp = ({ data, cssClass, type, slides }) => {
  console.log('ProductComp', data, cssClass, type, slides)
  return (
    <>
      <div className={`mx-auto ${cssClass} !w-[90%] md:!w-[84%] `}>

        {type && type === 'grid' ? (
          <ProductGridComp
            data={data}
            type={type}
            slides={slides}
            cssClass={cssClass}
          />
        ) : (
          <CarouselComp data={data} type={type} slides={slides} cssClass={cssClass}>
            {data && data.map(({ id, title, url, buttonText }) => {
              return (
                type !== undefined && type === 'grid'
                  ? <ProductBannerComp
                    key={id}
                    imageUrl={url}
                    cssClass={cssClass}
                  />
                  : <ProductCardComp
                    key={id}
                    title={title}
                    imageUrl={url}
                    buttonText={buttonText}
                    cssClass={cssClass}
                  />
              )
            })}
          </CarouselComp>
        )}





      </div>
    </>
  )
}

export default ProductComp
