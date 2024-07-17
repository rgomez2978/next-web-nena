import React from 'react'
import { Title } from '@/components/shared'
import styles from "./style.module.scss";


/**
 * Seccion Nuestros valores - carga la informacion de contruccion de la seccion
 * @param {*} data informacion de iconos y texto a cargar
 * @returns
 */
const SectionOurValues = ({ data }) => {

  if (data && data.length > 0) {
    const { theme, title, description, items } = data[0]

    return (
      <section className={` ${styles.section_values_container} ${theme !== 'dark' ? 'bg-nena-secondary' : 'bg-transparent'}   `}>
        <div >
          <Title title={title} type={theme} />
        </div>
        <div className={` ${styles.cards_values_container}   ${theme !== 'dark' ? 'bg-nena-secondary' : 'bg-transparent'} `} data-aos="fade-up">
          {items.map(({ id, title, icon, description }) => (
            <div
              key={id}
              class={`${styles.card_content} ${theme !== 'dark'
                ? 'text-white hover:text-nena-secondary'
                : 'text-nena-secondary hover:text-white bg-transparent hover:bg-nena-secondary-dark '}
                `}>
              <div dangerouslySetInnerHTML={{ __html: icon }} />
              <h5> {title} </h5>
              <p> <div dangerouslySetInnerHTML={{ __html: description }} /> </p>
            </div>
          ))}
        </div>
      </section >
    )
  }
}

export default SectionOurValues