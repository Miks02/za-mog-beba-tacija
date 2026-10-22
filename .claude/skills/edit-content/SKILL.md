---
name: edit-content
description: Change personal content such as texts, reasons, letter, notes, timeline milestones, photos, captions, music, names or the relationship start date. Use for any content-only change.
---

# Edit content

Content lives only in `src/renderer/src/content/` and `src/renderer/src/assets/`. A content change should not touch components.

| What | Where |
|---|---|
| Names, signature, relationship start date, splash duration | `content/config.ts` |
| Reasons | `content/reasons.ts` |
| Letter paragraphs | `content/letter.ts` |
| Open-when labels and messages | `content/openWhen.ts` |
| Timeline milestones | `content/timeline.ts` |
| Photos and captions | `content/photos.ts` plus files in `assets/photos/` |
| Music | `assets/music/` and the import in the audio controller |

Steps:

1. Keep Serbian Latin with full diacritics. Copy the user's wording exactly, fix only obvious typos and say which ones.
2. Every item keeps a stable unique `id`.
3. Photos: copy the file into `assets/photos/` with a kebab-case name, resize to at most 1600 px on the long side, import it in `photos.ts`, set `src` and `caption`. Square crops look best in the polaroids.
4. Dates are ISO strings in local time, for example `2025-06-09T01:00`.
5. If the number of items changes, check the layouts that depend on it: the collage positions in `features/gallery/layout.ts`, the timeline node layout in `features/story/layout.ts`, the reasons progress dots.
6. Run the app and look at the changed screen.
7. Run the `quality-check` skill.
