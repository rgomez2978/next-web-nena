import Image from "next/image";
import { Carousel } from "@/components/shared";
import styles from "./style.module.scss";
import { SVGScrollDown } from "@/components/svg";


/**
 * Template slide
 * @param {*} title titulo del slide
 * @param {*} description decripcion del slide
 * @param {*} buttonText texto del boton
 * @param {*} imageUrl imagen del slide
 * @returns
 */
const CarouselSlide = ({ title, description, buttonText, imageUrl }) => {

  /**
   * Funcion para realizar scroll hacia abajo
   */
  const scroll = () => {
    window.scrollTo({ top: 650, behavior: 'smooth' })
  }

  return (
    <div className={`${styles.carousel_slide_container}`}>
      <Image
        src={imageUrl}
        alt="Background Image"
        className={`${styles.slide_image}`}
        layout="fill"
        objectFit="cover"
      />

      {/* Slide Overlay */}
      <div className={`${styles.slide_overlay}`}></div>

      {/* Slide Content */}
      <div className={`${styles.slide_content}`}>
        <h1 data-aos="fade-in" data-aos-duration="750" >
          {title}
        </h1>
        <p data-aos="fade-in" data-aos-duration="750" >
          {description}
        </p>
      </div>

      {/* Slide Button */}
      <button onClick={scroll}>
        <SVGScrollDown />
      </button>
    </div >
  )
}


/**
 * Seccion Hero - carga el carousel de imagenes y texto
 * @param {*} data informacion de imagenes y texto a cargar en el carousel
 * @returns
 */
const SectionHero = ({ data }) => {
  if (data && data.length > 0) {
    return (
      <div className={`mx-auto !w-[100%]`}>
        <Carousel
          data={data}
          type={'full'}
          speed={2000}
          autoplay={true}
          speedAutoplay={4000}
          arrows={false}
          dots={false}
          slides={1}
          cssClass={`${styles.carosel_container}`}>
          {data && data.map(({ id, title, description, url, buttonText }) => {
            return (
              <CarouselSlide
                key={id}
                title={title}
                description={description}
                imageUrl={url}
                buttonText={buttonText}
              />
            )
          })}
        </Carousel>
      </div>
    )
  }
}


export default SectionHero