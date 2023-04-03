// @ts-nocheck
import { useEffect, useState, useContext } from 'react'
import { AuthContext } from './_app'
import { HeroSection, HomeAllPets } from '@/components/Home'
import { LoadingHomeAllPets } from '@/components/Loading'
import { useRouter } from 'next/router'
import PlanningToAdopt from '@/components/PlanningToAdopt'
import AdoptionArticles from '@/components/AdoptionArticles'

export default function Index() {
  const router = useRouter()
  const [results, setResults] = useState<any>()
  const [loading, setLoading] = useState(true)
  const accessToken = useContext(AuthContext)
  useEffect(() => {
    if (accessToken === null) return
    const fetchData = async () => {
      const res = await fetch('https://api.petfinder.com/v2/animals?type=dog', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      const json = await res.json()
      // console.log(json)
      if (json.animals) {
        setLoading(false)
        setResults(json)
      }
    }
    fetchData()
  }, [accessToken])

  return (
    <>
      <HeroSection />
      {loading ? <LoadingHomeAllPets /> : <HomeAllPets data={results} />}
      <PlanningToAdopt />
      <AdoptionArticles />
    </>
  )
}
