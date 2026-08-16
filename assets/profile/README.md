# Profile photo

`portrait.jpg` is the photo shown in the **About Me** section of `index.html`.
Replace the file and the page picks it up automatically — no code changes.

| File | Used by | Recommended size | Notes |
|------|---------|------------------|-------|
| `portrait.jpg` | About section | >= 800 x 1000, portrait (4:5) | Cropped to 4:5 with `object-fit: cover`, centred. The current file is square (2048 x 2048), so roughly 20% of the width is trimmed. |

Referenced from `index.html` via `data-img-src` on `.portrait`. If the file is
missing, a neutral placeholder box renders instead of a broken image.

**There is no hero/banner photo.** The full-screen banner at the top of the page
is a plain grey gradient by design — see `.hero` in `css/site.css`. Dropping a
`hero.jpg` in this folder will do nothing; the wiring was removed deliberately.
