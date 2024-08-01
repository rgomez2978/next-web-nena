import { OurPeopleCultureContent, Title } from '@/components/shared';
import styles from "./style.module.scss";

const SectionOurPeopleCulture = ({ data }) => {
  if (data && data.length > 0) {
    const { theme, items } = data[0]

    return (
      <section className={` ${styles.section_ourpeopleculture_container} ${theme !== 'dark' ? 'bg-nena-secondary' : 'bg-transparent'} `}>
        <div className={` ${styles.items_ourpeopleculture_container}   ${theme !== 'dark' ? 'bg-nena-secondary' : 'bg-transparent'}  `}>
          <ul>
            {items.map((item, idx) => (
              <li key={item.id}>
                <OurPeopleCultureContent idx={idx} {...item} />
              </li>
            ))}
          </ul>
        </div>

      </section >

    )

  }

}

export default SectionOurPeopleCulture