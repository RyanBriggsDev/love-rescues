export default function Card(props: CardProps) {
  return (
    <div
      id="card"
      className={`w-full rounded shadow 
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
  onClick?: () => void
}
