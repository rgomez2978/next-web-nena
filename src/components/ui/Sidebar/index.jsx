'use client'
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import useStore from '@/stores/index';
import styles from './style.module.scss';
import { SVGMenuClose } from '@/components/svg';


// const sanitizeHtml = (htmlString) => {
//   return DOMPurify.sanitize(htmlString);
// }


const Sidebar = () => {
  const { isSidebarOpen, setIsToggleSidebar, menuTop } = useStore()

  return (
    <>
      {isSidebarOpen && (
        <div onClick={setIsToggleSidebar}>
          {/* background blue */}
          <div className={`${styles.bg_blue}`} />

          {/* background blur */}
          <div className={`fade-in  ${styles.bg_blur}`} />
        </div>
      )}

      {/* Side Menu */}
      <nav
        className={`${styles.sidebar_container} ${!isSidebarOpen ? '-translate-x-full' : 'translate-x-0'}`}
      >
        {/* Side Menu - Header */}
        <div className={`${styles.sidebar_header}`}>
          <Link href="/">
            <Image
              src="/images/logo-dark.png"
              alt="Drogueria NENA"
              width={200}
              height={100}
              priority
            />
          </Link>
          <button type="button"
            onClick={setIsToggleSidebar}
          >
            <SVGMenuClose />
          </button>
        </div>

        {/* Side Menu - NavItems */}
        <div className={`${styles.sidebar_menu}`}>
          <ul>
            {menuTop.map(({ id, name, link, icon, active }) => (
              <li key={id} onClick={setIsToggleSidebar}>
                {name !== 'logo' && (
                  <>
                    <Link
                      href={link} passHref
                      className={`${styles.li_link}`}
                      aria-current="page">
                      <div className={`${styles.li_icon}`} dangerouslySetInnerHTML={{ __html: icon }} />
                      <span>{name}</span>
                    </Link>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>

      </nav>

    </>
  )
}

export default Sidebar