# Version history

Current version: **2.0.2**.

## Since the first release

- **Strip connections are now read directly from Blender's own native
  "Connect Strips" data** instead of a sequencerFlow-specific tag —
  connections made natively in the VSE now round-trip to Resolve whether
  or not sequencerFlow is installed. Retiming speeds set with
  sequencerFlow's speed tools are read separately and still require that
  add-on.

## Roadmap

Addon consolidation and fixing any bugs that come up.

Ideas being considered for a future version — not commitments, just the
current direction:

- **Extending the Blender ↔ Resolve bridge** beyond media-backed strips
  (the current scope of export/import/conform): TEXT strips, COLOR strips
  (Resolve's "Background" clips), additional effects, blend modes, and a
  strip's enabled/muted state.
- **Exposing the generic (non-Resolve) OTIO export** already built into the
  engine, opening the door to other OTIO-compatible software beyond
  Resolve.
- **Export/import for Premiere.**

Feedback and suggestions are welcome — see [Support](index.md#support).
