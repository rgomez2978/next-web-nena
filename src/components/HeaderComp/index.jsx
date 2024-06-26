import { useEffect, useState } from 'react'
import HeaderCarouselComp from './componens/HeaderCarouselComp'

const HeaderComp = ({ data, type, cssClass, speed, autoplay, speedAutoplay, arrows, dots, slides }) => {

  const [loadImages, setLoadImages] = useState([])

  useEffect(() => {
    setLoadImages(data)
  }, [data, type])


  return (
    <>
      {
        (type !== undefined || type !== '') && (
          <HeaderCarouselComp
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

export default HeaderComp;