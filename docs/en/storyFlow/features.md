# Features

## Navigation

![Navigating between shots and drawings](assets/storyFlow_navigation_01.gif)

- **Tab** jumps between the selected shot and its drawing scene, landing at
  the matching *frame* in both directions — not just switching scenes.
  Tab also swaps between the "Video Editing" and "2D Animation" workspaces,
  turning off Pin Scene wherever it's gotten stuck and pointing the drawing
  workspace's embedded Sequencer at the main edit scene.
- **Ctrl+←/→** moves between animation keys within the current shot.
- **Alt+←/→** moves between drawing scenes, without leaving the drawing
  context.

## Duration sync, both ways

![Duration sync between a strip and its drawing scene](assets/storyFlow_synchro_01.gif)

Resize a drawing's frame range and its shot strip follows; resize the strip
and the drawing scene follows — with every later shot in the timeline
shifting along automatically so nothing overlaps.

Two explicit ways to extend or shrink a shot:

- **Default** (drag a handle, or double-click without the option checked):
  trims the neighboring shot.
- **Ctrl held** while dragging a handle (or the checkbox in the
  double-click popup): pushes every following (or preceding) shot, across
  every channel, instead of trimming.

## Shared-scene protection

If two shots ever end up pointing at the same drawing scene — a copy/paste
across files, a manual scene reassignment — a **red marker** appears
directly on both strips so it doesn't go unnoticed. While a drawing scene
is shared this way, editing its shots' in/out points (or the drawing
scene's own duration) is locked to prevent silently corrupting one of the
two shots; the lock lifts itself automatically once the sharing is
resolved.

## A live overlay on the selected shot

A small on-screen overlay shows the selected shot's name and duration at a
glance in the VSE, without opening a side panel.

## Sound follows the picture

Audio overlapping a shot gets copied into its drawing scene automatically,
correctly repositioned, with pitch, pan, volume and speed preserved — so
you can hear timing while you draw without any manual copying.

## Metadata burned onto the image

When you need it, storyFlow can burn metadata directly onto the frame:
shot name, project- or shot-relative frame number, duration — each one an
**independent toggle**, not an all-or-nothing overlay.

## Production tools

![Adding shots in batch](assets/storyFlow_addShots_01.gif)

Beyond the day-to-day flow, storyFlow also covers the housekeeping that
comes with a real production:

- **Add**, one shot or several at once, with naming, prefix/suffix and
  auto-numbering. Lands next to your selected shot — or, with nothing
  selected, at the playhead or at the end of the timeline, your choice.
  Every shot it creates is its own independent scene.

![Batch-adding and placing several shots at once](assets/storyFlow_addShots_02.gif)

- **Batch rename**, on the selection or the whole timeline at once: either
  find/replace across existing names, or set a new base name with
  prefix/suffix and auto-numbering — numbered in timeline order, not
  selection order, so the sequence always reads correctly.
- **Clean up unused drawing scenes** in one click, with per-scene
  protection for anything you want kept regardless.
- **Render straight from the timeline**, as an image sequence or video —
  split into segments wherever the topmost visible strip actually changes,
  so shots deliberately layered across channels render correctly instead of
  one silently winning for its whole original duration. Image-sequence
  rendering follows the drawing's *actual* keyframes (objects, Grease
  Pencil, NLA, scene markers), not a fixed interval, and can drop the
  result back into the timeline as new strips automatically.
