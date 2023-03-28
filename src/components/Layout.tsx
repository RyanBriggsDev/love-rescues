import { ReactElement } from 'react'

export default function Layout(props: LayoutProps) {
  return (
    <div
      id="layout"
      className="flex min-h-screen flex-col items-center justify-between  bg-gray-100 font-poppins"
    >
      <nav>nav</nav>
      <PageSpacing>{props.children}</PageSpacing>
      <footer>footer</footer>
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
