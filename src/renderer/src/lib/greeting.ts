export function greetingForHour(hour: number): string {
  if (hour < 5) return 'Laku noć srećo, lepo spavajjj ! <3'
  if (hour < 12) return 'Dobro jutro ljubaviii!'
  if (hour < 18) return 'Evo mi ga srećounnzttt!'
  if (hour < 22) return 'Moj život, moje sve!'
  return 'Laku noć srećo, lepo spavajjj ! <3'
}
