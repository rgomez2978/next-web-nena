import { Product, Title } from '@/components/shared'
import styles from "./style.module.scss";

/**
 * Seccion productos destacados - carga el carousel de imagenes
 * @param {*} data informacion del titulo e imagenes
 * @returns
 */
const SectionProductsFeatured = ({ data, }) => {
  if (data && data.length > 0) {
    const { title, description, theme, items } = data[0]

    return (
      <section className={`${styles.section_products_featured_container}`}>
        <Title title={title} description={description} type={theme} />
        {(items && items.length > 0) && (
          <Product
            data={items}
            type={'slide'}
            speed={1500}
            autoplay={true}
            speedAutoplay={3000}
            arrows={true}
            dots={false}
            slides={3}
            separator={`mx-3 md:mx-3 lg:mx-4`}
            cssClass="rounded-xl w-auto h-[170px] md:h-[200px] xl:h-[200px] px-4 md:px-0 "
          />
        )}
      </section>
    )
  }

}

export default SectionProductsFeatured