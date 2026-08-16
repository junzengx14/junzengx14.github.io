# Company logos

Optional. Drop a PNG here and it replaces the lettermark placeholder in the
Experience section of `index.html` — no code changes needed.

| File | Organisation | Source |
|------|--------------|--------|
| `cyan.png` | Cyan Robotics (上海青心意创科技有限公司) | Header logo from <https://www.cyanborg.com/> — 3444 × 1668 transparent PNG |
| `cruise.svg` | Cruise LLC | [File:Cruise logo.svg](https://commons.wikimedia.org/wiki/File:Cruise_logo.svg) on Wikimedia Commons — the wordmark is public domain (ineligible for copyright), the mark itself is a General Motors trademark, used nominatively to identify a past employer |

Transparent background works best. They render inside a **110 × 90** white box
with `object-fit: contain` and 8px padding — wider than tall, because these are
wordmarks rather than square marks. SVG and PNG both work. See
`assets/education/` for square logos getting the same treatment.

Paths are declared via `data-img-src` on each `.cv-logo` in `index.html`.
