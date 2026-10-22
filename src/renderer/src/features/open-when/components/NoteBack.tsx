type NoteBackProps = {
  label: string
  message: string
  signature: string
}

export function NoteBack({ label, message, signature }: NoteBackProps): React.JSX.Element {
  return (
    <div className="open-when-face open-when-back absolute inset-0 flex flex-col gap-2.5 overflow-hidden rounded-[20px] bg-paper px-6 py-[22px] shadow-open-when-card">
      <span className="text-[11px] font-bold tracking-[0.18em] text-ink-label uppercase">
        kad {label}
      </span>
      <span className="flex-1 font-display text-[19px] leading-[1.45] text-pretty text-ink italic">
        {message}
      </span>
      <span className="self-end font-script text-[30px] leading-none text-ink-soft">
        {signature}
      </span>
    </div>
  )
}
