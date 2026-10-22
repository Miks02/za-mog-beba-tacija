import type { CSSProperties } from 'react'
import { AnimatePresence } from 'motion/react'
import { FloatingHearts } from '@renderer/components/decor/FloatingHearts'
import { GlowOrbs } from '@renderer/components/decor/GlowOrbs'
import { Backdrop } from '@renderer/components/layout/Backdrop'
import { PageShell } from '@renderer/components/layout/PageShell'
import { photos } from '@renderer/content/photos'
import { Collage } from './components/Collage'
import { FairyLights } from './components/FairyLights'
import { Lightbox } from './components/Lightbox'
import { TITLE_DELAY_S } from './constants'
import { useLightbox } from './hooks/useLightbox'
import { collageLayout, galleryFloaters, galleryGlowOrbs } from './layout'

const photoCount = Math.min(photos.length, collageLayout.length)

export function GalleryScreen(): React.JSX.Element {
  const { selectedIndex, flipCount, open, close, next, prev } = useLightbox(photoCount)

  return (
    <PageShell
      containerClassName="gap-3"
      backdrop={
        <Backdrop>
          <GlowOrbs orbs={galleryGlowOrbs} />
          <FloatingHearts floaters={galleryFloaters} />
          <FairyLights />
        </Backdrop>
      }
    >
      <h1
        className="mt-2 mb-0 animate-rise text-center font-script text-[clamp(52px,5.6vw,84px)] leading-[1.1] font-normal text-haze [animation-delay:var(--delay)] text-shadow-title motion-reduce:animate-fade-in"
        style={{ '--delay': `${TITLE_DELAY_S}s` } as CSSProperties}
      >
        Naše uspomene
      </h1>
      <Collage onOpen={open} />
      <AnimatePresence>
        {selectedIndex !== null && (
          <Lightbox
            photo={photos[selectedIndex]}
            index={selectedIndex}
            count={photoCount}
            gradientClassName={collageLayout[selectedIndex].gradientClassName}
            flipCount={flipCount}
            onClose={close}
            onPrev={prev}
            onNext={next}
          />
        )}
      </AnimatePresence>
    </PageShell>
  )
}
