/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from "./style.module.scss";

/**
 * ListPartners component
 * @param {*} data informacion de logos
 * @returns
 */
const ListPartners = ({ data }) => {
  return (
    <>
      <ul className={`${styles.ul_container}`}>
        {data.map(({ id, order, title, url }) => (
          <li key={id}>
            <img src={url} alt={title} />
          </li>
        ))}
      </ul>
      <ul className={`${styles.ul_container}`}>
        {data.map(({ id, order, title, url }) => (
          <li key={id}>
            <img src={url} alt={title} />
          </li>
        ))}
      </ul>
    </>
  )
}


/**
 * Marquee component
 * @param {*} data informacion de logos
 */
const Marquee = ({ data }) => {
  return (
    <div className={`${styles.marquee_container}`}>
      <ListPartners data={data} />
    </div>
  )
}

export default Marquee