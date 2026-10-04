# Maintaining slateflow-docs

Internal reference, not part of the published site. Read this first if
you're picking this project up cold — in a new chat, a new session, or
after a long gap — instead of re-deriving the setup from scratch.

Live site: https://oylbis.github.io/slateflow-docs/
Repo: https://github.com/oylbis/slateflow-docs (public — addon source repos
stay private, only the docs are public)

## Stack

- **MkDocs Material** (`mkdocs.yml` at repo root) — static site generator.
- **mkdocs-static-i18n** (`docs_structure: folder`) — bilingual EN (default,
  no URL prefix) / FR (under `/fr/`). English content is the one that may
  lag; the user edits French directly, see "Editing workflow" below.
- **GitHub Pages**, deployed by `.github/workflows/deploy.yml` on every
  push to `main` (installs `requirements.txt`, runs `mkdocs gh-deploy
  --force`). No manual deploy step — a push *is* a publish.
- No build step beyond that. `node_modules/` (jsdom) is a local-only dev
  dependency used to test the custom JS against real built HTML before
  pushing — gitignored, reinstall with `npm install --no-save jsdom` if
  needed again.

## Page structure per addon

Each addon under `docs/en/<addon>/` and `docs/fr/<addon>/` follows the same
shape — **keep new addons consistent with this**, it's a recurring, explicit
ask from the user:

- `index.md` — hero logo, pitch, "At a glance" bullets, "Why it feels
  native", one-line Blender requirement, License, **Support** (see exact
  wording below).
- `installation.md` — numbered steps (drag-and-drop first, Preferences
  menu as the alternative), the same one-line Blender requirement, a
  "button not showing up" warning admonition.
- `features.md` — the detailed walkthrough, with the add-on's gifs/images.
- A 4th page that varies by what the add-on actually has: `preferences.md`
  (dopesheetFlow, gpFlow — remappable shortcuts), `shortcuts.md` (storyFlow,
  sequencerFlow — reference table), `configuration.md` (sequencerOTIO — the
  OTIO dependency). **gpOutliner has none** — it has no shortcuts/settings
  worth a page, and that's fine; don't invent one.
- `changelog.md` — "Since the first release" (only if there's something
  real to report — omit the heading entirely if not, don't write "no
  changes yet" filler) + a "Roadmap" section with real forward-looking
  ideas pulled from the addon's own `ROADMAP.md` (public-safe items only —
  never surface internal dev-debt like "no tests", "no CI", vestigial code).

**Deliberately dropped, don't bring back without the user asking**:
"Getting started" pages (covered by the overview + Features) and FAQ pages
(the one genuinely load-bearing thing in the old FAQs — the Support
paragraph — now lives on `index.md`).

## Content conventions

- **Blender version line, verbatim, everywhere**: "Requires **Blender 5.2
  or newer**." (EN) / "Nécessite **Blender 5.2 ou plus récent**." (FR) — no
  "LTS", no "(Grease Pencil v3)", no "(5.2 recommended)" parentheticals,
  regardless of what a given addon's `blender_manifest.toml` technically
  declares as its floor. As of 2026-10-03 all 6 addons' manifests actually
  say `5.2.0` too (storyFlow and sequencerOTIO were bumped from `5.0.0` on
  request — a real source change, not just docs, done in their own repos).
- **Support section, verbatim, every addon, both languages** — this is the
  slateflow-website marketing copy, reused as-is:

  EN: "slateFlow is developed in my spare time, alongside my freelance
  work. Prices are deliberately affordable: in return, I can't commit to
  fix deadlines or on-demand development. Feedback and ideas are welcome —
  the most important bugs will be fixed, and good ideas will make their
  way in. Thank you for your understanding."

  FR: "slateFlow est développé sur mon temps libre, en parallèle d'une
  activité d'indépendant. Les prix sont volontairement accessibles : en
  échange, je ne peux pas m'engager sur des délais de correctifs ou des
  développements sur demande. Les retours et les idées sont les bienvenus
  — les bugs les plus importants seront corrigés, et les bonnes idées
  feront leur chemin. Merci de votre compréhension."

- Don't name specific competitor software in prose (the user removed
  "Toon Boom, TVPaint, OpenToonz" from dopesheetFlow's own intro in favor
  of "other 2D animation software") — keep comparisons generic.
- No emoji, no FAQ, no getting-started — see page structure above.
- Source content per addon: that addon's own `README.md` is the best
  starting point (already written in the right tone) — pull from it rather
  than inventing prose. `CLAUDE.md`/`ROADMAP.md` are useful for the
  Roadmap section and for verifying exact mechanics, but are internal dev
  logs — never surface their debugging narrative in the public docs.

## Branding

- Logos and category colors come from `oylbis/slateflow-website` (the
  marketing landing page, separate repo) — clone it if you need a fresh
  logo file: `git clone https://github.com/oylbis/slateflow-website`.
