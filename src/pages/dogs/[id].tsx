import { useRouter } from 'next/router'
import { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../_app'
import { SixGrid } from '@/components/Grids'
import Container from '@/components/Container'
import Card from '@/components/Card'

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
        setResults(json.animal)
      }
    }
    if (router.isReady) fetchData()
  }, [accessToken])

  if (loading) return <h1>Loading...</h1>
  if (!loading && results)
    return (
      <>
        {/* images */}
        {results.photos.length === 0 ? (
          <p>No photos</p>
        ) : (
          <SingleDogImages results={results} />
        )}
        <MainContent results={results} />
      </>
    )
}

const SingleDogImages = (props: any) => {
  return (
    <div className="w-full grid grid-cols-3">
      {props.results.photos.length === 1 && (
        <SingleDogImage src={props.results.photos[0].large} />
      )}
      {props.results.photos.length === 2 && (
        <>
          <SingleDogImage src={props.results.photos[0].large} />
          <SingleDogImage src={props.results.photos[1].large} />
        </>
      )}
      {props.results.photos.length >= 3 && (
        <>
          <SingleDogImage src={props.results.photos[0].large} />
          <SingleDogImage src={props.results.photos[1].large} />
          <SingleDogImage src={props.results.photos[2].large} />
        </>
      )}
    </div>
  )
}

const SingleDogImage = (props: any) => {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center w-100 min-h-[300px] sm:min-h-[500px]"
      style={{ backgroundImage: `url(${props.src})` }}
    ></div>
  )
}

const MainContent = (props: any) => {
  return (
    <div className="flex items-center justify-center">
      <Container>
        <SixGrid>
          <DogInfo results={props.results} />
          <Sidebar />
        </SixGrid>
      </Container>
    </div>
  )
}

const DogInfo = (props: any) => {
  return (
    <Card className="col-span-4 p-3 md:p-6 flex flex-col gap-6">
      <h1 className="text-4xl py-6">{`${
        props.results.name && props.results.name
      }${
        props.results.contact.address.city &&
        ` - ${props.results.contact.address.city}`
      }${
        props.results.contact.address.state &&
        `, ${props.results.contact.address.state}`
      }`}</h1>

      <div className="flex gap-3">
        <p>{`${props.results.breeds.primary}${
          props.results.breeds.secondary &&
          ` & ${props.results.breeds.secondary} Cross`
        }`}</p>
      </div>
      <hr />
      <ul className="flex [&>*]:mr-6">
        {<li>{props.results.age ? props.results.age : 'Age Unknown'}</li>}
        {
          <li>
            {props.results.gender ? props.results.gender : 'Gender Unknown'}
          </li>
        }
        {props.results.size && <li>{props.results.size}</li>}
        {props.results.colors.primary && (
          <li>{props.results.colors.primary}</li>
        )}
      </ul>
      <hr />
      <div id="about" className="flex flex-col">
        <h3 className="text-3xl">About</h3>
        <div className="text-gray-700 [&>*]:py-2">
          {props.results.coat && (
            <div id="coat-length">
              <h4 className="text-xl">COAT LENGTH</h4>
              <p>{props.results.coat}</p>
            </div>
          )}
          <div>
            <h4 className="text-xl">HOUSE-TRAINED</h4>
            <p>{props.results.attributes.house_trained ? 'Yes' : 'No'}</p>
          </div>
          <div>
            <h4 className="text-xl">HEALTH</h4>
            <div className="flex gap-3 items-center">
              {props.results.attributes.shots_current && (
                <p>Vaccinations up to date</p>
              )}

              {props.results.attributes.spayed_neutered && (
                <>
                  <p className="text-xl">|</p>
                  <p>spayed / neutered</p>
                </>
              )}
            </div>
          </div>
          <div>
            <h4>GOOD IN A HOME WITH</h4>
            <div className="flex gap-3 items-center">
              {props.results.environment.dogs && <p>Dogs</p>}
              {props.results.environment.children && <p>Children</p>}
              {props.results.environment.cats && <p>Cats</p>}
              {!props.results.environment.dogs &&
                !props.results.environment.children &&
                !props.results.environment.cats && (
                  <p>No other pets or children</p>
                )}
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

const Sidebar = () => {
  return <div className="col-span-2">Sidebar</div>
}
