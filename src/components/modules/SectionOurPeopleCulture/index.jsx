import React from 'react'
import { Title } from '@/components/shared';
import styles from "./style.module.scss";

const SectionOurPeopleCulture = ({ data }) => {
  // console.log('SectionOurPeopleCulture', data[0])


  if (data && data.length > 0) {
    const { theme, items } = data[0]

    return (
      <section className={` ${styles.section_ourpeopleculture_container} ${theme !== 'dark' ? 'bg-nena-secondary' : 'bg-transparent'}   `}>
        <div className={` ${styles.items_ourpeopleculture_container}   ${theme !== 'dark' ? 'bg-nena-secondary' : 'bg-transparent'} `}>

          {/* <div className='container mx-auto'> */}
          {/* <div className="max-w-6xl mx-auto border border-red-500"> */}
          {/* <div className="py-3 md:py-3 "> */}

          {/* Items */}
          <div className="grid gap-20 border border-red-500">

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center border border-red-500">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                {/* <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage02} width={540} height={405} alt="Features 02" /> */}
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-bold text-xl text-nena-secondary mb-2">Nuestra Gente</div>
                  <p className="text-xl text-gray-400 mb-4">El éxito de Droguería Nena no es producto del azar, la fortuna o el destino, sino el resultado del esfuerzo sostenido de NUESTRA GENTE. Cada almacenista, transportistas y personal administrativo, han sido pilares fundamentales sobre los que se ha cimentado Dronena. Más que una estructura organizacional o una maquina laboral, somos una forma de ser, con carácter y personalidad propia, somos una empresa emocional, cuyo norte es mantener la armonía y la motivación, para lograr el bienestar de todos nuestros trabajadores.
                  </p>
                  <p className="text-xl text-gray-400 mb-4">No en vano, durante el 2009 Droguería Nena fue reconocida; por la Organización Pitágoras, empresa promotora de la EXPOEMPLEO; como la segunda empresa empleadora por excelencia del Estado Lara, premio que nos posiciona como una de las empresas más aspiracionales de la región.  Reconocimiento posible, gracias a nuestros excelentes beneficios sociales, extraordinario clima organizacional y la excelente labor de nuestra GENTE NENA.
                  </p>

                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Duis aute irure dolor in reprehenderit</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Excepteur sint occaecat</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Amet consectetur adipiscing elit</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center border border-red-500">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                {/* <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage03} width={540} height={405} alt="Features 03" /> */}
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div>
                  <h3 className="h3 mb-3">Keep projects on schedule</h3>
                  <p className="text-xl text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Duis aute irure dolor in reprehenderit</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Excepteur sint occaecat</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Amet consectetur adipiscing elit</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

          {/* </div> */}
          {/* </div> */}
          {/* </div> */}

        </div>
      </section >

    )

  }

}

export default SectionOurPeopleCulture