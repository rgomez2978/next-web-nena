import React from 'react'
import styles from "./style.module.scss";


const FormSupplier = ({ theme, title, description }) => {
  return (
    <div className={`${styles.form_container}`}>
      <h3 className={`${theme === 'dark' ? 'text-white' : 'text-nena-secondary'}`}>{title}</h3>
      <p dangerouslySetInnerHTML={{ __html: description }} />

      <section>
        <form action="">
          <div className={`${styles.form_grid}`}>
            <div className={`${styles.form_col2} flex flex-row !justify-start !items-start`}>
              <div className={`${styles.form_col2} !w-1/3`}>
                <select id="rif_type" name="rif_type" className={`form-select  ${styles.form_element}`}>
                  <option value="" disabled selected hidden>Seleccione</option>
                  <option value="1">J</option>
                  <option value="2">G</option>
                </select>
              </div>

              <div className={`${styles.form_col2} !w-2/3 !pl-3`}>
                <input id="rif" name="rif" type="text" placeholder='RIF' className={`${styles.form_element}`} />
              </div>

            </div>
            <div className={`${styles.form_col2}`}>
              <input id="company-name" name="company-name" type="text" placeholder='Razón Social' className={`${styles.form_element}`} />
            </div>
            <div className={`${styles.form_col2}`}>
              <input id="company-person-contact" name="company-person-contact" type="text" placeholder='Rersona contacto' className={`${styles.form_element}`} />
            </div>

            <div className={`${styles.form_col2}`}>
              <input id="company-phone-number" name="company-phone-number" type="tel" placeholder='Teléfono contacto' className={`${styles.form_element}`} />
            </div>
            <div className={`${styles.form_col2}`}>
              <input id="email" name="email" type="email" placeholder='Correo electrónico' className={`${styles.form_element}`} />
            </div>
            <div className={`${styles.form_col2}`}>
              <input id="email-secondary" name="email-secondary" type="email" placeholder='Correo electrónico alterno' className={`${styles.form_element}`} />
            </div>
            <div className={`${styles.form_col1}`}>
              <textarea name="description" id="description" placeholder='Observación' className={`${styles.form_element} !h-24 `}>
              </textarea>
            </div>
          </div>
          <div className={`w-full flex flex-row justify-between items-center`}>
            <p dangerouslySetInnerHTML={{ __html: '(*) Campos obligatorios.' }} />
            <button type="submit">Enviar solicitud</button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default FormSupplier