import Image from 'next/image'
import Link from 'next/link';
import useStore from '@/stores/index';
import styles from "./style.module.scss";


const Footer = () => {

  const { menuFooter } = useStore();
  const { address, options, copy } = menuFooter[0]

  return (
    <div className={`${styles.footer_container}`}>

      <div className={`${styles.content_top}`}>
        <div className={`${styles.address_container}`}>
          <div className={`${styles.address_content}`}>
            <Image
              src={`${process.env.NEXT_PUBLIC_RUTA_IMG}/logos/logo_rif.png`}
              alt="logo nena"
              width={300}
              height={100}
              className='w-64 h-18'
            />
            <ul>
              {address.map(({ id, description, icon, phoneNumber }) => (
                <li key={id} >
                  <p dangerouslySetInnerHTML={{ __html: description }} />
                  <div className={`${styles.address_content_dir}`} >
                    <div className={`${styles.address_icon}`} dangerouslySetInnerHTML={{ __html: icon }} />
                    <a href={`tel:${phoneNumber}`} aria-label="phoneNumber" title="phoneNumber" className={`${styles.address_phone}`} >
                      {phoneNumber}
                    </a>
                  </div>
                </li>
              ))}
            </ul>

          </div>
        </div>
        <ul className={`${styles.menu_container}`}>
          {options.map(({ id, name, items, active }) => (
            <li key={id} >
              <p> {name} </p>
              <ul>
                {items.map(({ id, name, link }) => (
                  <li key={id}>
                    <Link href={link} className={`${styles.li_link}`} >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      <div className={`${styles.content_bottom}`}>
        <p dangerouslySetInnerHTML={{ __html: copy }} />
      </div>

    </div>
  )
}

export default Footer
