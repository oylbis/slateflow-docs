# Installation

dopesheetFlow est packagé comme une **extension Blender** (format introduit
avec Blender 4.2) : pas de script à copier-coller, pas de dossier à placer
manuellement dans `scripts/addons`.

## Étapes

1. Téléchargez le fichier `dopesheetFlow-<version>.zip` depuis votre source
   d'achat (ou depuis Blender Extensions pour la version gratuite).
2. Dans Blender, ouvrez **Edit > Preferences > Get Extensions** (l'onglet
   s'appelle **Add-ons** sur certaines versions).
3. Cliquez sur le menu ▾ en haut de la fenêtre, puis **Install from Disk...**
4. Sélectionnez le fichier `.zip` téléchargé.

L'addon s'active automatiquement après l'installation. Un nouveau bouton
apparaît dans l'en-tête de la **Dope Sheet** pour activer/désactiver
l'overlay xsheet.

## Prérequis

- **Blender 5.2 ou plus récent.**
- **Grease Pencil v3** (le format de données Grease Pencil introduit dans
  les versions récentes de Blender — c'est le format par défaut sur
  Blender 5.2+, aucune action nécessaire de votre part).

## Mettre à jour vers une nouvelle version

Blender identifie l'extension par son identifiant interne : réinstaller un
`.zip` plus récent **remplace proprement** la version précédente, sans
doublon. Suivez les mêmes étapes qu'à l'installation initiale.

!!! warning "Le bouton n'apparaît pas juste après l'installation ?"
    Sur un profil Blender qui n'a encore jamais eu l'addon installé, le
    bouton d'en-tête peut ne pas apparaître immédiatement après
    l'installation. **Désactivez puis réactivez l'addon une fois** (dans
    *Preferences > Get Extensions*, décochez puis recochez dopesheetFlow) —
    aucune réinstallation n'est nécessaire. Voir la
    [FAQ](faq.md#button-missing-after-install) pour le
    détail.
