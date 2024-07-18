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
          <Link href={'/'} >
            <Image
              src="/images/logo.png"
              alt="logo nena"
              width={200}
              height={100}
              className={`${styles.logo}`}
              priority
            />
          </Link>
          <button
            type="button"
            onClick={setIsToggleSidebar}
          >
            <span>Open sidebar</span>
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
                  className={`${styles.li_link}`}>
                  {name === 'logo' ? (
                    <Image
                      src="/images/logo.png"
                      alt="logo nena"
                      width={200}
                      height={100}
                      className={`${styles.logo}`}
                      priority
                    />
                  ) : name}
                </Link>
              </li>
            ))}
          </ul>
          <div className={`${styles.button_contain}`}>
            <button type="button"
              className={`${backgroundColorClassButton} `}>
              <SVGSignIn />
              <span>iniciar sesion</span>
            </button>
          </div>
        </nav>

      </div>
    </section>

  )
}

export default Navbar