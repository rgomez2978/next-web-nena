import LayoutNavbarComp from '@/components/LayoutComp/components/LayoutNavbarComp'
import LayoutSidebarComp from '@/components/LayoutComp/components/LayoutSidebarComp'
import LayoutBreadcrumbsComp from '@/components/LayoutComp/components/LayoutBreadcrumbsComp'
import LayoutFooterComp from '@/components/LayoutComp/components/LayoutFooterComp'

const LayoutComp = ({ type, model }) => {
  let loadLayoutComp;

  switch (type) {
    case 'menu':
      loadLayoutComp = <LayoutNavbarComp type={model} />
      break;

    case 'mobile':
      loadLayoutComp = <LayoutSidebarComp />
      break;

    case 'breadcrumb':
      loadLayoutComp = <LayoutBreadcrumbsComp />
      break;

    default:
      loadLayoutComp = <LayoutFooterComp />
      break;
  }


  return (
    loadLayoutComp
  )
}

export default LayoutComp