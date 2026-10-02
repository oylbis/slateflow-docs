# FAQ & troubleshooting

## Which Blender version do I need?

**Blender 5.0 or newer** (5.2 LTS recommended).

## Do I need to install opentimelineio myself?

No, in most cases. sequencerOTIO carries bundled wheels for Blender's own
Python and installs the right one automatically on first load. See
[Configuration](configuration.md) for the platforms where a manual/network
install is needed instead.

## My media isn't relinking automatically in Resolve

Make sure the `.otio` file and its source media stay inside the folder you
exported to — Resolve's automatic relinking mostly looks there (plus its
own Media Storage locations). The export warns you when a referenced
source sits outside the export folder, specifically because Resolve won't
reliably relink it in that case.

## Conform recreated a clip I expected to stay "unchanged"

Conform matches clips by media **and** track type (video vs. audio) — a
video clip and an audio clip sharing the same source file are never
conflated. If a clip still comes back misclassified, check whether its
position, trim or speed changed on the Resolve side since the reference
export; conform's job is to reflect exactly that.

## What happens to color strips, text strips or drawing scenes on conform?

They're outside conform's scope entirely — only strips backed by real
media (video/image/sound) are compared and touched. Everything else is
left exactly as it is in Blender.

## Support

This project is developed at its author's own pace, in their free time.
It's provided **as-is**, with no warranty. Feedback (bugs, suggestions) is
welcome through the support channel listed on your purchase page, but
response times can't be guaranteed.
