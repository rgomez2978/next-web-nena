/* eslint-disable @next/next/no-img-element */
import { Marquee, Title } from '@/components/shared'
import styles from "./style.module.scss";

/**
 * Seccion Socios comerciales - carga la informacion de contruccion de la seccion
 * @param {*} data informacion de logos y texto a cargar
 * @returns
 */
const SectionBusinessPartners = ({ data }) => {
  if (data && data.length > 0) {
    const { title, description, theme, items } = data[0]

    return (

      <div className={` ${styles.section_partners_container} ${theme !== 'dark' ? 'bg-nena-secondary' : 'bg-transparent'}   `}>
        <Title title={title} description={description} type={theme} />
        {(items && items.length > 0) && (
          <Marquee data={items} />
        )}
      </div>
    )
  }
}

export default SectionBusinessPartners