# Jun's homepage

<https://junzengx14.github.io/>

A static personal academic homepage served by GitHub Pages. Layout follows a
one-page structure (fixed navbar → hero → content sections) with two detail
pages split off. Bootstrap 5 comes from a CDN; everything else is hand-written
vanilla CSS/JS — **no build step and no jQuery**. Edit a file, commit, push.

---

## Layout of the repository

```
index.html            Homepage. Sections in order:
                      #home #about #experience #education #publications
                      #awards #blog
                      (#projects sits between publications and awards but is
                       currently commented out — see "Hidden sections")
publications.html     Full publication list (all entries)
service.html          Full journal / conference reviewer lists
blog.html             Jekyll blog index — the ONLY page using _layouts/

css/site.css          All styling for index/publications/service
css/main.css          Styling for the Jekyll blog ONLY — keep separate
js/publications.js    Publication DATA (see "Source of truth" below)
js/publications-render.js   Renders publications into a mount div
js/service.js         Teaching + reviewer DATA
js/site.js            Navbar scroll state, scroll-spy, project filter,
                      image probes, footer year

cv/                   LaTeX CV — the authoritative record (see below)
assets/               Per-paper thumbnails + logos + photos + favicon
_layouts/ _includes/  Jekyll templates for blog.html only
_config.yml feed.xml  Jekyll config and RSS
```

### `cv/` — the authoritative record

**When facts disagree, `cv/` wins.** Employment dates, degree dates, awards and
the publication list on the website were all taken from here, so check it first
before changing any of them on the site.

| File | Contents |
|------|----------|
| `main.tex` | The CV source — experience, education, awards, service, teaching |
| `main.pdf` | Compiled output. **Committed**, and linked from the site's "CV" nav item and "Resume / CV" button (`./cv/main.pdf`) |
| `publications.bib` | Published work (28 entries, mirrors `js/publications.js`) |
| `preprints.bib` | Preprints — currently not printed in the CV body |
| `accepted.bib` | Accepted-but-unpublished work — currently empty |

Build with `latexmk -pdf main.tex` from inside `cv/` (biblatex → needs `biber`).
Intermediate artifacts are gitignored; `main.pdf` is not — **commit the rebuilt
PDF**, or the website keeps serving the stale one.

### `assets/`

- `assets/<venue><year>-<slug>/` — one directory per paper. **The thumbnail is
  always `cover.<ext>`** (`.png`, `.jpg` or `.gif`) — that convention is
  enforced across all 28 folders, so a new paper just needs its image saved as
  `cover.something`. Referenced from `js/publications.js`.
  A few folders also keep an unused alternate figure (`still.png` is a static
  frame of an animated `cover.gif`; others are extra figures from the paper).
  Nothing references them — they're kept as ready substitutes, not clutter.
- `assets/education/` — university logos (in use).
- `assets/profile/` — `portrait.jpg`, the About-section photo. The hero banner is
  a plain grey gradient with **no** photo; that wiring was removed deliberately,
  so adding a `hero.jpg` here does nothing. See the README in that folder.
- `assets/experience/` — company logos. **Optional** — see the README there.

---

## Source of truth — where each kind of content lives

| To change… | Edit | Notes |
|---|---|---|
| A publication | `js/publications.js` | Data only. Both `index.html` and `publications.html` render from this one array. |
| Which papers show on the homepage | `js/publications.js` | Set `selected: true`. Everything appears on `publications.html` regardless. |
| Teaching / reviewer lists | `js/service.js` | `service.html` renders the full lists; the homepage summary renders the **counts from `.length`**, so they can't drift. |
| Bio, experience, education, awards | `index.html` | Written inline as HTML. Cross-check against `cv/main.tex`. |
| Misc / project tiles | `index.html`, `#projects` | Currently commented out — see "Hidden sections". |
| Colors, spacing, typography | `css/site.css` | Design tokens are CSS custom properties on `:root`. |

**Date convention:** the website shows **years only** (`2022 – 2025`); `cv/main.tex`
keeps the exact months. Don't "fix" the site to match the CV's granularity.

### Publication entry shape

