# Screens

Each screen maps to one design file. The design file wins on visuals, copy and timing. Component names below are the expected breakdown; adjust only if a file would exceed the size limits.

| Route        | Design file               | Feature folder       |
| ------------ | ------------------------- | -------------------- |
| `/`          | `design/Main.dc.html`     | `features/splash`    |
| `/home`      | `design/Home.dc.html`     | `features/home`      |
| `/reasons`   | `design/Reasons.dc.html`  | `features/reasons`   |
| `/letter`    | `design/Letter.dc.html`   | `features/letter`    |
| `/gallery`   | `design/Gallery.dc.html`  | `features/gallery`   |
| `/story`     | `design/Story.dc.html`    | `features/story`     |
| `/open-when` | `design/OpenWhen.dc.html` | `features/open-when` |
| `/sky`       | `design/Sky.dc.html`      | `features/sky`       |

## Splash `/`

Purpose: the first thing she sees when the laptop boots.

- Eyebrow with small filled heart and the lowercase text "za mog beba tacija".
- Big "Volim Te" in Great Vibes with a blur-in reveal and a continuous shimmer sweep (gradient clipped to text) plus a soft violet drop shadow on a wrapper.
- Loading bar: track, gradient fill, beating heart riding the fill edge, status text that changes at 25 percent steps ("Zalivam cveće…", "Skupljam latice…", "Pakujem zagrljaje…", "Palim zvezdice…", "Aplikacija je spremna za mog Beba Tacija!"), percentage with tabular numbers. Progress is eased: `1 - (1 - t)^2.2` over `config.splashSeconds` (default 6).
- Garden at the bottom: two clusters of flowers (daisies with 8 petals and a honey center, tulips) plus small sprigs in the middle. Stems draw, leaves grow from their base, heads bloom with overshoot, every plant sways forever. Exact coordinates and delays are in the design file.
- Falling petals (14, two drift directions), twinkling sparkles (16), two drifting glow orbs.
- Three butterflies flying along `offset-path` curves with flapping wings, starting after 3 s, 6 s and 9.5 s.
- At 100 percent: two expanding rings and 14 hearts burst from the center of "Volim Te", and the "Uđi u svoj svet" button fades in. The app stays on the splash until the button is clicked, then navigates to `/home`.

Components: `SplashScreen`, `Garden`, `Daisy`, `Tulip`, `Sprig`, `Leaf`, `FallingPetals`, `Butterflies`, `Butterfly`, `LoveTitle`, `LoadingBar`, `EnterButton`. Hook: `useLoadingProgress(seconds)` returning `{ percent, isDone, statusIndex }`.

## Home `/home`

- Header: small heart plus "Beba Tacije" in script, live clock `HH:mm`, music toggle (lucide `Music`, pressed state when playing), close button (lucide `X`) that calls `window.api.quit()`.
- Eyebrow: Serbian date like "četvrtak, 22. oktobar".
- Greeting by hour: before 12 `greetings.beforeNoon`, from 12 on `greetings.afterNoon` (texts in `content/config.ts`). Then "Beba Tacije" in large script.
- Line: "Svaki put kad upališ ovaj računar, znaj da neko misli na tebe."
- Together counter from `config.relationshipStart` (`2025-06-09T01:00`, local time): big day count, boxes for hours, minutes, seconds updating every second, the seconds digit pops on change, a soft sheen sweeps over the card. Footer text "zajedno smo od 9. juna 2025. u 01:00".
- Mandala on the right: three counter-rotating petal rings, orbiting dots, breathing halo, beating heart in the center, entrance spin-in.
- Six navigation tiles in a responsive grid with staggered rise-in and hover lift: Pismo za tebe, Zašto te volim, Naše uspomene, Naša priča, Otvori kad…, Naše nebo.

Components: `HomeScreen`, `HomeHeader`, `Clock`, `Greeting`, `TogetherCounter`, `TimeUnit`, `Mandala`, `NavGrid` (uses shared `NavTile`). Hooks: `useNow(1000)`, `useTogetherTime(start)`.

## Reasons `/reasons`

- Eyebrow "Razlog 01 od 06", large Fraunces italic quote with a blur-up entrance that restarts on every change (React `key`), progress dots where the active one is wide and orchid.
- "Još jedan razlog" button cycles to the next reason and fires a burst of seven hearts rising from the button.
- A giant faint heart pulses behind the text.
- Last viewed index is stored in `preferencesStore`.

Components: `ReasonsScreen`, `ReasonQuote`, `ProgressDots`, `NextReasonButton`, `RisingHearts`.

## Letter `/letter`

