export default function Button(props: ButtonProps) {
  return (
    <button
      className={`${props.bg ? props.bg : 'bg-white'} ${
        props.color ? props.color : 'text-black'
      } ${
        props.className ? props.className : ''
      } rounded-2xl py-2 px-3 duration-300 ease-in-out`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

type ButtonProps = {
  children: string
  bg?: string
  color?: string
  className?: string
  onClick: () => void
}
