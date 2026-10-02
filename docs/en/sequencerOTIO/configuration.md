# Configuration

## The OTIO dependency: near-zero setup

OTIO round-tripping needs the `opentimelineio` Python package, which
Blender's own bundled Python doesn't ship with by default. sequencerOTIO
handles this for you:

- It carries **pre-downloaded `opentimelineio` wheels** for Blender's own
  Python (covering Blender 5.0 through 5.2, on Windows/macOS/Linux).
- The **first time the add-on loads**, it installs the right one locally —
  no internet connection needed, nothing to configure by hand.

In most cases you'll never see a "Not Installed" state at all.

## If your platform isn't covered

If your platform isn't one of the ones covered by a bundled wheel, the
add-on falls back to installing `opentimelineio` from PyPI over the
network — same one-click **Install OTIO** button in the add-on's
Configuration panel, same **Check Installation** status readout.

## Using an external Python interpreter

You can point the add-on at a different, external Python interpreter (with
OTIO already installed there) if you'd rather manage that dependency
yourself — useful if you already maintain a separate Python environment for
pipeline tools.

!!! info "Why a separate interpreter at all"
    sequencerOTIO's export/import pipeline runs the OTIO conversion in a
    dedicated Python process rather than inside Blender itself — that's
    what the configured interpreter path is used for.
