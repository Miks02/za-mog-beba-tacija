import type { Photo } from '@renderer/types/content'
import crnoBeloZima from '@renderer/assets/photos/crno-belo-zima.jpg'
import photoBoothJun2026 from '@renderer/assets/photos/photo-booth-jun-2026.jpg'
import photoBoothPoza from '@renderer/assets/photos/photo-booth-poza.jpg'
import portretJul2026 from '@renderer/assets/photos/portret-jul-2026.jpg'
import selfieJul2026 from '@renderer/assets/photos/selfie-jul-2026.jpg'
import selfieOktobar2025 from '@renderer/assets/photos/selfie-oktobar-2025.jpg'
import veceraUKrevetu from '@renderer/assets/photos/vecera-u-krevetu.jpg'
import veceURestoranu from '@renderer/assets/photos/vece-u-restoranu.jpg'
import zagrljajIzbliza from '@renderer/assets/photos/zagrljaj-izbliza.jpg'

export const photos: ReadonlyArray<Photo> = [
  { id: 'selfie-oktobar-2025', caption: 'Ognjenov rodjendan', src: selfieOktobar2025 },
  { id: 'photo-booth-jun-2026', caption: 'Na Adi', src: photoBoothJun2026 },
  { id: 'portret-jul-2026', caption: 'Moja sreća', src: portretJul2026 },
  { id: 'selfie-jul-2026', caption: 'Turska 2026', src: selfieJul2026 },
  { id: 'crno-belo-zima', caption: 'Zima 2026', src: crnoBeloZima },
  { id: 'zagrljaj-izbliza', caption: 'Beba Tacije i ja', src: zagrljajIzbliza },
  { id: 'vecera-u-krevetu', caption: 'Presoljena večera u stanu', src: veceraUKrevetu },
  { id: 'vece-u-restoranu', caption: 'Jedna pred dejt', src: veceURestoranu },
  { id: 'photo-booth-jun-2026', caption: 'Na Adi 2', src: photoBoothPoza }
]
