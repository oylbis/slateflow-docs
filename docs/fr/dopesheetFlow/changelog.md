# Historique des versions

Version actuelle : **1.0.0**.

## Depuis la première release

- Fiabilité de génération des vignettes améliorée sur les fichiers denses
  (le budget de génération par lot ne favorise plus systématiquement les
  mêmes clés).
- Le scrubbing dans la vue 3D déclenche désormais sa propre génération de
  vignettes, même sans aucune Dope Sheet ouverte à l'écran.
- Une clé vide (*Insert Blank Keyframe*, sans trait) affiche maintenant une
  vignette dédiée au lieu de sembler non générée.
- Correction d'un cas où une couleur de canal personnalisée ressortait
  légèrement délavée par rapport à la couleur réellement choisie.

## Roadmap

Idées envisagées pour une future version — pas des engagements, juste la
direction actuelle :

- **LOD (niveau de détail)** pour les timelines très longues et denses, si
  la performance d'affichage à zoom arrière extrême devient un vrai
  problème en pratique.
- D'autres options de représentation pour les tenues d'instance très
  longues (forme exacte pas encore décidée).

Les retours et suggestions sont les bienvenus — voir
[Support](index.md#support).
