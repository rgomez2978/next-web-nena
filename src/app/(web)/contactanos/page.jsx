/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useEffect, useState } from 'react'
import { Layout } from "@/components/ui";
import { getDataFetch } from '@/services/web.services'

import { SectionPageHeader, SectionSupplier, SectionForms, } from '@/components/modules';
import useStore from '@/stores/index';
import styles from "./style.module.scss";



export default function PageContactanos() {
  const [loadHeader, setLoadHeader] = useState([])
  const [loadForm, setLoadForm] = useState([])
  const { setLoading, data, setData } = useStore();

  /**
  * Carga la info de la pagina nosotros y registra en el store
  */
  const getData = async () => {
    setLoading(false);
    const dataFetch = await getDataFetch('file', 'contact')
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
        case 'form_section': setLoadForm(filteredData); break;
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
    getDataFilter('form_section')
  }, [data])

  return (
    <Layout>
      <div className={`${styles.page_container}`} >
        <div className={`${styles.hero_content}`} >
          <SectionPageHeader data={loadHeader} />
        </div>
        <div className={`${styles.page_content}`}>
          <SectionForms data={loadForm} type={'contact'} />
        </div>
      </div>
    </Layout>
  );
}