- Category → color → addon mapping (`docs/javascripts/addon-theme.js`,
  `CATEGORIES` object — single source of truth, mirrors the website):
  - 2D Animation, `#00c281` (teal): dopesheetFlow, gpFlow, gpOutliner
  - Storyboard, `#00c7d6` (cyan): storyFlow
  - Editing / Montage, `#b60c10` (red): sequencerOTIO, sequencerFlow
- Branding assets live at `docs/assets/branding/` (shared, non-localized —
  the i18n plugin leaves top-level non-locale files alone, no need to
  duplicate per language). Per-addon media (gifs/screenshots) **do** need
  duplicating into both `docs/en/<addon>/assets/` and
  `docs/fr/<addon>/assets/` — see "i18n path gotchas" below for why.
- Raw capture footage (`<addon>_presentation_*.mp4`, hundreds of MB) is
  intentionally never copied into the docs site — it's unedited footage
  destined for YouTube/marketing, not documentation. Only
  processed gifs/screenshots/short clips go in.

## Known gotchas (don't re-debug these)

- **`mkdocs-static-i18n` + `navigation.instant` don't mix** — the plugin
  warns and strict mode aborts. Left `navigation.instant` off entirely.
- **Raw HTML (`<video>`, `<source>`) paths are NOT rewritten by MkDocs** —
  only Markdown `![]()` syntax gets its relative path recomputed for the
  page's actual output depth. Any hand-written HTML needs the *already
  depth-correct* relative path, worked out by hand (or avoid raw HTML:
  prefer a plain `![]()` to a gif/image whenever possible, which is also
  why most "video" embeds on this site ended up converted to gifs instead
  of staying `<video>` tags).
- **Full-page custom backgrounds**: a `position: fixed` + negative
  `z-index` element reliably ends up painted *below* the propagated
  `<body>` background in real browsers (not just a theoretical risk — hit
  this directly, confirmed via the user's live Firefox). The fix that
  actually works: render the effect as `body.style.backgroundImage` (a
  data: URL) instead of a separate stacked element — a background is by
  definition behind its own element's content, no stacking-context
  reasoning required. See `docs/javascripts/page-fx.js`.
- **Per-addon accent color must be set on `<body>`, not `<html>`** —
  Material's own palette CSS sets `--md-accent-fg-color` directly on
  `body[data-md-color-accent="teal"]` (a static config value). A rule on
  `<html>` only cascades by inheritance, which a same-element declaration
  on `<body>` always wins over regardless of selector specificity.
  Redeclaring the variable on `body[data-addon="..."]` is what actually
  overrides it. See `docs/stylesheets/extra.css`.
- When in doubt about whether a DOM-manipulating script actually works
  (not just "looks right in the source"), test it against the real built
  HTML with jsdom rather than guessing from the CSS/JS source — see the
  pattern used to validate `addon-theme.js` (quick throwaway Node script
  loading `site/.../index.html` into jsdom, running the real script,
  asserting on the resulting DOM). Caught two real bugs this way
  (wrong CSS selector; cascade bug above) that reading the code again
  would not have caught.
- `.md-content__inner` and `.md-typeset` are **the same element**
  (`<article class="md-content__inner md-typeset">`), not nested — a
  selector like `.md-content__inner .md-typeset` matches nothing.

## Editing workflow

- **Quick FR text edits**: the user edits directly on github.com (pencil
  icon on a file) or via github.dev (press `.` on the repo page) — no
  local checkout needed. Every push to `main` auto-deploys in under a
  minute.
- **Keeping docs in sync with addon changes**: there's no automated link
  between an addon's source and this docs site — when the user changes
  something user-facing in an addon (adds/removes/renames a feature,
  shortcut, or requirement), the lightest-weight approach that's worked so
  far is just telling Claude in chat, one line ("I removed the New Channel
  option from storyFlow's Add Scene") — Claude greps the relevant addon's
  docs pages (both languages) and fixes them immediately. For things that
  might get missed: that addon's own `README.md` tends to get kept current
  as the real marketing description, so periodically diffing a page here
  against the current `README.md` is a reasonable low-effort audit pass —
  ask Claude to do that for a specific addon rather than trying to
  re-review everything at once.
- **Before pushing structural/CSS/JS changes**: `git pull --rebase origin
  main` first — the user edits directly on GitHub fairly often, a bare
  `git push` from a local session can get rejected (non-fast-forward) or,
  worse, silently clobber their edits without the rebase step.
- `mkdocs build --strict` locally before pushing catches broken links/refs
  (missing media, bad anchors) before they go live.

## Continuity across sessions

This file is the answer to "what if I lose this chat": nothing about this
project should live *only* in conversation history. If a future session
(or a different person) needs to pick this up, this file plus the repo's
own commit history should be enough — no need to re-derive the stack
choice, the page pattern, or any of the gotchas above from scratch.
