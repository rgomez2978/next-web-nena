import { fetchData } from '@/utils/index'


/**
 * Endpoint Next - Para consultar listado banner
 * @param {string} obj objeto de filtro
 * @returns json
 */
export const getDataHomeFetch = (type, section) => {
  // console.log('getDataHomeFetch', type, section)
  return type !== 'file'
    ? fetchData(`/api/web/${section}`)
    : fetchData(`http://localhost:3000/json/${section}.json`)
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