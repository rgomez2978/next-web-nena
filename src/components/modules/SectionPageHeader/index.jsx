'use client';
import { useRef } from 'react'
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import styles from "./style.module.scss";


/**
 * Seccion: Header de paginas internas - carga la informacion de contruccion de la seccion
 * @param {*} data informacion de imagenes y texto a cargar
 * @returns
 */
const SectionPageHeader = ({ data }) => {

  const myRef = useRef();
  const myRefUP = useRef();
  useIntersectionObserver(myRefUP, 'animate-fade-down');
  useIntersectionObserver(myRef, 'animate-fade');


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
          <h1 ref={myRefUP} > {title} </h1>
          <p ref={myRef} > {description} </p>
        </div>

      </section>
    )
  }

}

export default SectionPageHeader