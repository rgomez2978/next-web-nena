import { useState, useEffect } from "react";
import Image from "next/image";
import HeaderFullComp from './componens/HeaderFullComp'
import HeaderCarouselComp from './componens/HeaderCarouselComp'


const HeaderComp = ({ images, multi }) => {
  console.log('HeaderComp', multi)
  const loadImage = multi !== undefined
    ? images
    : '/images/banners/portrait-of-a-handsome-pharmacist-working-in-a-pharmacy.jpg';

  const loadHeaderComponent = multi !== undefined
    ? <HeaderCarouselComp img={loadImage} />
    : <HeaderFullComp img={loadImage} />;

  return (
    loadHeaderComponent
  )

};

export default HeaderComp;