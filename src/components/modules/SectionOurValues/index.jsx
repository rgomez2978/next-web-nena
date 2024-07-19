'use client';
import { useEffect, useState, useRef } from 'react'
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { Title } from '@/components/shared'
import styles from "./style.module.scss";


/**
 * Seccion Nuestros valores - carga la informacion de contruccion de la seccion
 * @param {*} data informacion de iconos y texto a cargar
 * @returns
 */
const SectionOurValues = ({ data }) => {
  const myRef1 = useRef();
  const myRef2 = useRef();
  const myRef3 = useRef();
  useIntersectionObserver(myRef1, 'animate-fade-up');
  useIntersectionObserver(myRef2, 'animate-fade-up');
  useIntersectionObserver(myRef3, 'animate-fade-up');

  if (data && data.length > 0) {
    const { theme, title, description, items } = data[0]

    return (
      <section className={` ${styles.section_values_container} ${theme !== 'dark' ? 'bg-nena-secondary' : 'bg-transparent'}   `}>
        <Title title={title} type={theme} />
        <div className={` ${styles.cards_values_container}   ${theme !== 'dark' ? 'bg-nena-secondary' : 'bg-transparent'} `} >
          {items.map(({ id, title, icon, description }, index) => (
            <div key={id} >
              <div class={`${styles.card_content} ${theme !== 'dark'
                ? 'text-white hover:text-nena-secondary'
                : 'text-nena-secondary hover:text-white bg-transparent hover:bg-nena-secondary-dark '}
                `}
                ref={(index === 0 && myRef1 || index === 1 && myRef2 || index === 2 && myRef3)}
              >
                <div dangerouslySetInnerHTML={{ __html: icon }} />
                <h5> {title} </h5>
                <p> <div dangerouslySetInnerHTML={{ __html: description }} /> </p>
              </div>

            </div>
          ))}
        </div>
      </section >
    )
  }
}

export default SectionOurValues