'use client';
import { useRef } from 'react'
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { Title } from '@/components/shared'
import styles from "./style.module.scss";

/**
 * Seccion Nosotros - carga la informacion de contruccion de la seccion
 * @param {*} data informacion de texto a cargar
 * @returns
 */
const SectionAboutUs = ({ data }) => {
  const myRefUp = useRef();
  const myRefLeft = useRef();
  const myRefRight = useRef();
  useIntersectionObserver(myRefUp, 'animate-fade-up');
  useIntersectionObserver(myRefLeft, 'animate-fade-left');
  useIntersectionObserver(myRefRight, 'animate-fade-right');

  if (data && data.length > 0) {
    const { theme, title, description, items } = data[0]

    return (
      <section className={` ${styles.section_supplier_container}
      ${theme !== 'dark' ? 'bg-nena-secondary' : 'bg-transparent'}`}>
        <Title title={title} type={theme} />

        <div className={`${styles.content_top}`} ref={myRefUp}>
          <p className={`${theme === 'dark' ? 'text-gray-500' : 'text-white'} `}>
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </p>
        </div>

        <div className={` ${styles.content_bottom}  ${theme !== 'dark' ? 'bg-nena-secondary' : 'bg-transparent'}`}>
          <ul>
            {items.map(({ id, title, icon }, index) => (
              <>
                <li key={id} >
                  <div dangerouslySetInnerHTML={{ __html: icon }} />
                  <p dangerouslySetInnerHTML={{ __html: title }} />
                </li>
              </>
            ))}
          </ul>
        </div>

      </section >
    )
  }
}

export default SectionAboutUs