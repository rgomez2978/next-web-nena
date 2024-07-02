import { useEffect, useState } from 'react'
import { HeroCarouselComp } from '@/components/shared/index'

const HeroComp = ({ data, type, cssClass, speed, autoplay, speedAutoplay, arrows, dots, slides }) => {

  const [loadImages, setLoadImages] = useState([])

  useEffect(() => {
    setLoadImages(data)
  }, [data, type])

  return (
    <>
      {
        (type !== undefined || type !== '') && (
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
        )}
    </>
  )
};

export default HeroComp;