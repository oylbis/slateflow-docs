# storyFlow

![storyFlow](../../assets/branding/logo_storyflow.png){: .addon-hero-logo }

**Storyboard et animatique dans le VSE de Blender, sans se battre avec l'outil.**

storyFlow étend l'addon officiel **Storypencil** (Blender Foundation) pour
transformer le Video Sequence Editor en un vrai établi de storyboard/
animatique : une scène de montage où chaque plan est un strip SCENE pointant
vers sa propre scène de dessin Grease Pencil. Pas de moteur d'édition ou de
dessin parallèle — tout repose entièrement sur les scènes, workspaces et
strips natifs de Blender, et storyFlow comble discrètement les manques que
Blender laisse ouverts pour ce workflow précis : basculer entre un plan et
son dessin fait perdre le fil, les durées se désynchronisent, deux plans
peuvent se retrouver à pointer vers le même dessin sans avertissement, rien
n'indique en un coup d'œil si un plan est synchronisé avec son dessin.
storyFlow referme ces manques pour que l'aller-retour entre montage et dessin
reste rapide et transparent.

![Panneaux storyFlow dans le VSE](assets/storyFlow_all_01.png)

## En un coup d'œil

- **Un clic pour démarrer un projet** : "Setup Storyboard Session" crée la
  scène de montage et une scène de dessin modèle, charge le bon workspace, et
  ajoute votre premier plan — prêt à dessiner.
- **Tab entre un plan et son dessin**, avec un atterrissage à la bonne
  *frame*, pas juste la bonne scène, dans les deux sens.
- **Les durées restent synchronisées dans les deux sens** : redimensionner la
  plage d'une scène de dessin déplace le strip du plan ; redimensionner le
  strip déplace la scène de dessin.
- **Un avertissement avant que ça ne devienne un problème** : un marqueur
  rouge apparaît si deux plans finissent par pointer vers la même scène de
  dessin.
- **Le son suit l'image** : l'audio qui chevauche un plan est copié
  automatiquement dans sa scène de dessin, pitch/pan/volume/vitesse
  préservés.
- **Métadonnées incrustées sur l'image** au besoin — nom du plan, numéro de
  frame, durée — chacune un interrupteur indépendant.
- **Outils de production** : ajout/renommage de plans par lot, nettoyage des
  scènes de dessin inutilisées, rendu directement depuis la timeline.

![Statut de synchro et avertissement de scène partagée dans le VSE](assets/storyFlow_all_02.png)

Voir **[Fonctionnalités](features.md)** pour une démonstration en images de
tout ce qui précède.

## Pourquoi ça reste natif

storyFlow ne remplace jamais une scène, un workspace, un panneau ou un
raccourci de Blender — chaque fonctionnalité s'appuie directement dessus.
Désactivez l'addon : il reste un fichier `.blend` ordinaire, avec de vraies
scènes, de vrais strips, de vraies contraintes, rien qui nécessite storyFlow
pour avoir un sens. Les workspaces "Video Editing" et "2D Animation" utilisés
sont les workspaces standards de Blender, pas une UI custom.

## Prérequis

**Blender 5.0 ou plus récent** (**5.2 LTS recommandé**). storyFlow s'appuie
sur l'API strips du séquenceur (`Strip`, `SceneStrip`,
`Window.workspace.sequencer_scene`) introduite dans Blender 5.0.

## Licence

[GNU General Public License v3.0 ou ultérieure](https://www.gnu.org/licenses/gpl-3.0.html)
— SPDX : `GPL-3.0-or-later`.

Basé sur l'addon [Storypencil](https://developer.blender.org/docs/features/scene_and_object/storypencil/)
(Blender Foundation, GPL) par Antonio Vazquez, Matias Mendiola, Daniel
Martinez Lara, Rodrigo Blaas et Samuel Bernou.

storyFlow fait partie de la suite **[SlateFlow](../index.md)**.
