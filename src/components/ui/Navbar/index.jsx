import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { usePathname, useSearchParams } from "next/navigation";

import useScrollPosition from '@/hooks/useScrollPosition'

import { getURL, getPath } from "@/utilities";

import useStore from '@/stores/index';
import styles from './style.module.scss';
import { SVGMenuOpen, SVGSignIn } from '@/components/svg';



/**
 * Component: Logo del navbar
 */
const Logo = () => {
  return (
    <Image
      src={`${process.env.NEXT_PUBLIC_RUTA_IMG}/logos/logo.png`}
      alt="logo nena"
      width={200}
      height={100}
      className={`${styles.logo}`}
      priority
    />
  )
}


/**
 * Layout: Navbar
 */
const Navbar = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const url = getURL(pathname, searchParams)
  const path = getPath(pathname).model

  const scrollPosition = useScrollPosition();
  const { setIsToggleSidebar, menuTop } = useStore();

  const backgroundColorClass = path !== undefined && path !== ''
    ? 'bg-nena-primary' : scrollPosition > 100 ? 'bg-nena-primary' : 'bg-transparent';

  const backgroundColorClassButton = path !== undefined && path !== ''
    ? 'bg-nena-secondary' : scrollPosition > 100 ? 'bg-nena-secondary' : 'bg-nena-primary';




  return (
    <section className={`${styles.navbar_contain} ${backgroundColorClass}  `}>
      <div className={`${styles.navbar_structure}`}>

        {/* SIDEBAR */}
        <div className={`${styles.sidebar_section}`}>
          <Link href={'/'} > <Logo /> </Link>
          <button type="button" onClick={setIsToggleSidebar} >
            <SVGMenuOpen />
          </button>
        </div>

        {/* NAVBAR */}
        <nav>
          <ul>
            {menuTop.map(({ id, name, link, active }) => (
              <li key={id} >
                <Link
                  href={name === 'logo' ? '/' : link} passHref
                  className={`${styles.li_link}`}
                  target={name === 'fundacion' ? "_blank" : null}
                >
                  {name === 'logo' ? <Logo /> : name}
                </Link>
              </li>
            ))}
          </ul>
          <div className={`${styles.button_contain}`}>
            <button type="button"
              className={`${backgroundColorClassButton} `}>
              <Link
                href={'https://www.dronena.com/NuevaExperiencia/'} passHref
                className={`${styles.li_link}`}
                target={"_blank"}
              >
                <SVGSignIn />
                <span>iniciar sesion</span>
              </Link>

            </button>
          </div>
        </nav>

      </div>
    </section>

  )
}

export default Navbar