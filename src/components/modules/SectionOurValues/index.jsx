import { Title, ValueCard } from '@/components/shared'
import styles from "./style.module.scss";


/**
 * Seccion Nuestros valores - carga la informacion de contruccion de la seccion
 * @param {*} data informacion de iconos y texto a cargar
 * @returns
 */
const SectionOurValues = ({ data }) => {
  if (data && data.length > 0) {
    const { theme, title, description, items } = data[0]

    return (
      <section className={` ${styles.section_values_container} ${theme !== 'dark' ? 'bg-nena-secondary' : 'bg-transparent'}   `}>
        <Title title={title} type={theme} />
        <div className={` ${styles.cards_values_container}   ${theme !== 'dark' ? 'bg-nena-secondary' : 'bg-transparent'} `} >
          {items.map(({ id, title, icon, description }, index) => (
            <ValueCard key={id} theme={theme} title={title} icon={icon} description={description} />
          ))}
        </div>
      </section >
    )
  }
}

export default SectionOurValues