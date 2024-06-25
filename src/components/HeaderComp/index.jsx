import { useEffect, useState } from 'react'
import HeaderFullComp from './componens/HeaderFullComp'
import HeaderCarouselComp from './componens/HeaderCarouselComp'
import { getDataHomeFetch } from '@/services/servicesWeb'
const HeaderComp = ({ type, cssClass, speed, autoplay, speedAutoplay, arrows, dots, slides }) => {

  const [loadImages, setLoadImages] = useState([])

  /**
  * Carga los datos de las imagenes asociadas al banner
  */
  const getHeaders = async () => {
    const data = await getDataHomeFetch('file', 'home')
    console.log('getHeaders :>> ', data);
    // const filteredData = data.filter(item => item.status === true);
    // filteredData && filteredData !== undefined
    //   ? setLoadImages(filteredData)
    //   : null;
  }


  const loadData = type !== undefined && type !== 'full'
    ? loadImages
    : '/images/banners/full/IMG_8296.jpg';

  useEffect(() => {
    getHeaders()
  }, [])


  const loadHeaderComponent = type !== undefined && type === 'multi'
    ? <HeaderCarouselComp
      data={loadData}
      type={type}
      speed={speed}
      autoplay={autoplay}
      speedAutoplay={speedAutoplay}
      arrows={arrows}
      dots={dots}
      slides={slides}
      cssClass={`${cssClass}`} />
    : <HeaderFullComp data={loadData} />;

  return (
    loadHeaderComponent
  )

};

export default HeaderComp;