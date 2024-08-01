import { useRef } from 'react'
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { Title } from '@/components/shared';
import styles from "./style.module.scss";
import Image from 'next/image';

const SectionOurPeopleCulture = ({ data }) => {
  const myRefUp = useRef();
  const myRefLeft = useRef();
  const myRefRight = useRef();
  useIntersectionObserver(myRefUp, 'animate-fade-up');
  useIntersectionObserver(myRefLeft, 'animate-fade-left');
  useIntersectionObserver(myRefRight, 'animate-fade-right');

  if (data && data.length > 0) {
    const { theme, items } = data[0]

    return (
      <section className={` ${styles.section_ourpeopleculture_container} ${theme !== 'dark' ? 'bg-nena-secondary' : 'bg-transparent'} `}>
        <div className={` ${styles.items_ourpeopleculture_container}   ${theme !== 'dark' ? 'bg-nena-secondary' : 'bg-transparent'}  `}>
          <ul>
            <li>
              <div className={`${styles.li_image_container}`} ref={myRefUp}>
                <div className={`${styles.li_image_top}`}>
                  <Image
                    alt="foto_people1"
                    width={500}
                    height={300}
                    src="/images/content/people_1.jpeg"
                    priority
                  />
                </div>
                <div className={`${styles.li_image_bottom}`}>
                  <Image
                    alt="foto_people1"
                    width={500}
                    height={300}
                    src="/images/content/people_2.jpeg"
                    priority
                  />
                  <Image
                    alt="foto_people1"
                    width={500}
                    height={300}
                    src="/images/content/people_3.jpeg"
                    priority
                  />
                </div>
              </div>
              <div
                className={`${styles.li_content_container} md:pl-5 text-left`} ref={myRefLeft}>
                <h1 className="font-bold text-xl text-nena-secondary mb-2">Nuestra Gente</h1>
                <p className="text-base text-gray-500 mb-4 space-y-3">
                  <p>
                    El éxito de Droguería Nena no es producto del azar, la fortuna o el destino, sino el resultado del esfuerzo sostenido de NUESTRA GENTE. Cada almacenista, transportistas y personal administrativo, han sido pilares fundamentales sobre los que se ha cimentado Dronena. Más que una estructura organizacional o una maquina laboral, somos una forma de ser, con carácter y personalidad propia, somos una empresa emocional, cuyo norte es mantener la armonía y la motivación, para lograr el bienestar de todos nuestros trabajadores.
                  </p>
                  <p>No en vano, durante el 2009 Droguería Nena fue reconocida; por la Organización Pitágoras, empresa promotora de la EXPOEMPLEO; como la segunda empresa empleadora por excelencia del Estado Lara, premio que nos posiciona como una de las empresas más aspiracionales de la región.  Reconocimiento posible, gracias a nuestros excelentes beneficios sociales, extraordinario clima organizacional y la excelente labor de nuestra GENTE NENA.
                  </p>
                  <p> <strong> ¡Nuestro éxito depende de NUESTRA GENTE! </strong> </p>
                </p>
              </div>
            </li>

            <li>
              <div className={`${styles.li_image_container} !h-48 md:!h-64 xl:!h-72 md:!pl-5 md:!order-1`} ref={myRefUp}>
                <Image
                  alt="foto_people1"
                  width={500}
                  height={300}
                  src="/images/content/culture_1.jpeg"
                  priority
                />
              </div>

              <div className={`${styles.li_content_container}`} ref={myRefRight}>
                <div className="text-right">
                  <h1 className="font-bold text-xl text-nena-secondary mb-2">
                    Nuestra Cultura
                  </h1>
                  <p className="text-base text-gray-500 mb-4 space-y-3">
                    <p>
                      Cultivamos la excelencia a través de un Sistema de Gestión de Calidad, que ha logrado a lo largo del tiempo, la mejora continua de nuestros procesos, convirtiéndonos en una empresa de nivel mundial, altamente competitiva y preparada en cada una de nuestras áreas de desempeño.
                    </p>
                    <p>
                      Con miras hacia la implementación de la Gestión por Procesos, teniendo como principal objetivo generar valor agregado a lo largo de toda la cadena de suministro, Dronena– Farmacia / Dronena– Proveedor, logrando mejor servicio y satisfacción ante los requerimientos de nuestros clientes.
                    </p>
                  </p>
                </div>
              </div>
            </li>

          </ul>
        </div>

      </section >

    )

  }

}

export default SectionOurPeopleCulture