import React from 'react'
import { Carousel, ProductBanner } from "@/components/shared";
import styles from "./style.module.scss";

/**
 * Template products grid
 * @param {*} param0
 * @returns
 */
const ProductGrid = ({
  data,
  cssClass,
  type,
  speed,
  autoplay,
  speedAutoplay,
  arrows,
  slides,
  dots
}) => {
  return (
    <div className={`${cssClass} ${styles.product_grid_container} `}>
      <div className={` ${cssClass} ${styles.product_grid_content}`}>
        <div className={` ${cssClass} ${styles.product_grid_slide}`}>
          <Carousel
            data={data[0].items}
            type={'fade'}
            speed={speed}
            autoplay={autoplay}
            speedAutoplay={speedAutoplay}
            arrows={arrows}
            dots={dots}
            slides={1}>
            {data[0].items && data[0].items.map(({ id,
              url }) => {
              return (
                <ProductBanner
                  key={id}
                  imageUrl={url}
                  cssClass={`${cssClass} `}
                />
              )
            })}
          </Carousel>
        </div>

        <div className={` ${cssClass} ${styles.product_grid_group}`}>
          <div className={`${styles.product_grid_group_image}`}
            style={{
              backgroundImage: `url(${data[1].url})`,
              backgroundRepeat: `no-repeat`,
              backgroundPosition: `center center`,
              backgroundSize: `cover`
            }}
          >
          </div>
          <div className={`${styles.product_grid_group_image}`}
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

export default ProductGrid