- Closed state: floating envelope with back, letter peek, pocket, flap and a pulsing wax seal button with a heart (`aria-label="Otvori pismo"`). Text on the pocket "za Beba Tacije", hint below "Klikni na pečat".
- Opening: the flap rotates open in 3D, the envelope sinks and fades, then the letter card rises with a slight tilt and its lines fade in one by one.
- Letter: "Draga moja Beba Tacije," then paragraphs from `content/letter.ts`, sign-off "Zauvek tvoj," and the signature from `config.signature`, plus a small pressed flower in the corner. Button "Vrati pismo u kovertu" plays the opening in reverse: the letter sinks and fades, the envelope rises back, the flap folds shut and the seal returns.
- The letter body is a placeholder for the user to write. Keep the bracketed placeholder text until the user provides the real letter.

Components: `LetterScreen`, `Envelope`, `WaxSeal`, `LetterCard`, `PressedFlower`. Hook: `useEnvelope()` with states `closed | opening | open | closing`.

## Gallery `/gallery`

- Fairy lights across the top: a wire that draws in and nine bulbs that pulse.
- Title "Naše uspomene", hint "Klikni na sliku da je otvoriš".
- Nine polaroids dealt in from alternating sides with staggered delays, each with its own rotation and position, a gentle bob, some with washi tape. Hover straightens and enlarges the photo and brings it to the front.
- Click opens a lightbox: dimmed blurred overlay, large polaroid that zooms in, caption, counter "3 / 9", previous and next buttons, close button, arrow keys and Esc.
- Photos come from `content/photos.ts`. Entries without an image show the gradient placeholder with "FOTO n". Captions are placeholders in brackets until the user provides real ones.
- Faint hearts float upward in the background.

Components: `GalleryScreen`, `FairyLights`, `Collage`, `Polaroid`, `PhotoPlaceholder`, `WashiTape`, `Lightbox`. Hook: `useLightbox(count)`.

## Story `/story`

- Title "Naša priča", subtitle "od prve noći do danas".
- A fixed 1160×520 track inside a horizontal scroll box. A dashed ghost path plus the real path that draws over 5 s linearly. A glowing heart travels the same path with `offset-path` in sync.
- Five nodes pop in as the line reaches them, connector stems grow, cards appear alternating below and above.
- Milestones from `content/timeline.ts`. The first is "9. jun 2025 · 01:00", "Početak nas", "Noć kad je sve počelo." The last is computed: "Danas", "{days} dana kasnije", "I tek smo počeli." with a double ping on its node. The three middle ones are placeholders.

Components: `StoryScreen`, `TimelineTrack`, `TimelinePath`, `TravelingHeart`, `MilestoneNode`, `MilestoneCard`. Constants: path `d`, node coordinates, card anchors and delays in `layout.ts`.

## Open when `/open-when`

- Title "Otvori kad…", subtitle "Za svaki trenutak kad ti zatreba malo mene.", counter "Otvoreno n od 6".
- Six cards dealt in. The front is an envelope with flap, pocket, pulsing seal, "OTVORI KAD" and the label. Clicking flips the card in 3D with a springy easing to reveal the message on paper, signed "tvoj Milan", with a sparkle burst. Clicking again flips back.
- `aria-pressed` reflects the flipped state. Notes opened at least once are counted in `openedNotesStore`, which lives only in memory, so the counter starts from 0 every time the app launches.
- Messages come from `content/openWhen.ts` and are drafts the user may rewrite.

Components: `OpenWhenScreen`, `NoteCard`, `NoteFront`, `NoteBack`, `SparkleBurst`.

## Sky `/sky`

- Deep radial night gradient, 90 seeded twinkling stars, three periodic shooting stars, a floating crescent moon.
- A heart-shaped constellation: halo, line drawing over 4.6 s, 14 stars popping in sequence with the bottom star in honey, then "M & T" and "9 · 6 · 2025" fade in.
- Line "Ispod istog neba, od prve noći."
- "Zaželi želju" button fires five golden shooting stars and shows "Želja je poslata zvezdama." Each press restarts the effect.

Components: `SkyScreen`, `StarField`, `ShootingStars`, `Moon`, `HeartConstellation`, `WishButton`, `WishShower`.

## Shared pieces

- `PageShell` full-screen wrapper with background, glow orbs and the centered container.
- `PageHeader` with `BackLink` on the left and an optional right slot.
- `HeartIcon` the filled heart path used everywhere.
- `GlowOrbs`, `Sparkles`, `FloatingHearts`, `HeartBurst`, `Ring` decorative layers, all `aria-hidden`.
- `IconButton`, `PillButton`, `NavTile` interactive primitives.
