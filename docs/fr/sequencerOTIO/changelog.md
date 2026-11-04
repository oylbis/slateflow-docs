# Historique des versions

Version actuelle : **2.0.2**.

## Depuis la première release

- **Les connexions de strips sont désormais lues directement depuis les
  données natives "Connect Strips" de Blender**, au lieu d'une étiquette
  propre à sequencerFlow — une connexion faite nativement dans le VSE
  survit maintenant à l'aller-retour vers Resolve, que sequencerFlow soit
  installé ou non. Les vitesses de retiming posées par les outils de
  sequencerFlow restent lues séparément et nécessitent toujours cet
  addon.

## Roadmap

Consolidation de l'addon et résolution des bugs qui pourraient être soulevés.

Idées envisagées pour une future version — pas des engagements, juste la
direction actuelle :

- **Étendre le pont Blender ↔ Resolve** au-delà des strips adossés à un
  média (le périmètre actuel de l'export/import/conform) : strips TEXT, strip COLOR (Background dans Resolve)
  effets supplémentaires, modes de fusion, et l'état activé/désactivé
  d'un strip.
- **Exposer l'export OTIO générique** (non spécifique à Resolve) déjà
  présent dans le moteur, ouvrant la voie à d'autres logiciels compatibles
  OTIO au-delà de Resolve.
- **Export/Import pour Premiere**

Les retours et suggestions sont les bienvenus — voir
[Support](index.md#support).
