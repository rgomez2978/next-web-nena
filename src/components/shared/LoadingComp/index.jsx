/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/alt-text */

const LoadingComp = () => {
  return (
    <>
      <div className="flex bg-nena-primary flex-col items-center justify-center w-full h-screen ">
        <div className="flex flex-col animate-pulse">
          <picture>
            {/* <source className="h-12" type="image/webp" /> */}
            <img className="h-20"
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