```js
{
  id: "acc2021_mpc_cbf",        // unique; used for optional abstract/bibtex panels
  selected: true,               // omit or false to keep it off the homepage
  title: "…",                   // escaped by the renderer
  authorsHtml: "…<strong>Jun Zeng</strong>…",   // HTML — bold Jun's name
  venueHtml: "<strong>Venue</strong>, 2021",    // HTML
  noteHtml: '<span class="pub-award">…</span>', // optional, renders red
  thumbnail: { src: "assets/…/cover.png", alt: "…" },
  links: [{ label: "Publisher", href: "https://…" }],
  // optional, unused today but already supported by the renderer:
  // abstractHtml, bibtex  → each adds a collapsible toggle to the links row
}
```

Entries are in reverse-chronological order. The title links to `website` if
present, otherwise to the first entry in `links`.

---

## Hidden sections

Two things are written and working but deliberately commented out. Nothing was
deleted — search the HTML for `HIDDEN:` to find each one.

### Misc / `#projects` — waiting on real content

A filterable photo grid, modelled on the "MISC" section of
<https://www.boyuan.space/>. It sits in `index.html` between `#publications` and
`#awards`, wrapped in a comment, holding six placeholder tiles.

**What's in it:** a filter bar (`All / Robots / Outdoors / Life`) plus a
responsive card grid — 3-up on large screens, 2-up on medium. Each card shows a
photo with a caption that fades in on hover (and stays visible on touch
devices). The filtering is a plain `classList` show/hide in `js/site.js`
(`initProjectFilter`) — no isotope, no jQuery.

**To add a tile,** copy one block inside `.row` and set:

| | |
|---|---|
| `data-category` | `robots`, `outdoors` or `life` — must match a `data-filter` value on the filter bar |
| `<img>` | optional, goes inside `.item-content`; with no `<img>` the CSS gradient shows, so a tile is never broken |
| `<h6>` / `<p>` | title and caption revealed on hover |

To add a category, add `<li data-filter="yourcat">Your Cat</li>` to the filter
bar and use `data-category="yourcat"` on its tiles.

**To switch the section back on:** delete the comment markers wrapping it in
`index.html`, then uncomment the `Misc` nav item in the navbars of
`index.html`, `publications.html` **and** `service.html` (all three carry the
same nav).

### CV / Resume links

The `CV` navbar item (all three pages) and the `Resume / CV` button in the About
section both point at `./cv/main.pdf` and are both commented out. `cv/main.pdf`
is still committed and still served — it's just not linked from anywhere.
Uncomment the four `HIDDEN: … CV` blocks to bring the links back.

---

## Things that will bite you

- **Two stylesheets, deliberately.** `css/site.css` styles the main site;
  `css/main.css` styles the Jekyll blog. They are not related — don't merge them
  or "clean up" one against the other.
- **`index.html`, `publications.html` and `service.html` have no YAML front
  matter**, so Jekyll copies them through byte-for-byte. Only `blog.html` uses
  `_layouts/` and `_includes/`. This means a plain `python3 -m http.server` is
  enough to preview everything except the blog.
- **Photos and company logos are optional.** `js/site.js` probes each
  `data-bg-src` / `data-img-src` path with `new Image()` and only swaps the file
  in on a successful load, so missing files fall back to a gradient / lettermark
  rather than a broken-image icon. Adding the file is all that's needed — no
  code change.
- **Thumbnails use `object-fit: contain` on a 16:9 box**, not `cover`. Existing
  covers range from 0.75:1 to 4.3:1 and `cover` would crop the wide ones into
  unreadable strips.
- **Legacy anchors are load-bearing.** `#education`, `#publications`, `#awards`
  and `#professional-activities` are kept from the pre-2026 layout so old
  inbound links still land. Don't rename them.
- **`assets_files/` no longer exists.** It held the pre-redesign Bootstrap 2
  CSS plus ~20 images inherited from the original site template (they were
  another researcher's paper figures, never Jun's). All removed; `favicon.ico`
  moved to `assets/favicon.ico`. Recover anything from git history if needed.

---

## Local preview

```bash
python3 -m http.server 8000     # index / publications / service
bundle exec jekyll serve        # add this only if you're touching blog.html
```

Quick sanity check after editing publication data — expect `28` and `10`:

```bash
node -e 'global.window={};require("./js/publications.js");
  const p=window.PUBLICATIONS;
  console.log(p.length, p.filter(x=>x.selected).length);
  console.log("missing thumbs:", p.filter(x=>!require("fs").existsSync(x.thumbnail.src)).map(x=>x.id));'
```
