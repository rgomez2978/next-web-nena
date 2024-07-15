import React from 'react'

/**
 * Template slide product banner
 * @param {*} param0
 * @returns
 */
const ProductBanner = ({
  imageUrl,
  cssClass,
  separator
}) => {
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

export default ProductBanner