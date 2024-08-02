'use client';
import { useRef } from 'react'
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import styles from "./style.module.scss";

/**
 * Shared Component: ValueCard
 * @param {*} idx index
 * @param {*} theme tema a usar
 * @param {*} icon Icono a usar
 * @param {*} title Titulo del card
 * @param {*} description Descripcion del card
 * @returns
 */
const ValueCard = ({ theme, title, icon, description }) => {
  const myRef = useRef();
  useIntersectionObserver(myRef, 'animate-fade-up');

  return (
    <div className={`${styles.card_content} ${theme !== 'dark'
      ? 'text-white hover:text-nena-secondary'
      : 'text-nena-secondary hover:text-white bg-transparent hover:bg-nena-secondary-dark '}
                `} ref={myRef}>
      <div dangerouslySetInnerHTML={{ __html: icon }} />
      <h5> {title} </h5>
      <p> <div dangerouslySetInnerHTML={{ __html: description }} /> </p>
    </div >
  )
}

export default ValueCard