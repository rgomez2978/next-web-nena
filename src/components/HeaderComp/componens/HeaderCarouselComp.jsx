/* eslint-disable @next/next/no-img-element */
'use client';
import Image from "next/image";
import React, { useRef } from "react";
import CarouselComp from "@/components/CarouselComp/index";




const HeaderCarouselComp = ({ img, cssClass }) => {

  return (
    <>
      <div className={`mt-20 mx-auto ${cssClass} !w-[90%] md:!w-[80%] `}>
        <CarouselComp img={img} type='single' slides={1} cssClass={cssClass} />
      </div>
    </>

  )
}

export default HeaderCarouselComp;


