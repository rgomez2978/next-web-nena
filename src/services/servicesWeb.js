import { fetchData } from '@/utils/index'


/**
   * Endpoint Next - Para consultar listado DPT
   * @param {string} obj objeto de filtro
   * @returns json
   */
export const searchBannerFetch = () => {
  return fetchData('/api/web/banner')
}
