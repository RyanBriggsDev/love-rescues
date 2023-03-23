// @ts-nocheck

export default async function egg(req, res) {
  const params = new URLSearchParams()
  params.append('grant_type', 'client_credentials')
  params.append('client_id', process.env.PET_FINDER_KET)
  params.append('client_secret', process.env.PET_FINDER_SECRET)
  const petfinderRes = await fetch(
    'https://api.petfinder.com/v2/oauth2/token',
    {
      method: 'POST',
      body: params,
    }
  )
  const data = await petfinderRes.json()
  res.send(data)
}
