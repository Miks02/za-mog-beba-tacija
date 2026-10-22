import { ArrowRight } from 'lucide-react'
import { PillButton } from '@renderer/components/ui/PillButton'

type EnterButtonProps = {
  onEnter: () => void
}

export function EnterButton({ onEnter }: EnterButtonProps): React.JSX.Element {
  return (
    <PillButton
      onClick={onEnter}
      className="min-h-[50px] animate-fade-up px-7 motion-reduce:animate-fade-in"
    >
      <span>Uđi u svoj svet</span>
      <ArrowRight aria-hidden size={18} strokeWidth={2} />
    </PillButton>
  )
}
