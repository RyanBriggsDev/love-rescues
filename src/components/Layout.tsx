import { ReactElement } from 'react'

export default function Layout(props: LayoutProps) {
  return (
    <div
      id="layout"
      className="flex min-h-screen flex-col items-center justify-between px-1 md:px-3"
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
    <div
      id="page-spacing"
      className="flex w-full flex-auto flex-col gap-3 py-3 md:gap-6"
    >
      {props.children}
    </div>
  )
}

type PageSpacingProps = {
  children: ReactElement
}
