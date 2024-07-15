import { create } from 'zustand'


/**
 * Initial State Menu Top
 */
const initialStateMenuTop = [
  {
    id: 1,
    name: 'inicio',
    link: '/',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="main-grid-item-icon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /> <polyline points="9 22 9 12 15 12 15 22" /> </svg>',
    active: true,
  },
  {
    id: 2,
    name: 'nosotros',
    link: '/nosotros',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="transform: ;msFilter:;"> <path d="M19 2H9c-1.103 0-2 .897-2 2v6H5c-1.103 0-2 .897-2 2v9a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4c0-1.103-.897-2-2-2zM5 12h6v8H5v-8zm14 8h-6v-8c0-1.103-.897-2-2-2H9V4h10v16z"></path> <path d="M11 6h2v2h-2zm4 0h2v2h-2zm0 4.031h2V12h-2zM15 14h2v2h-2zm-8 .001h2v2H7z"></path> </svg>',
    active: false,
  },
  {
    id: 3,
    name: 'cliente',
    link: '/clientes',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="main-grid-item-icon" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /> <circle cx="9" cy="7" r="4" /> <path d="M23 21v-2a4 4 0 0 0-3-3.87" /> <path d="M16 3.13a4 4 0 0 1 0 7.75" /> </svg>',
    active: false,
  },
  {
    id: 4,
    name: 'proveedor',
    link: '/proveedores',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" style="transform: ;msFilter:;"><path d="M21 9h-1.42l-3.712-6.496-1.736.992L17.277 9H6.723l3.146-5.504-1.737-.992L4.42 9H3a1.001 1.001 0 0 0-.965 1.263l2.799 10.264A2.005 2.005 0 0 0 6.764 22h10.473c.898 0 1.692-.605 1.93-1.475l2.799-10.263A.998.998 0 0 0 21 9zm-3.764 11v1-1H6.764L4.31 11h15.38l-2.454 9z"></path><path d="M9 13h2v5H9zm4 0h2v5h-2z"></path></svg>',
    active: false,
  },
  {
    id: 5,
    name: 'logo',
    link: '/images/logo-dark.png',
    active: false,
  },
  {
    id: 6,
    name: 'fundacion',
    link: '/fundacion',
    icon: '<svg viewBox="0 0 512 512" fill="currentColor" > <path d="M228.3 469.1L47.6 300.4c-4.2-3.9-8.2-8.1-11.9-12.4h87c22.6 0 43-13.6 51.7-34.5l10.5-25.2 49.3 109.5c3.8 8.5 12.1 14 21.4 14.1s17.8-5 22-13.3l42.4-84.9 1.7 3.4c9.5 19 28.9 31 50.1 31h104.5c-3.7 4.3-7.7 8.5-11.9 12.4L283.7 469.1c-7.5 7-17.4 10.9-27.7 10.9s-20.2-3.9-27.7-10.9zM503.7 240h-132c-3 0-5.8-1.7-7.2-4.4l-23.2-46.3c-4.1-8.1-12.4-13.3-21.5-13.3s-17.4 5.1-21.5 13.3l-41.4 82.8-51-113.9c-3.9-8.7-12.7-14.3-22.2-14.1s-18.1 5.9-21.8 14.8l-31.8 76.3c-1.2 3-4.2 4.9-7.4 4.9H16c-2.6 0-5 .4-7.3 1.1-5.7-16-8.7-33-8.7-50.3v-5.8c0-69.9 50.5-129.5 119.4-141 45.6-7.6 92 7.3 124.6 39.9l12 12 12-12c32.6-32.6 79-47.5 124.6-39.9 68.9 11.5 119.4 71.1 119.4 141v5.8c0 16.9-2.8 33.5-8.3 49.1z" /> </svg>',
    active: false,
  },
  {
    id: 7,
    name: 'contacto',
    link: '/contactanos',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="transform: ;msFilter:;"><path d="M21 2H6a2 2 0 0 0-2 2v3H2v2h2v2H2v2h2v2H2v2h2v3a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-8 2.999c1.648 0 3 1.351 3 3A3.012 3.012 0 0 1 13 11c-1.647 0-3-1.353-3-3.001 0-1.649 1.353-3 3-3zM19 18H7v-.75c0-2.219 2.705-4.5 6-4.5s6 2.281 6 4.5V18z"></path></svg>',
    active: false,
  },
]


/**
 * Initial State Menu Footer
 */
