type ReasonsFinaleProps = {
  text: string
}

export function ReasonsFinale({ text }: ReasonsFinaleProps): React.JSX.Element {
  return (
    <p className="relative m-0 max-w-[40em] animate-rise font-display text-lg text-balance text-lavender italic motion-reduce:animate-fade-in">
      {text}
    </p>
  )
}
