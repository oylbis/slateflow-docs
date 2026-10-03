# Import & conform

Récupérer un `.otio` depuis Resolve, selon l'un de ces trois modes.

## Add

Importe à côté de ce qui existe déjà dans la scène — le mode le plus simple,
utile pour apporter une séquence que vous n'avez pas encore dans Blender.

## Replace

Vide d'abord le VSE, puis importe — une resynchronisation complète quand
vous voulez que le montage Blender reflète exactement ce que Resolve a.

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
