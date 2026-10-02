# Installation

storyFlow is packaged as a **Blender extension** (the format introduced in
Blender 4.2): no script to copy-paste, no folder to place manually.

## Steps

1. Download the `storyFlow-<version>.zip` file.
2. In Blender, open **Edit > Preferences > Get Extensions** (this tab is
   called **Add-ons** on some versions).
3. Click the ▾ menu at the top of the window, then **Install from Disk...**
4. Select the downloaded `.zip` file.

## Requirements

**Blender 5.0 or newer** (**5.2 LTS recommended**). storyFlow relies on the
sequencer strip API (`Strip`, `SceneStrip`, `Window.workspace.sequencer_scene`)
introduced in Blender 5.0.

## Updating to a new version

Blender identifies the extension by its internal id: reinstalling a newer
`.zip` cleanly replaces the previous version, no duplicate.

!!! warning "Button or panel not showing up right after installation?"
    On a Blender profile that has never had the add-on installed before,
    some UI elements can occasionally fail to appear immediately after
    installation. Disable then re-enable the add-on once (in *Preferences >
    Get Extensions*) — no reinstall needed.
