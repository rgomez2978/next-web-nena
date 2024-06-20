import { fetchData } from '@/utils/index'


/**
 * Endpoint Next - Para consultar listado banner
 * @param {string} obj objeto de filtro
 * @returns json
 */
export const searchBannerFetch = () => {
  return fetchData('/api/web/banner')
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