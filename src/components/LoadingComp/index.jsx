/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

const LoadingComp = () => {
  return (
    <>
      <div class="flex bg-nena-primary flex-col items-center justify-center w-full h-screen ">
        <div class="flex flex-col animate-pulse">
          <picture>
            {/* <source class="h-12" type="image/webp" /> */}
            <img class="h-20"
              src={`/images/Logo.png`}
              alt={`logo loading`}
              className={`object-cover outline-none`}
            />
          </picture>
        </div>
      </div>
    </>
  )
}

export default LoadingComp