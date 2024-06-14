'use client';
import React from 'react'
// import { motion } from 'react-motion';
import { Galleria } from 'primereact/galleria';
import { Skeleton } from 'primereact/skeleton';
import Image from 'next/image';


const imageLoader = () => {
  return (
    <Skeleton width="100%" height="350px"></Skeleton>
  )
};

// Definición de las plantillas para los elementos y miniaturas
const itemTemplate = (item) => {

  //
  return (
    <div
      style={{
        // position: 'relative',
        borderRadius: '10px',
        overflow: 'hidden',
        width: '50%',
        height: '350px',
      }}>

      <Image
        src={item.item}
        alt={item.alt}
        // loading="lazy"
        layout="fill"
        objectFit="cover"
      />


    </div>
  )
}

const thumbnailTemplate = (item) => {
  return (
    <>
      {/* // <img src={item.thumbnail} alt={item.alt} style={{ width: '50px', height: 'auto' }} /> */}


    </>
  )
}


const BannerCarouselComp = ({ images }) => {
  // console.log('BannerComp', images)
  const data = [images]

  return (
    <Galleria
      value={images}
      // responsiveOptions={responsiveOptions}
      circular
      numVisible={images.length}
      showItemNavigators
      showItemNavigatorsOnHover
      // showIndicators
      item={itemTemplate}
      showThumbnails={false}
    // thumbnail={thumbnailTemplate}
    />
  );
}



export default BannerCarouselComp;



