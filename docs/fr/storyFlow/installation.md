# Installation

storyFlow est packagé comme une **extension Blender** (format introduit avec
Blender 4.2) : pas de script à copier-coller, pas de dossier à placer
manuellement.

## Étapes

1. Téléchargez le fichier `storyFlow-<version>.zip`.
2. Dans Blender, ouvrez **Edit > Preferences > Get Extensions** (cet onglet
   s'appelle **Add-ons** sur certaines versions).
3. Cliquez sur le menu ▾ en haut de la fenêtre, puis **Install from Disk...**
4. Sélectionnez le fichier `.zip` téléchargé.

## Prérequis

**Blender 5.0 ou plus récent** (**5.2 LTS recommandé**). storyFlow s'appuie
sur l'API strips du séquenceur (`Strip`, `SceneStrip`,
`Window.workspace.sequencer_scene`) introduite dans Blender 5.0.

## Mettre à jour vers une nouvelle version

Blender identifie l'extension par son identifiant interne : réinstaller un
`.zip` plus récent remplace proprement la version précédente, sans doublon.

!!! warning "Un bouton ou un panneau n'apparaît pas après l'installation ?"
    Sur un profil Blender qui n'a jamais eu l'addon installé, certains
    éléments d'interface peuvent occasionnellement ne pas apparaître
    immédiatement après l'installation. Désactivez puis réactivez l'addon une
    fois (dans *Preferences > Get Extensions*) — aucune réinstallation n'est
    nécessaire.
