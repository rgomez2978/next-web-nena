import { create } from 'zustand'


const useStore = create((set) => ({
  error: null,
  data: [],
  isLoading: false,
  isMenuOpen: false,
  isPlayVideo: false,

  menuTop: [
    {
      id: 1,
      name: 'inicio',
      link: '/web',
      active: true,
    },
    {
      id: 2,
      name: 'nosotros',
      link: '/web/nosotros',
      active: false,
    },
    {
      id: 3,
      name: 'cliente',
      link: '/web/clientes',
      active: false,
    },
    {
      id: 4,
      name: 'proveedor',
      link: '/web/proveedores',
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
      link: '/web/fundacion',
      active: false,
    },
    {
      id: 7,
      name: 'contacto',
      link: '/web/contactanos',
      active: false,
    },
  ],
  menuFooter: [
    {
      id: 1,
      name: 'Opciones',
      link: '',
      items: [
        {
          id: 1,
          name: 'Inicio',
          link: '/web',
          active: true,
        },
        {
          id: 2,
          name: 'Nosotros',
          link: '/web/nosotros',
          active: false,
        },
        {
          id: 3,
          name: 'Fundacion',
          link: '/web/fundacion',
          active: false,
        },
        {
          id: 4,
          name: 'Contacto',
          link: '/web/contactanos',
          active: false,
        }
      ],
      active: true,
    },
    {
      id: 2,
      name: 'Nosotros',
      link: '/web/nosotros',
      items: [
        {
          id: 1,
          name: '¿Quiénes Somos?',
          link: '/web/nosotros',
          active: true,
        },
        {
          id: 2,
          name: 'Cronologia',
          link: '/web/nosotros',
          active: false,
        },
        {
          id: 3,
          name: 'Misión y visión',
          link: '/web/nosotros',
          active: false,
        },
        {
          id: 4,
          name: 'Valores                          ',
          link: '/web/nosotros',
          active: false,
        }
      ],
      active: false,
    },
    {
      id: 3,
      name: 'Cliente / Proveedor NENA',
      link: '/web/nosotros',
      items: [
        {
          id: 1,
          name: 'Registrate como cliente',
          link: '/web',
          active: true,
        },
        {
          id: 2,
          name: 'Registrate como proveedor',
          link: '/web/nosotros',
          active: false,
        },
        {
          id: 3,
          name: 'Procesar solicitud de proveedor',
          link: '/web/fundacion',
          active: false,
        }
      ],
      active: false,
    },

  ],








  setMenuTop: (newMenuTop) => set({ menuTop: newMenuTop }),

  setMenuFooter: (newMenuFooter) => set({ menuFooter: newMenuFooter }),

  setData: (newData) => set({ data: newData }),
  setError: (newError) => set({ error: newError }),
  setLoading: (isLoading) => set({ isLoading }),
  setIsMenuOpen: (isMenuOpen) => set({ isMenuOpen }),
  setPlayVideo: (isPlayVideo) => set({ isPlayVideo }),

  // setData: (data) => set({ data }),
  // increasePopulation: () => set((state) => ({
  //   bears: state.bears + 1
  // })),

  // removeAllBears: () => set({
  //   bears: 0
  // }),

  // updateBears: (newBears) => set({
  //   bears: newBears
  // }),


  user: {
    name: 'ronald',
    lastname: 'gomez',
  },





}))


export default useStore;




// obtener valor de un atributo del store desde un componente
// const user = useStore((state) => state.user)

// obtener diferentes valores del store desde un componente desestructurando
// const { isLoading, setLoading, data, setData } = useStore();


