import { fetchData } from '@/utilities/index'


/**
 * Endpoint Next - Para consultar listado banner
 * @param {string} obj objeto de filtro
 * @returns json
 */
export const getDataHomeFetch = (type, section) => {
  // console.log('getDataHomeFetch', type, section)
  return type !== 'file'
    ? fetchData(`${process.env.NEXT_PUBLIC_API_URL}/${section}`)
    : fetchData(`http://localhost:3001/json/${section}.json`)
}


/**
 * Endpoint Next - Para consultar listado banner
 * @param {string} obj objeto de filtro
 * @returns json
 */
export const getDataAboutFetch = (type, section) => {
  return type !== 'file'
    ? fetchData(`/api/web/${section}`)
    : fetchData(`http://localhost:3001/json/${section}.json`)
}








/**
 * Endpoint Next - Para consultar listado productos top
 * @param {string} obj objeto de filtro
 * @returns json
 */
export const searchProductTopFetch = () => {
  return fetchData('/api/web/products_top')
}


/**
 * Endpoint Next - Para consultar listado productos destacados
 * @param {string} obj objeto de filtro
 * @returns json
 */
export const searchProductFeaturedFetch = () => {
  return fetchData('/api/web/products_featured')
}