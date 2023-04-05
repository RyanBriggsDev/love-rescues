import { useRouter } from 'next/router'
import { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../_app'
import { ReactElement } from 'react'
import { SixGrid } from '@/components/Grids'
import Container from '@/components/Container'
import Card from '@/components/Card'
import dogPlaceholder from '../../assets/images/dogPlaceholder.jpg'

export default function Search() {
  const router = useRouter()
  const [results, setResults] = useState<any>()
  const [loading, setLoading] = useState(true)
  const [animalSearch, setAnimalSearch] = useState()
  const [locationSearch, setLocationSearch] = useState()
  const accessToken = useContext(AuthContext)
  const query = router.query.id

  useEffect(() => {
    const last = window.location.href.split('/').pop()
    if (last) {
      const words = last.toString().split('+')

      if (accessToken === null) return
      // Hacky approach to getting the homepage search to work. I don't like it.
      if (!words) window.location.reload()
      const fetchData = async () => {
        try {
          const res = await fetch(
            `https://api.petfinder.com/v2/animals?type=${words[0]}${
              words[1] ? `&location=${words[1]}` : ''
            }`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          )
          const json = await res.json()
          if (json) {
            console.log(json)
            setLoading(false)
            setResults(json)
          }
        } catch (error) {
          console.log(error)
        }
      }
      if (words) {
        fetchData()
      }
    }
  }, [accessToken])

  if (loading) return <p>Loading</p>

  return (
    <div className="flex items-center justify-center">
      <Container>
        <SixGrid>
          <FilterBar />
          <MainContent results={results} />
        </SixGrid>
      </Container>
    </div>
  )
}

function MainContent(props: MainContentProps) {
  return (
    <div className="col-span-6 md:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
      {props.results.animals.map((animal: any, index: number) => (
        <AnimalCard
          bgImg={
            animal.primary_photo_cropped?.medium
              ? animal.primary_photo_cropped.medium
              : dogPlaceholder.src
          }
          key={index}
        >
          <p className="w-full bg-white px-3 py-5 rounded-t-[100%] text-xl text-violet-700">
            {animal.name.toUpperCase()}
          </p>
        </AnimalCard>
      ))}
    </div>
  )
}

function AnimalCard(props: AnimalCardProps) {
  return (
    <Card className="justify-center text-center flex flex-col gap-3 bg-cover duration-300 ease-in-out hover:scale-105">
      <div
        className="bg-cover bg-center bg-no-repeat min-h-[250px] rounded-t flex flex-col justify-end"
        style={{ backgroundImage: `url(${props.bgImg})` }}
      >
        {props.children}
      </div>
    </Card>
  )
}

function FilterBar() {
  return <aside className="col-span-6 md:col-span-2">Filter Options</aside>
}

type MainContentProps = {
  results: any
}

type AnimalCardProps = {
  children: ReactElement
  bgImg?: string
}
