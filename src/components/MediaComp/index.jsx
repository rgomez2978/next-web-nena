import React, { useEffect, useRef } from 'react';


const MediaComp = ({
  type, //img- video
  resourceUrl,
}) => {

  console.log('MediaComp', type, resourceUrl)

  const videoRef = useRef(null);


  useEffect(() => {
    // videoRef.play()
    console.log('videoRef.current', videoRef.current)

    videoRef.current.play()
  }, [])


  return (
    <>

      {type === 'img' ? (
        <></>
      ) : (
        <video
          ref={videoRef}
          preload="auto"
          controls
          className='flex flex-row w-full rounded-2xl'
        >
          <source
            src={resourceUrl}
            type="video/mp4"
            className='w-full h-auto rounded-2xl'
          />
        </video>

      )}

    </>
  )
}

export default MediaComp