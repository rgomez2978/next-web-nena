/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useEffect, useState } from 'react'
import { Layout } from "@/components/ui";
import { getDataFetch } from '@/services/web.services'

import { SectionAboutUs, SectionOurValues, SectionPageHeader, SectionOurHistory, SectionOurPeopleCulture } from '@/components/modules';
import useStore from '@/stores/index';
import styles from "./style.module.scss";



export default function PageNosotros() {
  const [loadHeader, setLoadHeader] = useState([])
  const [loadAboutContent, setLoadAboutContent] = useState([])
  const [loadOurValues, setLoadOurValues] = useState([])
  const [loadOurHistory, setLoadOurHistory] = useState([])
  const [loadOurPeopleCulture, setLoadOurPeopleCulture] = useState([])
  const { setLoading, data, setData } = useStore();

  /**
  * Carga la info de la pagina nosotros y registra en el store
  */
  const getData = async () => {
    setLoading(false);
    const dataFetch = await getDataFetch('file', 'about')
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
        case 'about_content': setLoadAboutContent(filteredData); break;
        case 'our_values': setLoadOurValues(filteredData); break;
        case 'our_history': setLoadOurHistory(filteredData); break;
        case 'our_pepople_culture': setLoadOurPeopleCulture(filteredData); break;
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
    getDataFilter('about_content')
    getDataFilter('our_values')
    getDataFilter('our_history')
    getDataFilter('our_pepople_culture')
  }, [data])

  return (
    <Layout>
      <div className={`${styles.page_container}`} >
        <div className={`${styles.hero_content}`} >
          <SectionPageHeader data={loadHeader} />
        </div>
        <div className={`${styles.page_content}`}>
          <SectionAboutUs data={loadAboutContent} />
          <SectionOurValues data={loadOurValues} />
          <SectionOurHistory data={loadOurHistory} />
          <SectionOurPeopleCulture data={loadOurPeopleCulture} />
        </div>
      </div>
    </Layout>
  );
}
