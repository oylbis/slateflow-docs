# Fonctionnalités

## Navigation

![Naviguer entre plans et dessins](assets/storyFlow_navigation_01.gif)

- **Tab** bascule entre le plan sélectionné et sa scène de dessin, en
  atterrissant à la *frame* correspondante dans les deux sens — pas juste un
  changement de scène. Tab bascule aussi entre les workspaces "Video
  Editing" et "2D Animation", désactive Pin Scene partout où il serait resté
  bloqué, et pointe le Sequencer intégré du workspace de dessin vers la
  scène de montage principale.
- **Ctrl+←/→** se déplace entre les clés d'animation du plan courant.
- **Alt+←/→** se déplace entre les scènes de dessin, sans quitter le
  contexte de dessin.

## Synchro des durées, dans les deux sens

![Synchro de durée entre un strip et sa scène de dessin](assets/storyFlow_synchro_01.gif)

Redimensionnez la plage d'une scène de dessin et son strip de plan suit ;
redimensionnez le strip et c'est la scène de dessin qui suit — avec tous les
plans suivants de la timeline qui se décalent automatiquement pour qu'il n'y
ait jamais de chevauchement.

Deux façons explicites d'étendre ou de rétrécir un plan :

- **Par défaut** (glisser une poignée, ou double-clic sans cocher l'option) :
  rogne le plan voisin.
- **Ctrl maintenu** pendant le glisser (ou la case à cocher du popup
  double-clic) : pousse tous les plans suivants (ou précédents), sur tous
  les canaux, au lieu de rogner.

## Protection des scènes partagées

Si deux plans finissent par pointer vers la même scène de dessin — un
copier/coller entre fichiers, une réassignation manuelle de scène — un
**marqueur rouge** apparaît directement sur les deux strips pour que ça ne
passe pas inaperçu. Tant que le partage dure, l'édition des points in/out
des plans concernés (ou de la durée de la scène de dessin elle-même) est
verrouillée pour éviter de corrompre silencieusement l'un des deux plans ;
le verrou se lève tout seul dès que le partage est résolu.

## Un overlay en direct sur le plan sélectionné

Un petit overlay à l'écran affiche le nom et la durée du plan sélectionné en
un coup d'œil dans le VSE, sans ouvrir de panneau latéral.

## Le son suit l'image

L'audio qui chevauche un plan est copié automatiquement dans sa scène de
dessin, repositionné correctement, pitch/pan/volume/vitesse préservés — vous
pouvez entendre le timing en dessinant sans aucune copie manuelle.

## Métadonnées incrustées sur l'image

Au besoin, storyFlow peut incruster des métadonnées directement sur l'image :
nom du plan, numéro de frame (projet ou relatif au plan), durée — chacune un
**interrupteur indépendant**, pas un overlay tout-ou-rien.

## Outils de production

![Ajouter des plans par lot](assets/storyFlow_addShots_01.gif)

Au-delà du flux quotidien, storyFlow couvre aussi l'intendance d'une vraie
production :

- **Ajouter**, un plan ou plusieurs d'un coup, avec nommage, préfixe/suffixe
  et numérotation automatique. Atterrit à côté du plan sélectionné — ou, sans
  rien de sélectionné, à la tête de lecture, en fin de timeline, ou sur un
  nouveau canal, à votre choix. Chaque plan créé est sa propre scène
  indépendante.

![Ajouter et placer plusieurs plans d'un coup](assets/storyFlow_addShots_02.gif)

- **Renommage par lot**, sur la sélection ou toute la timeline : soit
  chercher/remplacer dans les noms existants, soit poser un nouveau nom de
  base avec préfixe/suffixe et numérotation — numérotée dans l'ordre de la
  timeline, pas de la sélection, pour que la séquence reste toujours lisible.
- **Nettoyer les scènes de dessin inutilisées** en un clic, avec une
  protection par scène pour tout ce que vous voulez garder quand même.
- **Rendre directement depuis la timeline**, en séquence d'images ou en
  vidéo — découpé en segments là où le strip visible au canal le plus haut
  change réellement, pour que des plans volontairement superposés sur
  plusieurs canaux se rendent correctement au lieu qu'un seul gagne
  silencieusement pour toute sa durée d'origine. Le rendu en séquence
  d'images suit les *vraies* images-clés du dessin (objets, Grease Pencil,
  NLA, marqueurs de scène), pas un intervalle fixe, et peut réinjecter le
  résultat dans la timeline comme nouveaux strips automatiquement.
