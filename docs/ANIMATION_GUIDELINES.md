# Animation guidelines

Animation is the heart of this app. Port every keyframe, duration, delay and easing from `design/*.dc.html` faithfully, then organize it as described here.

## Where animations live

| Kind | Location | How it is used |
|---|---|---|
| Reused across screens (twinkle, beat, rise, drift, fade) | `@theme` in `styles/theme.css` as `--animate-*` plus `@keyframes` | utilities like `animate-twinkle`, `animate-rise` |
| Specific to one screen | `styles/animations/<feature>.css`, inside its own `@theme` block | utilities like `animate-splash-bloom` |
| Properties Tailwind cannot express cleanly (`offset-path`, `transform-box`, complex `clip-path`, `backface-visibility`, 3D) | small prefixed classes in the same feature file | `className="splash-stem"` |
| Mount, unmount and route transitions | `motion` (`AnimatePresence`, `motion.div`) | route fade, lightbox, envelope swap |

Example of a feature file:

```css
@theme {
  --animate-splash-draw: splash-draw 1.7s cubic-bezier(.55,.1,.3,1) both;
  --animate-splash-bloom: splash-bloom 1.25s cubic-bezier(.34,1.45,.64,1) both;

  @keyframes splash-draw {
    to { stroke-dashoffset: 0; }
  }
  @keyframes splash-bloom {
    0% { transform: scale(0) rotate(-70deg); opacity: 0; }
    55% { opacity: 1; }
    100% { transform: scale(1) rotate(0deg); opacity: 1; }
  }
}

.splash-stem {
  stroke-dasharray: 600;
  stroke-dashoffset: 600;
}

.splash-head {
  transform-box: fill-box;
  transform-origin: 50% 50%;
}
```

## Rules

- Animate `transform`, `opacity` and `filter` only. The loading bar fill uses `scale-x` with `origin-left` and the heart marker uses `translate-x`, not `width` or `left`.
- Stagger with a CSS variable: each item gets `--i` or `--delay` in `style`, the class uses `[animation-delay:var(--delay)]`.
- Restart an animation by changing the React `key` of the element (new reason, next photo, new wish). Never duplicate keyframes with `-a` and `-b` names as the design file did for its own runtime.
- Use `animation-fill-mode: both` for entrance animations so elements do not flash before their delay.
- SVG parts that scale or rotate around their own center need `transform-box: fill-box` and an explicit `transform-origin`.
- Stems and timeline lines draw with `stroke-dasharray` and `stroke-dashoffset`.
- Paths a moving element follows (butterflies, the timeline heart) use CSS `offset-path: path(...)` with `offset-distance` animated from 0 to 100 percent. The coordinate space must match the container: the timeline track is a fixed 1160×520 box for exactly this reason.
- Random-looking fields (stars, petals, sparkles) are generated once with `lib/seededRandom.ts` so they are stable between renders and launches, and memoized.
- Keep the count of simultaneously animated elements reasonable: up to about 100 on the sky screen, fewer elsewhere.
- Durations from the design are the source of truth. Put them in the feature `constants.ts` when JavaScript needs them (splash length, exit delay, burst duration).

## Reduced motion

- Use the `useReducedMotion` hook in JavaScript and the `motion-reduce:` variant in classes.
- Under reduced motion: no infinite animations (petals, butterflies, twinkles, sway, spin, drift, shooting stars), entrance animations become a short fade, content that appears in sequence appears at once, and the splash goes to home without waiting for the bloom sequence.
- Interactive outcomes stay visible: a flipped note is still flipped, a lightbox still opens.

## Motion library usage

- Route transitions in `app/RouteTransition.tsx`: fade plus a slight blur and scale, around 450 ms, with `AnimatePresence mode="wait"`.
- Lightbox overlay and figure presence in the gallery.
- Envelope to letter swap on the letter screen.
- Nothing else. Decorative and looping effects stay in CSS.

## Checklist for a ported animation

1. Keyframes, timings and easing match the design file.
2. Lives in the right file with a feature-prefixed name.
3. Uses only transform, opacity, filter or stroke properties.
4. Delays come from CSS variables or constants, not inline magic numbers.
5. Has a reduced-motion behavior.
6. Looks right in `npm run dev` at 1366×768 and 1920×1080.
