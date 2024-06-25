import { getToken } from 'next-auth/jwt'


/**
 * Funcion para obtener los resultados de las API de next
 * @param {*} url url de la API de NextJs
 * @param {*} method Metodo a usar GET|POST|UPDATE|PATCH|DELETE
 * @param {*} body informacion enviado
 * @param {*} token token decodificado de JWT
 * @param {*} byId  Consulta o parametro por ID
 * @param {*} byString  Consulta o parametro por string u objeto
 * @returns
 */
export const fetchData = async (
  url,
  method = 'GET',
  body = null,
  token = null,
  byId = null,
  byString = null
) => {

  const tokenAccess = token ? await getToken({ token }) : ''

  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': token ? `${String(tokenAccess?.accessToken)}` : '',
    },
    body: body
      ? byId
        ? JSON.stringify(`${byId}`)
        : byString
          ? JSON.stringify({ find: byId })
          : JSON.stringify(body)
      : null,
  }

  const res = await fetch(url, options)
  const data = await res.json()
  return data || []
}


export const fetchDataJSON = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.error('Error fetching data:', error));
}