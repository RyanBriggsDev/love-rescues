import { ReactElement } from 'react'

export function FullPageGrid(props: GridProps) {
  return <div className="grid grid-cols-1 md:grid-cols-3">{props.children}</div>
}

type GridProps = {
  children: ReactElement
}
