# Configuration

## La dépendance OTIO : mise en place quasi nulle

L'aller-retour OTIO nécessite le package Python `opentimelineio`, que le
Python embarqué de Blender n'inclut pas par défaut. sequencerOTIO s'en
occupe pour vous :

- Il embarque des **wheels `opentimelineio` pré-téléchargées** pour le
  Python de Blender (Blender 5.0 à 5.2, sous Windows/macOS/Linux).
- **Au premier chargement** de l'addon, il installe localement la bonne
  wheel — aucune connexion internet nécessaire, rien à configurer à la main.

Dans la plupart des cas, vous ne verrez jamais d'état "Not Installed".

## Si votre plateforme n'est pas couverte

Si votre plateforme ne fait pas partie de celles couvertes par une wheel
embarquée, l'addon se replie sur une installation d'`opentimelineio` depuis
PyPI via le réseau — même bouton **Install OTIO** en un clic dans le panneau
Configuration de l'addon, même indicateur de statut **Check Installation**.

## Utiliser un interpréteur Python externe

Vous pouvez pointer l'addon vers un interpréteur Python externe différent
(avec OTIO déjà installé dessus) si vous préférez gérer cette dépendance
vous-même — utile si vous maintenez déjà un environnement Python séparé pour
vos outils de pipeline.

!!! info "Pourquoi un interpréteur séparé"
    Le pipeline export/import de sequencerOTIO exécute la conversion OTIO
    dans un processus Python dédié plutôt que dans Blender lui-même — c'est à
    ça que sert le chemin d'interpréteur configuré.
