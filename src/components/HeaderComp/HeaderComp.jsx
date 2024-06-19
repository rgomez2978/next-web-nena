import HeaderFullComp from './componens/HeaderFullComp'
import HeaderCarouselComp from './componens/HeaderCarouselComp'

const HeaderComp = ({ data, type, cssClass, slides }) => {
  const loadData = type !== undefined
    ? data
    : '/images/banners/portrait-of-a-handsome-pharmacist-working-in-a-pharmacy.jpg';

  const loadHeaderComponent = type !== undefined || type === 'carousel'
    ? <HeaderCarouselComp data={loadData} type={type} slides={slides} cssClass={cssClass} />
    : <HeaderFullComp data={loadData} />;

  return (
    loadHeaderComponent
  )

};

export default HeaderComp;