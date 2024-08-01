// import { getToken } from 'next-auth/jwt'

export default async function handler(req, res) {
  const { API_URL } = process.env
  // const token = await getToken({ req })

  const data = await fetch(`${API_URL}/home`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      // 'Authorization': `${String(token?.accessToken)}`
      'Authorization': ``
    },
    // body: JSON.stringify(req.body)
  }).then((response) => {
    if (response.status === 401) {
      // return res.redirect('/auth/logout')
    }
    return response.json()
  })

  res.status(200).json(data)
}
