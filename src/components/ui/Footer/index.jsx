import Image from 'next/image'
import Link from 'next/link';
import useStore from '@/stores/index';
import styles from "./style.module.scss";

/**
 * Component: Logo del navbar
 * @returns
 */
const Logo = () => {
  return (
    <Image
      alt="logo nena"
      width={300}
      height={0}
      src="/images/logo_rif.png"
      className='w-64 h-18'
      priority
    />
  )
}



const Footer = () => {

  const { menuFooter } = useStore();

  const { address, options, copy } = menuFooter[0]

  return (
    <div className={`${styles.footer_container}`}>

      <div className={`${styles.content_top}`}>
        <div className={`${styles.address_container}`}>
          <div className={`${styles.address_content}`}>
            <Logo />
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
