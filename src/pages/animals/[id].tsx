import { useRouter } from 'next/router'
import { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../_app'
import { FourGrid, SixGrid } from '@/components/Grids'
import Container from '@/components/Container'
import Card from '@/components/Card'
import Button from '@/components/Button'
import Icon from '@/components/Icon'
import { BiMailSend, BiMapPin, BiPhone } from 'react-icons/bi'
import Image from 'next/image'
import rescueCoLogo from '../../assets/images/rescueCoLogo.png'

export default function SingleDog() {
  const router = useRouter()
  const { id } = router.query
  const [results, setResults] = useState<any>()
  const [orgAnimals, setOrgAnimals] = useState<any>()
  const [org, setOrg] = useState<any>()
  const [otherDogs, setOtherDogs] = useState<any>()
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
        setResults(json.animal)
        const orgId = json.animal._links.organization.href.split(/[/ ]+/).pop()
        try {
          const orgAnimalRes = await fetch(
            `https://api.petfinder.com/v2/animals?organization=${orgId}`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          )
          const orgAnimalJson = await orgAnimalRes.json()
          console.log(orgAnimalJson)
          if (orgAnimalJson.animals) {
            setOrgAnimals(orgAnimalJson)
            setLoading(false)
            setOtherDogs(orgAnimalJson.animals.slice(0, 8))
          }
        } catch (error) {
          console.log(error)
        }
        try {
          const orgRes = await fetch(
            `https://api.petfinder.com/v2/organizations/${orgId}`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          )
          const orgJson = await orgRes.json()
          setOrg(orgJson.organization)
        } catch (error) {
          console.log(error)
        }
      }
    }
    if (router.isReady) fetchData()
    if (orgAnimals) console.log(otherDogs)
  }, [accessToken, id, router.isReady])

  if (loading) return <h1>Loading...</h1>

  if (!loading && results && org && orgAnimals)
    return (
      <>
        {results.photos.length === 0 ? (
          <p>No photos</p>
        ) : (
          <SingleDogImages results={results} />
        )}
        <MainContent results={results} />
        <OtherDogsSection results={results} otherDogs={otherDogs} org={org} />
        <button onClick={() => console.log(org)}>Org</button>
      </>
    )
}

const SingleDogImages = (props: any) => {
  return (
    <>
      {props.results.photos.length === 1 && (
        <div className="w-full grid grid-cols-1 gap-1">
          <SingleDogImage src={props.results.photos[0].large} />
        </div>
      )}
      {props.results.photos.length === 2 && (
        <div className="w-full grid grid-cols-2 gap-1">
          <SingleDogImage src={props.results.photos[0].large} />
          <SingleDogImage src={props.results.photos[1].large} />
        </div>
      )}
      {props.results.photos.length >= 3 && (
        <div className="w-full grid grid-cols-3 gap-1">
          <SingleDogImage src={props.results.photos[0].large} />
          <SingleDogImage src={props.results.photos[1].large} />
          <SingleDogImage src={props.results.photos[2].large} />
        </div>
      )}
    </>
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
        <SixGrid gap="gap-6">
          <DogInfo results={props.results} />
          <Sidebar results={props.results} />
        </SixGrid>
      </Container>
    </div>
  )
}

const DogInfo = (props: any) => {
  return (
    <Card className="col-span-6 md:col-span-4 p-6 flex flex-col gap-6 text-center sm:text-start">
      <h1 className="text-4xl py-6 text-center sm:text-start">{`${
        props.results.name && props.results.name
      }${
        props.results.contact.address.city &&
        ` - ${props.results.contact.address.city}`
      }${
        props.results.contact.address.state &&
        `, ${props.results.contact.address.state}`
      }`}</h1>

      <div className="flex gap-3 text-center sm:text-start justify-center md:justify-start">
        <p>{`${props.results.breeds.primary}${
          props.results.breeds.secondary
            ? ` & ${props.results.breeds.secondary}`
            : ''
        }`}</p>
      </div>
      <hr />
      <ul className="flex flex-wrap justify-center md:justify-start gap-3">
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
            <div className="flex gap-3 items-center justify-center md:justify-start">
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
            <h4 className="text-xl">GOOD IN A HOME WITH</h4>
            <div className="flex gap-3 items-center justify-center md:justify-start">
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
      {props.results.description && (
        <>
          <hr />
          <div className=" flex flex-col gap-1">
            <h3 className="text-3xl">{`Meet ${props.results.name}`}</h3>
            <p>{props.results.description}</p>
          </div>
        </>
      )}
    </Card>
  )
}

