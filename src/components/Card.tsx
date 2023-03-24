import { ReactElement } from 'react'

export default function Card(props: CardProps) {
  return (
    <div
      id="card"
      className={`w-full h-[250px] bg-white rounded ${
        props.className ? props.className : ''
      }`}
      style={props.style}
    >
      {props.children}
    </div>
  )
}

type CardProps = {
  children: ReactElement
  style: any
  className: string
}
