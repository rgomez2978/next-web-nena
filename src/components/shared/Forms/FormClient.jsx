import React from 'react'
import styles from "./style.module.scss";


const FormClient = ({ theme, title, description }) => {

  console.log('FormClient', theme, title, description)
  return (
    <div className={`${styles.form_container}`}>
      <h3 className={`${theme === 'dark' ? 'text-white' : 'text-nena-secondary'}`}>{title}</h3>
      <p dangerouslySetInnerHTML={{ __html: description }} />

      <section>
        <form action="">
          <div className={`${styles.form_grid}`}>
            <div className={`${styles.form_col2}`}>
              <input id="full-name" name="full-name" type="text" placeholder='Nombre y apellido' className={`${styles.form_element}`} />
            </div>
            <div className={`${styles.form_col2}`}>
              <input id="email" name="email" type="email" placeholder='Correo electrónico' className={`${styles.form_element}`} />
            </div>
            <div className={`${styles.form_col2}`}>
              <input id="phone-number" name="phone-number" type="tel" placeholder='Teléfono' className={`${styles.form_element}`} />
            </div>
            <div className={`${styles.form_col2}`}>
              <select id="state" name="state" className={`form-select ${styles.form_element}`}>
                <option value="" disabled selected hidden>Estado</option>
                <option value="1">Dtto. Capital</option>
                <option value="2">Carabobo</option>
                <option value="3">Zulia</option>
              </select>
            </div>
            <div className={`${styles.form_col1}`}>
              <input id="pharmacy'name" name="pharmacy'name" type="tel" placeholder='Nombre de la farmacia' className={`${styles.form_element}`} />
            </div>
            <div className={`${styles.form_col1}`}>
              <textarea name="address" id="address" placeholder='Dirección de la farmacia' className={`${styles.form_element} !h-24 `}>
              </textarea>
            </div>
          </div>
          <div className={`w-full flex flex-row justify-between items-center`}>
            <p dangerouslySetInnerHTML={{ __html: '(*) Campos obligatorios.' }} />
            <button className="" type="submit">Registrarme</button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default FormClient