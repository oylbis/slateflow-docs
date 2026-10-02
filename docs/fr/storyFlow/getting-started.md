# Prise en main

## Démarrer un nouveau projet

Partez du workspace **2D Animation** par défaut de Blender, sur un fichier
neuf et jamais touché — ne renommez ni la scène ni l'objet de dessin par
défaut avant, car l'étape de setup a besoin des noms d'origine pour
reconnaître un démarrage neuf.

Ouvrez la barre de menu **View3D** et choisissez **"Setup Storyboard
Session"**. Un clic, aucune boîte de dialogue :

- Charge le workspace "Video Editing"
- Crée la scène de montage (votre timeline VSE) et une scène de dessin
  modèle
- Câble tout ensemble
- Ajoute votre premier plan, prêt à dessiner

## La boucle de base : montage ↔ dessin

Chaque plan de la timeline est un **strip SCENE** pointant vers sa propre
scène de dessin Grease Pencil. Sélectionnez un plan et appuyez sur **Tab**
pour sauter directement dans son dessin — pas juste la bonne scène, la bonne
*frame*, quel que soit le sens. Appuyez à nouveau sur **Tab** (depuis la
Dope Sheet ou la vue 3D) pour revenir directement au montage, exactement à
l'endroit où ce plan se trouve dans la timeline.

Pendant que vous êtes dans la scène de dessin, le Sequencer intégré du
workspace "2D Animation" continue d'afficher la timeline complète pour le
contexte, et Pin Scene est désactivé automatiquement partout où il
bloquerait sinon le basculement silencieusement.

## Ajouter des plans

Utilisez l'outil **Add Scene** (dans le panneau latéral StoryFlow du VSE, ou
juste à côté de votre plan sélectionné) pour ajouter un ou plusieurs plans
d'un coup, avec nommage, préfixe/suffixe et numérotation automatique. Sans
rien de sélectionné, les nouveaux plans atterrissent à la tête de lecture, en
fin de timeline, ou sur un nouveau canal — à votre choix.

## Garder les durées synchronisées

Redimensionnez la plage d'une scène de dessin, et son strip de plan dans le
montage suit automatiquement. Redimensionnez plutôt le strip, et c'est la
scène de dessin qui suit — avec tous les plans suivants de la timeline qui se
décalent pour qu'il n'y ait jamais de chevauchement. Voir
**[Fonctionnalités](features.md)** pour la distinction rogner/pousser lors
d'un redimensionnement.

Une fois à l'aise avec cette boucle de base, la page
**[Fonctionnalités](features.md)** couvre tout le reste : outils par lot,
synchro son, overlays de métadonnées et rendu directement depuis la
timeline.
