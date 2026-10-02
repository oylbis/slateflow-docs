# Version history

## 1.0.0 — First release

First public version, with the full feature set described in this guide:

- Real thumbnails through GPU rasterization, with caching and batched
  asynchronous generation.
- Scene / Summary / group / layer hierarchy, each level independently
  toggleable.
- Key dragging in trim or ripple mode, cross-layer and cross-group
  multi-selection, group-as-parent dragging.
- Enlarged floating preview (Alt+hover).
- Row isolation (Isolate, stackable).
- Channel color and keyframe type editable from the overlay.
- Layer/group renaming from the overlay (double-click).
- Thumbnail scrubbing in the 3D view (Alt+M by default, customizable),
  with vertical layer navigation and cursor wrap-around at screen edges.

### Improvements since release

Several fixes followed the first release, based on real-world usage on
production files:

- Improved thumbnail-generation reliability on dense files (the
  per-batch generation budget was revised so it no longer systematically
  favors the same keys).
- 3D viewport scrubbing now requests its own thumbnail generation, even
  with no Dope Sheet open on screen.
- An empty key (*Insert Blank Keyframe*, no strokes) now shows a
  dedicated thumbnail (plain white background) instead of looking
  ungenerated.
- Fixed a case where a custom channel color came out slightly washed out
  compared to the color actually picked.

These improvements are all included in the current **1.0.0** version (no
version bump yet).
