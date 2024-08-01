import { useRef } from 'react'
import Image from 'next/image';
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import styles from "./style.module.scss";

const OurPeopleCultureContent = ({ id, title, description, images, idx }) => {
  const myRefUp = useRef();
  const myRefDir = useRef();
  useIntersectionObserver(myRefUp, 'animate-fade-up');
  useIntersectionObserver(myRefDir, idx % 2 === 0 ? 'animate-fade-left' : 'animate-fade-right');

  return (
    <>
      <div className={`${styles.li_image_container} ${idx % 2 === 0 ? '' : '!h-48 md:!h-64 xl:!h-72 md:!pl-5 md:!order-1'} `} ref={myRefUp}>
        {images.length > 2 ? (
          <>
            <div className={`${styles.li_image_top}`}>
              <Image
                alt="foto_people1"
                width={500}
                height={300}
                src={images[0].url}
                priority
              />
            </div>
            <div className={`${styles.li_image_bottom}`}>
              <Image
                alt="foto_people1"
                width={500}
                height={300}
                src={images[1].url}
                priority
              />
              <Image
                alt="foto_people1"
                width={500}
                height={300}
                src={images[2].url}
                priority
              />
            </div>
          </>
        ) : (
          <>
            <Image
              alt="foto_people1"
              width={500}
              height={300}
              src={images[0].url}
              priority
            />
          </>
        )}
      </div>
      <div
        className={`${styles.li_content_container} md:pl-5 ${idx % 2 === 0 ? 'text-left' : 'text-right'}`} ref={myRefDir}>
        <h1>{title}</h1>
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </>
  )
}

export default OurPeopleCultureContent