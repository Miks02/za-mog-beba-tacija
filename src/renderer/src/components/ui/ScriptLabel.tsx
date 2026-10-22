type ScriptLabelProps = {
  text: string
}

export function ScriptLabel({ text }: ScriptLabelProps): React.JSX.Element {
  return <span className="font-script text-[30px] leading-none text-lavender">{text}</span>
}
