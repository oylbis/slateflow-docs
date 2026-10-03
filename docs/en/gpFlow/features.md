# Features

![gpFlow overview](assets/gpFlow_demo_01.gif)

## Drawing

- **Draw mode** in one click, with the last brush you used.
- **Erase mode** in one click, consistent with the other modes.
- **Fill mode** in one click — drives Blender's own native Fill tool, so you
  keep every brush setting (extension lines, gap closing...). **Shift+click**
  removes a fill under the cursor, a gesture with no native equivalent.

## Reshape strokes

![Lengthen/Shorten a stroke](assets/gpFlow_LS_01.gif)

- **Lengthen/Shorten** — grab a stroke's nearest endpoint, highlighted live
  as you hover, and drag.

![Deform with a temporary lattice](assets/gpFlow_deform_01.gif)

- **Deform** drops a view-aligned lattice around your selection for quick,
  natural-looking distortion (2D or volumetric, adjustable resolution).
  Ctrl+click the button (or its shortcut) to build that lattice straight
  from a selection you already made, instead of selecting again once
  inside the tool.
- **Sculpt** drops you straight into Blender's native sculpt mode, with
  safer undo behavior.

## Select & Transform

Lasso-select a stroke and gpFlow hands you straight into Move — no extra
click needed.

## Flip

Mirrors your strokes around a shared center so a flipped pose stays
consistent across frames. Respects multi-frame editing and skips locked
layers automatically.

## Canvas

![Rotating the drawing canvas](assets/gpFlow_canva_01.png)

Rotate your camera to a more comfortable drawing angle without losing your
original framing: snap to 15° increments, and jump back to where you
started with a single click. A soft reference frame stays on screen the
whole time so you always know how far you've turned.

## Animation shortcuts

- Insert an empty keyframe.
- Duplicate the previous one (per-layer, or across every visible layer).
- Shift a whole run of keyframes forward or backward by an adjustable
  number of frames.

## Shortcuts

Every tool's shortcut is remappable — see
**[Preferences](preferences.md)**.
