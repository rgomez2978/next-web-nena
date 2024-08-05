import React from 'react'
import styles from "./style.module.scss";


const FormContact = ({ theme, title, description }) => {

  console.log('FormContact', theme, title, description)
  return (
    <div className={`${styles.form_container}`}>
      <h3 className={`${theme === 'dark' ? 'text-white' : 'text-nena-secondary'}`}>{title}</h3>
      <p dangerouslySetInnerHTML={{ __html: description }} />

      <section>
        <form action="">
          <div className={`${styles.form_grid}`}>
            <div className={`${styles.form_col1}`}>
              <input id="full-name" name="full-name" type="text" placeholder='Nombre y apellido' className={`${styles.form_element}`} />
            </div>
            <div className={`${styles.form_col2}`}>
              <input id="email" name="email" type="email" placeholder='Correo electrónico' className={`${styles.form_element}`} />
            </div>
            <div className={`${styles.form_col2}`}>
              <select id="area" name="area" className={`form-select ${styles.form_element}`}>
                <option value="" disabled selected hidden>Area / Departamento</option>
                <option value="1">Area 1</option>
                <option value="2">Area 2</option>
              </select>
            </div>
            <div className={`${styles.form_col1}`}>
              <textarea name="description" id="description" placeholder='Redactar mensaje' className={`${styles.form_element} !h-24 `}>
              </textarea>
            </div>
          </div>
          <div className={`w-full flex flex-row justify-between items-center`}>
            <p dangerouslySetInnerHTML={{ __html: '(*) Campos obligatorios.' }} />
            <button className="" type="submit">Enviar</button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default FormContact