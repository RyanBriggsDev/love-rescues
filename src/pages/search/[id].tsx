import { useRouter } from 'next/router'
import { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../_app'
import { ReactElement } from 'react'
import { NineGrid } from '@/components/Grids'
import Container from '@/components/Container'
import Card from '@/components/Card'
import dogPlaceholder from '../../assets/images/dogPlaceholder.jpg'
import { LoadingSingleDogCard } from '@/components/Loading'

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

  return (
    <div className="flex items-center justify-center">
      <Container>
        <NineGrid>
          <FilterBar />
          <MainContent loading={loading} results={results} />
        </NineGrid>
      </Container>
    </div>
  )
}

function MainContent(props: MainContentProps) {
  const loadingElements: JSX.Element[] = []
  for (let i = 0; i < 20; i++) {
    loadingElements.push(<LoadingSingleDogCard key={i} />)
  }

  return (
    <div className="col-span-9 md:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
      {props.loading
        ? loadingElements
        : props.results?.animals.map((animal: any, index: number) => (
            <AnimalCard
              route={animal.id}
              bgImg={
                animal.primary_photo_cropped?.medium
                  ? animal.primary_photo_cropped.medium
                  : dogPlaceholder.src
              }
              key={index}
            >
              <div className="w-full bg-white px-3 py-5 rounded-b rounded-t-[100%]">
                <p className="text-xl text-violet-700">
                  {animal.name.toUpperCase()}
                </p>
                <div className="flex gap-1 flex-col justify-center text-xs rounded">
                  <p>{`${animal.age}  |  ${animal.breeds.primary}`}</p>
                  <p>{`${Math.round(animal.distance)} miles away`}</p>
                </div>
              </div>
            </AnimalCard>
          ))}
      {/* {props.results?.animals.map((animal: any, index: number) => (
        <AnimalCard
          route={animal.id}
          bgImg={
            animal.primary_photo_cropped?.medium
              ? animal.primary_photo_cropped.medium
              : dogPlaceholder.src
          }
          key={index}
        >
          <div className="w-full bg-white px-3 py-5 rounded-b rounded-t-[100%]">
            <p className="text-xl text-violet-700">
              {animal.name.toUpperCase()}
            </p>
            <div className="flex gap-1 flex-col justify-center text-xs rounded">
              <p>{`${animal.age}  |  ${animal.breeds.primary}`}</p>
              <p>{`${Math.round(animal.distance)} miles away`}</p>
            </div>
          </div>
        </AnimalCard>
      ))} */}
    </div>
  )
}

function AnimalCard(props: AnimalCardProps) {
  const router = useRouter()
  return (
    <Card
      className="justify-center text-center flex flex-col gap-3 bg-cover duration-300 ease-in-out hover:scale-105 rounded"
      onClick={() => router.push(`/animals/${props.route}`)}
    >
      <div
        className="bg-cover bg-center bg-no-repeat min-h-[300px] rounded flex flex-col justify-end"
        style={{ backgroundImage: `url(${props.bgImg})` }}
      >
        {props.children}
      </div>
    </Card>
  )
}

function FilterBar() {
  return <aside className="col-span-9 md:col-span-2">Filter Options</aside>
}

type MainContentProps = {
  results: any
  loading: boolean
}

type AnimalCardProps = {
  children: ReactElement
  bgImg?: string
  route?: 'string'
}
