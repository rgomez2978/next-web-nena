'use client';
import { useRef } from 'react'
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { Carousel, ProductGrid, ProductBanner, ProductCard } from "@/components/shared";
import styles from "./style.module.scss";
/**
 * Select template products
 * @param {*} param0
 * @returns
 */
const Product = ({
  data,
  cssClass,
  type,
  model,
  speed,
  autoplay,
  speedAutoplay,
  arrows,
  slides,
  separator,
  dots
}) => {
  const myRef = useRef();
  useIntersectionObserver(myRef, type === 'grid' ? 'animate-fade-up' : 'animate-fade');

  return (
    <>
      <div className={` ${cssClass} ${styles.product_container} `} ref={myRef}>
        {type && type === 'grid' ? (
          <ProductGrid
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
          <Carousel
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
          >

            {data && data.map(({ id, title, url, buttonText }) => {
              return (
                type !== undefined && type === 'slide'
                  ? <ProductBanner
                    key={id}
                    imageUrl={url}
                    cssClass={cssClass}
                    separator={separator}
                  />
                  : <ProductCard
                    key={id}
                    title={title}
                    imageUrl={url}
                    buttonText={buttonText}
                    cssClass={cssClass}
                  />
              )
            })}
          </Carousel>
        )}
      </div>
    </>
  )
}

export default Product
