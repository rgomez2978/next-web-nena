import React from 'react'
import styles from "./style.module.scss";


/**
 * Seccion: Header de paginas internas - carga la informacion de contruccion de la seccion
 * @param {*} data informacion de imagenes y texto a cargar
 * @returns
 */
const SectionPageHeader = ({ data }) => {

  if (data && data.length > 0) {
    const { title, description, url } = data[0];

    return (
      <section className={`${styles.section_header_container}`}
        style={{
          backgroundImage: `url(${url})`,
          backgroundRepeat: `no-repeat`,
          backgroundPosition: `top`,
          backgroundSize: `cover`
        }}
      >
        <div className={`${styles.header_overlay}`}></div>

        <div className={`${styles.header_content}`}>
          <h1
            data-aos="fade-in"
            data-aos-easing="linear"
            data-aos-duration="750"
            data-aos-anchor-placement="top-bottom"
            data-aos-offset="500"
          >
            {title}
          </h1>
          <p
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-easing="linear"
          >
            {description}
          </p>
        </div>
      </section>
    )
  }

}

export default SectionPageHeader