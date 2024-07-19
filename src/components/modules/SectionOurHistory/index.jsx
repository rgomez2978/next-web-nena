'use client';
import { useRef } from 'react'
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

import { HistoryCard, Title } from '@/components/shared'
import styles from "./style.module.scss";

const SectionOurHistory = ({ data }) => {
  const myRef = useRef();
  useIntersectionObserver(myRef, 'animate-fade');


  if (data && data.length > 0) {
    const { theme, title, items } = data[0]

    return (
      <section className={` ${styles.section_history_container} ${theme !== 'dark' ? 'bg-nena-secondary' : 'bg-transparent'}   `}>
        <Title title={title} type={theme} />
        <div className={` ${styles.list_items_container}
         ${theme !== 'dark' ? 'bg-nena-secondary' : 'bg-transparent'} `}>
          <div class={`${styles.list_items_bar}`}></div>
          {items.map((item, index) => (
            <div
              key={item.id}
              class={`${styles.list_items_content} ${index % 2 === 0 && 'flex-row md:flex-row-reverse'}`}>
              <div className={`${styles.empty_space}`}></div>
              <div className={`${styles.bullet_year}`} ref={myRef}> <h1>{item.year}</h1> </div>
              <HistoryCard idx={index} title={item.title} description={item.description} />
            </div>
          ))}
        </div>
      </section>
    )
  }
}

export default SectionOurHistory