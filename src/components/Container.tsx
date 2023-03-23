import { ReactElement } from 'react'

export default function Container(props: ContainerProps) {
  return (
    <div className={`container ${props.className ? props.className : ''}`}>
      {props.children}
    </div>
  )
}

type ContainerProps = {
  children: ReactElement
  className: string
}
