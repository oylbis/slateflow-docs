# Installation

dopesheetFlow is packaged as a **Blender extension** (the format introduced
in Blender 4.2): no script to copy-paste, no folder to place manually in
`scripts/addons`.

## Steps

1. Download the `dopesheetFlow-<version>.zip` file from your source of
   purchase (or from Blender Extensions for the free version).
2. In Blender, open **Edit > Preferences > Get Extensions** (this tab is
   called **Add-ons** on some versions).
3. Click the ▾ menu at the top of the window, then **Install from Disk...**
4. Select the downloaded `.zip` file.

The add-on activates automatically after installation. A new button appears
in the **Dope Sheet** header to toggle the xsheet overlay.

## Requirements

- **Blender 5.2 or newer.**
- **Grease Pencil v3** (the Grease Pencil data format introduced in recent
  Blender versions — the default format on Blender 5.2+, no action needed
  on your part).

## Updating to a new version

Blender identifies the extension by its internal id: reinstalling a newer
`.zip` **cleanly replaces** the previous version, with no duplicate.
Follow the same steps as for the initial installation.

!!! warning "Button not showing up right after installation?"
    On a Blender profile that has never had the add-on installed before,
    the header button can occasionally fail to appear immediately after
    installation. **Disable then re-enable the add-on once** (in
    *Preferences > Get Extensions*, uncheck then recheck dopesheetFlow) —
    no reinstall needed. See the
    [FAQ](faq.md#button-missing-after-install) for details.
