export default function Card(props: CardProps) {
  return (
    <div
      id="card"
      className={`w-full mh-[250px] bg-white rounded shadow ${
        props.className ? props.className : ''
      }`}
      style={props.style}
    >
      {props.children}
    </div>
  )
}

type CardProps = {
  children: any
  style?: any
  className?: string
}
