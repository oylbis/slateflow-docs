# FAQ & troubleshooting

## Which Blender version do I need?

**Blender 5.0 or newer**, with **5.2 LTS recommended**. storyFlow relies on
the sequencer strip API (`Strip`, `SceneStrip`,
`Window.workspace.sequencer_scene`) introduced in Blender 5.0.

## Do I need the official Storypencil add-on too?

No — storyFlow extends Storypencil's approach but is a complete,
self-contained add-on. Don't install both at once.

## "Setup Storyboard Session" doesn't do anything, or behaves oddly

This entry point expects a **fresh, untouched file**: the default scene and
drawing object still under their stock names, on the default **2D
Animation** workspace. If you've already renamed things or customized your
startup file, the setup step may not recognize it as a fresh start. Start
from a brand-new file for the initial setup.

## Two shots are locked and I can't resize them

This means both shots currently point at the **same drawing scene** — a
red marker also appears on both strips when this happens. storyFlow locks
their in/out points (and the drawing scene's own duration) to avoid
silently corrupting one of the two shots. Reassign one shot to its own
drawing scene (or use **Clean Scenes** if one of them is actually unused)
and the lock lifts itself automatically.

## Can I use storyFlow without Grease Pencil?

storyFlow is built around Grease Pencil drawing scenes — that's the whole
point of the shot ↔ drawing pairing. It doesn't target other drawing
workflows.

## Support

This project is developed at its author's own pace, in their free time.
It's provided **as-is**, with no warranty. Feedback (bugs, suggestions) is
welcome through the support channel listed on your purchase page, but
response times can't be guaranteed.
