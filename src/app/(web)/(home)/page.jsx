/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useEffect, useState } from 'react'
import { Layout } from '@/components/ui';
import { SectionHero, SectionProductsTop, SectionProductsFeatured, SectionLatestVideos, SectionBusinessPartners } from '@/components/modules';
import { getDataFetch } from '@/services/web.services'
import useStore from '@/stores/index';
import styles from "./style.module.scss";


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
  const getData = async () => {
    setLoading(false);
    const dataFetch = await getDataFetch('file', 'home')
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
    getData()
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
    <Layout>
      <div className={`${styles.page_container}`} data-aos="fade-in">
        <div className={`${styles.hero_content}`}>
          <SectionHero data={loadHeader} />
        </div>
        <div className={`${styles.page_content}`}>
          <SectionProductsTop data={loadProductsTop} />
          <SectionProductsFeatured data={loadProductsFeatured} />
          <SectionLatestVideos data={loadLastVideos} />
          <SectionBusinessPartners data={loadBusinessPartners} />
        </div>
      </div>
    </Layout>
  );
}
