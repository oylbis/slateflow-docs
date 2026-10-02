# Preferences & shortcuts

## Dope Sheet side panel (N)

In the Dope Sheet, open the side panel (**N** key) and find the
**dopesheetFlow** tab. It groups the overlay's display settings:

| Setting | Effect | Default |
|---|---|---|
| **Row Height** | Height of the overlay's rows | — |
| **Hover Preview Scale** | Size of the floating preview (Alt+hover) | — |
| **Scene** | Shows/hides the Scene composite row | Off |
| **Summary** | Shows/hides the Summary composite row | On |
| **Groups** | Shows/hides the group header rows | On |

!!! note "Hiding group rows without losing their layers"
    Unchecking **Groups** only hides each group's header row (no more
    group composite thumbnail) — its layers stay visible, displayed flat
    as if there had never been a group.

## Add-on preferences

In **Edit > Preferences > Add-ons**, open dopesheetFlow's preferences to
access the 3D scrubbing shortcut setting:

- **Modifier**: `None`, `Ctrl`, `Alt` or `Shift` — **Alt** by default.
- **Key**: the key to hold together with the modifier — **M** by default.

The full default shortcut is therefore **Alt+M**, held in the 3D view to
show the thumbnail scrubber. Any change applies **immediately**, without
restarting Blender or disabling/re-enabling the add-on.

## Shortcuts in the Dope Sheet

| Action | Shortcut |
|---|---|
| Move a key (trim mode) | Click and drag a thumbnail |
| Move a key and everything after it (ripple mode) | **Ctrl** + click and drag |
| Add/remove a key from the selection | **Shift+click** |
| Enlarged floating preview | **Alt** + hover |
| Rename a layer or group | Double-click its name |
| Change the keyframe type | Right-click its type dot |
| Isolate a row | **Isolate** button (Shift+click to stack) |

## Shortcut in the 3D view

| Action | Shortcut (default) |
|---|---|
| Show the thumbnail scrubber | Hold **Alt+M** |
| Scrub through the active layer's keys | Drag horizontally while scrubbing |
| Switch which layer is scrubbed | Move the mouse vertically while scrubbing |
| Cancel the scrub | **Esc** or right-click |
