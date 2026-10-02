# Prise en main

## Activer l'overlay

Ouvrez une **Dope Sheet** sur un objet Grease Pencil, puis cliquez sur le
bouton dopesheetFlow dans l'en-tête de l'éditeur (à côté des boutons
d'overlay natifs de Blender). L'overlay se dessine par-dessus la colonne de
channels existante — la Dope Sheet elle-même n'est jamais modifiée tant que
l'overlay est désactivé.

![Overlay xsheet activé dans la Dope Sheet](assets/dopesheetFlow_all_01.png)

## Lire la hiérarchie

De haut en bas, l'overlay peut afficher jusqu'à quatre niveaux de rangées :

| Rangée | Contenu |
|---|---|
| **Scene** | Composite de tous les objets Grease Pencil visibles de la scène |
| **Summary** | Composite de tous les layers visibles d'un objet |
| **Groupe** | Composite des layers visibles de ce groupe |
| **Layer** | Le dessin réel de ce layer, clé par clé |

Chaque niveau a sa propre vignette composite et peut être affiché ou masqué
indépendamment (voir [Préférences](preferences.md)).

## Les trois états d'une vignette

- **Image réelle** : le dessin de la clé, rendu par rasterisation GPU.
- **Vide (fond blanc)** : la clé existe (*Insert Blank Keyframe*) mais ne
  contient aucun trait — distingué du fond du bloc par un fin cadre.
- **En attente** : la vignette n'a pas encore été générée (dessin très
  dense, génération différée par petits lots pour rester fluide). Elle
  apparaît l'instant suivant, sans action nécessaire de votre part.

## Premiers gestes à essayer

1. **Survolez** une vignette avec **Alt** maintenu : un aperçu flottant
   agrandi apparaît près du curseur.
2. **Cliquez-glissez** une clé pour la déplacer dans le temps.
3. **Cliquez sur le bouton Isolate** d'une rangée pour la mettre en évidence
   (Shift+clic pour cumuler sur plusieurs rangées).
4. **Double-cliquez** sur le nom d'un layer ou d'un groupe pour le renommer.
5. Dans la vue 3D, maintenez **Alt+M** pour faire apparaître le défileur de
   vignettes près du curseur.

Chacun de ces gestes est détaillé dans la page **[Fonctionnalités](fonctionnalites.md)**.
