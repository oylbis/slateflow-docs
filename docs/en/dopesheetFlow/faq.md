# FAQ & troubleshooting

## Which Blender version do I need?

**Blender 5.2 or newer**, with Grease Pencil objects in the **v3** format
(the default format on these versions — no action needed on a file created
with Blender 5.2+).

## The button doesn't show up after installation? {: #button-missing-after-install }

On a Blender profile that has **never** had dopesheetFlow installed
before, the header button (and the rest of the add-on) can occasionally
fail to appear right after an *Install from Disk*.

**Fix**: in *Edit > Preferences > Get Extensions*, uncheck then recheck
dopesheetFlow once. No reinstall is needed — this simple
disable/re-enable cycle is enough. This doesn't happen again afterwards,
including after restarting Blender.

## A thumbnail stays all white, with no visible outline

That's expected: a plain white background **with no outline** signals a
**confirmed empty key** (created via *Insert Blank Keyframe*, no strokes
drawn) — not a thumbnail that failed to load. Thumbnails still pending
generation look different (placeholder), and turn into the real image as
soon as generation completes.

## A thumbnail takes a while to appear

On a very dense drawing, or when scrubbing far from the already-visible
area, generation happens in small batches so the interface never blocks —
it catches up continuously and settles after a moment. This isn't a
freeze: you can keep working while it does.

## Why isn't there onion skinning (neighboring drawings shown faded) in the thumbnails?

Tried then abandoned: thumbnail ink is rasterized in black, so a simple
opacity setting to show the previous/next drawing faded stays unreadable
in real use, rather than useful. See [Features](features.md) for details.

## The Alt+M shortcut for 3D scrubbing conflicts with another tool

The shortcut is customizable: open the add-on's preferences (*Edit >
Preferences > Add-ons > dopesheetFlow*) and change the modifier and/or
key. The change applies immediately. See
[Preferences & shortcuts](preferences.md).

## Can I use dopesheetFlow without Grease Pencil?

No: the xsheet overlay only makes sense for **Grease Pencil** objects. In
a Dope Sheet with no active Grease Pencil object, the overlay simply
doesn't show up (the Dope Sheet stays Blender's own, unchanged).

## Support

This project is developed at its author's own pace, in their free time.
It's provided **as-is**, with no warranty. Feedback (bugs, suggestions) is
welcome through the support channel listed on your purchase page, but
response times can't be guaranteed.
