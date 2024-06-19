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
   * Endpoint Next - Para consultar listado productos
   * @param {string} obj objeto de filtro
   * @returns json
   */
export const searchProductBannerFetch = () => {
  return fetchData('/api/web/products_banner')
}
