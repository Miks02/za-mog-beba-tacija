import { PRESSED_FLOWER_PETAL_ANGLES } from '../layout'

export function PressedFlower(): React.JSX.Element {
  return (
    <svg aria-hidden viewBox="-30 -30 60 60" className="absolute top-6 right-7 size-16 opacity-55">
      <g className="fill-lilac">
        {PRESSED_FLOWER_PETAL_ANGLES.map((angle) => (
          <ellipse
            key={angle}
            cx={0}
            cy={-14}
            rx={6}
            ry={14}
            transform={angle === 0 ? undefined : `rotate(${angle})`}
          />
        ))}
      </g>
      <circle r={5} className="fill-orchid" />
    </svg>
  )
}
