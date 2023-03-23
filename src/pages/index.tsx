// @ts-nocheck
import { useEffect, useState, useContext } from 'react'
import { AuthContext } from './_app'
import Image from 'next/image'
import dogPlaceholder from '../assets/images/dogPlaceholder.jpg'
import { FullPageGrid } from '@/components/Grids'
import Container from '@/components/Container'

export default function Index() {
  const [results, setResults] = useState<any>()
  const [loading, setLoading] = useState(true)
  const accessToken = useContext(AuthContext)
  //   useEffect(() => {
  //     if (accessToken === null) return
  //     const fetchData = async () => {
  //       const res = await fetch('https://api.petfinder.com/v2/animals?type=dog', {
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //       })
  //       const json = await res.json()
  //       console.log(json)
  //       if (json.animals) {
  //         setLoading(false)
  //         setResults(json)
  //       }
  //     }
  //     fetchData()
  //   }, [accessToken])

  //   if (loading) return <h1 className="text-red-500">Loading...</h1>

  //   if (!loading && results.animals)
  //     return (
  //       <FullPageGrid>
  //         {results.animals.map((animal: any, index: number) => (
  //           <div key={index}>
  //             {
  //               <Image
  //                 src={
  //                   animal.photos[0] ? animal.photos[0].medium : dogPlaceholder
  //                 }
  //                 width={250}
  //                 height={250}
  //                 alt={`A picture of a ${
  //                   animal.breeds ? animal.breeds.primary : 'dog'
  //                 } called ${animal.name ? animal.name : 'Doug'}`}
  //               />
  //             }
  //             <h3>
  //               {animal.name} is a {animal.breeds.primary}
  //             </h3>
  //           </div>
  //         ))}
  //       </FullPageGrid>
  //     )
  // }

  return (
    <>
      <div className="flex items-center justify-center">
        <Container className="text-center">
          <h1>Love Rescues</h1>
          <p>Finding the most deserving dogs their forever home.</p>
        </Container>
      </div>
      <div className="flex items-center justify-center">
        <Container className="text-center">
          <h1>Love Rescues</h1>
          <p>Finding the most deserving dogs their forever home.</p>
        </Container>
      </div>
      <div className="flex items-center justify-center">
        <Container className="text-center">
          <h1>Love Rescues</h1>
          <p>Finding the most deserving dogs their forever home.</p>
        </Container>
      </div>
    </>
  )
}
