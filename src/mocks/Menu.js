
/**
 * Opciones del menu top de web
 */
export const menuWebOptions = {
  options: [
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
  ]
}

/**
 * Opciones del menu footer
 */
export const menuWebFooterOptions = {
  options: [
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

  ]
}