import LayoutNavbarComp from '@/components/LayoutComp/components/LayoutNavbarComp'
import LayoutSidebarComp from '@/components/LayoutComp/components/LayoutSidebarComp'
import LayoutFooterComp from '@/components/LayoutComp/components/LayoutFooterComp'
import LoadingComp from '@/components/LoadingComp';
import useStore from '@/stores/index';

const LayoutComp = ({ type, model, children }) => {
  const { isLoading } = useStore();

  return (
    <>
      {!isLoading ? (<LoadingComp />) : (
        <>
          {type === 'menu'
            ? <LayoutNavbarComp type={model} />
            : <LayoutSidebarComp />}
          {children}
          <LayoutFooterComp />
        </>
      )}
    </>
  )
}

export default LayoutComp