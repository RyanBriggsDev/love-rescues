import { SixGrid } from './Grids'
import Image from 'next/image'
import dogPlaceholder from '../assets/images/dogPlaceholder.jpg'

export const Introduction = () => {
  return (
    <SixGrid>
      <div
        id="intro-copy"
        className="text-left flex items-center justify-center flex-col col-span-6 sm:col-span-4"
      >
        <p>
          Welcome to Love Rescues, a compassionate and dedicated dog rescue
          company that is committed to saving the lives of our furry friends.
          Our mission is simple: to provide a safe haven for dogs in need, and
          to find them loving, permanent homes.
        </p>
        <br />
        <p>
          At Love Rescues, we believe that every dog deserves a second chance.
          Whether they have been abandoned, neglected, or surrendered, we work
          tirelessly to rehabilitate and care for these precious animals. Our
          team of skilled and experienced professionals is passionate about
          providing the best possible care for our dogs, including medical
          treatment, behavioral training, and socialization.
        </p>
      </div>
      <div className="flex items-center justify-center col-span-6  sm:col-span-2">
        <Image src={dogPlaceholder} width={250} height={250} alt="cute doggo" />
      </div>
    </SixGrid>
  )
}
