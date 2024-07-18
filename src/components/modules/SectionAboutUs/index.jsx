import React from 'react'
import { Title } from '@/components/shared'
import styles from "./style.module.scss";

/**
 * Seccion Nosotros - carga la informacion de contruccion de la seccion
 * @param {*} data informacion de texto a cargar
 * @returns
 */
const SectionAboutUs = ({ data }) => {

  if (data && data.length > 0) {
    const { theme, title, description, items } = data[0]

    return (
      <section className={` ${styles.section_aboutus_container} ${theme !== 'dark' ? 'bg-nena-secondary' : 'bg-transparent'}`}>
        <Title title={title} type={theme} />
        <div className={`${styles.content_top}`} data-aos="fade-up">
          <p className={`${theme === 'dark' ? 'text-gray-500' : 'text-white'} `}>
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </p>
        </div>

        <div className={` ${styles.content_bottom} ${theme === 'dark' ? 'bg-nena-secondary' : 'bg-transparent'}`}>
          <ul>
            {items.map(({ id, title, icon, description }, index) => (
              <li key={id} data-aos={`${index % 2 === 0 ? 'fade-right' : 'fade-left'}`}>
                <div dangerouslySetInnerHTML={{ __html: icon }} />
                <h5> {title} </h5>
                <p>
                  <div dangerouslySetInnerHTML={{ __html: description }} />
                </p>
              </li>
            ))}
          </ul>

        </div>
      </section >
    )
  }
}

export default SectionAboutUs