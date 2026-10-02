# Version history

## 1.0.0 — Current release

Full feature set described in this guide:

- Export of the VSE edit to a Resolve-tuned `.otio` (track layout, Bézier
  curves, native fades, speed/freeze as `TimeEffect`s).
- Import in Add, Replace or Conform mode.
- Conform diffing (unchanged / moved / retrimmed / split / changed / new /
  deleted) with selective apply.
- Automatic `opentimelineio` dependency installation from bundled wheels,
  with PyPI and external-interpreter fallbacks.
- Debug reports for every export/import, loaded directly into Blender's
  text editor.
