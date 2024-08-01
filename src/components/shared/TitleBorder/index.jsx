import React from 'react'
import styles from "./style.module.scss";

const TitleBorder = ({ cant, type, direction }) => {
  const styleBorder = direction === 'left'
    ?
    type === 'dark'
      ? styles.border_left
      : `${styles.border_left} !border-white`
    : type === 'dark'
      ? styles.border_right
      : `${styles.border_right} !border-white`

  const styleCircle = direction === 'left'
    ? type === 'dark'
      ? styles.circle_left
      : `${styles.circle_left} !bg-white`
    : type === 'dark'
      ? styles.circle_right
      : `${styles.circle_right} !bg-white`


  const styleNoneBorder = cant === 1
    ? '!border-b-[0.4rem] !rounded-none'
    : ''



  return (
    <div className={`${styles.border_split}`}>
      {direction === 'left' ? (
        <>
          <span className={`${styleBorder} ${styleNoneBorder}`} />
          {/* <span className={styleCircle}>&nbsp;</span> */}
        </>
      ) : (
        <>
          {/* <span className={styleCircle}>&nbsp;</span> */}
          <span className={`${styleBorder} ${styleNoneBorder}`} />
        </>
      )}
    </div>
  )
}



export default TitleBorder