# Export

Turns the current VSE edit into a `.otio` file tuned for Resolve, from the
**OTIO** panel in the Sequencer sidebar.

## What gets carried over

- **One OTIO track per Blender channel actually in use** — including empty
  channels, so your track layout survives the round-trip. Blender's lowest
  video channel becomes `Video 1`; audio channel order is flipped to match
  how Resolve stacks its audio tracks.
- **Volume/opacity keyframes** carried over as Bézier curves, not
  flattened.
- **Pure fades** at a clip's edge (opacity/volume ramping to zero)
  converted to Resolve's own native transitions/audio fades instead of raw
  keyframes — optional, on by default, so an editor picking up the timeline
  in Resolve gets real fade handles, not a pile of keyframes to decode.
- **Speed changes and freeze frames** encoded as OTIO `TimeEffect`s.

## Scope

Export either the **whole timeline** or just the **current selection** —
useful for handing off a specific sequence without exporting an entire
project's edit.

## Debug reports

Every export drops a companion debug report next to the `.otio` file and
loads it straight into Blender's text editor, so you can see exactly what
was written without digging through a hidden log.

!!! info "Paths and media relinking"
    If a media source referenced by the edit lives outside the export
    folder, Resolve may not relink it automatically — the export warns you
    (debug report + popup) when this happens, so you know to relink
    manually or re-export alongside the media.
