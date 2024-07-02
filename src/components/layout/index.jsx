import NavbarComp from '@/components/layout/NavbarComp'
import SidebarComp from '@/components/layout/SidebarComp'
import FooterComp from '@/components/layout/FooterComp'
import LoadingComp from '@/components/shared/LoadingComp';
import useStore from '@/stores/index';

const LayoutComp = ({ type, model, children }) => {
  const { isLoading } = useStore();

  return (
    <>
      {!isLoading ? (<LoadingComp />) : (
        <>
          {type === 'menu'
            ? <NavbarComp type={model} />
            : <SidebarComp />}
          {children}
          <FooterComp />
        </>
      )}
    </>
  )
}

export default LayoutComp