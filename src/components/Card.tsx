import { ReactElement } from 'react'

export default function Card(props: CardProps) {
  return <div id="card">{props.children}</div>
}

type CardProps = {
  children: ReactElement
}
