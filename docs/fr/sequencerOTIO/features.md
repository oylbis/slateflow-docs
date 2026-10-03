# Fonctionnalités

## Export

Transforme le montage VSE actuel en un fichier `.otio` calibré pour Resolve,
depuis le panneau **OTIO** du panneau latéral du Sequencer.

![Panneau Export to OTIO](assets/sequencerOTIO_export_01.png)

Ce qui est conservé :

- **Une piste OTIO par canal Blender réellement utilisé** — canaux vides
  compris, pour que la disposition des pistes survive à l'aller-retour. Le
  canal vidéo le plus bas de Blender devient `Video 1` ; l'ordre des canaux
  audio est inversé pour correspondre à l'empilement de Resolve.
- **Les clés d'animation volume/opacité** conservées comme courbes de
  Bézier, jamais aplaties.
- **Les fondus purs** en bord de plan (opacité/volume qui descend à zéro)
  convertis en transitions/fondus audio natifs de Resolve plutôt qu'en clés
  brutes — optionnel, activé par défaut, pour qu'un monteur qui récupère la
  timeline dans Resolve ait de vraies poignées de fondu, pas un tas de clés à
  décoder.
- **Changements de vitesse et freeze frames** encodés en `TimeEffect` OTIO.

Exportez soit **toute la timeline**, soit juste la **sélection actuelle** —
pratique pour confier une séquence précise sans exporter le montage entier
d'un projet.

Chaque export dépose un rapport de debug à côté du fichier `.otio` et le
charge directement dans l'éditeur de texte de Blender, pour voir exactement
ce qui a été écrit sans fouiller dans un log caché.

!!! info "Chemins et reliaison des médias"
    Si une source média référencée par le montage se trouve hors du dossier
    d'export, Resolve peut ne pas la relier automatiquement — l'export vous
    avertit (rapport de debug + popup) quand ça arrive, pour que vous sachiez
    qu'il faut relier manuellement ou réexporter avec le média à côté.

## Import

Récupérer un `.otio` depuis Resolve, selon l'un de ces trois modes.

**Add** importe à côté de ce qui existe déjà dans la scène — le mode le plus
simple, utile pour apporter une séquence que vous n'avez pas encore dans
Blender.

**Replace** vide d'abord le VSE, puis importe — une resynchronisation
complète quand vous voulez que le montage Blender reflète exactement ce que
Resolve a.

## Conform (le mode aller-retour)

![Réglages d'import OTIO : mode conform](assets/sequencerOTIO_import_01.png)

Compare le **montage vivant de Blender** à l'export Resolve et classe chaque
plan :

| Statut | Signification |
|---|---|
| Inchangé | Aucune différence détectée |
| Déplacé | Position changée |
| Retrimé | Points in/out changés |
| Split | Le plan a été coupé en plusieurs morceaux |
| Modifié | Propriétés (opacité, volume, transform, vitesse) différentes |
| Nouveau | Présent dans l'export Resolve, absent de Blender |
| Supprimé | Présent dans Blender, absent de l'export Resolve |

Vous pouvez ensuite **appliquer seulement les changements**, de façon
optionnelle — rien n'est réimporté à l'aveugle, donc les modifications faites
dans Blender *après* l'export d'origine ne sont pas écrasées juste parce que
Resolve a renvoyé quelque chose.

!!! info "Ce qui est dans le périmètre du conform"
    Conform fonctionne sur tout strip adossé à un vrai média (plans
    vidéo/image/son). Les strips couleur, texte, les scènes de dessin et les
    calques d'ajustement restent hors du diff et ne sont jamais touchés.
