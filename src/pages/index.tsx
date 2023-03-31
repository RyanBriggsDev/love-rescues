// @ts-nocheck
import { useEffect, useState, useContext } from 'react'
import { AuthContext } from './_app'
import { HeroSection, HomeAllPets } from '@/components/Home'
import { useRouter } from 'next/router'

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
      console.log(json)
      if (json.animals) {
        setLoading(false)
        setResults(json)
      }
    }
    fetchData()
  }, [accessToken])

  if (loading) return <h1 className="text-red-500">Loading...</h1>

  if (!loading && results.animals) {
    return (
      <>
        <HeroSection />
        <HomeAllPets data={results} />
      </>
    )
  }
}

//     return (
//       <>
//         <div className="flex items-center justify-center bg-blue-300 py-28">
//           <Container className="text-center py-6">
//             <div className="flex flex-col gap-1 md:gap-3">
//               <h1 className="goodpaw text-7xl md:text-9xl lg:text-[150px]">
//                 Love Rescues
//               </h1>
//               <p className="text-2xl">
//                 Finding the most deserving dogs their forever home.
//               </p>
//             </div>
//           </Container>
//         </div>
//         <div className="flex items-center justify-center">
//           <Container className="text-center py-6">
//             <Introduction />
//           </Container>
//         </div>

//         <div className="flex flex-col items-center justify-center bg-white">
//           <SearchFilter />
//           <FullPageGrid>
//             {results.animals.map((animal: any, index: number) => {
//               return (
//                 <Card key={index} className="text-white rounded min-h-[250px]">
//                   <div
//                     className="w-full h-full bg-cover bg-no-repeat bg-center rounded"
//                     style={{
//                       backgroundImage: `url(${
//                         animal.photos[0]
//                           ? animal.photos[0].medium
//                           : dogPlaceholder.src
//                       })`,
//                     }}
//                   >
//                     <div
//                       id="semi-transparent-overlay"
//                       className="w-full h-full p-3 flex flex-col justify-end rounded bg-black/20 hover:bg-black/40 duration-500 ease-in-out cursor-pointer hover:scale-105"
//                       onClick={() => router.push(`/animals/${animal.id}`)}
//                     >
//                       <h3
//                         className={`${
//                           animal.gender === 'Male'
//                             ? 'bg-blue-900'
//                             : 'bg-pink-700'
//                         } rounded py-1 px-3 text-center`}
//                       >
//                         {animal.name}
//                       </h3>
//                     </div>
//                   </div>
//                 </Card>
//               )
//             })}
//           </FullPageGrid>
//         </div>
//       </>
//     )
// }
