
/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useRef } from "react";
import CarouselComp from "@/components/shared/CarouselComp/index";


/**
 * Template slide product banner
 * @param {*} param0
 * @returns
 */
const ProductBannerComp = ({ imageUrl, cssClass, separator }) => {
  return (
    <div className={`${cssClass} ${separator}`}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `top`,
        backgroundSize: `cover`
      }}
    />
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

/**
 * Template products grid
 * @param {*} param0
 * @returns
 */

const ProductGridComp = ({ data, cssClass, type, speed, autoplay, speedAutoplay, arrows, slides, dots }) => {
  return (
    <div className={`mx-auto  ${cssClass} px-6 md:px-0 lg:px-12 `}>
      <div className={`flex flex-col md:flex-row md:space-y-0 md:space-x-3 lg:space-x-2  ${cssClass} `}>
        <div className={` ${cssClass} md:w-[60%] lg:w-[60%] xl:w-[70%] mb-3 h-full`}>
          <div className="w-full !px-0">
            <CarouselComp
              data={data[0].items}
              type={'fade'}
              speed={speed}
              autoplay={autoplay}
              speedAutoplay={speedAutoplay}
              arrows={arrows}
              dots={dots}
              slides={1}>
              {data[0].items && data[0].items.map(({ id, url }) => {
                return (
                  <ProductBannerComp
                    key={id}
                    imageUrl={url}
                    cssClass={`${cssClass} h-[180px] `}
                  />
                )
              })}
            </CarouselComp>
          </div>
        </div>

        <div
          className={` ${cssClass} mx-auto md:w-[40%] flex flex-row md:flex-col space-x-2 md:space-x-0 md:space-y-3 lg:space-y-2 `}>
          <div
            className={`rounded-xl w-full h-[120px] sm:h-[140px]  md:h-full  text-white `}
            // className={`rounded-xl w-full h-full  text-white `}
            style={{
              backgroundImage: `url(${data[1].url})`,
              backgroundRepeat: `no-repeat`,
              backgroundPosition: `center center`,
              backgroundSize: `cover`
            }}
          >
          </div>
          <div
            className={`rounded-xl w-full h-[120px] sm:h-[140px] md:h-full  text-white  `}
            style={{
              backgroundImage: `url(${data[2].url})`,
              backgroundRepeat: `no-repeat`,
              backgroundPosition: `center center`,
              backgroundSize: `cover`,
            }}
          >
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * Select template products
 * @param {*} param0
 * @returns
 */
const ProductComp = ({ data, cssClass, type, model, speed, autoplay, speedAutoplay, arrows, slides, separator, dots }) => {

  return (
    <>
      <div className={` ${cssClass} mx-auto !w-[100%] md:!w-[90%] `}>
        {type && type === 'grid' ? (
          <ProductGridComp
            data={data}
            type={type}
            model={model}
            speed={speed}
            autoplay={autoplay}
            speedAutoplay={speedAutoplay}
            arrows={arrows}
            dots={dots}
            slides={slides}
            cssClass={cssClass}
          />
        ) : (
          <CarouselComp
            data={data}
            type={type}
            model={model}
            speed={speed}
            autoplay={autoplay}
            speedAutoplay={speedAutoplay}
            arrows={arrows}
            dots={dots}
            slides={slides}
            cssClass={cssClass}>
            {data && data.map(({ id, title, url, buttonText }) => {
              return (
                type !== undefined && type === 'slide'
                  ? <ProductBannerComp
                    key={id}
                    imageUrl={url}
                    cssClass={cssClass}
                    separator={separator}
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
