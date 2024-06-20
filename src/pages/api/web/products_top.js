import { getToken } from 'next-auth/jwt'

export default async function handler(req, res) {
  // const { API_URL } = process.env
  const token = await getToken({ req })

  const data = await fetch('http://localhost:4000/products_top', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `${String(token?.accessToken)}`
    },
    // body: JSON.stringify(req.body)
  }).then((response) => {
    console.log('response', response)
    if (response.status === 401) {
      // return res.redirect('/auth/logout')
    }
    return response.json()
  })

  res.status(200).json(data)
}
