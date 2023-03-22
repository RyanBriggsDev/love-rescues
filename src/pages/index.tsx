// @ts-nocheck
import { useEffect, useState, useContext } from 'react'
import { AuthContext } from './_app'

export default function Index() {
  const [results, setResults] = useState<any>()
  const [loading, setLoading] = useState(true)
  const accessToken = useContext(AuthContext)
  useEffect(() => {
    if (accessToken === null) return
    const fetchData = async () => {
      const res = await fetch(
        'https://api.petfinder.com/v2/animals?animal=dog',
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      const json = await res.json()
      console.log(json)
      if (json.animals) {
        setLoading(false)
        setResults(json)
      }
    }
    fetchData()
  }, [accessToken])

  if (loading) return <h1>Loading...</h1>

  if (!loading && results.animals)
    return (
      <>
        {results.animals.map((animal: any, index: number) => (
          <div key={index}>{animal.name}</div>
        ))}
      </>
    )
}
