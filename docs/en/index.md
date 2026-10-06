# SlateFlow

![SlateFlow](../assets/branding/logo_slateflow.png){: .addon-hero-logo }

**SlateFlow** is a suite of Blender add-ons built for storyboarding,
animation and editing workflows — with a particular focus on **Grease
Pencil**.

This documentation gathers the user guides for every add-on in the suite:
installation, feature details, and support.

## Documented add-ons

<div class="grid cards" markdown>

- **[sequencerFlow](sequencerFlow/index.md)**

    Premiere/Resolve-style editing tools for the VSE: contextual toolbar,
    3-point editing, strip curves, zone guides. Free LITE and paid PRO
    editions.

- **[sequencerOTIO](sequencerOTIO/index.md)**

    A clean round-trip between Blender's VSE and DaVinci Resolve via
    OpenTimelineIO, with non-destructive conform.

- **[storyFlow](storyFlow/index.md)**

    Turns the VSE into a storyboard/animatic bench: every shot is a SCENE
    strip paired with its own Grease Pencil drawing scene, kept in sync
    both ways.

- **[gpFlow](gpFlow/index.md)**

    A floating, GPU-drawn toolbar for faster Grease Pencil drawing: draw,
    erase, fill, reshape, select & transform, flip, all one click away.

- **[dopesheetFlow](dopesheetFlow/index.md)**

    Turns Blender's Dope Sheet into a real light table ("xsheet") for Grease
    Pencil: real thumbnails per key, Scene/Summary/group/layer hierarchy,
    drag & drop, 3D viewport scrubbing.

- **[gpOutliner](gpOutliner/index.md)**

    A dedicated command center for every Grease Pencil object: depth
    sorting, visual-scale compensation, camera tools, 2D/3D staging.

</div>

## Where to find the add-ons

- Free add-ons: [Blender Extensions](https://extensions.blender.org/)
- Paid add-ons: Superhive and Gumroad

!!! tip "Need help?"
    If you can't find the answer to your question in these pages, check the
    **Support** section at the bottom of the relevant add-on's page.

## Reporting a bug

A clear report is the single biggest factor in how fast a bug actually
gets fixed. Before sending one, please include:

- **Which add-on**, and its **version** — shown at the top of its
  **Changelog** page (also in *Edit > Preferences > Get Extensions*,
  under the add-on's own entry).
- **Your Blender version** (*Help > About Blender*, or
  `Help > Save System Info` for the full details).
- **What you did, step by step** — the exact sequence of clicks/actions
  that leads to the problem, starting from a state you can describe (e.g.
  "a new file" or "the attached file"). "It doesn't work" on its own
  can't be diagnosed.
- **What you expected to happen, and what happened instead.**
- **Does it happen every time**, or only sometimes? If only sometimes,
  anything that seems to make it more or less likely helps a lot.
- **A screenshot or short screen recording** for anything visual — worth
  far more than a description of what's on screen.
- **A minimal `.blend` file that reproduces it**, if you can put one
  together — by far the fastest path to an actual fix, since it removes
  all guesswork about your specific scene/file setup. Not always
  possible (confidential production files, a problem tied to a huge
  file) — understood, just say so.

Send all of this through the channel named on the add-on's own **Support**
section (issue tracker, email, or marketplace messaging depending on
where you got it). Missing pieces don't block a report — they just mean
the first reply will probably be a request for them, which slows things
down for everyone.
