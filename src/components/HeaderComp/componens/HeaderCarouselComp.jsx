/* eslint-disable @next/next/no-img-element */
'use client';
import Image from "next/image";
import CarouselComp from "@/components/CarouselComp/index";
import ButtonComp from "@/components/ButtonComp/index";


/**
 * Template slide
 * @param {*} param0
 * @returns
 */
const HeaderCarouselSlide = ({ type, title, buttonText, imageUrl, cssClass }) => {


  const HeaderTypeSlide = () => {
    return (
      <>
        <div className={`flex flex-col items-center justify-center ${cssClass} `}
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundRepeat: `no-repeat`,
            backgroundPosition: `top`,
            backgroundSize: `cover`
          }}
        >
          {title !== '' && (
            <div className="flex flex-col items-center ">
              <h3
                className="uppercase justify-center text-white text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-3xl text-center font-black w-[90%] md:w-[85%] lg:w-[80%] mb-2 md:mb-4 lg:mb-5 "
              >{title}
              </h3>

              {buttonText && (
                <ButtonComp
                  cssClassName={`flex px-3 lg:px-2 py-2 font-semibold text-nena-primary hover:text-white rounded-md bg-white  hover:bg-nena-primary focus:outline-none focus:ring focus:ring-transparent focus:ring-opacity-80 normal-case`}
                  cssText='flex pl-2 text-nowrap text-xs lg:text-base xl:text-lg'
                  text={buttonText}
                />
              )}
            </div>
          )}
        </div >
      </>
    )
  }



  const HeaderTypeFull = () => {
    return (
      <>
        <div className="flex h-screen w-full items-center justify-center">
          <Image
            src={imageUrl}
            alt="Background Image"
            className="object-cover object-center w-full h-full"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-nena-primary bg-opacity-70"></div>

          <div className="absolute flex flex-col items-center justify-center w-[60%] text-center">
            <h1
              data-aos="fade-in"
              data-aos-easing="linear"
              data-aos-duration="750"
              data-aos-anchor-placement="top-bottom"
              data-aos-offset="500"
              className="text-5xl lg:text-6xl text-white font-bold">
              {title}
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="3000"
              data-aos-easing="ease-in-out"
              className="text-2xl text-white mt-4">
              {/* {description} */}
            </p>
          </div>

          <button
            className="fixed justify-center bottom-10 p-6 text-white"
            onClick={() => window.scrollTo({
              top: 650,
              // top: document.body.scrollHeight,
              behavior: 'smooth'
            })}
          >
            <svg
              // animate-bounce
              className="animate-[wiggle_1s_ease-in-out_infinite] h-8 w-8"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
            >
              <path d="M12 2 H12 A7 7 0 0 1 19 9 V15 A7 7 0 0 1 12 22 H12 A7 7 0 0 1 5 15 V9 A7 7 0 0 1 12 2 z" />
              <path d="M12 6v4" />
            </svg>

            {/* <svg
          className="animate-bounce h-8 w-8"
          viewBox="0 0 24 24"
          fill="currentColor"
          height="1em"
          width="1em"
        >
          <path d="M7 9H2c0-2.96 2.17-5.43 5-5.91V9m13-2h-2v6h-3l4 4 4-4h-3V7M9 3.09V9h5c0-2.96-2.17-5.43-5-5.91M2 15c0 3.3 2.7 6 6 6s6-2.7 6-6v-4H2v4z" />
        </svg> */}

          </button>

          {/*
      <button
        className="fixed bottom-10 right-10 p-6 bg-blue-600 text-white rounded-full"
        onClick={() => window.scrollTo({
          top: 650,
          // top: document.body.scrollHeight,
          behavior: 'smooth'
        })}
      >
        <i className={`pi pi-bars text-lg h-6 w-6`}></i>

      </button> */}
        </div>
      </>
    )
  }


  return type === undefined || type !== 'full'
    ? <HeaderTypeSlide />
    : <HeaderTypeFull />

}


/**
 * Header carousel component template
 * @param {*} param0
 * @returns
 */
const HeaderCarouselComp = ({ data, cssClass, type, speed, autoplay, speedAutoplay, arrows, dots, slides }) => {
  return (
    <>
      <div className={`mx-auto ${cssClass} !w-[100%]`}>
        <CarouselComp
          data={data}
          type={type}
          speed={speed}
          autoplay={autoplay}
          speedAutoplay={speedAutoplay}
          arrows={arrows}
          dots={dots}
          slides={slides}
          cssClass={type !== 'full' ? `w-[100%] h-[250px] lg:h-[500px] shadow-xl` : cssClass}>
          {data && data.map(({ id, title, url, buttonText }) => {
            return (
              <HeaderCarouselSlide
                key={id}
                title={title}
                type={type}
                imageUrl={url}
                buttonText={buttonText}
                cssClass={cssClass}
              />
            )
          })}
        </CarouselComp>
      </div>
    </>
  )
}

export default HeaderCarouselComp;


