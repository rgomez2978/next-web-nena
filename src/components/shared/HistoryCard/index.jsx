'use client';
import { useRef } from 'react'
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import styles from "./style.module.scss";


const HistoryCard = ({ idx, title, description }) => {
  console.log('HistoryCard', idx, title, description)
  const myRef = useRef();
  // useIntersectionObserver(myRef, idx % 2 === 0 ? 'animate-fade-up' : 'animate-fade-left');
  useIntersectionObserver(myRef, 'animate-fade-right');

  return (
    <div className={`${styles.item_content} `} ref={myRef} >
      <h3>{idx} - {title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default HistoryCard