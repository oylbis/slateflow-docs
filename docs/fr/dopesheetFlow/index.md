# dopesheetFlow

![dopesheetFlow](../../assets/branding/logo_dopesheetflow.png){: .addon-hero-logo }

**Une vraie table lumineuse pour le Grease Pencil, dans la Dope Sheet de Blender.**

dopesheetFlow transforme la Dope Sheet en "xsheet" : chaque clé Grease Pencil
est affichée comme une vraie vignette du dessin, par layer, alignée sur les
frames, avec une réglette de tenue entre deux instances — le même workflow que d'autres logiciels d'animation 2D, en simple "overlay" dans la
Dope Sheet native de Blender.

![Vue d'ensemble de l'overlay xsheet dans la Dope Sheet](assets/dopesheetFlow_all_01.png)

## En un coup d'œil

- **Vraies vignettes**, générées par rasterisation GPU directe des traits
  Grease Pencil (pas un rendu complet), avec cache et génération asynchrone
  pour rester fluide même sur des dessins denses.
- **Hiérarchie complète** : une rangée Scene (composite de tous les objets GP
  visibles), une rangée Summary (composite des layers d'un objet), des
  groupes et des layers — chaque niveau avec sa propre vignette composite,
  chacun activable/désactivable indépendamment.
- **Déplacer une clé** à la souris, avec deux modes (trim / ripple),
  multi-sélection inter-layers et inter-groupes, et déplacement
  "groupe-comme-parent" (déplacer la vignette d'un groupe déplace la vraie
  clé de chacun de ses layers enfants).
- **Alt + survol** pour un aperçu flottant agrandi de n'importe quelle vignette.
- **Isoler** une rangée en un clic (vrai *hide* Blender, cumulable avec
  Shift+clic sur plusieurs rangées).
- **Couleur de canal et type de clé**, modifiables directement depuis
  l'overlay.
- **Renommer** un layer ou un groupe en double-cliquant sur son nom.
- **Scrubbing dans la vue 3D** : une touche maintenue affiche un défileur de
  vignettes près du curseur, sans jamais quitter la vue 3D.

Voir la page **[Fonctionnalités](features.md)** pour une démonstration
complète en images.

## Pourquoi ça reste natif

dopesheetFlow n'introduit pas de nouvel éditeur ni de modèle de données
parallèle — tout ce qu'il affiche et déplace
est un vrai layer, groupe ou keyframe Grease Pencil. Désactivez l'overlay
depuis le bouton d'en-tête : la Dope Sheet redevient exactement celle de
Blender.

Nécessite **Blender 5.2 ou plus récent**.

## Licence

[GNU General Public License v3.0 ou ultérieure](https://www.gnu.org/licenses/gpl-3.0.html)
— SPDX : `GPL-3.0-or-later`.

dopesheetFlow fait partie de la suite **[SlateFlow](../index.md)**.

## Support

slateFlow est développé sur mon temps libre, en parallèle d'une activité
d'indépendant. Les prix sont volontairement accessibles : en échange, je ne
peux pas m'engager sur des délais de correctifs ou des développements sur
demande. Les retours et les idées sont les bienvenus — les bugs les plus
importants seront corrigés, et les bonnes idées feront leur chemin. Merci de
votre compréhension.

Trouvé un bug ? Voir [Signaler un bug](../index.md#signaler-un-bug) pour
savoir quoi inclure.
