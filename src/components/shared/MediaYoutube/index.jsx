import React from 'react'
import styles from "./style.module.scss";


/**
 * Web video component
 * @param {*} data informacion del video a cargar
 * @returns
 */
function MediaYoutube({ data }) {
  return (
    <div className={`${styles.video_web_container}`} >
      <iframe
        className={`${styles.video_content}`}
        src={`https://www.youtube.com/embed/${data.idUrl}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default MediaYoutube