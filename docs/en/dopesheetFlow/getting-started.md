# Getting started

## Enabling the overlay

Open a **Dope Sheet** on a Grease Pencil object, then click the
dopesheetFlow button in the editor header (next to Blender's native overlay
buttons). The overlay is drawn over the existing channel column — the Dope
Sheet itself is never modified while the overlay is disabled.

![Xsheet overlay enabled in the Dope Sheet](assets/dopesheetFlow_all_01.png)

## Reading the hierarchy

From top to bottom, the overlay can show up to four levels of rows:

| Row | Content |
|---|---|
| **Scene** | Composite of every visible Grease Pencil object in the scene |
| **Summary** | Composite of every visible layer of an object |
| **Group** | Composite of the visible layers in that group |
| **Layer** | The actual drawing of that layer, key by key |

Each level has its own composite thumbnail and can be shown or hidden
independently (see [Preferences](preferences.md)).

## The three states of a thumbnail

- **Real image**: the key's drawing, rendered through GPU rasterization.
- **Empty (white background)**: the key exists (*Insert Blank Keyframe*)
  but contains no stroke — distinguished from the block's background by a
  thin frame.
- **Pending**: the thumbnail hasn't been generated yet (very dense
  drawing, generation deferred in small batches to stay responsive). It
  appears a moment later, with no action needed on your part.

## First things to try

1. **Hover** a thumbnail with **Alt** held: an enlarged floating preview
   appears near the cursor.
2. **Click and drag** a key to move it in time.
3. **Click a row's Isolate button** to highlight it (Shift+click to stack
   across several rows).
4. **Double-click** a layer or group's name to rename it.
5. In the 3D view, hold **Alt+M** to bring up the thumbnail scrubber near
   the cursor.

Each of these gestures is covered in detail on the
**[Features](features.md)** page.
