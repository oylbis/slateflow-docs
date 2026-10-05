# Fonctionnalités

## Liste d'objets triée par profondeur

![Trier les objets Grease Pencil par profondeur](assets/gpOutliner_showOrder_01.gif)

Triez vos objets Grease Pencil par distance à la caméra, pas seulement par
ordre alphabétique — aucun moyen natif de le faire dans Blender ; gpOutliner
la calcule en direct le long de l'axe de visée réel de la caméra. Un widget
par ligne permet de glisser horizontalement pour ajuster, d'utiliser les
boutons `<`/`>` pour ±1, ou de saisir une valeur exacte.

## Mode Compensate

![Le mode Compensate garde la taille apparente constante](assets/gpOutliner_compensate_01.gif)

Déplacez la profondeur d'un objet et regardez son échelle s'ajuster
automatiquement pour garder sa taille apparente constante à l'écran — de
quoi replacer un dessin dans l'espace 3D sans qu'il grossisse ou rétrécisse
visuellement.

## Opacité & isolation

- **Opacité globale par objet** — un curseur qui atténue tous les calques
  d'un dessin ensemble, en préservant leur opacité relative, plutôt que de
  devoir toucher chaque calque à la main.
- **Isolation en un clic** — masquez tous les autres objets Grease Pencil,
  ou tous les autres calques de l'objet courant. Désactivez et tout revient
  exactement comme avant.
- **Mémoire du mode d'édition** — choisissez si basculer entre dessins
  garde le mode courant, ou mémorise et restaure le dernier mode utilisé
  sur chaque objet individuellement.

## Outils caméra

- **Liste de caméras optionnelle** dans le même panneau — visibilité,
  sélectabilité, bascule de caméra active, et positionnement rapide sur
  l'axe Z local.
- **Images de fond de caméra** — ajoutez, réordonnez et gérez des images de
  référence ou des rushes sur le fond de votre caméra : charger une image,
  basculer sa visibilité, régler son opacité, réordonner la pile.
- **Contrainte Child Of en un clic** — parente rigidement un dessin à la
  caméra active (une vraie contrainte Blender, juste appliquée et nommée
  pour vous).

## Boards (contextes de dessin 2D/3D)

![Basculer un dessin entre mise en scène 3D et 2D plat](assets/gpOutliner_2D3D_01.gif)

Un **board** est une caméra dédiée à laquelle appartiennent un ou
plusieurs dessins, pour basculer tout le groupe à plat pour un dessin 2D
confortable et sans distorsion, puis revenir exactement à la mise en
scène 3D quittée — aucun recentrage, aucune distorsion, chaque autre objet
de la scène reste visuellement en place.

- Créez un board à partir d'une nouvelle caméra de référence (toujours
  initialisée en pose 2D plate), ou promouvez n'importe quelle caméra
  existante.
- **Align to 2D** et **Back to 3D** sont deux boutons séparés plutôt
  qu'une seule bascule, chacun grisé selon ses propres conditions — le
  panneau indique aussi directement le statut 2D/3D actuel de la caméra,
  et désactive Back to 3D (avec la raison affichée) dès que la caméra a
  été déplacée à la main depuis le dernier alignement.
- Le panneau d'un board liste ses dessins membres (ajoutez la sélection
  courante, retirez-en un à la fois) et sa distance de vue 2D. Changer de
  board change aussi la caméra active de la scène.

## Opérations de tracé intelligentes

![Déplacer des traits vers un autre objet et calque](assets/gpOutliner_moveTo_01.gif)

- **Duplicate Special** garde le mode de dessin actif pendant la
  duplication.
- **Separate Special** fait passer une sélection directement dans un
  nouvel objet.
- **Move to Special** envoie les traits sélectionnés vers n'importe quel
  autre objet et calque, choisi dans une liste avec recherche.

## Duplication de structure

Copiez toute la hiérarchie de calques d'un objet sans copier le moindre
trait, prêt pour un dessin neuf sur la même configuration de calques.
