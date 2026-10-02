# Getting started

## Starting a new project

Start from Blender's default **2D Animation** workspace, on a fresh,
untouched file — don't rename the scene or the default drawing object
first, since the setup step needs the stock names to recognize a fresh
start.

Open the **View3D** menu bar and choose **"Setup Storyboard Session"**. One
click, no dialog:

- Loads the "Video Editing" workspace
- Creates the edit scene (your VSE timeline) and a template drawing scene
- Wires everything together
- Adds your first shot, ready to draw

## The core loop: edit ↔ draw

Every shot in the timeline is a **SCENE strip** pointing to its own Grease
Pencil drawing scene. Select a shot and press **Tab** to jump straight into
its drawing — not just the right scene, the right *frame*, whichever
direction you're going. Press **Tab** again (from the Dope Sheet or the 3D
View) to come straight back to the edit, landing exactly where that shot
sits in the timeline.

While you're in the drawing scene, the "2D Animation" workspace's own
embedded Sequencer still shows the full timeline for context, and Pin Scene
is kept switched off automatically wherever it would otherwise silently
block the swap.

## Adding more shots

Use the **Add Scene** tool (in the StoryFlow sidebar panel of the VSE, or
right next to your selected shot) to add one or several shots at once, with
naming, prefix/suffix and auto-numbering. With nothing selected, new shots
land at the playhead, at the end of the timeline, or on a new channel — your
choice.

## Keeping durations in sync

Resize a drawing scene's frame range, and its shot strip in the edit
follows automatically. Resize the strip instead, and the drawing scene
follows — with every later shot in the timeline shifting along so nothing
overlaps. See **[Features](features.md)** for the trim-vs-push distinction
when resizing a strip.

Once you're comfortable with this basic loop, the **[Features](features.md)**
page covers everything else: batch tools, sound sync, metadata overlays and
rendering straight from the timeline.