const initialStateMenuFooter = [
  {
    id: 1,
    copy: 'Copyright © 2024 | <strong>Drogueria NENA C.A </strong>| Venezuela',

    address: [
      {
        id: 1,
        description: '<strong>SEDE PRINCIPAL:</strong> Carrera 3 con Calle 3. Edif. Dronena Zona Industrial III. Barquisimeto, Estado Lara, Venezuela.',
        icon: '<svg viewBox="0 0 512 512" fill="currentColor" > <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64c0 247.4 200.6 448 448 448 18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368c-70.4-33.3-127.4-90.3-160.7-160.7l49.3-40.3c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /> </svg>',
        phoneNumber: '+58-251-269.01.11',
        active: true,
      },
      {
        id: 2,
        description: '<strong>SEDE SUCURSAL CAPITAL:</strong> Zona Ind. del Este, Av. 2, Edif. Drogueria Nena. Guarenas, Estado Miranda, Venezuela.',
        icon: '<svg viewBox="0 0 512 512" fill="currentColor" > <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64c0 247.4 200.6 448 448 448 18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368c-70.4-33.3-127.4-90.3-160.7-160.7l49.3-40.3c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /> </svg>',
        phoneNumber: '+58-212-219.42.00',
        active: true
      }
    ],
    options: [
      {
        id: 1,
        name: 'Opciones',
        link: '',
        items: [
          {
            id: 1,
            name: 'Inicio',
            link: '/',
            active: true,
          },
          {
            id: 2,
            name: 'Nosotros',
            link: '/nosotros',
            active: false,
          },
          {
            id: 3,
            name: 'Fundacion',
            link: '/fundacion',
            active: false,
          },
          {
            id: 4,
            name: 'Contacto',
            link: '/contactanos',
            active: false,
          }
        ],
        active: true,
      },
      {
        id: 2,
        name: 'Nosotros',
        link: '/nosotros',
        items: [
          {
            id: 1,
            name: '¿Quiénes Somos?',
            link: '/nosotros',
            active: true,
          },
          {
            id: 2,
            name: 'Cronologia',
            link: '/nosotros',
            active: false,
          },
          {
            id: 3,
            name: 'Misión y visión',
            link: '/nosotros',
            active: false,
          },
          {
            id: 4,
            name: 'Valores',
            link: '/nosotros',
            active: false,
          }
        ],
        active: false,
      },
      {
        id: 3,
        name: 'Cliente / Proveedor NENA',
        link: '/nosotros',
        items: [
          {
            id: 1,
            name: 'Registrate como cliente',
            link: '',
            active: true,
          },
          {
            id: 2,
            name: 'Registrate como proveedor',
            link: '/nosotros',
            active: false,
          },
          {
            id: 3,
            name: 'Procesar solicitud de proveedor',
            link: '/fundacion',
            active: false,
          }
        ],
        active: false,
      }
    ]
  }
]


const useStore = create((set) => ({
  error: null,
  data: [],
  isLoading: false,
  isMenuOpen: false,
  isSidebarOpen: false,
  isPlayVideo: false,
  menuTop: initialStateMenuTop,
  menuFooter: initialStateMenuFooter,
  /**
   * Metodo para asignar los valores del contenido de la cada pagina
   * @returns
   */
  setData: (newData) => set({ data: newData }),

  /**
   * Metodo para abrir y cerrar el sidebar
   * @returns
   */
  setIsToggleSidebar: () => set(state => ({
    isSidebarOpen: !state.isSidebarOpen
  })),

  /**
   * Metodo para asignar nuevos valores al menu top
   * @returns
   */
  setMenuTop: (newMenuTop) => set({ menuTop: newMenuTop }),

  /**
   * Metodo para asignar nuevos valores al menu footer
   * @returns
   */
  setMenuFooter: (newMenuFooter) => set({ menuFooter: newMenuFooter }),

  /**
   * Metodo para asignar el valor del estado de error
   * @returns
   */
  setError: (newError) => set({ error: newError }),

  /**
   * Metodo para asignar el valor del estado del loading
   * @returns
   */
  setLoading: (isLoading) => set({ isLoading }),

  /**
   * Metodo para asignar el valor del estado de reproduccion de los videos
   * @returns
   */
  setPlayVideo: (isPlayVideo) => set({ isPlayVideo }),

}))


export default useStore;




// obtener valor de un atributo del store desde un componente
// const user = useStore((state) => state.user)

// obtener diferentes valores del store desde un componente desestructurando
// const { isLoading, setLoading, data, setData } = useStore();


