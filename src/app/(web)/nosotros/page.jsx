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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus unde eaque ducimus alias itaque at blanditiis error, placeat voluptate aut eos. Repudiandae eligendi hic facilis magnam quis alias numquam asperiores?
          Cupiditate animi nemo quo in, sequi temporibus unde totam quos fugiat aperiam velit id illum delectus inventore? Inventore debitis veniam voluptatem mollitia magnam dolorem hic error incidunt maxime veritatis. Animi.
          Quo illo esse placeat vitae ipsum, voluptas ipsam voluptatem minus sequi, error molestias fuga exercitationem asperiores. Natus numquam placeat quisquam facere eos dignissimos rem esse magnam veritatis. Omnis, voluptates repellat?
          Omnis, asperiores. Eum iste doloremque harum a deleniti ut quos quaerat, impedit accusamus explicabo sapiente odio necessitatibus eaque iure, consectetur blanditiis repudiandae facere maiores nemo vitae ipsam aut quam cum!
          Corporis ab magnam ea quos ipsum provident recusandae repellendus corrupti consequatur optio vitae doloribus a quod velit nam laboriosam, voluptates fugiat sint, quo consequuntur temporibus iusto soluta! Ipsum, distinctio incidunt.
          Inventore magni accusantium soluta! Vel alias, illum in labore quia cumque nostrum atque doloremque possimus voluptatibus deserunt voluptate placeat. Porro nostrum, tenetur vitae animi repudiandae exercitationem molestiae sequi autem eaque?
          Minus, reiciendis laborum. A, debitis minima ullam iusto id natus sint repellendus consequuntur, nisi quas sapiente! Ratione praesentium, debitis dolorum similique numquam odio doloremque explicabo, suscipit ipsa error consequuntur aut.
          Quod, enim atque et fugit error quis, nostrum, rem vero optio reiciendis quaerat illum! Non dolor labore illum voluptate voluptates ab? Perspiciatis, beatae rerum cumque repellat aliquam debitis dolorum quo!
          Eum numquam qui mollitia cum voluptatem quibusdam voluptates nobis excepturi pariatur non, tempora obcaecati explicabo. Iure facere corporis voluptatum perspiciatis quae totam a suscipit aliquam accusantium saepe, fugiat deserunt odit.
          Illum quasi saepe similique voluptas sunt consequatur quaerat dolore quas tempore velit voluptatem veniam, ad corporis. Reprehenderit officia modi est iusto, tenetur labore. Laudantium ducimus, necessitatibus officiis soluta facere architecto!
          <SectionAboutUs data={loadAboutContent} />
          {/* <SectionOurValues data={loadOurValues} /> */}
          {/* <SectionOurHistory data={loadOurHistory} /> */}
          {/* <SectionOurPeopleCulture data={loadOurPeopleCulture} /> */}

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus unde eaque ducimus alias itaque at blanditiis error, placeat voluptate aut eos. Repudiandae eligendi hic facilis magnam quis alias numquam asperiores?
          Cupiditate animi nemo quo in, sequi temporibus unde totam quos fugiat aperiam velit id illum delectus inventore? Inventore debitis veniam voluptatem mollitia magnam dolorem hic error incidunt maxime veritatis. Animi.
          Quo illo esse placeat vitae ipsum, voluptas ipsam voluptatem minus sequi, error molestias fuga exercitationem asperiores. Natus numquam placeat quisquam facere eos dignissimos rem esse magnam veritatis. Omnis, voluptates repellat?
          Omnis, asperiores. Eum iste doloremque harum a deleniti ut quos quaerat, impedit accusamus explicabo sapiente odio necessitatibus eaque iure, consectetur blanditiis repudiandae facere maiores nemo vitae ipsam aut quam cum!
          Corporis ab magnam ea quos ipsum provident recusandae repellendus corrupti consequatur optio vitae doloribus a quod velit nam laboriosam, voluptates fugiat sint, quo consequuntur temporibus iusto soluta! Ipsum, distinctio incidunt.
          Inventore magni accusantium soluta! Vel alias, illum in labore quia cumque nostrum atque doloremque possimus voluptatibus deserunt voluptate placeat. Porro nostrum, tenetur vitae animi repudiandae exercitationem molestiae sequi autem eaque?
          Minus, reiciendis laborum. A, debitis minima ullam iusto id natus sint repellendus consequuntur, nisi quas sapiente! Ratione praesentium, debitis dolorum similique numquam odio doloremque explicabo, suscipit ipsa error consequuntur aut.
          Quod, enim atque et fugit error quis, nostrum, rem vero optio reiciendis quaerat illum! Non dolor labore illum voluptate voluptates ab? Perspiciatis, beatae rerum cumque repellat aliquam debitis dolorum quo!
          Eum numquam qui mollitia cum voluptatem quibusdam voluptates nobis excepturi pariatur non, tempora obcaecati explicabo. Iure facere corporis voluptatum perspiciatis quae totam a suscipit aliquam accusantium saepe, fugiat deserunt odit.
          Illum quasi saepe similique voluptas sunt consequatur quaerat dolore quas tempore velit voluptatem veniam, ad corporis. Reprehenderit officia modi est iusto, tenetur labore. Laudantium ducimus, necessitatibus officiis soluta facere architecto!
        </div>
      </div>
    </Layout>
  );
}
