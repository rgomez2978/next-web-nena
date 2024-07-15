'use client'
import { Navbar, Sidebar, Loading, Footer } from '@/components/ui'
import useStore from '@/stores/index';

const Layout = ({ children }) => {
  const { isLoading } = useStore();

  return (
    <>
      {!isLoading ? (<Loading />) : (
        <>
          <Navbar />
          <Sidebar />
          {children}
          <Footer />
        </>
      )}
    </>
  )
}

export default Layout