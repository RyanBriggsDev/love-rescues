import Container from './Container'
import { useRouter } from 'next/router'

export default function PlanningToAdopt() {
  const router = useRouter()
  return (
    <div className="flex flex-col justify-center items-center bg-white text-center py-3">
      <Container className="flex flex-col justify-center items-center gap-3 md:gap-6">
        <h3 className="text-2xl">Planning to Adopt a Pet?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 w-full justify-center items-center gap-6">
          <div className="flex flex-col justify-center items-center gap-4">
            <h4 className="text-xl text-blue-800">
              Checklist for New Adopters
            </h4>
            <p className="text-sm text-gray-500">
              Help make the transition, as smooth as possible.
            </p>
            <button
              className="py-2 px-4 border text-blue-800 hover:bg-blue-800 hover:text-white ease-in-out duration-300 border-blue-800 rounded-2xl"
              onClick={() => router.push('/coming-soon')}
            >
              LEARN MORE
            </button>
          </div>
          <hr className="md:hidden" />
          <div className="flex flex-col justify-center items-center gap-4">
            <h4 className="text-xl text-blue-800">COVID-19 Resources</h4>
            <p className="text-sm text-gray-500">
              Get the latest on adoption processes, learn how local shelters and
              rescue groups are adapting and find out what you can do to help
              dogs and cats in need right now.
            </p>
            <button
              className="py-2 px-4 border text-blue-800 hover:bg-blue-800 hover:text-white ease-in-out duration-300 border-blue-800 rounded-2xl"
              onClick={() => router.push('/coming-soon')}
            >
              LEARN MORE
            </button>
          </div>
          <hr className="md:hidden" />
          <div className="flex flex-col justify-center items-center gap-4">
            <h4 className="text-xl text-blue-800">Pet Adoption FAQs</h4>
            <p className="text-sm text-gray-500">
              {`Get answers to questions you haven't thought of.`}
            </p>
            <button
              className="py-2 px-4 border text-blue-800 hover:bg-blue-800 hover:text-white ease-in-out duration-300 border-blue-800 rounded-2xl"
              onClick={() => router.push('/coming-soon')}
            >
              LEARN MORE
            </button>
          </div>
        </div>
      </Container>
    </div>
  )
}
