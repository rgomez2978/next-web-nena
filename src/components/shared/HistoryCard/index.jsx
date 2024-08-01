'use client';
import { useRef } from 'react'
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import styles from "./style.module.scss";


const HistoryCard = ({ idx, title, description }) => {
  const myRef = useRef();
  useIntersectionObserver(myRef, idx % 2 === 0 ? 'animate-fade-right' : 'animate-fade-left');

  return (
    <div className={`${styles.item_content} `} ref={myRef} >
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default HistoryCard