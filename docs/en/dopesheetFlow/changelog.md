# Version history

Current version: **1.0.0**.

## Since the first release

- Improved thumbnail-generation reliability on dense files (the per-batch
  generation budget no longer favors the same keys every time).
- 3D viewport scrubbing now requests its own thumbnail generation, even
  with no Dope Sheet open on screen.
- An empty key (*Insert Blank Keyframe*, no strokes) now shows a dedicated
  thumbnail instead of looking ungenerated.
- Fixed a case where a custom channel color came out slightly washed out
  compared to the color actually picked.

## Roadmap

Addon consolidation and fixing any bugs that come up.

Ideas being considered for a future version — not commitments, just the
current direction:

- **Level of detail (LOD)** for very long, dense timelines, if display
  performance at extreme zoom-out ever becomes a real issue in practice.
- Further representation options for very long instance holds (exact shape
  not decided yet).
- Improve keyframe selection (multi-select).
- Grease Pencil multi-selection.

Feedback and suggestions are welcome — see [Support](index.md#support).
