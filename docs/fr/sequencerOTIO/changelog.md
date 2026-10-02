# Historique des versions

## 1.0.0 — Version actuelle

Ensemble complet des fonctionnalités décrites dans ce guide :

- Export du montage VSE vers un `.otio` calibré pour Resolve (disposition
  des pistes, courbes de Bézier, fondus natifs, vitesse/freeze en
  `TimeEffect`).
- Import en mode Add, Replace ou Conform.
- Diff par conform (inchangé / déplacé / retrimé / split / modifié / nouveau
  / supprimé) avec application sélective.
- Installation automatique de la dépendance `opentimelineio` depuis des
  wheels embarquées, avec repli PyPI et interpréteur externe.
- Rapports de debug pour chaque export/import, chargés directement dans
  l'éditeur de texte de Blender.
