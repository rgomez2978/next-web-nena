import { useRef } from 'react'
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import styles from "./style.module.scss";


const BenefitsCard = ({ theme, title, icon, description }) => {
  const myRef = useRef();
  useIntersectionObserver(myRef, 'animate-fade-up');

  return (
    <>
      <div className={`${styles.card_content}  ${theme !== 'dark'
        ? 'text-white'
        : 'text-nena-secondary '}`} ref={myRef}  >
        <div dangerouslySetInnerHTML={{ __html: icon }} />
        <h3 className="mt-2 mb-2 text-xl font-bold tracking-tight">{title}</h3>
        <p className={`${theme !== 'dark' ? 'text-white' : 'text-gray-500 '}`}
          dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </>
  )
}

export default BenefitsCard