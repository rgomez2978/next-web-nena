import { useEffect, useState } from 'react'
import { HeroCarouselComp, HeroPageComp } from '@/components/shared/index'

const HeroComp = ({ data, type, cssClass, speed, autoplay, speedAutoplay, arrows, dots, slides }) => {
  const [loadImages, setLoadImages] = useState([])

  useEffect(() => {
    setLoadImages(data)
  }, [data, type])

  return (
    <>
      {
        (type !== undefined || type !== '') && type === 'full'
          ? (
            <HeroCarouselComp
              data={loadImages}
              type={type}
              speed={speed}
              autoplay={autoplay}
              speedAutoplay={speedAutoplay}
              arrows={arrows}
              dots={dots}
              slides={slides}
              cssClass={`${cssClass}`} />
          ) : (
            <HeroPageComp data={loadImages} cssClass={`${cssClass}`} />
          )}
    </>
  )
};

export default HeroComp;