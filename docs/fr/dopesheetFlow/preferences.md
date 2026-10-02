# Préférences & raccourcis

## Panneau latéral (N) de la Dope Sheet

Dans la Dope Sheet, ouvrez le panneau latéral (touche **N**) et repérez
l'onglet **dopesheetFlow**. Il regroupe les réglages d'affichage de
l'overlay :

| Réglage | Effet | Par défaut |
|---|---|---|
| **Row Height** | Hauteur des rangées de l'overlay | — |
| **Hover Preview Scale** | Taille de l'aperçu flottant (Alt+survol) | — |
| **Scene** | Affiche/masque la rangée composite Scene | Désactivé |
| **Summary** | Affiche/masque la rangée composite Summary | Activé |
| **Groups** | Affiche/masque les rangées d'en-tête de groupe | Activé |

!!! note "Désactiver les rangées de groupe sans perdre leurs layers"
    Décocher **Groups** masque uniquement la rangée d'en-tête de chaque
    groupe (plus de vignette composite de groupe) — ses layers restent
    visibles, affichés à plat comme s'il n'y avait jamais eu de groupe.

## Préférences de l'addon

Dans **Edit > Preferences > Add-ons**, ouvrez les préférences de
dopesheetFlow pour accéder au réglage du raccourci de scrubbing 3D :

- **Modifier** : `None`, `Ctrl`, `Alt` ou `Shift` — **Alt** par défaut.
- **Key** : la touche à maintenir avec le modificateur — **M** par défaut.

Le raccourci complet par défaut est donc **Alt+M**, maintenu dans la vue
3D pour afficher le défileur de vignettes. Tout changement s'applique
**immédiatement**, sans redémarrer Blender ni désactiver/réactiver l'addon.

## Raccourcis dans la Dope Sheet

| Action | Raccourci |
|---|---|
| Déplacer une clé (mode trim) | Cliquer-glisser une vignette |
| Déplacer une clé et tout ce qui suit (mode ripple) | **Ctrl** + cliquer-glisser |
| Ajouter/retirer une clé de la sélection | **Shift+clic** |
| Aperçu flottant agrandi | **Alt** + survol |
| Renommer un layer ou un groupe | Double-clic sur son nom |
| Changer le type de keyframe | Clic droit sur la pastille de type |
| Isoler une rangée | Bouton **Isolate** (Shift+clic pour cumuler) |

## Raccourci dans la vue 3D

| Action | Raccourci (par défaut) |
|---|---|
| Afficher le défileur de vignettes | Maintenir **Alt+M** |
| Parcourir les clés du layer actif | Glisser horizontalement pendant le scrub |
| Changer de layer scrubbé | Déplacer la souris verticalement pendant le scrub |
| Annuler le scrub | **Échap** ou clic droit |
