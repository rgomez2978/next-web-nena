'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';
import SidebarComp from '@/components/LayoutComp/LayoutMenu/SidebarComp';
import { menuWebOptions } from "@/mocks/Menu";
import useScrollPosition from '@/hooks/useScrollPosition'

/**
 * Component: Logo de la web
 * @returns
 */
const Logo = () => {
  return (
    <Image
      alt="logo nena"
      width={200}
      height={0}
      src="/images/logo.png"
      className='w-48 h-18'
    />
  )
}


/**
 * Component: Header personalizado para el sidebar
 * @returns
 */
const customHeader = () => {
  return (
    <Link href="/">
      <Image
        src="/images/logo-dark.png"
        alt="Your Company"
        width={200}
        height={0}
        priority={true}
      />
    </Link>
  )
}


/**
 * Component: Menu horizontal de la web
 * @returns
 */
const NavbarComp = ({ multi }) => {

  console.log('multi NavbarComp', multi)
  const [isOpenSlide, setIsOpenSlide] = useState(false)
  const scrollPosition = useScrollPosition();
  const backgroundColorClass = multi !== undefined ? 'bg-nena-primary' : scrollPosition > 100 ? 'bg-nena-primary' : 'bg-transparent';
  const backgroundColorClassButton = multi !== undefined ? 'bg-nena-secondary' : scrollPosition > 100 ? 'bg-nena-secondary' : 'bg-nena-primary';


  /**
   * Metodo: Toggle Menu Sidebar
   * @param {*} value valor booleano
   */
  const handleToggleMenu = (value) => {
    setIsOpenSlide(value)
  }


  return (

    <nav className={`fixed py-2 p-4 z-30 w-full text-white transition-colors duration-500 ease-in-out ${backgroundColorClass} `}>
      <div className="w-full h-18 px-3 md:px-8 md:flex items-center justify-center md:mx-auto  ">

        {/* MOBILE */}
        <div className="flex md:hidden  w-full justify-between">
          <Logo />
          <div className="flex justify-content-center items-center md:hidden">
            <Sidebar header={customHeader} visible={isOpenSlide} onHide={() => handleToggleMenu(false)}>
              <SidebarComp />
            </Sidebar>
            <Button
              onClick={() => handleToggleMenu(true)}
              className="flex px-3 py-2 font-semibold text-white rounded-md  bg-transparent hover:bg-nena-secondary-dark focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 uppercase" aria-label="sesion">
              <i className="pi pi-bars text-lg "></i>
            </Button>
          </div>
        </div>

        {/* WEB */}
        <div className=" flex w-full h-18 justify-center items-center lg:-ml-20">
          <div className="hidden md:flex flex-row mx-3 lg:mx-6 sm:space-x-3 xl:space-x-6 ">
            {menuWebOptions.options.map(({ id, name, link, active }) => (
              <Link key={id}
                href={link}
                className="font-bold text-white uppercase text-sm lg:text-base hover:text-nena-secondary hover:font-bold text-nowrap flex items-center align-items-center gap-2 w-auto"
                aria-current="page">
                {name === 'logo' ? <Logo /> : name}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex justify-center">
            <Button
              className={`${backgroundColorClassButton} flex px-3 lg:px-2 py-2 font-semibold text-white  rounded-md hover:bg-nena-secondary-dark focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 uppercase`} aria-label="sesion">
              <i className="pi pi-user text-xs lg:text-sm "></i>
              <span className="pl-2 text-nowrap text-xs md:hidden lg:text-xs lg:flex">iniciar sesion</span>
            </Button>
          </div>
        </div>

      </div>
    </nav >
  )
}

export default NavbarComp
