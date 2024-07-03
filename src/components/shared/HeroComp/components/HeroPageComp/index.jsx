import React from 'react'

const HeroPageComp = ({ data, cssClass }) => {

  if (data && data.length > 0) {
    const { title, description, url } = data[0];
    return (
      <>
        {data[0] !== undefined && (
          <div className={`w-full h-60 flex flex-col items-center justify-center ${cssClass} `}
            style={{
              backgroundImage: `url(${url})`,
              backgroundRepeat: `no-repeat`,
              backgroundPosition: `top`,
              backgroundSize: `cover`
            }}
          >

            <div className="flex w-full h-60  bg-nena-primary bg-opacity-70"></div>

            <div className="absolute flex flex-col items-center justify-center w-[60%] text-center text-white">
              <h1
                data-aos="fade-in"
                data-aos-easing="linear"
                data-aos-duration="750"
                data-aos-anchor-placement="top-bottom"
                data-aos-offset="500"
                className="text-5xl lg:text-6xl text-white font-black"
              >
                {title}
              </h1>
              <p
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-easing="linear"
                className="text-2xl text-white mt-4"
              >
                {description}
              </p>
            </div>

          </div>
        )}


      </>
    )
  }

}

export default HeroPageComp