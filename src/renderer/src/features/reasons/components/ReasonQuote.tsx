type ReasonQuoteProps = {
  id: string
  text: string
}

export function ReasonQuote({ id, text }: ReasonQuoteProps): React.JSX.Element {
  return (
    <div className="relative grid min-h-[3.6em] place-items-center text-[clamp(32px,4vw,60px)]">
      <p
        key={id}
        aria-live="polite"
        className="m-0 max-w-[15em] animate-reasons-swap font-display text-[1em] leading-[1.2] font-light text-balance text-haze italic motion-reduce:animate-fade-in"
      >
        {text}
      </p>
    </div>
  )
}
