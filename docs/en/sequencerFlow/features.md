# Features

Each section below is tagged **LITE** and/or **PRO**. See
[LITE and PRO](index.md#lite-and-pro) for the full tier breakdown.

## Contextual toolbar — LITE and PRO

![sequencerFlow toolbar](assets/sequencerFlow_toolBar_01.png)

Drawn right into the VSE, no menu diving. Every tool:

- **Cut** — classic split of one or more selected strips at the timeline
  cursor. Handles SCENE strips correctly (a common native VSE pitfall).
- **Join** — stitches two consecutive cut strips back together.
- **Swap** (left/right) — swaps a strip, or a whole block of several
  touching selected strips on the same channel, with its single
  unselected neighbor on that side. The block moves as one rigid unit
  (internal spacing never changes); a strip connected to another one
  (see Strip connections below) is dragged along automatically even if
  only its partner was selected. Selecting strips across several channels
  swaps each channel's own block against its own neighbor in the same
  click. Nothing happens on a side with no unselected neighbor touching
  the block.
- **Slip** — moves the source within the strip's own bounds, without
  changing its position or duration on the timeline.
- **Insert** (PRO) — inserts an edited source (in/out set in the
  [Source Viewer](#source-viewer-pro)) into the main edit at the playhead.
- **Connect / Disconnect** — see [Strip connections](#strip-connections-lite)
  below.
- **Advanced selections** — left/right/up/down directional selection,
  per-channel selection, and selection sets you can save and recall.
- **Isolate** — channel or strip isolation, reversible.
- **Frame range** — fit to selection, to all strips, or auto.
- **Follow playhead** — the edit view scrolls to keep the playhead in a
  comfortable zone (25–40% of the visible width) during playback, instead
  of jumping or needing a manual re-center.
- **Minimap toggle** (PRO) — see [Timeline minimap](#timeline-minimap-pro).

## Strip connections — LITE

Automatic or manual linking between related strips — typically a video
clip and its audio. Connections are detected automatically by name
similarity, or created manually; a connected pair shows a visual indicator
wherever it appears. Once connected, dragging or swapping one strip brings
its partner along.

Mainly there to prep a round-trip export:
**[sequencerOTIO](../sequencerOTIO/index.md)** (a separate SlateFlow
add-on) reads these links to keep video/audio pairs together when
exporting to Resolve via OpenTimelineIO.

## Zone guides — LITE and PRO

![Zone guides across channel ranges](assets/sequencerFlow_zoneGuides_01.gif)

Colored bands across channel ranges (video, audio, effects...) so a busy
timeline stays organized and readable at a glance. Zones have presets, can
be renamed from the N-panel, and their boundaries are dragged directly in
the VSE to resize — pushing or adjusting neighboring zones depending on
the mode.

## Speed control — LITE

A badge on every retimed strip for quick access to retiming, a
percentage-based speed dialog, and freeze frame — all built on Blender's
own native retiming operators (never a parallel speed model). The speed
value is also written to the strip so
**[sequencerOTIO](../sequencerOTIO/index.md)** can carry it over on
export.

## Batch rename & per-strip export — LITE

Rename a selection or the whole timeline at once, either with find/replace
or a new base name with prefix/suffix and auto-numbering. Render each
selected strip to its own video file, or mix down its audio individually.

## Source Viewer — PRO

![Dual Monitor source viewing](assets/sequencerFlow_dualMonitor_01.gif)

Real 3-point editing in Blender, through two interchangeable ways of
previewing a source:

- **Dedicated scene**: the classic Source Viewer — set IN/OUT points on any
  clip in its own scene, with your edit scene untouched while you browse
  footage.
- **Dual Monitor**: an independent second preview (built on the Movie Clip
  Editor) with its own playhead, image and audio — genuinely simultaneous
  with the main edit, not a toggle between the two.

Either way, **Insert** drops the selected in/out range at the playhead,
rippling every later strip out of the way automatically. A shared media
history and IN/OUT points work across both modes. Before loading anything,
the **Folder Media Info** overlay shows a comparison table (fps,
resolution, duration, color profile) directly in the File Browser, so you
can compare candidate files without opening each one first.

## Strip curves — PRO

![Volume/opacity curves drawn on strips](assets/sequencerFlow_curves_01.gif)

Volume and opacity curves drawn directly on strips, click-and-drag
editable (**Ctrl+click** to add a key) — no need to open the Graph Editor.
These drive real Blender F-Curves, not a parallel data model.

## Advanced audio — PRO

A real-time VU meter, audio channel badges directly on strips, and
one-click mono/stereo channel reassignment.

## Timeline minimap — PRO

![Timeline minimap](assets/sequencerFlow_minimap_01.gif)

A 2D (time × channels) overview of the whole timeline, shown as a
fixed-size panel in the corner of the VSE. Click or drag it to instantly
recenter the main view on that point in the edit.
