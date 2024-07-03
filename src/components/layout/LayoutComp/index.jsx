'use client'
import { NavbarComp, SidebarComp, LoadingComp, FooterComp } from '@/components/layout/index'
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