const Sidebar = (props: any) => {
  return (
    <div className="col-span-6 md:col-span-2 flex flex-col gap-6 justify-around">
      <PurpleCard results={props.results} />
      <RescuerCard results={props.results} />
    </div>
  )
}

const PurpleCard = (props: any) => {
  return (
    <Card
      bg="bg-violet-700"
      className="p-6 text-white justify-center text-center flex flex-col gap-3"
    >
      <h3 className="text-2xl">{`Considering ${props.results.name} for adoption?`}</h3>
      <Button
        color="text-violet-700 hover:text-white"
        className="hover:bg-violet-900"
        onClick={() => alert(`We're still working on this feature`)}
      >
        Start Your Inquiry
      </Button>
      <Button
        color="text-white"
        bg="bg-transparent hover:bg-violet-900"
        className="border-white border-2 hover:border-violet-700"
        onClick={() => alert(`We're still working on this feature`)}
      >
        Read FAQs
      </Button>
      <div className="grid grid-cols-2 gap-3">
        <Button
          bg="bg-violet-700 hover:bg-violet-900"
          className="w-100"
          color="text-white"
          onClick={() => alert(`We're still working on this feature`)}
        >
          Sponsor
        </Button>
        <Button
          bg="bg-violet-700 hover:bg-violet-900"
          className="w-100"
          color="text-white"
          onClick={() => alert(`We're still working on this feature`)}
        >
          Favourite
        </Button>
      </div>
    </Card>
  )
}

const RescuerCard = (props: any) => {
  return (
    <Card className="p-6 text-center flex flex-col gap-3 justify-center relative">
      <div className="w-full flex justify-center">
        <Image
          src={rescueCoLogo}
          width="100"
          height={100}
          alt="rescuer purple logo"
        />
      </div>
      <h3 className="text-2xl mb-12">Contact Info</h3>
      <div
        id="contact-info"
        className="flex gap-6 flex-col text-base md:text-xs lg:text-base"
      >
        <div id="address" className="flex gap-3">
          <Icon icon={<BiMapPin />} />
          <div>
            <ul className="text-left flex flex-col gap-1">
              <li>{props.results.contact.address.address1}</li>
              {props.results.contact.address.address2 && (
                <li>{props.results.contact.address.address2}</li>
              )}
              <li>{`${props.results.contact.address.city}, ${props.results.contact.address.state} ${props.results.contact.address.postcode}`}</li>
              {props.results.contact.phone && (
                <li>{props.results.contact.phone}</li>
              )}
            </ul>
          </div>
        </div>
        <hr />
        {props.results.contact.email && (
          <>
            <div id="email" className="flex gap-3">
              <Icon icon={<BiMailSend />} />
              <a href={`mailto:${props.results.contact.email}`}>
                {props.results.contact.email}
              </a>
            </div>
            <hr />
          </>
        )}

        {props.results.contact.phone && (
          <>
            <div id="phone" className="flex gap-3">
              <Icon icon={<BiPhone />} />
              <a href={`tel:${props.results.contact.phone}`}>
                {props.results.contact.phone}
              </a>
            </div>
          </>
        )}
      </div>
    </Card>
  )
}

const OtherDogsSection = (props: any) => {
  const router = useRouter()
  return (
    <section className="flex flex-col items-center justify-center text-center gap-6">
      <Container className="text-center flex flex-col gap-3 md:gap-6">
        <h3 className="text-4xl text-violet-700">
          Other Pets from {props.org.name}
        </h3>
        <FourGrid id="otherDogs">
          {props.otherDogs.map((dog: any, index: number) => (
            <Card
              key={index}
              className="col-span-4 sm:col-span-2 lg:col-span-1 justify-center text-center flex flex-col gap-3 bg-cover duration-300 ease-in-out hover:scale-105"
              onClick={() => router.push(`/animals/${dog.id}`)}
            >
              <div
                className="min-h-[250px] rounded-t bg-cover bg-no-repeat bg-center flex flex-col justify-end"
                style={{
                  backgroundImage: `url(${dog?.primary_photo_cropped?.medium})`,
                }}
              >
                <p className="w-full bg-white px-3 py-5 rounded-t-[100%] text-xl text-violet-700">
                  {dog.name.toUpperCase()}
                </p>
              </div>
            </Card>
          ))}
        </FourGrid>
      </Container>
    </section>
  )
}
