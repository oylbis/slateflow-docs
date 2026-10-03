# Features

## Export

Turns the current VSE edit into a `.otio` file tuned for Resolve, from the
**OTIO** panel in the Sequencer sidebar.

![Export to OTIO panel](assets/sequencerOTIO_export_01.png)

What gets carried over:

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

Export either the **whole timeline** or just the **current selection** —
useful for handing off a specific sequence without exporting an entire
project's edit.

Every export drops a companion debug report next to the `.otio` file and
loads it straight into Blender's text editor, so you can see exactly what
was written without digging through a hidden log.

!!! info "Paths and media relinking"
    If a media source referenced by the edit lives outside the export
    folder, Resolve may not relink it automatically — the export warns you
    (debug report + popup) when this happens, so you know to relink
    manually or re-export alongside the media.

## Import

Bringing a `.otio` back from Resolve, in one of three modes.

**Add** imports alongside whatever's already in the scene — the simplest
mode, useful for bringing in a sequence you don't already have in Blender.

**Replace** clears the VSE first, then imports — a full re-sync when you
want the Blender edit to exactly mirror what Resolve has.

## Conform (the round-trip mode)

![OTIO Import Settings: conform mode](assets/sequencerOTIO_import_01.png)

Compares the **live Blender edit** against the Resolve export and
classifies every clip:

| Status | Meaning |
|---|---|
| Unchanged | No difference detected |
| Moved | Position changed |
| Retrimmed | In/out points changed |
| Split | Clip was cut into more than one piece |
| Changed | Properties (opacity, volume, transform, speed) differ |
| New | Present in the Resolve export, not in Blender |
| Deleted | Present in Blender, missing from the Resolve export |

You can then **optionally apply just the changes** — nothing gets blindly
re-imported, so edits made inside Blender *after* the original export
aren't discarded just because Resolve sent something back.

!!! info "What's in scope for conform"
    Conform works on any strip backed by real media (video/image/sound
    clips). Color strips, text strips, drawing scenes and adjustment layers
    sit outside the diff and are left untouched.
