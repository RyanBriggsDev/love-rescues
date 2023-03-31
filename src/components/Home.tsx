import { FullPageGrid, SixGrid } from './Grids'
import dogPlaceholder from '../assets/images/dogPlaceholder.jpg'
import catDog from '../assets/images/catDog.jpg'
import Image from 'next/image'
import Container from './Container'
import Card from './Card'
import { BiSearch } from 'react-icons/bi'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { FaDog, FaCat, FaPaw, FaHome } from 'react-icons/fa'

export function HeroSection() {
  return (
    <div className="relative w-full" id="home-hero">
      <div className="w-full relative min-h-[400px] bg-red-500 flex flex-col items-center justify-center">
        <Image
          className="absolute h-full object-cover w-full z-0"
          src={catDog}
          alt="a cat and dog"
        />
        <Container className="flex flex-col items-center justify-center relative z-10 text-white gap-9">
          <SearchBar />
          <div className="text-center flex flex-col gap-3">
            <h1 className="text-5xl">Find Your New Best Friend</h1>
            <p>
              Browse pets from our network of over 11,500 shelters and rescues.
            </p>
          </div>
        </Container>
      </div>
      <div className="h-[10px] w-full bg-violet-700" />
      <HeroLinks />
    </div>
  )
}

function SearchBar() {
  const [searchAnimal, setSearchAnimal] = useState<string | null>(null)
  const [searchLocation, setSearchLocation] = useState<string | null>(null)
  const router = useRouter()

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (!searchAnimal) {
      alert('Search Animal Required')
    } else {
      router.push(
        `/search${searchAnimal && `/${searchAnimal}`}${
          searchLocation && `+${searchLocation}`
        }`
      )
    }
  }

  return (
    <div className="w-3/4 bg-white p-2 rounded">
      <form className="rounded flex gap-3 justify-center items-center">
        <div className="flex w-full flex-col md:flex-row md:gap-3">
          <input
            className="p-2 w-full md:w-1/2 rounded text-gray-700 focus:outline-violet-700"
            type="text"
            placeholder="Search Dog, Cat, etc."
            onChange={(e) => setSearchAnimal(e.target.value)}
          />
          <div className="bg-gray-300 md:h-[33px] md:w-[1px]"></div>
          <input
            className="p-2  w-full md:w-1/2 rounded text-gray-700 focus:outline-violet-700"
            type="text"
            placeholder="Enter City, State, or ZIP."
            onChange={(e) => setSearchLocation(e.target.value)}
          />
        </div>
        <button
          onClick={(e) => handleSubmit(e)}
          className="bg-violet-700 h-full rounded text-2xl p-2 hover:scale-105 duration-300 ease-in-out"
        >
          <BiSearch />
        </button>
      </form>
    </div>
  )
}

function HeroLinks() {
  const router = useRouter()
  return (
    <div className="relative -top-8 sm:-top-20 flex items-center justify-center px-3">
      <Container className="gap-6 bottom-0 grid grid-cols-2 md:grid-cols-4">
        <Card
          className="min-h-[150px] p-3 gap-3 flex flex-col items-center justify-center hover:scale-105 duration-300 ease-in-out hover:border-2 hover:border-violet-700 hover:bg-gray-100"
          onClick={() => router.push('/dogs')}
        >
          <FaDog className="text-7xl text-violet-700 " />
          <p className="text-center text-sm">Dogs</p>
        </Card>
        <Card
          className="min-h-[150px] p-3 gap-3 flex flex-col items-center justify-center hover:scale-105 duration-300 ease-in-out hover:border-2 hover:border-violet-700 hover:bg-gray-100"
          onClick={() => router.push('/cats')}
        >
          <FaCat className="text-7xl text-violet-700 " />
          <p className="text-center text-sm">Cats</p>
        </Card>
        <Card
          className="min-h-[150px] p-3 gap-3 flex flex-col items-center justify-center hover:scale-105 duration-300 ease-in-out hover:border-2 hover:border-violet-700 hover:bg-gray-100"
          onClick={() => router.push('/other-animals')}
        >
          <FaPaw className="text-7xl text-violet-700 " />
          <p className="text-center text-sm">Other Animals</p>
        </Card>
        <Card
          className="min-h-[150px] p-3 gap-3 flex flex-col items-center justify-center hover:scale-105 duration-300 ease-in-out hover:border-2 hover:border-violet-700 hover:bg-gray-100"
          onClick={() => router.push('/shelters')}
        >
          <FaHome className="text-7xl text-violet-700 " />
          <p className="text-center text-sm">Shelters & Rescues</p>
        </Card>
      </Container>
    </div>
  )
}

export function HomeAllPets(props: any) {
  const router = useRouter()
  const arr = props.data.animals.slice(0, 3)
  return (
    <div className="flex justify-center items-center">
      <Container className="flex flex-col gap-3">
        <h3 className="text-center text-violet-700 text-4xl">
          Pets Available for Adoption
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {arr.map((animal: any, index: number) => (
            <SingleDogCard animal={animal} key={index}>
              {animal.name}
            </SingleDogCard>
          ))}

          <Card
            className="flex flex-col text-white items-center"
            bg="bg-violet-700 w-full"
          >
            <div className="flex flex-col p-3 justify-center h-full items-center text-center gap-6">
              <FaDog className="text-7xl" />
              <p className="text-sm">{`${props.data.pagination.total_count} more pets available on Love Rescues`}</p>
            </div>
            <button
              className="p-3 w-full hover:bg-violet-900 rounded duration-300 ease-in-out"
              onClick={() => router.push('/animals/all')}
            >
              MEET THEM
            </button>
          </Card>
        </div>
      </Container>
    </div>
  )
}

const SingleDogCard = (props: any) => {
  const router = useRouter()
  return (
    <Card
      key={props.index}
      className="justify-center text-center flex flex-col gap-3 bg-cover duration-300 ease-in-out hover:scale-105"
      onClick={() => router.push(`/animals/${props.animal.id}`)}
    >
      <div
        className="min-h-[250px] rounded-t bg-cover bg-no-repeat bg-center flex flex-col justify-end"
        style={{
          backgroundImage: `url(${
            props.animal?.primary_photo_cropped?.medium
              ? props.animal?.primary_photo_cropped?.medium
              : dogPlaceholder.src
          })`,
        }}
      >
        <p className="w-full bg-white px-3 py-5 rounded-t-[100%] text-xl text-violet-700">
          {props.animal.name.toUpperCase()}
        </p>
      </div>
    </Card>
  )
}

// export const Introduction = () => {
//   return (
//     <SixGrid>
//       <div
//         id="intro-copy"
//         className="text-left flex items-center justify-center flex-col col-span-6 sm:col-span-4"
//       >
//         <p>
//           Welcome to Love Rescues, a compassionate and dedicated dog rescue
//           company that is committed to saving the lives of our furry friends.
//           Our mission is simple: to provide a safe haven for dogs in need, and
//           to find them loving, permanent homes.
//         </p>
//         <br />
//         <p>
//           At Love Rescues, we believe that every dog deserves a second chance.
//           Whether they have been abandoned, neglected, or surrendered, we work
//           tirelessly to rehabilitate and care for these precious animals. Our
//           team of skilled and experienced professionals is passionate about
//           providing the best possible care for our dogs, including medical
//           treatment, behavioral training, and socialization.
//         </p>
//       </div>
//       <div className="flex items-center justify-center col-span-6  sm:col-span-2">
//         <Image src={dogPlaceholder} width={250} height={250} alt="cute doggo" />
//       </div>
//     </SixGrid>
//   )
// }
