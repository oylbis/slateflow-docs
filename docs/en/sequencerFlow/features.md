# Features

Each section below is tagged **LITE** (included in the free edition) or
**PRO** (paid tier only). See [LITE and PRO](index.md#lite-and-pro) for the
full tier breakdown.

## Contextual toolbar — LITE

![sequencerFlow toolbar](assets/sequencerFlow_toolBar_01.png)

Drawn right into the VSE, no menu diving: smart split (handles SCENE strips
correctly), join, swap, slip, directional/channel selection, selection
sets, channel and selection isolation, auto-fit frame range, follow-playhead
during playback.

## Zone guides — LITE

![Zone guides across channel ranges](assets/sequencerFlow_zoneGuides_01.gif)

Colored bands across channel ranges (video, audio, effects...) so a busy
timeline still reads at a glance, with presets and interactive
drag-to-resize boundaries.

## Strip connections — LITE

Automatic or manual linking between related strips (typically a video clip
and its audio), with a visual indicator wherever they're connected. Mainly
there to prep a round-trip export: **[sequencerOTIO](../sequencerOTIO/index.md)**
(a separate SlateFlow add-on) reads these links to keep video/audio pairs
together when exporting to Resolve via OpenTimelineIO.

## Speed control — LITE

A badge on every retimed strip, a percentage-based speed dialog, freeze
frame — all built on Blender's own native retiming operators.

## Batch rename & per-strip export — LITE

Rename a selection or the whole timeline at once, and render each selected
strip to its own video file (or mix down its audio individually).

## Source Viewer — PRO

![Dual Monitor source viewing](assets/sequencerFlow_dualMonitor_01.gif)

Real 3-point editing in Blender: set IN/OUT points on any clip in a
dedicated scene, then insert at the playhead with every later strip
rippling out of the way automatically. Your edit scene is never touched
while you're browsing footage. An optional Dual Monitor mode gives you a
second, fully independent source preview.

## Strip curves — PRO

![Volume/opacity curves drawn on strips](assets/sequencerFlow_curves_01.gif)

Volume and opacity curves drawn directly on strips, click-and-drag editable
— driving real Blender F-Curves, not a parallel data model.

## Advanced audio — PRO

A VU meter and audio channel badges, with quick mono/stereo channel
reassignment.

## Timeline minimap — PRO

![Timeline minimap](assets/sequencerFlow_minimap_01.gif)

A 2D (time × channels) overview of the whole timeline, clickable or
draggable to instantly recenter the main view.
