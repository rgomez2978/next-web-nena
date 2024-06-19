
/* eslint-disable @next/next/no-img-element */
import CarouselComp from "@/components/CarouselComp/index";


/**
 * Template slide product banner
 * @param {*} param0
 * @returns
 */
const ProductBannerComp = ({ title, buttonText, imageUrl, cssClass }) => {
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
 * Template slide product card
 * @param {*} param0
 * @returns
 */
const ProductCardComp = ({ title, buttonText, imageUrl, cssClass }) => {
  const placehold = 'https://placehold.co/1200x300/png'
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
          <img
            src="https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
            className="object-cover w-full h-64"
            alt=""
          />
          <div className="p-5 border border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="traveling"
              >
                traveling
              </a>
              <span className="text-gray-600">— 28 Dec 2020</span>
            </p>
            <a
              href="/"
              aria-label="Category"
              title="Visit the East"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Visit the East
            </a>
            <p className="mb-2 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}



const ProductComp = ({ data, cssClass, type, slides }) => {
  return (
    <>
      <div className={`mt-20 mx-auto ${cssClass} !w-[90%] md:!w-[84%] `}>
        <CarouselComp data={data} type={type} slides={slides} cssClass={cssClass}>

          {data && data.map(({ id, title, url, buttonText }) => {
            return (
              type !== undefined && type === 'banner'
                ? <ProductBannerComp
                  key={id}
                  title={title}
                  imageUrl={url}
                  buttonText={buttonText}
                  cssClass={cssClass}
                />
                : <ProductCardComp
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

export default ProductComp
