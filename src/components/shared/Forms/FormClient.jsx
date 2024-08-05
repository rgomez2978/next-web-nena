import React from 'react'
import styles from "./style.module.scss";


const FormClient = ({ theme, title, description }) => {
  return (
    <div className={`${styles.form_container}`}>
      <h3 className={`${theme === 'dark' ? 'text-white' : 'text-nena-secondary'}`}>{title}</h3>
      <p>{description}</p>
      <section>
        <div className="space-y-6">
          <form action="">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <input id="full-name" name="full-name" type="text" placeholder='Nombre y apellido' className={`form-input ${styles.form_element}`} />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <input id="email" name="email" type="email" placeholder='Correo electrónico' className={`form-input ${styles.form_element}`} />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <input id="phone-number" name="phone-number" type="tel" placeholder='Teléfono' className={`form-input ${styles.form_element}`} />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <select id="state" name="state" className={`form-select ${styles.form_element}`}>
                  <option value="" disabled selected hidden>Estado</option>
                  <option value="1">Dtto. Capital</option>
                  <option value="2">Carabobo</option>
                  <option value="3">Zulia</option>
                </select>
              </div>

              <div className="col-span-6 sm:col-span-6">
                <input id="pharmacy'name" name="pharmacy'name" type="tel" placeholder='Nombre de la farmacia' className={`form-input ${styles.form_element}`} />
              </div>
              <div className="col-span-6 sm:col-span-6">
                {/* <input id="pharmacy'name" name="pharmacy'name" type="tel" placeholder='Nombre de la farmacia' className={`form-input ${styles.form_element}`} /> */}

                <textarea name="address" id="address" placeholder='Dirección de la farmacia' className={`${styles.form_element} form-textarea !h-28  appearance-none`}>

                </textarea>



              </div>

            </div>
          </form>
        </div>

        <div className="border-t border-gray-200 rounded-b w-full border border-red-500">
          <button className="text-white bg-nena-secondary hover:bg-nena-secondary-dark font-medium rounded-lg text-base px-10 py-2.5" type="submit">Registrarme</button>
        </div>
      </section>
    </div>
  )
}

export default FormClient