export function greetingForHour(hour: number): string {
  if (hour < 5) return 'Laku noć'
  if (hour < 12) return 'Dobro jutro'
  if (hour < 18) return 'Dobar dan'
  if (hour < 22) return 'Dobro veče'
  return 'Laku noć'
}
