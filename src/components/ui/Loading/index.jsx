import Image from 'next/image'
import React from 'react'
import styles from './style.module.scss';

const Loading = () => {
  return (

    <div className={`${styles.loading_contanier}`}>
      <div className={`${styles.image_container}`}>
        <picture>
          <Image
            src={`/images/logo.png`}
            width={250}
            height={100}
            alt={`logo loading`}
            priority
          />
        </picture>
      </div>
    </div>
  )
}

export default Loading