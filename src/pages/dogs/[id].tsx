import { useRouter } from 'next/router'
import { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../_app'

export default function SingleDog() {
  const router = useRouter()
  const { id } = router.query
  const [results, setResults] = useState<any>()
  const [loading, setLoading] = useState(true)
  const accessToken = useContext(AuthContext)
  useEffect(() => {
    if (accessToken === null) return
    const fetchData = async () => {
      const res = await fetch(`https://api.petfinder.com/v2/animals/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      const json = await res.json()
      console.log(json)
      if (json.animal) {
        setLoading(false)
        setResults(json)
      }
    }
    if (router.isReady) fetchData()
  }, [accessToken])

  if (loading) return <h1>Loading...</h1>
  if (!loading && results.animal) return <div>{results.animal.name}</div>
}
