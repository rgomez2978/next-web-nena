/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useEffect, useState } from 'react'
import { getDataHomeFetch } from '@/services/servicesWeb'
import ProductComp from "@/components/ProductComp/index";
import TitleComp from '@/components/TitleComp';
import HeaderComp from '@/components/HeaderComp';
import LoadingComp from '@/components/LoadingComp';
import LayoutComp from '@/components/LayoutComp';
import useStore from '@/stores/index';

export default function PageInicio() {
  const [loadHeader, setLoadHeader] = useState([])
  const [loadProductsTop, setLoadProductsTop] = useState([])
  const [loadProductsFeatured, setLoadProductsFeatured] = useState([])
  const { isLoading, setLoading, data, setData } = useStore();
  // const { data } = useStore();
  const user = useStore((state) => state.user)

  /**
    * Carga la info de la pagina home
    */
  const getDataFetch = async () => {
    setLoading(false);
    const dataHeader = await getDataHomeFetch('multi', 'home')
    if (dataHeader && dataHeader !== undefined) {
      setData(dataHeader)
      setLoading(true);
    } else { null }
  }


  /**
   * Carga los datos de las productos top
   */
  const getDataFilter = (fil) => {
    setLoading(false);
    const filteredData = data[fil].filter(item => item.status === true);
    console.log(`getDataFilter -> ${fil}`, filteredData)

    // if (filteredData && filteredData !== undefined) {
    //   setLoading(true);
    // } else { null }
    // return filteredData
  }



  useEffect(() => {
    getDataFetch()
  }, [])

  // console.log('ZUSTAND', data.header)

  return (
    <>
      {!isLoading ? (
        <LoadingComp />
      ) : (
        <>
          <LayoutComp type={'menu'} model={'full'} />

          <div className="mx-auto z-10 w-full">
            <div className='w-full h-full'>
              <HeaderComp
                data={getDataFilter('header')}
                type={'full'} //multi - full
                speed={2000}
                autoplay={true}
                speedAutoplay={4000}
                arrows={false}
                dots={false}
                slides={1}
                cssClass=""
              />
            </div>
            <div className='flex flex-col items-start justify-center '>

              <div className='w-full h-full mt-10 bg-transparent'>
                <TitleComp
                  title={'Productos Top'}
                  description={''}
                  type={'dark'}
                />
                {(getDataFilter('products_top') && getDataFilter('products_top').length > 0) && (
                  <ProductComp
                    data={getDataFilter('products_top')}
                    type={'grid'}
                    speed={1000}
                    autoplay={true}
                    speedAutoplay={3000}
                    arrows={true}
                    dots={false}
                    slides={1}
                    cssClass="rounded-2xl w-full h-auto md:h-[230px] lg:h-[300px] xl:h-[320px]"
                  />
                )}
              </div>

              <div className='w-full h-full mt-10 bg-nena-secondary py-10'>
                <TitleComp
                  title={'Productos Destacados'}
                  description={''}
                  type={'ligth'}
                />
                {(getDataFilter('products_featured') && getDataFilter('products_featured').length > 0) && (
                  <ProductComp
                    data={getDataFilter('products_featured')}
                    type={'slide'}
                    model='topx'
                    speed={1500}
                    autoplay={true}
                    speedAutoplay={3000}
                    arrows={true}
                    dots={false}
                    slides={2}
                    separator={`mx-5`}
                    cssClass="rounded-xl w-auto h-[100px] md:h-[170px] lg:h-[200px] xl:h-[230px]"
                  />
                )}
              </div>

              <main className='container mx-auto w-[90%] md:w-[82%] border border-green-500  '>
                <div className='text-blue mt-10'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis atque ea impedit magni nisi dolor maxime, maiores quibusdam ut blanditiis facere deserunt aperiam recusandae! Iste aliquam amet numquam itaque ipsum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis atque ea impedit magni nisi dolor maxime, maiores quibusdam ut blanditiis facere deserunt aperiam recusandae! Iste aliquam amet numquam itaque ipsum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis atque ea impedit magni nisi dolor maxime, maiores quibusdam ut blanditiis facere deserunt aperiam recusandae! Iste aliquam amet numquam itaque ipsum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis atque ea impedit magni nisi dolor maxime, maiores quibusdam ut blanditiis facere deserunt aperiam recusandae! Iste aliquam amet numquam itaque ipsum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis atque ea impedit magni nisi dolor maxime, maiores quibusdam ut blanditiis facere deserunt aperiam recusandae! Iste aliquam amet numquam itaque ipsum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis atque ea impedit magni nisi dolor maxime, maiores quibusdam ut blanditiis facere deserunt aperiam recusandae! Iste aliquam amet numquam itaque ipsum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis atque ea impedit magni nisi dolor maxime, maiores quibusdam ut blanditiis facere deserunt aperiam recusandae! Iste aliquam amet numquam itaque ipsum!
                </div>
              </main>
            </div>
          </div>

        </>
      )}
    </>
  );
}
