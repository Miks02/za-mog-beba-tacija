import type { PlantSpec } from './types'

export const gardenPlants = [
  {
    id: 'left-tulip-small',
    x: 50,
    swayDelayS: -1,
    stem: { d: 'M0 0 C10 -56 -10 -112 6 -160', tone: 'stem', width: 2.5, delayS: 1.1 },
    leaves: [],
    head: {
      kind: 'tulip',
      transform: 'translate(6 -160) scale(0.75)',
      color: 'orchid',
      delayS: 2.6,
      highlightOpacity: 0.3
    }
  },
  {
    id: 'left-daisy-lilac',
    x: 110,
    swayDelayS: -2.5,
    stem: { d: 'M0 0 C10 -88 -10 -175 -8 -250', tone: 'stem', width: 3, delayS: 0.2 },
    leaves: [{ id: 'a', transform: 'translate(2 -110) rotate(-25)', tone: 'leaf', delayS: 1 }],
    head: {
      kind: 'daisy',
      transform: 'translate(-8 -250)',
      color: 'lilac',
      delayS: 1.6,
      petalRx: 7,
      petalRy: 17,
      centerRadius: 7
    }
  },
  {
    id: 'left-tulip-tall',
    x: 190,
    swayDelayS: -0.5,
    stem: { d: 'M0 0 C10 -116 -10 -231 10 -330', tone: 'stem', width: 3, delayS: 0.45 },
    leaves: [
      { id: 'a', transform: 'translate(3 -140) rotate(-30)', tone: 'leaf', delayS: 1.2 },
      {
        id: 'b',
        transform: 'translate(-2 -200) scale(-1 1) rotate(-25)',
        tone: 'leaf-light',
        delayS: 1.35
      }
    ],
    head: {
      kind: 'tulip',
      transform: 'translate(10 -330)',
      color: 'amethyst',
      delayS: 1.95,
      highlightOpacity: 0.28
    }
  },
  {
    id: 'left-daisy-small',
    x: 270,
    swayDelayS: -3.2,
    stem: { d: 'M0 0 C10 -72 -10 -144 6 -205', tone: 'stem', width: 2.5, delayS: 0.7 },
    leaves: [
      { id: 'a', transform: 'translate(-1 -90) scale(-1 1) rotate(-25)', tone: 'leaf', delayS: 1.4 }
    ],
    head: {
      kind: 'daisy',
      transform: 'translate(6 -205)',
      color: 'orchid',
      delayS: 2.2,
      petalRx: 6,
      petalRy: 14,
      centerRadius: 5.5
    }
  },
  {
    id: 'left-daisy-large',
    x: 355,
    swayDelayS: -4,
    stem: { d: 'M0 0 C10 -102 -10 -203 -12 -290', tone: 'stem', width: 3, delayS: 0.9 },
    leaves: [
      { id: 'a', transform: 'translate(2 -120) rotate(-25)', tone: 'leaf', delayS: 1.6 },
      {
        id: 'b',
        transform: 'translate(-4 -180) scale(-1 1) rotate(-20)',
        tone: 'leaf-light',
        delayS: 1.75
      }
    ],
    head: {
      kind: 'daisy',
      transform: 'translate(-12 -290)',
      color: 'haze',
      delayS: 2.4,
      petalRx: 9.5,
      petalRy: 22,
      centerRadius: 9
    }
  },
  {
    id: 'sprig-1',
    x: 480,
    swayDelayS: -1.7,
    stem: { d: 'M0 0 C4 -20 -4 -40 3 -62', tone: 'grass', width: 2, delayS: 1.3 },
    leaves: [],
    head: { kind: 'sprig', transform: 'translate(3 -62)', color: 'lilac', delayS: 2.5, radius: 4.5 }
  },
  {
    id: 'sprig-2',
    x: 575,
    swayDelayS: -2.9,
    stem: { d: 'M0 0 C-4 -26 4 -52 -3 -84', tone: 'grass', width: 2, delayS: 1.5 },
    leaves: [],
    head: { kind: 'sprig', transform: 'translate(-3 -84)', color: 'orchid', delayS: 2.7, radius: 5 }
  },
  {
    id: 'sprig-3',
    x: 870,
    swayDelayS: -0.8,
    stem: { d: 'M0 0 C4 -24 -4 -48 4 -74', tone: 'grass', width: 2, delayS: 1.4 },
    leaves: [],
    head: {
      kind: 'sprig',
      transform: 'translate(4 -74)',
      color: 'orchid',
      delayS: 2.6,
      radius: 4.5
    }
  },
  {
    id: 'sprig-4',
    x: 965,
    swayDelayS: -3.6,
    stem: { d: 'M0 0 C-4 -18 4 -36 -2 -56', tone: 'grass', width: 2, delayS: 1.6 },
    leaves: [],
    head: { kind: 'sprig', transform: 'translate(-2 -56)', color: 'lilac', delayS: 2.8, radius: 4 }
  },
  {
    id: 'right-daisy-amethyst',
    x: 1085,
    swayDelayS: -2.2,
    stem: { d: 'M0 0 C-10 -100 10 -200 12 -285', tone: 'stem', width: 3, delayS: 1 },
    leaves: [
      {
        id: 'a',
        transform: 'translate(-2 -120) scale(-1 1) rotate(-25)',
        tone: 'leaf',
        delayS: 1.7
      }
    ],
    head: {
      kind: 'daisy',
      transform: 'translate(12 -285)',
      color: 'amethyst',
      delayS: 2.5,
      petalRx: 7,
      petalRy: 16,
      centerRadius: 6.5
    }
  },
  {
    id: 'right-tulip',
    x: 1170,
    swayDelayS: -4.4,
    stem: { d: 'M0 0 C-10 -75 10 -150 -6 -215', tone: 'stem', width: 2.5, delayS: 0.8 },
    leaves: [
      { id: 'a', transform: 'translate(1 -95) rotate(-25)', tone: 'leaf-light', delayS: 1.5 }
    ],
    head: {
      kind: 'tulip',
      transform: 'translate(-6 -215)',
      color: 'orchid',
      delayS: 2.3,
      highlightOpacity: 0.3
    }
  },
  {
    id: 'right-daisy-large',
    x: 1250,
    swayDelayS: -1.2,
    stem: { d: 'M0 0 C-10 -117 10 -235 -10 -335', tone: 'stem', width: 3, delayS: 0.55 },
    leaves: [
      {
        id: 'a',
        transform: 'translate(-3 -140) scale(-1 1) rotate(-28)',
        tone: 'leaf',
        delayS: 1.3
      },
      { id: 'b', transform: 'translate(2 -210) rotate(-22)', tone: 'leaf-light', delayS: 1.45 }
    ],
    head: {
      kind: 'daisy',
      transform: 'translate(-10 -335)',
      color: 'lilac',
      delayS: 2.05,
      petalRx: 9.5,
      petalRy: 22,
      centerRadius: 9
    }
  },
  {
    id: 'right-daisy-orchid',
    x: 1330,
    swayDelayS: -3,
    stem: { d: 'M0 0 C-10 -89 10 -179 8 -255', tone: 'stem', width: 3, delayS: 0.3 },
    leaves: [
      {
        id: 'a',
        transform: 'translate(-2 -110) scale(-1 1) rotate(-25)',
        tone: 'leaf',
        delayS: 1.1
      }
    ],
    head: {
      kind: 'daisy',
      transform: 'translate(8 -255)',
      color: 'orchid',
      delayS: 1.75,
      petalRx: 7,
      petalRy: 17,
      centerRadius: 7
    }
  },
  {
    id: 'right-tulip-small',
    x: 1395,
    swayDelayS: -0.3,
    stem: { d: 'M0 0 C-10 -58 10 -115 -6 -165', tone: 'stem', width: 2.5, delayS: 1.2 },
    leaves: [],
    head: {
      kind: 'tulip',
      transform: 'translate(-6 -165) scale(0.75)',
      color: 'lilac',
      delayS: 2.7,
      highlightOpacity: 0.3
    }
  }
] as const satisfies ReadonlyArray<PlantSpec>
