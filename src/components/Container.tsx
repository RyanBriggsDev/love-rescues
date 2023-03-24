import { ReactElement } from 'react'

export default function Container(props: ContainerProps) {
  return (
    <div
      className={`container 
      ${props.className ? props.className : ''}
      ${props.padding ? props.padding : 'py-3 md:py-6 lg:py-9 px-1 md:px-3'}
        `}
    >
      {props.children}
    </div>
  )
}

type ContainerProps = {
  children: ReactElement
  className?: string
  padding?: string
}
