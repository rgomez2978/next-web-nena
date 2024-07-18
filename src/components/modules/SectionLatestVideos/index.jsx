import { Title, MediaVideo, MediaYoutube } from '@/components/shared'
import { SVGBullet } from '@/components/svg';
import styles from "./style.module.scss";



/**
 * Seccion Ultimos Videos - carga la informacion de contruccion de la seccion
 * @param {*} data informacion de videos y texto a cargar
 * @returns
 */
const SectionLatestVideos = ({ data }) => {

  if (data && data.length > 0) {

    /**
     * Validate string URL
     * @param {*} val
     * @returns
     */
    const isValidURL = (val) => {
      try { new URL(val); return true; } catch (_) { return false; }
    }


    const { title, description, theme, items } = data[0]

    return (
      <section className={`${styles.section_latest_videos_container}`}>
        <Title title={title} description={description} type={theme} />
        <div className={`${styles.latest_videos_content_container}`}>
          <div className={`${styles.latest_videos_content} `}>
            <div className={`${styles.content_container}`}>
              <div className={`${styles.content}`}>
                <h2> {items[0].title} </h2>
                <p > {items[0].description} </p>
                <ul>
                  {items[0].bullets.map((item) => (
                    <li key={item.id}>
                      <SVGBullet />
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={`${styles.videos} `}>
              {items[0].videos.map((item) => (
                <div key={item.id} className={`${styles.media}`}>
                  {isValidURL(item.url2) ? <MediaYoutube data={item} /> : <MediaVideo data={item} />}
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>
    )
  }



}

export default SectionLatestVideos