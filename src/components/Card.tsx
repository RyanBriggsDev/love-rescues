export default function Card(props: CardProps) {
  return (
    <div
      id="card"
      className={`rounded shadow 
      ${props.width ? props.width : 'w-full'}
      ${props.className ? props.className : ''}
      ${props.bg ? props.bg : 'bg-white'}
      ${props.onClick ? 'cursor-pointer' : ''}
      `}
      style={props.style}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  )
}

type CardProps = {
  children: any
  style?: any
  className?: string
  bg?: string
  width?: string
  onClick?: () => void
}
