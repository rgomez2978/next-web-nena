import { useRef } from "react";
import { PlayCircle, PauseCircle } from "react-feather";
import useStore from '@/stores/index';

const MediaVideoComp = ({ data }) => {
  const { isPlayVideo, setPlayVideo } = useStore()
  let mediaRef = useRef(null);

  /**
   * Play video
   * @param {*} valor
   */
  const onPlay = (valor) => {
    setPlayVideo(true)
    mediaRef.current.play()
  }

  /**
   * Pause video
   * @param {*} valor
   */
  const onPause = () => {
    setPlayVideo(false)
    mediaRef.current.pause()
  }


  return (
    <>
      <div className="w-[100%] md:w-[80%] lg:w-[90%] xl:w-[90%] h-full ">

        <video
          ref={mediaRef} preload="auto" controls
          className='flex w-full rounded-2xl '
        >
          <source
            src={data.url}
            type="video/mp4"
          />
        </video>

        <div
          className={`absolute flex justify-center items-center cursor-pointer group-hover:scale-110 w-full h-full lg:w-[75%] xl:w-[76%]`}
        >
          {!isPlayVideo ? (
            <div
              onClick={() => onPlay()}
              className='flex justify-center items-center w-full h-full text-white transition-transform duration-150 opacity-90 hover:opacity-100 ' >
              <PlayCircle
                className='w-6 h-6 md:w-10 md:h-10 lg:w-14 lg:h-14' />
            </div>
          ) : (
            <div
              onClick={() => onPause()}
              className={`flex justify-center items-center w-full h-full text-white transition-transform duration-150  ${isPlayVideo ? 'opacity-0 hover:opacity-80' : 'opacity-0'}`} >
              <PauseCircle
                className={` w-6 h-6 md:w-10 md:h-10 lg:w-14 lg:h-14 `}
              />
            </div>
          )}
        </div>
      </div>

    </>
  )
}

export default MediaVideoComp