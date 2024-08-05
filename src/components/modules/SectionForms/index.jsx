import { FormClient, Title } from '@/components/shared'
import styles from "./style.module.scss";



const SectionForms = ({ data }) => {

  // console.log('SectionForms', data)


  if (data && data.length > 0) {
    const { title, description, theme, items, title_form, description_form } = data[0]
    return (
      <>
        <section className={` ${styles.section_form_container} ${theme !== 'dark' ? 'bg-nena-secondary' : 'bg-transparent'}   `}>
          <div className={`${styles.form_container} `}>
            <div className={`${styles.form_container_col_left}`}>
              <h3>{title}</h3>
              <ul>
                {items.map(({ id, title, icon, icon_title }) => (
                  <li key={id}>
                    <div dangerouslySetInnerHTML={{ __html: icon }} />
                    <span dangerouslySetInnerHTML={{ __html: icon_title }} />
                  </li>
                ))}
              </ul>
            </div>
            <div className={`${styles.form_container_col_right}`}>
              <FormClient theme={theme} title={title_form} description={description_form} />
            </div>
          </div>
        </section>
      </>
    )

  }


}

export default SectionForms