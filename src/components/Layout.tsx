import { ReactElement } from 'react'
import Footer from '../components/Footer'
import Nav from './Nav'

export default function Layout(props: LayoutProps) {
  return (
    <div
      id="layout"
      className="flex min-h-screen flex-col items-center justify-between  bg-gray-100 font-poppins"
    >
      <Nav />
      <PageSpacing>{props.children}</PageSpacing>
      <Footer />
    </div>
  )
}

type LayoutProps = {
  children: ReactElement
}

function PageSpacing(props: PageSpacingProps) {
  return (
    <div id="page-spacing" className="flex w-full flex-auto flex-col gap-9">
      {props.children}
    </div>
  )
}

type PageSpacingProps = {
  children: ReactElement
}
