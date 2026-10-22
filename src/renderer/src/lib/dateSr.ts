const WEEKDAYS = ['nedelja', 'ponedeljak', 'utorak', 'sreda', 'četvrtak', 'petak', 'subota']

const MONTHS = [
  'januar',
  'februar',
  'mart',
  'april',
  'maj',
  'jun',
  'jul',
  'avgust',
  'septembar',
  'oktobar',
  'novembar',
  'decembar'
]

const MONTHS_GENITIVE = [
  'januara',
  'februara',
  'marta',
  'aprila',
  'maja',
  'juna',
  'jula',
  'avgusta',
  'septembra',
  'oktobra',
  'novembra',
  'decembra'
]

const LOCAL_DATE_TIME = /^(\d{4})-(\d{1,2})-(\d{1,2})(?:[T ](\d{1,2}):(\d{2}))?$/

export function pad2(value: number): string {
  return String(value).padStart(2, '0')
}

export function parseLocalDateTime(value: string): Date {
  const match = LOCAL_DATE_TIME.exec(value.trim())
  if (!match) throw new Error(`Invalid local date time: ${value}`)
  const [, year, month, day, hours = '0', minutes = '0'] = match
  return new Date(Number(year), Number(month) - 1, Number(day), Number(hours), Number(minutes))
}

export function formatClock(date: Date): string {
  return `${pad2(date.getHours())}:${pad2(date.getMinutes())}`
}

export function formatWeekdayDate(date: Date): string {
  return `${WEEKDAYS[date.getDay()]}, ${date.getDate()}. ${MONTHS[date.getMonth()]}`
}

export function formatDayMonthGenitive(date: Date): string {
  return `${date.getDate()}. ${MONTHS_GENITIVE[date.getMonth()]}`
}

export function formatSinceLabel(date: Date): string {
  return `${formatDayMonthGenitive(date)} ${date.getFullYear()}. u ${formatClock(date)}`
}

export function formatDottedDate(date: Date): string {
  return `${date.getDate()} · ${date.getMonth() + 1} · ${date.getFullYear()}`
}
