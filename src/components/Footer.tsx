import Container from './Container'
import { SixGrid } from './Grids'
import Link from 'next/link'
import Card from './Card'
import Button from './Button'

export default function Footer() {
  return (
    <footer className="bg-violet-700 flex items-center justify-center w-full text-white">
      <Container>
        <SixGrid>
          <FooterLinks />
          <SignUpButton />
        </SixGrid>
      </Container>
    </footer>
  )
}

function FooterLinks() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 col-span-6 md:col-span-5 sm:justify-around">
      <FooterLinksCol data={resourcesLinks[0]} />
      <FooterLinksCol data={adoptLinks[0]} />
      <FooterLinksCol data={aboutDogsLinks[0]} />
      <FooterLinksCol data={aboutCatsLinks[0]} />
    </div>
  )
}

function FooterLinksCol(props: any) {
  return (
    <div className="flex flex-col gap-1 justify items-center sm:items-start">
      <h3 className="text-md">{props.data.title.toUpperCase()}</h3>
      {props.data.items.map((item: any, index: number) => (
        <Link
          className="text-xs hover:text-violet-300 hover:scale-105 hover:underline ease-in-out duration-300"
          href={`/${item.link}`}
        >
          {item.text}
        </Link>
      ))}
    </div>
  )
}

function SignUpButton() {
  return (
    <Card className="p-3 flex flex-col gap-3 justify-center items-center  col-span-6 md:col-span-1">
      <p className="text-black text-xs text-center">
        To get the lastest on pet adoption and pet care, sign up for the
        Petfinder newsletter.
      </p>
      <Button
        bg="bg-violet-700 hover:bg-violet-900"
        className="text-white w-full duration-300 ease-in-out"
        onClick={() => alert("We're still working on this feature")}
      >
        Sign Up
      </Button>
    </Card>
  )
}

const resourcesLinks = [
  {
    title: 'Resources',
    items: [
      { text: 'FAQs', link: 'coming-soon' },
      { text: 'Mobile App Download', link: 'coming-soon' },
      { text: 'Partnerships', link: 'coming-soon' },
      { text: 'News Center', link: 'coming-soon' },
      { text: 'Put Petfinder On Your Site', link: 'coming-soon' },
      { text: 'For Developers', link: 'coming-soon' },
      { text: 'Contact Us', link: 'coming-soon' },
    ],
  },
]

const adoptLinks = [
  {
    title: 'All Adopt or Get Involved',
    items: [
      { text: 'All Adopt or Get Involved', link: 'coming-soon' },
      { text: 'Adopting Pets', link: 'coming-soon' },
      { text: 'Animal Shelters & Rescues', link: 'coming-soon' },
      { text: 'Other Types of Pets', link: 'coming-soon' },
    ],
  },
]

const aboutDogsLinks = [
  {
    title: 'ABOUT DOGS & PUPPIES',
    items: [
      { text: 'All About Dogs & Puppies', link: 'coming-soon' },
      { text: 'Dog Adoption', link: 'coming-soon' },
      { text: 'Dog Breeds', link: 'coming-soon' },
      { text: 'Feeding Your Dog', link: 'coming-soon' },
      { text: 'Dog Behavior', link: 'coming-soon' },
      { text: 'Dog Health & Wellness', link: 'coming-soon' },
      { text: 'Dog Training', link: 'coming-soon' },
      { text: 'Other Dog Information', link: 'coming-soon' },
    ],
  },
]

const aboutCatsLinks = [
  {
    title: 'ABOUT CATS & KITTENS',
    items: [
      { text: 'All About Cats & Kittens', link: 'coming-soon' },
      { text: 'Cat Adoption', link: 'coming-soon' },
      { text: 'Cat Breeds', link: 'coming-soon' },
      { text: 'Feeding Your Cat', link: 'coming-soon' },
      { text: 'Cat Behavior', link: 'coming-soon' },
      { text: 'Cat Health & Wellness', link: 'coming-soon' },
      { text: 'Cat Training', link: 'coming-soon' },
      { text: 'Other Cat Information', link: 'coming-soon' },
    ],
  },
]
