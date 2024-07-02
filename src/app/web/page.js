/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useEffect, useState } from 'react'
import { getDataHomeFetch } from '@/services/servicesWeb'
import LayoutComp from '@/components/layout/index';
import useStore from '@/stores/index';
import SectionProducsTop from '@/components/blocks/SectionProducsTop';
import SectionProductsFeatured from '@/components/blocks/SectionProductsFeatured';
import SectionHero from '@/components/blocks/SectionHero';
import SectionLastsVideos from '@/components/blocks/SectionLastsVideos';
import SectionBusinessPartners from '@/components/blocks/SectionBusinessPartners';

export default function PageInicio() {
  const [loadHeader, setLoadHeader] = useState([])
  const [loadProductsTop, setLoadProductsTop] = useState([])
  const [loadProductsFeatured, setLoadProductsFeatured] = useState([])
  const [loadLastVideos, setLoadLastVideos] = useState([])
  const [loadBusinessPartners, setLoadBusinessPartners] = useState([])
  const { setLoading, data, setData } = useStore();


  /**
    * Carga la info de la pagina home y registra en el store
    */
  const getDataFetch = async () => {
    setLoading(false);
    const dataFetch = await getDataHomeFetch('file', 'home')
    if (dataFetch && dataFetch !== undefined) {
      setData(dataFetch)
      setLoading(true);
    } else { null }
  }


  /**
   * Carga los datos de las productos top
   */
  const getDataFilter = (fil) => {
    const myData = data[fil]
    if (myData && myData !== undefined) {
      const filteredData = myData.filter(item => item.status === true);
      switch (fil) {
        case 'header': setLoadHeader(filteredData); break;
        case 'products_top': setLoadProductsTop(filteredData); break;
        case 'products_featured': setLoadProductsFeatured(filteredData); break;
        case 'last_videos': setLoadLastVideos(filteredData); break;
        case 'business_partners': setLoadBusinessPartners(filteredData); break;
        default: break;
      }
      setLoading(true);
    }
  }

  // Precarga la data en el store para ser consultada y filtrada
  useEffect(() => {
    getDataFetch()
  }, [])


  // Filtra la data de cada seccion de la pagina y la asigna al state del componente
  useEffect(() => {
    getDataFilter('header')
    getDataFilter('products_top')
    getDataFilter('products_featured')
    getDataFilter('last_videos')
    getDataFilter('business_partners')
  }, [data])



  return (
    <>
      <LayoutComp type={'menu'} model={'full'} >
        <div className="mx-auto z-10 w-full">
          <div className='w-full h-full'>
            <SectionHero
              data={loadHeader}
              type={'full'}
            />
          </div>
          <div className='flex flex-col items-start justify-center '>
            <SectionProducsTop
              titleType={'dark'}
              title={'Productos Top'}
              description={''}
              data={loadProductsTop}
              type={'grid'}
            />

            <SectionProductsFeatured
              titleType={'ligth'}
              title={'Productos Destacados'}
              description={''}
              data={loadProductsFeatured}
              type={'slide'}
            />

            <SectionLastsVideos
              titleType={'dark'}
              title={'Últimos Videos'}
              description={''}
              data={loadLastVideos}
            />

            <SectionBusinessPartners
              titleType={'dark'}
              title={'Nuestros Socios comerciales'}
              description={''}
              data={loadBusinessPartners}
            />
          </div>
        </div>
      </LayoutComp>
    </>
  );
}
