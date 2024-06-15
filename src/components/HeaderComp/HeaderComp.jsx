import HeaderFullComp from './componens/HeaderFullComp'
import HeaderCarouselComp from './componens/HeaderCarouselComp'

const HeaderComp = ({ images, multi, cssClass }) => {
  const loadImage = multi !== undefined
    ? images
    : '/images/banners/portrait-of-a-handsome-pharmacist-working-in-a-pharmacy.jpg';

  const loadHeaderComponent = multi !== undefined
    ? <HeaderCarouselComp img={loadImage} cssClass={cssClass} />
    : <HeaderFullComp img={loadImage} />;

  return (
    loadHeaderComponent
  )

};

export default HeaderComp;