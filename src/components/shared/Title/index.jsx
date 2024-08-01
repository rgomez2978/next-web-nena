/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
'use client';
import { useEffect, useState, useRef } from 'react'
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import styles from "./style.module.scss";
import { TitleBorder } from '..';

const TitleComp = ({ title, description, type }) => {
  const [activeCicle, setActiveCicle] = useState(false)
  const [wordsLeft, setWordsLeft] = useState([])
  const [wordsRight, setWordsRight] = useState([])
  const [wordscant, setWordscant] = useState(0)

  const transformTitle = (myWords) => {
    if (myWords.length <= 1) {
      setWordsLeft(myWords)
      setActiveCicle(true);
      setWordscant(1)
    } else {
      const indiceMedio = Math.floor(myWords.length / 2);
      const parte1 = myWords.slice(0, indiceMedio);
      const parte2 = myWords.slice(indiceMedio);
      setWordsLeft(parte1)
      setWordsRight(parte2)
      setWordscant(myWords.length)
      setActiveCicle(true);
    }
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

  const myRef = useRef();
  useIntersectionObserver(myRef, 'animate-fade');


  return (
    <div className={` ${styles.section_title_container} ${description !== '' ? 'mb-8' : 'mb-4'}`} ref={myRef} >
      <div className={`${styles.title_container}`}>
        <div className={`${styles.title_split}`}>
          <h5 className={`${type === 'dark' ? 'text-nena-menu-text' : 'text-white'} ${wordscant !== 1 ? 'pr-1 pl-2' : 'pl-2 pr-0'}`}>
            {wordsLeft.map((part, index) => (
              <span key={index}>&nbsp;{part}</span>
            ))}
          </h5>
          <TitleBorder cant={wordscant} type={type} direction={'left'} />
        </div>

        {(wordscant !== 0 && wordscant > 1) && (
          <div className={`${styles.title_split}`}>
            <h5 className={`
           ${type === 'dark' ? 'text-nena-secondary' : 'text-white'} ${wordscant > 1 ? 'pr-2 pl-1' : 'pl-0 pr-2'}`}>
              {wordsRight.map((part, index) => (
                <span key={index}>{part}&nbsp;</span>
              ))}
            </h5>
            <TitleBorder cant={wordscant} type={type} direction={'right'} />
          </div>
        )}
      </div>

      <div className={`${styles.paragraph_container}`} >
        <p className={` ${type === 'dark' ? 'text-gray-500' : 'text-white'} `} dangerouslySetInnerHTML={{ __html: description }} />
      </div>

    </div >
  )
}

export default TitleComp