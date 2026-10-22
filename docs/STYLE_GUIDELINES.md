# Style guidelines

## Approach

Tailwind CSS v4 utilities for everyday styling: layout, spacing, color, typography, borders, shadows, states. Tokens are defined once in `styles/theme.css` with `@theme`, so they become utilities such as `bg-night`, `text-haze`, `font-script`. Feature CSS files under `styles/animations/` hold only keyframes and the few properties Tailwind cannot express cleanly (see ANIMATION_GUIDELINES.md).

Setup: `tailwindcss` and `@tailwindcss/vite`, plugin added to the `renderer` section of `electron.vite.config.ts`, and `@import "tailwindcss";` at the top of `styles/index.css`.

## Tokens

All values come from the design files. Put them in `theme.css`:

```css
@theme {
  --color-night: #120A1F;
  --color-night-deep: #0B0616;
  --color-plum-900: #2A1247;
  --color-plum-800: #3E1D73;
  --color-iris: #8B5CF6;
  --color-amethyst: #A77BFF;
  --color-lilac: #C9A7FF;
  --color-lavender: #E4D6FF;
  --color-haze: #F3E8FF;
  --color-orchid: #E8B4F0;
  --color-orchid-deep: #E59BEA;
  --color-mist: #CDBFEA;
  --color-dusk: #B9A8D9;
  --color-honey: #FFE3A3;
  --color-paper: #F6F0FF;
  --color-polaroid: #FBF8FF;
  --color-ink: #2A1640;
  --color-ink-soft: #4A2580;
  --color-ink-muted: #5A3D86;
  --color-envelope-back: #5E3FA6;
  --color-envelope-pocket: #7A56C2;
  --color-envelope-flap: #8C68D4;
  --color-stem: #6B53A3;
  --color-leaf: #7E62B8;
  --color-leaf-light: #8D71C6;
  --color-grass: #4E3B78;

  --font-script: "Great Vibes", "Brush Script MT", cursive;
  --font-display: "Fraunces Variable", Georgia, serif;
  --font-sans: "Manrope Variable", system-ui, sans-serif;
}
```

SVG artwork uses the same tokens through `fill-lilac`, `stroke-stem` and similar utilities, or `var(--color-lilac)` in SVG attributes. The only hex value outside `theme.css` is the window `backgroundColor` in `src/main/window.ts`.

Translucent surfaces use Tailwind opacity modifiers on tokens: `bg-haze/5`, `border-haze/15`, `bg-iris/20`. Never write `rgba(...)` in class names.

If a value is missing, add a token. Arbitrary values like `bg-[#123456]` are not allowed. Arbitrary values for sizes that come from the design (`text-[clamp(76px,10vw,156px)]`, `w-[min(440px,82vw)]`) are allowed when they appear once; repeated ones become a token or a constant.

## Typography

| Role | Font | Typical classes |
|---|---|---|
| Names, big headings, signatures | Great Vibes | `font-script font-normal leading-[1.1]` |
| Greetings, quotes, letter body, card titles | Fraunces | `font-display italic font-light` |
| UI, labels, buttons, numbers | Manrope | `font-sans`, numbers with `tabular-nums` |
| Eyebrows | Manrope | `text-[12.5px] font-semibold uppercase tracking-[0.28em] text-dusk` |

Fonts are imported in `styles/index.css` from @fontsource packages. Use `text-wrap: balance` (`text-balance`) for big quotes and `text-pretty` for paragraphs.

## Color usage

- Ground: `bg-night`, the sky screen uses a radial gradient from `night-deep`.
- Primary text `text-haze`, secondary `text-mist`, tertiary `text-dusk`. All pass 4.5:1 on `night`.
- Paper surfaces (letter, polaroids, note backs) use `bg-paper` or `bg-polaroid` with `text-ink`, `text-ink-soft`, `text-ink-muted`.
- Primary buttons: `bg-haze text-plum-900`. Wish button: `bg-honey text-plum-900`.
- Glows are soft radial blobs from `components/decor/GlowOrbs.tsx`, not page-wide gradients.

## Layout

- Every screen is wrapped in `PageShell`: full viewport `min-h-dvh`, `bg-night`, `overflow-hidden`, centered container `max-w-[1280px]` with padding `px-[clamp(24px,4vw,56px)] py-[clamp(24px,3.4vw,48px)]`.
- Target displays: 1366×768 up to 1920×1080 at 100 percent and 125 percent Windows scaling. Nothing may be clipped or need vertical scrolling at 1366×768, except the letter, which may scroll.
- Sibling groups use flex or grid with `gap`, never margins between siblings.
- The story timeline track is fixed 1160×520 inside an `overflow-x-auto` box.

## Interaction

- Touch and click targets at least 44×44 px.
- `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orchid` on all interactive elements, defined once in `base.css` for `a, button`.
- Hover states lift (`-translate-y-1`) and brighten borders, with `transition` durations from 200 to 450 ms.
- `cursor-pointer` on buttons and clickable cards.

## Class hygiene

- Build conditional classes with `cn()` from `lib/cn.ts` (clsx plus tailwind-merge). No string concatenation.
- Class order is enforced by `prettier-plugin-tailwindcss`.
- When a class list exceeds roughly 12 utilities and repeats, extract a component (`PillButton`, `IconButton`, `NavTile`) rather than a CSS class.
- Per-item dynamic values (positions, rotations, delays) are passed as CSS variables in `style`, for example `style={{ '--delay': `${delay}ms` } as CSSProperties}`, and consumed with `[animation-delay:var(--delay)]`.
