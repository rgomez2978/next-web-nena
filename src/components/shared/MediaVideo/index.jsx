import { useRef } from "react";
import useStore from '@/stores/index';
import styles from "./style.module.scss"
import { SVGPauseVideo, SVGPlayVideo } from "@/components/svg";



/**
 * Local video component
 * @param {*} data informacion del video a cargar
 * @returns
 */
const MediaVideo = ({ data }) => {
  const { isPlayVideo, setPlayVideo } = useStore()
  let mediaRef = useRef(null);

  /**
   * Play video
   */
  const onPlay = (valor) => {
    setPlayVideo(true)
    mediaRef.current.play()
  }

  /**
   * Pause video
   */
  const onPause = () => {
    setPlayVideo(false)
    mediaRef.current.pause()
  }


  return (
    <>
      <div className={`${styles.video_container}`}>
        <video ref={mediaRef} preload="auto" controls >
          <source src={data.url} type="video/mp4" />
        </video>

        <div className={`${styles.overlay}`} >
          {!isPlayVideo ? (
            <div className={`${styles.overlay_play}`} onClick={() => onPlay()}  >
              <SVGPlayVideo />
            </div>
          ) : (
            <div
              onClick={() => onPause()}
              className={`${styles.overlay_pause} ${isPlayVideo ? 'opacity-0 hover:opacity-80' : 'opacity-0'}`} >
              <SVGPauseVideo />
            </div>
          )}
        </div>
      </div>

    </>
  )
}

export default MediaVideo