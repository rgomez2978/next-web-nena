import React from 'react'
import { Title } from '@/components/shared'
import styles from "./style.module.scss";

const SectionOurHistory = ({ data }) => {
  console.log('SectionOurHistory', data)

  if (data && data.length > 0) {
    const { theme, title, description, items } = data[0]

    return (
      <section className={` ${styles.section_history_container} ${theme !== 'dark' ? 'bg-nena-secondary' : 'bg-transparent'}   `}>
        <Title title={title} type={theme} />
        <div className={` ${styles.list_items_container}   ${theme !== 'dark' ? 'bg-nena-secondary' : 'bg-transparent'} `}>

          <div className={`${styles.card_content}`}>
            {items.map(({ id, year, title, description }, index) => (

              <div key={id} className={`${styles.card_item} ${index % 2 === 0 ? 'flex-row-reverse' : ''}  `}>

                {index % 2 === 0 ? (
                  <>
                    <div className={` ${styles.card_text_content} ${index % 2 === 0
                      ? 'flex flex-col text-right items-end col-start-1 col-end-5 md:mr-0 md:ml-auto'
                      : 'relative col-start-6 col-end-10 '}`}>
                      <h3 className="text-lg font-semibold lg:text-xl">{year}  {title}</h3>
                      <p className="mt-2 leading-6">{description}</p>
                    </div>
                    <div className={`${styles.card_line_bullets_content}`}>
                      <div className={`${styles.card_line}`}> <span></span> </div>
                      <div className={`${styles.card_bullet}`}></div>
                    </div>
                  </>


                ) : (
                  <>
                    <div className={`${styles.card_line_bullets_content}`}>
                      <div className={`${styles.card_line}`}> <span></span> </div>
                      <div className={`${styles.card_bullet}`}></div>
                    </div>
                    <div className={` ${styles.card_text_content} ${index % 2 === 0
                      ? 'flex flex-col text-right items-end col-start-1 col-end-5 md:mr-0 md:ml-auto'
                      : 'relative col-start-6 col-end-10 '}`}>
                      <h3 className="text-lg font-semibold lg:text-xl">{index % 2} - {year}  {title}</h3>
                      <p className="mt-2 leading-6">{description}</p>
                    </div>
                  </>
                )}





              </div>
            ))}
            {/*
            <div class="flex md:contents flex-row-reverse">

              <div class="flex flex-col text-right items-end col-start-1 col-end-5 md:mr-0 md:ml-auto">
                <h3 class="text-lg font-semibold lg:text-xl">1976 La fundación</h3>
                <p class="mt-2 leading-6">Fundada por Don Miguel Aizpurua y su esposa Josefina, Perfumería Nena S.R.L, nace en un pequeño local de la calle 23 en la ciudad de Barquisimeto, con el capital apenas necesario y 5 empleados que empacaban champú de forma manual, junto con productos de proveedores de cosméticos nacionales y multinacionales, que comercializaban y se distribuían en varias ciudades del país.</p>
              </div>

              <div class="relative col-start-5 col-end-6 md:mx-auto">
                <div class="flex items-center justify-center w-6 h-full">
                  <div class="w-1 h-full bg-gray-100 rounded-t-full">
                  </div>
                </div>
                <div class="absolute w-4 h-4 -mt-3 ml-1 bg-white rounded-full top-1/2"></div>
              </div>

            </div>

            <div class="flex md:contents">

              <div class="relative col-start-5 col-end-6 md:mx-auto">
                <div class="flex items-center justify-center w-6 h-full">
                  <div class="w-1 h-full bg-gray-100 rounded-t-full">
                  </div>
                </div>
                <div class="absolute w-4 h-4 -mt-3 ml-1 bg-white rounded-full top-1/2"></div>
              </div>

              <div class="relative col-start-6 col-end-10">
                <h3 class="text-lg font-semibold lg:text-xl">1985 El gran avance</h3>
                <p class="mt-2 leading-6">Fundada por Don Miguel Aizpurua y su esposa Josefina, Perfumería Nena S.R.L, nace en un pequeño local de la calle 23 en la ciudad de Barquisimeto, con el capital apenas necesario y 5 empleados que empacaban champú de forma manual, junto con productos de proveedores de cosméticos nacionales y multinacionales, que comercializaban y se distribuían en varias ciudades del país.</p>
              </div>
            </div> */}


          </div>
        </div>

      </section>
    )

  }
}

export default SectionOurHistory