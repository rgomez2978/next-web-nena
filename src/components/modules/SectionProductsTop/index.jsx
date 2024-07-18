import { Product, Title } from '@/components/shared'
import styles from "./style.module.scss";


/**
 * Seccion productos top - carga el carousel de imagenes e imagenes fijas
 * @param {*} data informacion del titulo e imagenes
 * @returns
 */
const SectionProductsTop = ({ data }) => {

  if (data && data.length > 0) {
    const { title, description, theme, items } = data[0]

    return (
      <section className={`${styles.section_products_top_container}`} >
        <Title title={title} description={description} type={theme} />
        {(items && items.length > 0) && (
          <Product
            type={'grid'}
            data={items}
            speed={1000}
            autoplay={true}
            speedAutoplay={3000}
            arrows={true}
            dots={false}
            slides={1}
            cssClass="rounded-2xl w-full h-[180px] md:h-[220px] lg:h-[300px] xl:h-[320px]"
          />
        )}

      </section>
    )
  }

}

export default SectionProductsTop