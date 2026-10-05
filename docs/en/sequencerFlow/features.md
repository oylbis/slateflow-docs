# Features

Each section below is tagged **LITE** and/or **PRO**. See
[LITE and PRO](index.md#lite-and-pro) for the full tier breakdown.

## Contextual toolbar — LITE and PRO

![sequencerFlow toolbar](assets/sequencerFlow_toolBar_01.png)

Drawn right into the VSE, no menu diving. Every tool:

- **Cut** — splits every selected strip at the timeline cursor. On a SCENE
  strip (a storyFlow shot, for instance), a native split would leave both
  halves pointing at the *same* underlying scene — Cut instead gives the
  right-hand half a full copy of the scene, so each half is independent
  from the start.
- **Join** — stitches two touching strips back together: same channel,
  same type, same source file, and the first strip's right edge exactly
  meeting the second one's left edge. In practice, this re-joins strips
  that were split by Cut — it won't merge two genuinely different clips.
  Works across a whole multi-strip selection at once, grouped by
  channel+type.
- **Swap** (left/right) — swaps a strip, or a whole block of several
  touching selected strips on the same channel, with its single
  unselected neighbor on that side. The block moves as one rigid unit
  (internal spacing never changes); a strip connected to another one
  (see [Strip connections](#strip-connections-lite) below) is dragged
  along automatically even if only its partner was selected. Selecting
  strips across several channels swaps each channel's own block against
  its own neighbor in the same click. Nothing happens on a side with no
  unselected neighbor touching the block.
- **Slip** — invokes Blender's own native Slip tool to move the source
  within the strip's own bounds, without changing its position or
  duration on the timeline.
- **Insert** (PRO) — inserts an edited source (in/out set in the
  [Source Viewer](#source-viewer-pro)) into the main edit at the playhead.
- **Connect / Disconnect** — see [Strip connections](#strip-connections-lite)
  below.
- **Advanced selections**:

  | Action | What it selects |
  |---|---|
  | Select channel | Every strip sharing a channel with the current selection (or the active strip if nothing's selected) |
  | Select above | Every strip in *any* channel above the highest selected channel — not just the next one up |
  | Select below | Every strip in *any* channel below the lowest selected channel |
  | Navigate next/previous | Jumps to — and selects — the next or previous strip in time, and moves the playhead to its start |
  | Selection sets | Save the current selection under a name, recall it later, or remove it (see below) |

  **Selection sets** are matched back by name, strip type, timeline
  position and channel — if a saved strip has since moved, been renamed,
  or deleted, recall reports a partial restore (`N/M strips selected`)
  instead of silently selecting the wrong thing.
- **Isolate** — two independent, reversible toggles, both based on muting
  (so they affect audio playback too, not just the preview image):
  - **Isolate Channel** mutes every channel except the ones the current
    selection touches.
  - **Isolate Selection** mutes every strip that isn't currently selected
    (by name, individually — not by channel).

  Click either button again to restore every mute state exactly as it
  was before.
- **Frame range** — sets the *scene's* playback/render frame range
  (`Scene.frame_start`/`frame_end`), not just the view:
  - **Range Selected** fits it to the current selection's bounds.
  - **Range All** fits it to every strip in the timeline.
  - **Auto Range** keeps re-fitting it continuously (every ~100ms) as your
    selection changes, falling back to framing every strip the moment
    nothing is selected.
- **Follow playhead** — the edit view scrolls to keep the playhead in a
  comfortable zone (25–40% of the visible width) during playback, instead
  of jumping or needing a manual re-center.
- **Minimap toggle** (PRO) — see [Timeline minimap](#timeline-minimap-pro).

## Strip connections — LITE

Marks a shared, invisible link between related strips — typically a video
clip and its audio — so dragging, swapping or exporting one strip takes
its partner along. A connection is just a shared ID stored on each strip
(`strip["connection_id"]`); the toolbar's **Connect**/**Disconnect**
buttons apply it to the current selection and call Blender's own native
connect/disconnect operator alongside it.

Connections aren't detected passively in the background — the **Connection
Tools** N-panel drives that explicitly, through **Conditional Connect**: a
set of criteria you can combine, applied with one click to either the
current selection or the whole timeline:

| Condition | Groups strips that... |
|---|---|
| Selected strips only | ...are limited to the current selection (on by default) |
| Same start frame | ...start at exactly the same frame |
| Same end frame | ...end at exactly the same frame |
| Same channel | ...sit on the same channel |
| Same length | ...share the same duration |
| Movie-sound pairs | ...look like a video clip and its matching audio, by name (exact match, a shared numeric suffix, or ≥80% name similarity) |

Leaving only **Movie-sound pairs** checked is the common case: it pairs up
every MOVIE strip with its best-matching SOUND strip by name, with no
other constraint. The same panel also lists every connection group
currently in the scene, with a button to select all of that group's
strips at once.

Mainly there to prep a round-trip export:
**[sequencerOTIO](../sequencerOTIO/index.md)** (a separate SlateFlow
add-on) reads these links to keep video/audio pairs together when
exporting to Resolve via OpenTimelineIO.

## Zone guides — LITE and PRO

![Zone guides across channel ranges](assets/sequencerFlow_zoneGuides_01.gif)

Colored separator lines spanning a range of channels — audio, video,
effects, or however you like to split up a busy timeline — each labeled
with its own name at both ends of the line, so the grouping stays readable
without opening any panel.

Everything lives in the **Zone Guides** N-panel:

- **Show Zone Guides** turns the whole overlay on/off; **Lock** (next to
  it) keeps the zones as they are and disables dragging their boundaries
  in the VSE, without hiding them.
- The **zone list** shows every zone from top to bottom (matching their
  visual stacking in the VSE), each with its channel range, and three
  controls:
  - **▲ / ▼** — swaps a zone with its neighbor above/below: the two trade
    places on the channel axis, each keeping its own size, name and
    color. This is how you reorder zones (e.g. put "audio" above "video").
  - **✕** — removes that zone entirely.
  - **+ Add Zone** appends a new one right above the last, 4 channels
    wide by default, cycling through 4 preset colors.
- Click a zone's name in the list to make it the **active zone**, whose
  **name** and **color** you can edit just below the list.
- **Drag Mode** decides what happens to the *other* zones when you resize
  one — from this panel, or by dragging a boundary line directly in the
  VSE (grab near the colored line; disabled while **Lock** is on):

  | Mode | When you move a boundary... |
  |---|---|
  | **Adjust** (default) | Only the immediately touching neighbor's edge follows, closing or opening the gap between the two — every other zone stays put. |
  | **Push** | Every zone further along in that direction shifts by the same amount, like pushing a stack. |
- **Presets** save the entire current zone layout (names, ranges, colors)
  under a name, list every saved preset, and let you re-apply or delete
  one. Applying a preset replaces the current zones outright.
- **Reset to Default** restores the two zones sequencerFlow starts with
  (`audio`, channels 1–4; `video`, channels 5–8).

## Batch rename & scene sync — LITE

The **Name Tools** N-panel renames a selection or the whole timeline at
once (**Target**: Selected / All), with a live preview of what the first
affected strip's name would become:

- **Find/Replace** — substitutes a literal piece of text across every
  targeted name.
- **Set Name** — a new base name (optional), with an optional **prefix**
  and **suffix**; the suffix can instead be an auto-increment counter
  (adjustable digit count), numbered in **timeline order**, not selection
  order, so the sequence always reads correctly regardless of click order.

Renaming a SCENE strip (a storyFlow shot) also renames its underlying
scene to match, automatically. A separate **Sync Scene Names** button (its
own Selected/All target) re-applies that same strip-name → scene-name sync
on demand, without renaming anything first — handy after a scene got
renamed some other way.

## Export segments — LITE

The **Export Tools** N-panel renders the timeline to one video file per
segment — it does **not** export "each selected strip" individually, and
doesn't do a separate audio mixdown (every unmuted sound strip in a
segment's range is mixed into that segment's video automatically, for
free, as part of the normal render).

- **Export Range (In/Out)** is the same `frame_start`/`frame_end` pair as
  [Frame range](#contextual-toolbar-lite-and-pro) above — it's shown again
  here since it drives what gets exported.
- A segment boundary is placed only where the **topmost visible strip**
  actually changes inside that range — strips stacked underneath don't
  each force their own cut. The panel shows a live count of how many
  segments the current range/stacking would produce.
- **Naming**:

  | Mode | Segment filename based on... |
  |---|---|
  | **Topmost Strip** (default) | The name of whichever strip is topmost in that segment |
  | **Custom Pattern** | A base name + optional prefix/suffix/numbering — the exact same engine as Batch Rename above |
- Either way, a **frame-number suffix** is appended on top as the real
  collision guard (the same strip can be topmost again later, in a
  different segment): off, a standard `0001-NNNN` duration count, or the
  actual **Timeline** frame numbers. An optional toggle also appends the
  current `.blend` filename.
- Rendering uses whatever **Output Properties** (format, codec, path) are
  already set on the scene the VSE is displaying — there's no separate
  export-format picker here. The panel warns if that output path is still
  Blender's untouched factory default, since that usually means Output
  Properties were set while a different scene tab was active.

## Speed control — PRO

A small **s** badge next to the opacity icon on every retimable strip
(MOVIE, IMAGE, SCENE, META, MOVIECLIP, MASK and SOUND — not effect
strips), colored to show its state at a glance: grey at normal speed,
blue once a speed is set, purple when frozen. Click it to open the **Set
Speed** dialog:

- A **percentage** field (100 = normal, 50 = half speed/twice as long, 200
  = double speed), or
- **Freeze Frame**, which holds the strip on its in-point instead.

Both drive Blender's own native retiming operators — never a parallel
speed model — so the result behaves exactly like a manual retime would.
The resulting factor is also written to the strip
(`strip["otio_speed"]`, Resolve's own "Speed Ratio" convention) so
**[sequencerOTIO](../sequencerOTIO/index.md)** can carry it over on
export. A SOUND strip can be retimed too, which is what keeps a connected
video+audio pair at the same speed together.

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

Volume and opacity curves drawn directly on strips — no need to open the
Graph Editor:

- **Ctrl+click** anywhere on a strip to add a keyframe at that exact
  frame/value.
- **Click and drag** an existing key to move it (frame and value both
  follow the mouse).
- **Double-click** a key to open a small dialog with its exact **Frame**
  and **Value**, live-updating as you type; cancel reverts it.

These drive real Blender F-Curves on the strip's own `volume` or
`blend_alpha` property, not a parallel data model — opening the Graph
Editor on the same strip shows the exact same keys.

## Advanced audio — PRO

- A real-time **VU meter** (dB level plus the peak reached since the last
  reset, with a one-click reset), dockable to the left or right edge of
  the VSE.
- Every sound strip gets a **channel badge** showing its actual format at
  a glance (Mono / Stereo / 5.1 / 7.1, read from the source file, or
  "Mono" if forced — see below).
- Click a badge to force that one strip down to **mono**, independently of
  every other strip, with a **Left / Center / Right** pan choice that only
  appears once Mono is checked.

## Timeline minimap — PRO

![Timeline minimap](assets/sequencerFlow_minimap_01.gif)

A 2D (time × channels) overview of the whole timeline, shown as a
fixed-size panel in the corner of the VSE — one silhouette per strip,
colored from its own color tag if it has one, otherwise its type's native
Blender color, plus an outline showing the currently visible viewport.
Click or drag it to instantly recenter the main view on that point in the
edit. Other SlateFlow add-ons' internal helper strips (named
`__like_this__`) are excluded from the view.
