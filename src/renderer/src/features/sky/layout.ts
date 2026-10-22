export const CONSTELLATION_OUTLINE =
  'M300 150 L240 92 L165 92 L115 150 L118 225 L170 300 L235 365 L300 425 L365 365 L430 300 L482 225 L485 150 L435 92 L360 92'

export const constellationStars = [
  { id: 's1', cx: 300, cy: 150, r: 5, delayS: 1 },
  { id: 's2', cx: 240, cy: 92, r: 3.5, delayS: 1.3 },
  { id: 's3', cx: 165, cy: 92, r: 4.5, delayS: 1.6 },
  { id: 's4', cx: 115, cy: 150, r: 3.5, delayS: 1.9 },
  { id: 's5', cx: 118, cy: 225, r: 4, delayS: 2.2 },
  { id: 's6', cx: 170, cy: 300, r: 3.5, delayS: 2.5 },
  { id: 's7', cx: 235, cy: 365, r: 4, delayS: 2.85 },
  { id: 's8', cx: 300, cy: 425, r: 6, delayS: 3.2, isHoney: true },
  { id: 's9', cx: 365, cy: 365, r: 4, delayS: 3.55 },
  { id: 's10', cx: 430, cy: 300, r: 3.5, delayS: 3.9 },
  { id: 's11', cx: 482, cy: 225, r: 4, delayS: 4.2 },
  { id: 's12', cx: 485, cy: 150, r: 3.5, delayS: 4.5 },
  { id: 's13', cx: 435, cy: 92, r: 4.5, delayS: 4.8 },
  { id: 's14', cx: 360, cy: 92, r: 3.5, delayS: 5.1 }
] as const

export const shootingStars = [
  { id: 'a', topPct: 8, leftPct: 6, durationS: 9, delayS: 2 },
  { id: 'b', topPct: 4, leftPct: 48, durationS: 13, delayS: 6 },
  { id: 'c', topPct: 22, leftPct: 22, durationS: 11, delayS: 9.5 }
] as const
