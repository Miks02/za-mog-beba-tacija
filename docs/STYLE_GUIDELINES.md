# Style guidelines

## Approach

Tailwind CSS v4 utilities for everyday styling: layout, spacing, color, typography, borders, shadows, states. Tokens are defined once in `styles/theme.css` with `@theme`, so they become utilities such as `bg-night`, `text-haze`, `font-script`. Feature CSS files under `styles/animations/` hold only keyframes and the few properties Tailwind cannot express cleanly (see ANIMATION_GUIDELINES.md).

Setup: `tailwindcss` and `@tailwindcss/vite`, plugin added to the `renderer` section of `electron.vite.config.ts`, and `@import "tailwindcss";` at the top of `styles/index.css`.

## Tokens

All values come from the design files. Put them in `theme.css` (the default Tailwind palette is reset with `--color-*: initial`, only `white` and `black` are added back):

```css
@theme {
  --color-night: #120a1f;
  --color-night-deep: #0b0616;
  --color-plum-900: #2a1247;
  --color-plum-800: #3e1d73;
  --color-iris: #8b5cf6;
  --color-amethyst: #a77bff;
  --color-lilac: #c9a7ff;
  --color-lavender: #e4d6ff;
  --color-haze: #f3e8ff;
  --color-orchid: #e8b4f0;
  --color-orchid-deep: #e59bea;
  --color-mist: #cdbfea;
  --color-dusk: #b9a8d9;
  --color-honey: #ffe3a3;
  --color-paper: #f6f0ff;
  --color-polaroid: #fbf8ff;
  --color-ink: #2a1640;
  --color-ink-soft: #4a2580;
  --color-ink-muted: #5a3d86;
  --color-envelope-back: #5e3fa6;
  --color-envelope-pocket: #7a56c2;
  --color-envelope-flap: #8c68d4;
  --color-stem: #6b53a3;
  --color-leaf: #7e62b8;
  --color-leaf-light: #8d71c6;
  --color-grass: #4e3b78;
  --color-orchid-pale: #f3d9f6;
  --color-ink-caption: #3a2160;
  --color-ink-label: #6b4e96;
  --color-sky-horizon: #2a1450;
  --color-sky-mid: #160b2b;
  --color-photo-violet: #6d4bb8;
  --color-photo-lilac: #b79af0;
  --color-photo-pink: #f0c6f3;
  --color-photo-periwinkle: #a98be8;

  --font-script: 'Great Vibes', 'Brush Script MT', cursive;
  --font-display: 'Fraunces Variable', Georgia, serif;
  --font-sans: 'Manrope Variable', system-ui, sans-serif;
}
```

SVG artwork uses the same tokens through `fill-lilac`, `stroke-stem` and similar utilities, or `var(--color-lilac)` in SVG attributes. The only hex value outside `theme.css` is the window `backgroundColor` in `src/main/window.ts`.

Translucent surfaces use Tailwind opacity modifiers on tokens: `bg-haze/5`, `border-haze/15`, `bg-iris/20`. Never write `rgba(...)` in class names.

If a value is missing, add a token. Arbitrary values like `bg-[#123456]` are not allowed. Arbitrary values for sizes that come from the design (`text-[clamp(76px,10vw,156px)]`, `w-[min(440px,82vw)]`) are allowed when they appear once; repeated ones become a token or a constant.

## Typography

| Role                                        | Font        | Typical classes                                                     |
| ------------------------------------------- | ----------- | ------------------------------------------------------------------- |
| Names, big headings, signatures             | Great Vibes | `font-script font-normal leading-[1.1]`                             |
| Greetings, quotes, letter body, card titles | Fraunces    | `font-display italic font-light`                                    |
| UI, labels, buttons, numbers                | Manrope     | `font-sans`, numbers with `tabular-nums`                            |
| Eyebrows                                    | Manrope     | `text-[12.5px] font-semibold uppercase tracking-[0.28em] text-dusk` |

Fonts are imported in `styles/index.css` from @fontsource packages. Fraunces uses the `opsz.css` and `opsz-italic.css` files so the optical size axis from the design is available. Use `text-wrap: balance` (`text-balance`) for big quotes and `text-pretty` for paragraphs.

## Color usage

- Ground: `bg-night`, the sky screen uses a radial gradient from `night-deep`.
- Primary text `text-haze`, secondary `text-mist`, tertiary `text-dusk`. All pass 4.5:1 on `night`.
- Paper surfaces (letter, polaroids, note backs) use `bg-paper` or `bg-polaroid` with `text-ink`, `text-ink-soft`, `text-ink-muted`.
- Primary buttons: `bg-haze text-plum-900`. Wish button: `bg-honey text-plum-900`.
- Glows are soft radial blobs from `components/decor/GlowOrbs.tsx`, not page-wide gradients.

## Layout

- Every screen is wrapped in `PageShell`: full viewport `min-h-dvh`, `bg-night`, `overflow-hidden`, centered container `max-w-[1280px]` with padding `px-[clamp(24px,4vw,56px)] py-[clamp(24px,3.4vw,48px)]`.
- Primary target: 1920×1080 full screen, the resolution of the laptop the app is shown on. Every screen must match the design there with nothing clipped and no vertical scrolling, except the letter, which may scroll.
- Smaller windows (down to 1366×768, 100 and 125 percent Windows scaling) get responsive best-effort layouts: sizes shrink with `clamp` and `vh`, and fine-tuning happens later.
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
