'use client';
import { useEffect, useState, useRef } from 'react'
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

import { Title } from '@/components/shared'
import styles from "./style.module.scss";

const SectionOurHistory = ({ data }) => {
  const myRefFade = useRef();
  const myRefLeft = useRef();
  const myRefRight = useRef();
  useIntersectionObserver(myRefFade, 'animate-fade');
  useIntersectionObserver(myRefLeft, 'animate-fade-left');
  useIntersectionObserver(myRefRight, 'animate-fade-right');



  if (data && data.length > 0) {
    const { theme, title, items } = data[0]

    return (
      <section className={` ${styles.section_history_container} ${theme !== 'dark' ? 'bg-nena-secondary' : 'bg-transparent'}   `}>
        <Title title={title} type={theme} />

        <div className={` ${styles.list_items_container}
         ${theme !== 'dark' ? 'bg-nena-secondary' : 'bg-transparent'} `}>

          <div class={`${styles.list_items_bar}`}></div>
          {items.map(({ id, year, title, description }, index) => (
            <div key={id} class={`${styles.list_items_content} ${index % 2 === 0 && 'flex-row md:flex-row-reverse'}`}>
              <div className={`${styles.empty_space}`}></div>
              <div className={`${styles.bullet_year}`}
                ref={myRefRight}> <h1>{year}</h1> </div>
              <div className={`${styles.item_content} `} ref={index % 2 === 0 ? myRefRight : myRefLeft} >
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
}

export default SectionOurHistory