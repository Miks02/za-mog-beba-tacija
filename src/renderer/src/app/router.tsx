import { createHashRouter } from 'react-router'
import { GalleryScreen } from '@renderer/features/gallery'
import { HomeScreen } from '@renderer/features/home'
import { LetterScreen } from '@renderer/features/letter'
import { OpenWhenScreen } from '@renderer/features/open-when'
import { ReasonsScreen } from '@renderer/features/reasons'
import { SkyScreen } from '@renderer/features/sky'
import { SplashScreen } from '@renderer/features/splash'
import { StoryScreen } from '@renderer/features/story'
import { App } from './App'
import { paths } from './paths'

export const router = createHashRouter([
  {
    element: <App />,
    children: [
      { path: paths.splash, element: <SplashScreen /> },
      { path: paths.home, element: <HomeScreen /> },
      { path: paths.reasons, element: <ReasonsScreen /> },
      { path: paths.letter, element: <LetterScreen /> },
      { path: paths.gallery, element: <GalleryScreen /> },
      { path: paths.story, element: <StoryScreen /> },
      { path: paths.openWhen, element: <OpenWhenScreen /> },
      { path: paths.sky, element: <SkyScreen /> }
    ]
  }
])
