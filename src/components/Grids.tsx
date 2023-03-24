export function FullPageGrid(props: GridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 py-3 md:py-6 lg:gap-6 lg:py-9 px-1 md:px-3 w-full">
      {props.children}
    </div>
  )
}

export function SixGrid(props: GridProps) {
  return (
    <div className="grid grid-cols-6 gap-3 md:gap-3 lg:gap-6 w-full">
      {props.children}
    </div>
  )
}

type GridProps = {
  children: any
}
