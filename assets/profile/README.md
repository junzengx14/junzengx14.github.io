# Profile photos

Drop two files here and the homepage picks them up automatically — no code
changes needed. Until they exist, the page falls back to a gradient hero and a
placeholder portrait box, so nothing looks broken.

| File | Used by | Recommended size | Notes |
|------|---------|------------------|-------|
| `hero.jpg` | Full-screen banner at the top of `index.html` | ≥ 1920 × 1080, landscape | A dark overlay sits on top, so a bright or busy photo still works. The centre of the image stays visible at every screen width; keep the subject away from the far left/right edges. |
| `portrait.jpg` | Photo in the About section | ≥ 800 × 1000, portrait (4:5) | Cropped to 4:5 with `object-fit: cover`, centred. |

Both are referenced from:
- `css/site.css` — `.hero.has-photo` background image
- `index.html` — `data-bg-src` on `#home`, `data-img-src` on `.portrait`

`.jpg` is assumed. To use a different format, update those two paths.
