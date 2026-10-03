# gpOutliner

![gpOutliner](../../assets/branding/logo_gpoutliner.png){: .addon-hero-logo }

**A dedicated command center for every Grease Pencil object in your scene.**

gpOutliner adds one focused panel to the 3D Viewport that brings Grease
Pencil object management, layer management, and camera setup together in a
single place — closer to the feel of a dedicated 2D drawing app, without
giving up anything the 3D viewport gives you. It never hides or replaces
Blender's native Outliner, Object Data Properties, or Grease Pencil
operators — it just puts the controls you reach for constantly right where
you're already drawing.

![gpOutliner panel in the 3D Viewport sidebar](assets/gpOutliner_all_01.png)

## At a glance

- **Depth-sorted object list** — sort your Grease Pencil objects by distance
  to the camera, not just alphabetically.
- **Compensate mode** — drag an object's depth and watch its scale adjust
  automatically to keep its apparent size on screen constant.
- **Edit-mode memory** — choose whether switching between drawings keeps
  whatever mode you're in, or remembers and restores the last mode you used
  on each object individually.
- **Global opacity per object** — one slider that fades every layer of a
  drawing together while preserving each layer's relative opacity.
- **Camera background images** — add, reorder, and manage reference images
  or footage on your camera's background, right from the same panel.
- **One-click isolation** — hide every other Grease Pencil object, or every
  other layer on the current one, with a single toggle.
- **Camera constraints, one click** — Track To and Child Of, applied with
  automatic stroke compensation.
- **2D/3D view toggle** — swing your camera and selected drawings onto a
  flat reference axis for comfortable, distortion-free flat drawing, then
  snap everything back to its original 3D staging with a single click.
- **Smart stroke operations** — Duplicate Special, Separate Special, and
  Move to Special.
- **Structure duplication** — copy an object's entire layer hierarchy
  without copying a single stroke.

See the **[Features](features.md)** page for a full visual walkthrough.

## Why it feels native

gpOutliner never invents a parallel system where Blender already has one:
layer management runs through Blender's own layer tree widget and
operators, camera constraints are real Blender constraints (just applied
and compensated automatically), and nothing here locks you out of the
native Outliner or Properties editor. Only the handful of things Blender
doesn't offer directly — depth sorting, visual-scale compensation, the
2D/3D staging toggle, multiplicative global opacity — get dedicated code.

Requires **Blender 5.2 LTS or newer**.

## License

[GNU General Public License v3.0 or later](https://www.gnu.org/licenses/gpl-3.0.html)
— SPDX: `GPL-3.0-or-later`.

gpOutliner is part of the **[SlateFlow](../index.md)** suite.

## Support

This project is developed at its author's own pace, in their free time.
It's provided **as-is**, with no warranty.

Found a bug or have a suggestion? Use the support channel listed on your
purchase page — every message is read, but response times can't be
guaranteed.
