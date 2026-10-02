# Historique des versions

## 1.0.0 — Première release

Première version publique, avec l'ensemble des fonctionnalités décrites
dans ce guide :

- Vignettes réelles par rasterisation GPU, avec cache et génération
  asynchrone par lots.
- Hiérarchie Scene / Summary / groupes / layers, chaque niveau togglable
  indépendamment.
- Déplacement de clé en mode trim ou ripple, multi-sélection inter-layers
  et inter-groupes, déplacement "groupe-comme-parent".
- Aperçu flottant agrandi (Alt+survol).
- Isolation de rangée (Isolate, cumulable).
- Couleur de canal et type de keyframe éditables depuis l'overlay.
- Renommage de layer/groupe depuis l'overlay (double-clic).
- Scrubbing de vignettes dans la vue 3D (Alt+M par défaut, personnalisable),
  avec navigation verticale entre layers et wrap-around du curseur en bord
  d'écran.

### Améliorations depuis la sortie

Plusieurs corrections ont suivi la première release, à partir de retours
d'usage réel sur des fichiers de production :

- Fiabilité de la génération de vignettes sur les fichiers denses (budget
  de génération par lot revu pour ne plus favoriser systématiquement les
  mêmes clés).
- Le scrubbing dans la vue 3D génère désormais lui-même les vignettes dont
  il a besoin, même sans Dope Sheet ouverte à l'écran.
- Une clé vide (*Insert Blank Keyframe*, sans aucun trait) affiche
  désormais une vignette dédiée (fond blanc uni) au lieu de paraître non
  générée.
- Correction d'un cas où la couleur de canal personnalisée ressortait
  légèrement voilée par rapport à la couleur réellement choisie.

Ces améliorations sont toutes incluses dans la version **1.0.0** actuelle
(pas de changement de numéro de version à ce jour).
