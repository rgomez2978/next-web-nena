/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useEffect, useState } from 'react'
import styles from "./style.module.scss";

const TitleComp = ({ title, description, type }) => {
  const [activeCicle, setActiveCicle] = useState(false)
  const [words, setWords] = useState([])
  const [wordscant, setWordscant] = useState(0)

  const transformTitle = (split) => {
    if (split.length === 1) {
      words.push(title.substr(0, Math.round(title.length / 2) - 1));
      words.push(title.substr(Math.round(title.length / 2) - 1, title.length));
      setWordscant(1);
    } else {
      words.push(split[0], split[1]);
      setWordscant(2)
    }
    setActiveCicle(true);
  }

  useEffect(() => {
    if (title !== '') {
      if (!activeCicle) {
        const split = title.split(" ");
        transformTitle(split);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title])



  return (
    <div className={` ${styles.section_title_container} ${description !== '' ? 'mb-8' : 'mb-4'}`} >

      <div className={`${styles.title_container}`}>
        <div className={`${styles.title_split}`}>
          <h5 className={`${type === 'dark' ? 'text-nena-menu-text' : 'text-white'} ${wordscant === 2 ? 'pr-1 pl-2' : 'pl-2 pr-0'}`}>
            {words[0]}
          </h5>
          <div className={`${styles.border_split}`}>
            <span className={`rounded-bl-lg ${styles.border_left}
            ${type === 'dark'
                ? 'border-nena-menu-text'
                : 'border-white'}`}>
              &nbsp;</span>
            <span className={`${styles.border_right}
            ${type === 'dark'
                ? 'bg-nena-menu-text'
                : 'bg-white'}`}></span>
          </div>
        </div>

        <div className={`${styles.title_split}`}>
          <h5 className={`
           ${type === 'dark'
              ? 'text-nena-secondary'
              : 'text-white'}
            ${wordscant === 2
              ? 'pr-2 pl-1'
              : 'pl-0 pr-2'}`}>
            {words[1]}
          </h5>
          <div className={`${styles.border_split}`} >
            <div className={` ${styles.border_right}
              ${type === 'dark'
                ? 'bg-nena-secondary'
                : 'bg-white'}`}></div>
            <div className={`rounded-br-lg ${styles.border_left}
            ${type === 'dark'
                ? 'border-nena-secondary'
                : 'border-white'}`}>&nbsp;</div>
          </div>
        </div>
      </div>

      <div className={`${styles.paragraph_container}`} >
        <p className={` ${type === 'dark' ? 'text-gray-500' : 'text-white'} `}>
          {description}
        </p>
      </div>

    </div>
  )
}

export default TitleComp