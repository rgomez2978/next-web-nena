import MediaVideoComp from './components/MediaVideoComp';
import MediaYoutubeComp from './components/MediaYoutubeComp';


const MediaComp = ({
  type, //local - web
  data,
}) => {

  return (
    <>
      {type !== 'web' ? (
        <MediaVideoComp data={data} />
      ) : (
        <MediaYoutubeComp data={data} />
      )}
    </>
  )
}

export default MediaComp