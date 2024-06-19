/* eslint-disable @next/next/no-img-element */
'use client';
import CarouselComp from "@/components/CarouselComp/index";
import ButtonComp from "@/components/ButtonComp/index";

/**
 * Template slide
 * @param {*} param0
 * @returns
 */
const HeaderCarouselSlide = ({ title, buttonText, imageUrl, cssClass }) => {
  const placehold = 'https://placehold.co/1200x300/png'
  return (
    <div className={`flex flex-col items-center justify-center ${cssClass} `}
      style={{
        backgroundImage: `url(${imageUrl})`,
        // backgroundImage: `url(${placehold})`,
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
  )
}


/**
 * Header carousel component template
 * @param {*} param0
 * @returns
 */
const HeaderCarouselComp = ({ data, cssClass, type, slides }) => {
  return (
    <>
      <div className={`mt-20 mx-auto ${cssClass} !w-[90%] md:!w-[84%] `}>
        <CarouselComp data={data} type={type} slides={slides} cssClass={cssClass}>

          {data && data.map(({ id, title, url, buttonText }) => {
            return (
              <HeaderCarouselSlide
                key={id}
                title={title}
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


