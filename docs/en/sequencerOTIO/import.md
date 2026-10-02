# Import & conform

Bringing a `.otio` back from Resolve, in one of three modes.

## Add

Imports alongside whatever's already in the scene — the simplest mode,
useful for bringing in a sequence you don't already have in Blender.

## Replace

Clears the VSE first, then imports — a full re-sync when you want the
Blender edit to exactly mirror what Resolve has.

## Conform (the round-trip mode)

Compares the **live Blender edit** against the Resolve export and
classifies every clip:

| Status | Meaning |
|---|---|
| Unchanged | No difference detected |
| Moved | Position changed |
| Retrimmed | In/out points changed |
| Split | Clip was cut into more than one piece |
| Changed | Properties (opacity, volume, transform, speed) differ |
| New | Present in the Resolve export, not in Blender |
| Deleted | Present in Blender, missing from the Resolve export |

You can then **optionally apply just the changes** — nothing gets blindly
re-imported, so edits made inside Blender *after* the original export
aren't discarded just because Resolve sent something back.

!!! info "What's in scope for conform"
    Conform works on any strip backed by real media (video/image/sound
    clips). Color strips, text strips, drawing scenes and adjustment layers
    sit outside the diff and are left untouched.
