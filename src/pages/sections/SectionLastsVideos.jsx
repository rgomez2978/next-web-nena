import React, { useRef, useState } from 'react'
// import MediaComp from '@/components/MediaComp'
import TitleComp from '@/components/TitleComp'
import useStore from '@/stores/index';
import YouTube from "react-youtube";
import ReactPlayer from 'react-player';



import { PlayCircle, PauseCircle } from "react-feather";

const SectionLastsVideos = ({
  title,
  titleType,
  description,
  data
}) => {
  // console.log('SectionLastsVideos', title, titleType, description, data)

  const { isPlayVideo, setPlayVideo } = useStore()
  let mediaRef = useRef(null);


  const optsVideo = {
    width: "100%",
    heigth: "100%",
    borderRadius: "2rem",
    playerVars: {
      autoplay: 1
    },
  };


  const optsPlayer = {
    youtube: {
      playerVars: {
        modestbranding: 1,
        controls: 1,
        showinfo: 1,
        rel: 0,
        iv_load_policy: 3,
        fs: 1,
      },
    },
  }
  const videoReady = (event) => {
    event.target.pauseVideo();
  };

  /**
   * Validate string URL
   * @param {*} val
   * @returns
   */
  const isValidURL = (val) => {
    try {
      new URL(val);
      return true;
    } catch (_) {
      return false;
    }
  }


  /**
   * PLay or pause video
   * @param {*} valor
   */
  const onPlay = (valor) => {
    setPlayVideo(true)
    mediaRef.current.play()
  }

  const onPause = () => {
    setPlayVideo(false)
    mediaRef.current.pause()
  }

  console.log('setPlayVideo', isPlayVideo)

  return (
    <>
      {(data && data.length > 0) && (
        <>
          <div className='w-[87%]  mx-auto h-full mt-10 bg-transparent'>
            <TitleComp
              title={title}
              description={description}
              type={titleType}
            />
            <div className=" flex w-full mt-10 h-auto px-4 md:px-10">
              <div className="flex flex-col items-center justify-between lg:flex-row ">
                <div className=" w-full pl-32  mb-10 lg:w-1/2 lg:mb-0 h-full pt-5 ">
                  <div className="flex flex-col items-start justify-start w-[90%] h-full mb-6 ">
                    <h2 className='w-full text-nena-secondary text-xl font-bold normal-case sm:text-xl md:text-xl lg:text-2xl xl:text-3xl '>
                      {data[0].title}
                    </h2>
                    <p className='text-lg text-gray-700 md:text-xl'>
                      {/* {data[0].description} */}
                    </p>
                    <ul className="flex-1 p-0 mt-4 space-y-0 leading-7 text-gray-500 font-semibold">
                      {data[0].items.map((item) => (
                        <li key={item.id} className="inline-flex items-center w-full text-left">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="main-grid-item-icon mr-3 " fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <polyline points="22 4 12 14.01 9 11.01" />
                          </svg>
                          {item.title}
                        </li>

                      ))}
                    </ul>
                  </div>
                </div>
                <div className="relative pr-10 flex justify-end items-center lg:w-1/2 h-full border-2xl border border-red-500 ">

                  {data[0].videos.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-center items-center w-full lg:w-[80%] h-full border border-purple-700"
                    >

                      {isValidURL(item.url) ? (
                        <>
                          {/* <YouTube
                            videoId="S_15MSgqu-E"
                            opts={optsVideo}
                            onReady={videoReady}
                            className='w-full h-[80%] lg:w-[80%]'
                          /> */}

                          <div
                            className="flex rounded-2xl w-full h-auto"
                          // className="relative rounded-2xl w-full lg:w-[80%] h-full -ml-100 "
                          >
                            {/* <ReactPlayer
                              className="h-[100px]"
                              // className='absolute top-0 left-0 w-full h-full'
                              url={item.url2}
                              controls={true}
                            // config={optsPlayer}
                            /> */}

                            <iframe
                              className='w-full h-[200px] rounded-2xl'
                              src={`https://www.youtube.com/embed/${'S_15MSgqu-E'}`}
                              title="YouTube video player"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            ></iframe>


                          </div>
                        </>
                      ) : (
                        <>
                          <video
                            ref={mediaRef} preload="auto" controls
                            className='flex w-full rounded-2xl border border-blue-500'
                          >
                            <source
                              src={item.url}
                              type="video/mp4" className='w-full h-[300px] rounded-2xl border border-blue-500'
                            />
                          </video>

                          {/* <div
                            className={`absolute flex justify-center items-center cursor-pointer group-hover:scale-110 w-full h-full lg:w-[75%] xl:w-[76%]  `}
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
                          </div> */}
                        </>
                      )}


                    </div>
                  ))}

                </div>
              </div>
            </div>
          </div>
        </>
      )
      }

    </>
  )
}

export default SectionLastsVideos