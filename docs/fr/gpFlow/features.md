# Fonctionnalités

![Aperçu général de gpFlow](assets/gpFlow_demo_01.gif)

## Dessin

- **Mode Dessin** en un clic, avec la dernière brosse utilisée.
- **Mode Gomme** en un clic, cohérent avec les autres modes.
- **Mode Fill** en un clic — pilote l'outil Fill natif de Blender, tous les
  réglages de brosse (lignes d'extension, fermeture d'écart...) s'appliquent
  toujours. **Shift+clic** supprime un remplissage sous le curseur, un
  geste sans équivalent natif.

## Retravailler les traits

![Lengthen/Shorten sur un trait](assets/gpFlow_LS_01.gif)

- **Lengthen/Shorten** — saisissez l'extrémité la plus proche d'un trait,
  surlignée en survol, et glissez.

![Deform avec un treillis temporaire](assets/gpFlow_deform_01.gif)

- **Deform** pose un treillis aligné sur la vue autour de votre sélection
  pour une distorsion rapide et naturelle (2D ou volumétrique, résolution
  réglable). Ctrl+clic sur le bouton (ou son raccourci) pour construire ce
  treillis directement à partir d'une sélection déjà faite, sans avoir à
  resélectionner une fois dans l'outil.
- **Sculpt** bascule directement en mode sculpt natif de Blender, avec un
  comportement d'undo plus sûr.

## Select & Transform

Lasso-sélectionnez un trait et gpFlow bascule directement en Déplacer — pas
de clic supplémentaire.

## Flip

Reflète les traits autour d'un centre partagé pour qu'une pose retournée
reste cohérente d'une image à l'autre. Respecte le multi-frame editing et
ignore automatiquement les calques verrouillés.

## Canevas

![Rotation du canevas de dessin](assets/gpFlow_canva_01.png)

Tournez la caméra vers un angle de dessin plus confortable sans perdre le
cadrage d'origine : magnétisme par incréments de 15°, et retour en un clic
à la position de départ. Un cadre de référence discret reste affiché en
permanence pour toujours savoir de combien vous avez tourné.

## Raccourcis d'animation

- Insérer une clé vide.
- Dupliquer la précédente (par calque, ou sur tous les calques visibles).
- Décaler toute une séquence de clés en avant ou en arrière, d'un nombre de
  frames réglable.

## Raccourcis

Le raccourci de chaque outil est personnalisable — voir
**[Préférences](preferences.md)**.
