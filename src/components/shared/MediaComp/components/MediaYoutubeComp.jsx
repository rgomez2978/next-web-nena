import React from 'react'

function MediaYoutubeComp({ data }) {

  return (
    <div className="flex rounded-2xl w-full h-full -mt-10" >
      <iframe
        className='rounded-2xl w-full h-full'
        src={`https://www.youtube.com/embed/${data.idUrl}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default MediaYoutubeComp