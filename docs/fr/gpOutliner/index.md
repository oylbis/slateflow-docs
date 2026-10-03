# gpOutliner

![gpOutliner](../../assets/branding/logo_gpoutliner.png){: .addon-hero-logo }

**Un poste de commande dédié pour chaque objet Grease Pencil de la scène.**

gpOutliner ajoute un panneau unique à la vue 3D qui centralise la gestion
des objets Grease Pencil, de leurs calques et des caméras — plus proche de
l'ergonomie d'un logiciel de dessin 2D dédié, sans rien perdre de ce
qu'apporte la vue 3D. Il ne masque ni ne remplace jamais l'Outliner natif de
Blender, les Object Data Properties, ou les opérateurs Grease Pencil — il
met simplement les contrôles qu'on utilise sans arrêt juste là où on dessine
déjà.

![Panneau gpOutliner dans le panneau latéral de la vue 3D](assets/gpOutliner_all_01.png)

## En un coup d'œil

- **Liste d'objets triée par profondeur** — triez vos objets Grease Pencil
  par distance à la caméra, pas seulement par ordre alphabétique.
- **Mode Compensate** — déplacez la profondeur d'un objet et regardez son
  échelle s'ajuster automatiquement pour garder sa taille apparente
  constante à l'écran.
- **Mémoire du mode d'édition** — choisissez si basculer entre dessins
  garde le mode courant, ou mémorise et restaure le dernier mode utilisé
  sur chaque objet individuellement.
- **Opacité globale par objet** — un curseur qui atténue tous les calques
  d'un dessin ensemble, en préservant leur opacité relative.
- **Images de fond de caméra** — ajoutez, réordonnez et gérez des images de
  référence ou des rushes sur le fond de votre caméra, depuis le même
  panneau.
- **Isolation en un clic** — masquez tous les autres objets Grease Pencil,
  ou tous les autres calques de l'objet courant, d'un seul interrupteur.
- **Contraintes caméra en un clic** — Track To et Child Of, appliquées avec
  compensation automatique du tracé.
- **Bascule vue 2D/3D** — ramenez caméra et dessins sélectionnés sur un axe
  de référence plat pour un dessin 2D confortable et sans distorsion, puis
  restaurez tout en un clic.
- **Opérations de tracé intelligentes** — Duplicate Special, Separate
  Special, et Move to Special.
- **Duplication de structure** — copiez toute la hiérarchie de calques d'un
  objet sans copier le moindre trait.

Voir la page **[Fonctionnalités](features.md)** pour une démonstration
complète en images.

## Pourquoi ça reste natif

gpOutliner n'invente jamais un système parallèle là où Blender en a déjà
un : la gestion des calques passe par le widget natif et les opérateurs de
Blender, les contraintes caméra sont de vraies contraintes Blender (juste
appliquées et compensées automatiquement), et rien ici ne verrouille
l'Outliner natif ou l'éditeur Properties. Seules les zones où Blender
n'offre pas de solution directe — tri par profondeur, compensation
d'échelle visuelle, bascule de mise en scène 2D/3D, opacité globale
multiplicative — reçoivent du code dédié.

Nécessite **Blender 5.2 LTS ou plus récent**.

## Licence

[GNU General Public License v3.0 ou ultérieure](https://www.gnu.org/licenses/gpl-3.0.html)
— SPDX : `GPL-3.0-or-later`.

gpOutliner fait partie de la suite **[SlateFlow](../index.md)**.

## Support

Ce projet est développé à son propre rythme, sur le temps libre de son
auteur. Il est fourni **en l'état**, sans garantie.

Un bug à signaler, une suggestion ? Utilisez le canal de support indiqué
sur votre page d'achat — chaque message est lu, mais sans garantie de délai
de réponse.
