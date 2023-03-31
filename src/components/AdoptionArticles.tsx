import Container from './Container'
import Card from './Card'
import dog from '../assets/images/dog.jpg'
import cat from '../assets/images/cat.jpg'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function AdoptionArticles() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Container className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <DogArticleCard />
        <CatArticleCard />
      </Container>
    </div>
  )
}

export function DogArticleCard() {
  const router = useRouter()
  return (
    <Card className="flex flex-col relative gap-10">
      <Image
        className="rounded-t"
        src={dog}
        alt="image of golden labrador wearing glasses"
      />
      <div className="text-center py-6 px-1 rounded-t-[3rem] bg-white absolute w-full bottom-12">
        <div className="absolute w-full bg-transparent -top-10 flex justify-center items-center">
          <div
            style={{ backgroundImage: `url(${dog.src})` }}
            className="w-16 h-16 bg-cover bg-no-repeat border-2 border-white rounded-[50%]"
          />
        </div>
        <h3 className="text-lg">Dog Adoption Articles</h3>
        <p className="text-sm text-gray-500">
          Learn more about caring for your new dog.
        </p>
      </div>
      <button
        className="text-white bg-violet-700 p-3 w-full hover:bg-violet-900 rounded-b duration-300 ease-in-out"
        onClick={() => router.push('/coming-soon')}
      >
        READ MORE
      </button>
    </Card>
  )
}

export function CatArticleCard() {
  const router = useRouter()
  return (
    <Card className="flex flex-col relative gap-10">
      <Image
        className="rounded-t"
        src={cat}
        alt="picture of kitten laying down with yellow background"
      />
      <div className="text-center py-6 px-1 rounded-t-[3rem] bg-white absolute w-full bottom-12">
        <div className="absolute w-full bg-transparent -top-10 flex justify-center items-center">
          <div
            style={{ backgroundImage: `url(${cat.src})` }}
            className="w-16 h-16 bg-cover bg-center bg-no-repeat border-2 border-white rounded-[50%]"
          />
        </div>

        <h3 className="text-lg">Cat Adoption Articles</h3>
        <p className="text-sm text-gray-500">
          Helpful insights on what to expect.
        </p>
      </div>
      <button
        className="text-white bg-violet-700 p-3 w-full hover:bg-violet-900 rounded-b duration-300 ease-in-out"
        onClick={() => router.push('/coming-soon')}
      >
        READ MORE
      </button>
    </Card>
  )
}
