import gospodskaUlica from '@renderer/assets/music/boris-rezak-gospodska-ulica.mp3'
import type { AppConfig } from '@renderer/types/content'

export const config: AppConfig = {
  herName: 'Beba Tacije',
  signature: 'Milan',
  initials: 'M & T',
  relationshipStart: '2025-06-09',
  splashSeconds: 6,
  musicTrack: gospodskaUlica,
  musicAutoplay: true,
  messages: {
    splashEyebrow: 'za mog beba tacija',
    splashTitle: 'Volim Te',
    homeLine: 'Znaj da mislim uvek na tebe i da to neće nikad da prestane.',
    skyLine: 'Ispod istog neba, od prve noći.'
  },
  greetings: {
    night: 'Laku noć srećo, lepo spavajjj ! <3',
    morning: 'Dobro jutro ljubaviii!',
    afternoon: 'Evo mi ga srećounnznttt!',
    evening: 'Moj život, moje sve!'
  }
}
