# gpFlow

![gpFlow](../../assets/branding/logo_gpflow.png){: .addon-hero-logo }

**Une façon plus rapide de dessiner avec le Grease Pencil dans Blender.**

gpFlow ajoute une boîte à outils flottante, dessinée en GPU, directement
dans la vue 3D — les outils Grease Pencil qu'on utilise sans arrêt
(dessiner, gommer, sélectionner, sculpter, remplir, retourner) sont à un
clic plutôt qu'enfouis dans des menus et des changements de mode. gpFlow ne
réinvente pas le Grease Pencil : il pilote les brosses, modes et opérateurs
natifs de Blender, avec beaucoup moins de friction entre vous et le prochain
trait.

![Boîte à outils flottante au-dessus d'un dessin Grease Pencil](assets/gpFlow_all_01.png)

## En un coup d'œil

- **Dessin / Gomme / Fill en un clic chacun**, avec la dernière brosse
  utilisée mémorisée par mode. Fill pilote l'outil Fill natif de Blender
  (tous les réglages de brosse s'appliquent toujours) ; Shift+clic supprime
  un remplissage sous le curseur, un geste sans équivalent natif.
- **Retravailler sans redessiner** : Lengthen/Shorten en saisissant
  l'extrémité d'un trait et en glissant ; Deform pose un treillis aligné sur
  la vue autour de la sélection pour une distorsion rapide et naturelle ;
  Sculpt bascule directement en mode sculpt natif.
- **Select & Transform** en une seule action — lasso-sélectionnez un trait,
  gpFlow bascule directement en Déplacer, sans clic supplémentaire.
- **Flip qui comprend l'animation** — reflète les traits autour d'un centre
  partagé pour qu'une pose retournée reste cohérente d'une image à l'autre,
  en respectant le multi-frame editing et les calques verrouillés.
- **Rotation du canevas** — tournez la caméra vers un angle de dessin plus
  confortable sans perdre le cadrage d'origine, avec magnétisme à 15° et
  retour en un clic.
- **Raccourcis d'animation** — clé vide, dupliquer la précédente (par calque
  ou sur tous les calques visibles), décaler une séquence de clés.
- **Raccourcis entièrement personnalisables**, par outil, avec détection de
  conflit en direct.

Voir la page **[Fonctionnalités](features.md)** pour une démonstration
complète en images.

## Pourquoi ça reste natif

gpFlow ne remplace jamais un outil, un panneau ou un raccourci de Blender —
il ne fait qu'ajouter une couche par-dessus. La toolbar est dessinée
directement dans la vue 3D (pas de fenêtre custom, pas de zone d'UI
détournée), et chaque action qu'elle déclenche est un vrai opérateur ou
changement de mode Blender. Désactivez gpFlow : votre fichier, vos brosses
et vos habitudes sont exactement comme Blender les a laissés.

Nécessite **Blender 5.2 LTS ou plus récent**. Aucune dépendance
supplémentaire — gpFlow est autonome et ne contacte jamais le réseau.

## Licence

[GNU General Public License v3.0 ou ultérieure](https://www.gnu.org/licenses/gpl-3.0.html)
— SPDX : `GPL-3.0-or-later`.

Une partie du code utilitaire et de compatibilité de version est adaptée de
[nijiGPen](https://github.com/chsh2/nijiGPen) par chsh2, également sous
licence GPLv3.

gpFlow fait partie de la suite **[SlateFlow](../index.md)**.

## Support

Ce projet est développé à son propre rythme, sur le temps libre de son
auteur. Il est fourni **en l'état**, sans garantie.

Un bug à signaler, une suggestion ? Utilisez le canal de support indiqué
sur votre page d'achat — chaque message est lu, mais sans garantie de délai
de réponse.
