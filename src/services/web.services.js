import { fetchData } from '@/utilities/index'


/**
 * Endpoint Next - Para consultar
 * @param {string} obj objeto de filtro
 * @returns json
 */
export const getDataFetch = (type, section) => {
  return type !== 'file'
    ? fetchData(`${process.env.NEXT_PUBLIC_API_URL}/${section}`)
    : fetchData(`${process.env.NEXT_PUBLIC_API_URL_WEB}/json/${section}.json`)
}
