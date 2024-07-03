import Image from 'next/image'
import Link from 'next/link';
import { PhoneCall } from "react-feather";
import useStore from '@/stores/index';


const FooterComp = () => {
  const { menuFooter, setMenuFooter } = useStore();

  return (
    <div className=" pt-10 w-full px-8 md:px-20 bg-nena-primary text-white">
      <div className="grid gap-10 mb-8 grid-cols-1 md:grid-cols-1 lg:grid-cols-3">

        {/* INFO - LOGO DIRECCION */}
        <div className=" border-b lg:border-b-0 lg:border-r">
          <div className='mb-10 lg:mb-0 lg:mr-10'>
            <Image alt="logo nena" width={300} height={0} src="/images/logo_rif.png" className='w-64 h-18' />

            <div className="mt-6 lg:max-w-sm space-y-5">
              <div className='space-y-2'>
                <p className="text-base md:text-sm text-white">
                  <strong>SEDE PRINCIPAL:</strong> Carrera 3 con Calle 3. Edif. Dronena Zona Industrial III. Barquisimeto, Estado Lara, Venezuela.
                </p>
                <div className='text-base md:text-sm flex flex-row'>
                  <PhoneCall className='w-5 md:w-4 h-5 md:h-4 mr-2' />
                  <a href="tel:850-123-5021" aria-label="Our phone" title="Our phone"
                    className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">+58-251-269.01.11</a>
                </div>
              </div>

              <div className='space-y-2'>
                <p className="text-base md:text-sm text-white">
                  <strong>SEDE SUCURSAL CAPITAL:</strong> Zona Ind. del Este, Av. 2, Edif. Drogueria Nena. Guarenas, Estado Miranda, Venezuela.
                </p>
                <div className='text-base md:text-sm flex flex-row'>
                  <PhoneCall className='w-5 md:w-4 h-5 md:h-4 mr-2' />
                  <a
                    href="tel:+58-212-219.42.00"
                    className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">+58-212-219.42.00
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>


        {/* MENU 1 */}
        <div className="mt-5 grid lg:pr-0 xl:pr-40 lg:col-span-2 gap-7 lg:gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 ">

          {menuFooter.map(({ id, name, items, active }) => (
            <div key={id} className="space-y-2 text-sm">
              <p className="text-base font-extrabold tracking-wide text-white">
                {name}
              </p>
              <ul className='space-y-2'>
                {items.map(({ id, name, link }) => (
                  <li key={id}>
                    <Link
                      href={link}
                      className="font-normal text-white text-sm  hover:text-nena-secondary hover:font-normal text-nowrap flex items-center align-items-center w-auto"
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>


              {/* <div className="flex">
                <p className="mr-1 text-white">Phone:</p>
                <a href="tel:850-123-5021" aria-label="Our phone" title="Our phone" className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">850-123-5021</a>
              </div>
              <div className="flex">
                <p className="mr-1 text-white">Email:</p>
                <a href="mailto:info@lorem.mail" aria-label="Our email" title="Our email" className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">info@lorem.mail</a>
              </div>
              <div className="flex">
                <p className="mr-1 text-white">Address:</p>
                <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" aria-label="Our address" title="Our address" className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">
                  312 Lovely Street, NY
                </a>
              </div> */}
            </div>
          ))}
        </div>




        {/* <div>
          <span className="text-base font-bold tracking-wide text-white">Social</span>
          <div className="flex items-center mt-1 space-x-3">
            <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path
                  d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"
                ></path>
              </svg>
            </a>
            <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4"></circle>
                <path
                  d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"
                ></path>
              </svg>
            </a>
            <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path
                  d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"
                ></path>
              </svg>
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Bacon ipsum dolor amet short ribs pig sausage prosciutto chicken spare ribs salami.
          </p>
        </div> */}
      </div>
      <div className="flex justify-center pt-5 pb-10 lg:flex-row">
        <p className="text-sm text-white">
          Copyright © 2024 | <strong>Drogueria NENA C.A </strong>| Venezuela
        </p>
        {/* <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a href="/" className="text-sm text-white transition-colors duration-300 hover:text-deep-purple-accent-400">
              F.A.Q
            </a>
          </li>
          <li>
            <a href="/" className="text-sm text-white transition-colors duration-300 hover:text-deep-purple-accent-400">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/" className="text-sm text-white transition-colors duration-300 hover:text-deep-purple-accent-400">
              Terms &amp; Conditions
            </a>
          </li>
        </ul> */}
      </div>
    </div>
  )
}

export default FooterComp
