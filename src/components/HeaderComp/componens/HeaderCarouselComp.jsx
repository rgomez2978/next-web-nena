/* eslint-disable @next/next/no-img-element */
'use client';
import Image from "next/image";
import React, { useRef } from "react";
import CarouselComp from "@/components/CarouselComp/index";




const HeaderCarouselComp = ({ img }) => {

  return (
    <>
      <div className="mt-20 relative w-ful">
        <CarouselComp img={img} type='single' slides={1} />
      </div>
    </>

  )
}

export default HeaderCarouselComp;


