'use client';
import Image from "next/image";
import React, { useRef } from "react";
// import { motion } from 'react-motion';
// import { Galleria } from 'primereact/galleria';
// import { Skeleton } from 'primereact/skeleton';
import Slider from "react-slick";

// const imageLoader = () => {
//   return (
//     <Skeleton width="100%" height="350px"></Skeleton>
//   )
// };



const HeaderCarouselComp = ({ img }) => {
  console.log('HeaderCarouselComp', img)

  const placehold = 'https://placehold.co/1200x300/png'

  let sliderRef = useRef(null);

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };


  const settings = {
    // className: "px-10",
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    // initialSlide: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // nextArrow: (
    //   <div>
    //     <div className="next-slick-arrow">
    //       <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" /></svg>
    //     </div>
    //   </div>
    // ),

    // prevArrow: (
    //   <div>
    //     <div className="next-slick-arrow rotate-180 border border-blue-900">
    //       <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" /></svg>
    //     </div>
    //   </div>
    // ),
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true
    //     }
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }
    // ]
  };


  return (

    <>

      {/* <div className="flex space-x-6 w-100 border border-green-500 justify-end mb-5">
        <button className=" bg-gray-400 button" onClick={previous}>
          Previous
        </button>
        <button className="bg-gray-400 button" onClick={next}>
          Next
        </button>
      </div> */}

      {/* <div className="slider-container">
        <Slider
          {...settings}
          ref={slider => { sliderRef = slider; }}
        >
          {img && img.map(({ id, title, alt, item }) => {
            console.log('first', id, title, alt, item)
            return (
              <div key={id}>
                <Image

                  src={item}
                  alt={title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            )
          })}
        </Slider>
      </div > */}


      <div className="slider-container">
        <Slider
          // ref={slider => {
          //   sliderRef = slider;
          // }}
          {...settings}
        >
          <div>
            <Image
              src="/images/banners/01042024_030810.jpg"
              alt="Imagen 1"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div>
            <Image
              src="/images/banners/010424_030929.jpg"
              alt="Imagen 2"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </Slider>
      </div>



    </>

  )
}

export default HeaderCarouselComp;


