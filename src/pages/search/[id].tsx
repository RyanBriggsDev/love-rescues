import { useRouter } from 'next/router'
import { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../_app'
import { ReactElement } from 'react'
import { NineGrid } from '@/components/Grids'
import Container from '@/components/Container'
import Card from '@/components/Card'
import dogPlaceholder from '../../assets/images/dogPlaceholder.jpg'
import { LoadingSingleDogCard } from '@/components/Loading'
import Button from '@/components/Button'

export default function Search() {
  const router = useRouter()
  const initialState = {
    breed: '',
    age: '',
    size: '',
    gender: '',
    coat: '',
    color: '',
  }
  const [results, setResults] = useState<any>()
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [filterOptions, setFilterOptions] = useState(initialState)
  const accessToken = useContext(AuthContext)

  useEffect(() => {
    setLoading(true)
    const last = window.location.href.split('/').pop()
    if (last) {
      const words = last.toString().split('+')

      if (accessToken === null) return
      // Hacky approach to getting the homepage search to work. I don't like it.
      if (!words) window.location.reload()
      const fetchData = async () => {
        try {
          // prettier-ignore
          const res = await fetch(
            `https://api.petfinder.com/v2/animals?type=${words[0]}${words[1] ? `&location=${words[1]}` : ''}${filterOptions.breed !== '' ? `&breed=${filterOptions.breed}` : ''}${filterOptions.age !== '' ? `&age=${filterOptions.age}` : ''}${filterOptions.size !== '' ? `&size=${filterOptions.size}` : ''}${filterOptions.gender !== '' ? `&gender=${filterOptions.gender}` : ''}${filterOptions.coat !== '' ? `&coat=${filterOptions.coat}` : ''}${filterOptions.color !== '' ? `&color=${filterOptions.color.toLowerCase()}` : ''}${`&page=${page}`}`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          )
          const json = await res.json()
          if (json) {
            // console.log(json)
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
  }, [accessToken, filterOptions, page])

  return (
    <div className="flex items-center justify-center">
      <Container>
        <NineGrid>
          <FilterBar
            filterOptions={filterOptions}
            setFilterOptions={setFilterOptions}
            initialState={initialState}
          />
          <MainContent loading={loading} results={results} setPage={setPage} />
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
    <div className="col-span-9 md:col-span-7 grid-rows-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {console.log(props.results)}
      {props.loading ? (
        loadingElements
      ) : props.results.animals.length === 0 ? (
        <div className="flex items-center col-span-3 justify-center py-12 text-center font-bold">
          <p>{`Oh no! We've got no animals matching your search results.`}</p>
        </div>
      ) : (
        props.results?.animals.map((animal: any, index: number) => (
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
        ))
      )}
      {props.results && (
        <Paginator results={props.results} setPage={props.setPage} />
      )}
    </div>
  )
}

function Paginator(props: PaginatorProps) {
  return (
    <div className="col-span-1 sm:col-span-2 lg:col-span-3 xl:col-span-4 flex items-center justify-center gap-3">
      {props.results.pagination.current_page > 1 && (
        <Card
          className="px-6 py-3"
          width="w-fit"
          onClick={() =>
            props.setPage(props.results.pagination.current_page - 1)
          }
        >
          Previous
        </Card>
      )}
      <Card className="px-6 py-3" width="w-fit">
        <p>{`Page ${props.results.pagination.current_page} of ${props.results.pagination.total_pages}`}</p>
      </Card>
      {props.results.pagination.current_page <
        props.results.pagination.total_pages && (
        <Card
          className="px-6 py-3"
          width="w-fit"
          onClick={() =>
            props.setPage(props.results.pagination.current_page + 1)
          }
        >
          Next
        </Card>
      )}
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
const breedOptions = [
  'Akita',
  'American Bulldog',
  'American Foxhound',
  'Beagle',
  'Border Collie',
  'German Shepherd Dog',
  'Labrador Retriever',
]
const ageOptions = ['Baby', 'Young', 'Adult', 'Senior']
const sizeOptions = ['Small', 'Medium', 'Large', 'xlarge']
const genderOptions = ['Male', 'Female']
const coatOptions = ['Hairless', 'Short', 'Medium', 'Long', 'Wire', 'Curly']
const colorOptions = [
  'Apricot / Beige',
  'Bicolor',
  'Black',
  'Brindle',
  'Brown / Chocolate',
  'Golden',
  'Gray / Blue / Silver',
  'Harlequin',
  'Merle (Blue)',
  'Merle (Red)',
  'Red / Chestnut / Orange',
  'Sable',
  'White / Cream',
  'Yellow / Tan / Blond / Fawn',
]

function FilterBar(props: FilterOptionsProps) {
  return (
    <aside className="col-span-9 md:col-span-2 gap-6 flex flex-col">
      <h3 className="text-xl text-center">Filter Results</h3>
      <FilterOption
        options={breedOptions}
        setFilterOptions={props.setFilterOptions}
        filterOptions={props.filterOptions}
        label="breed"
      />
      <FilterOption
        options={ageOptions}
        label="age"
        setFilterOptions={props.setFilterOptions}
        filterOptions={props.filterOptions}
      />
      <FilterOption
        options={sizeOptions}
        label="size"
        setFilterOptions={props.setFilterOptions}
        filterOptions={props.filterOptions}
      />
      <FilterOption
        options={genderOptions}
        label="gender"
        setFilterOptions={props.setFilterOptions}
        filterOptions={props.filterOptions}
      />
      <FilterOption
        options={coatOptions}
        label="coat"
        setFilterOptions={props.setFilterOptions}
        filterOptions={props.filterOptions}
      />
      <FilterOption
        options={colorOptions}
        label="color"
        setFilterOptions={props.setFilterOptions}
        filterOptions={props.filterOptions}
      />
      <Button
        bg="bg-violet-700 hover:bg-violet-900"
        className="text-white"
        onClick={() => props.setFilterOptions(props.initialState)}
      >
        Reset
      </Button>
    </aside>
  )
}

function FilterOption(props: FilterProps) {
  const onChangeHandler = (e: any) => {
    props.setFilterOptions({
      ...props.filterOptions,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="flex flex-col justify-center gap-1">
      <label className="text-center font-bold">
        {props.label.toUpperCase()}
      </label>
      <Card className="text-center text-sm selectdiv">
        <select
          className="w-full p-3 rounded"
          defaultValue="Any"
          name={props.label}
          onChange={(e) => onChangeHandler(e)}
        >
          {props.options.map((breed: string, index: number) => (
            <option key={index} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </Card>
    </div>
  )
}

type FilterOptionsProps = {
  setFilterOptions: any
  filterOptions: any
  initialState: any
}

type FilterProps = {
  label: string
  options: string[]
  setFilterOptions: any
  filterOptions: any
}

type MainContentProps = {
  results: any
  loading: boolean
  setPage: any
}

type AnimalCardProps = {
  children: ReactElement
  bgImg?: string
  route?: 'string'
}

type PaginatorProps = {
  results: any
  setPage: any
}
