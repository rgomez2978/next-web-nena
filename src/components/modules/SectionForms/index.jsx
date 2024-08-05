import { FormClient, FormContact, FormSupplier, Title } from '@/components/shared'
import styles from "./style.module.scss";

const LoadForm = ({ type, theme, title, description }) => {
  let selectForm;

  switch (type) {
    case 'client':
      selectForm = <FormClient theme={theme} title={title} description={description} />
      break;
    case 'supplier':
      selectForm = <FormSupplier theme={theme} title={title} description={description} />
      break;
    case 'contact':
      selectForm = <FormContact theme={theme} title={title} description={description} />
      break;
    default:
      break;
  }
  return selectForm
}


const SectionForms = ({ data, type }) => {
  if (data && data.length > 0) {
    const { title, description, theme, items, title_form, description_form } = data[0]

    return (
      <>
        <section className={` ${styles.section_form_container} ${theme !== 'dark' ? 'bg-nena-secondary' : 'bg-transparent'}   `}>
          <div className={`${styles.form_container} ${type === 'supplier' ? '!w-[100%]' : '!w-full'}`}>

            {type !== 'supplier' && (
              <div className={`${styles.form_container_col_left}`}>
                <h3>{title}</h3>
                <ul>
                  {items.map(({ id, title, icon, icon_title }) => (
                    <li key={id}>
                      <h2 dangerouslySetInnerHTML={{ __html: title }} />
                      <div className={`${styles.li_items}`}>
                        <div dangerouslySetInnerHTML={{ __html: icon }} />
                        <span dangerouslySetInnerHTML={{ __html: icon_title }} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className={`${styles.form_container_col_right}  ${type === 'supplier' ? ' !w-[100%] md:!w-[90%] lg:!w-[80%]' : 'w-full md:!w-1/2'}`}>
              {type === 'supplier' && (
                <div className={`${styles.form_col_right_top}`}>
                  <h2 dangerouslySetInnerHTML={{ __html: title }} />
                  <p dangerouslySetInnerHTML={{ __html: description }} />
                </div>
              )}
              <LoadForm type={type} theme={theme} title={title_form} description={description_form} />
            </div>
          </div>
        </section>
      </>
    )

  }


}

export default SectionForms