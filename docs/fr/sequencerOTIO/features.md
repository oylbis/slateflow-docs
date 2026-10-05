# Fonctionnalités

Le panneau **sequencerOTIO** vit dans le panneau latéral du Sequencer
(N-panel), en trois sections repliables : Configuration, Export, Import.
Voir [Configuration](configuration.md) pour la première.

## Export

![Panneau Export to OTIO](assets/sequencerOTIO_export_01.png)

Transforme le montage VSE actuel en un fichier `.otio` calibré pour
Resolve.

**Options :**

- **Export Folder / Filename** — où le fichier `.otio` est écrit. Une
  action **Update Paths** remplit les deux automatiquement à partir de
  l'emplacement et du nom du fichier `.blend` actuel.
- **Scope** : **All strips**, ou **Selected only** — exporte toute la
  timeline, ou seulement les strips sélectionnés, sans avoir à masquer ou
  isoler temporairement quoi que ce soit.
- **Native Resolve Fades** (activé par défaut) — convertit un fondu pur en
  bord de plan (opacité/volume qui descend à zéro) en une vraie
  transition vidéo ou un fondu audio natif de Resolve, plutôt que de le
  laisser sous forme de clés brutes d'opacité/volume. Un monteur qui
  récupère la timeline dans Resolve a de vraies poignées de fondu à
  saisir, pas des clés à décoder.
- **Debug Export** — dépose un rapport de debug à côté du fichier `.otio`
  et le charge directement dans l'éditeur de texte de Blender, pour voir
  exactement ce qui a été écrit sans fouiller dans un log caché.

**Ce qui est toujours conservé, indépendamment de ces options :**

- Une piste OTIO par canal Blender réellement utilisé — canaux vides
  compris, pour que la disposition des pistes survive à l'aller-retour. Le
  canal vidéo le plus bas de Blender devient `Video 1` ; l'ordre des
  canaux audio est inversé pour correspondre à l'empilement de Resolve.
- Les clés d'animation volume/opacité en courbes de Bézier, jamais
  aplaties.
- Les changements de vitesse et freeze frames, encodés en `TimeEffect`
  OTIO.

!!! info "Chemins et reliaison des médias"
    Si une source média référencée par le montage se trouve hors du
    dossier d'export, Resolve peut ne pas la relier automatiquement —
    l'export vous avertit (rapport de debug + popup) quand ça arrive, pour
    que vous sachiez qu'il faut relier manuellement ou réexporter avec le
    média à côté.

## Import

![Réglages d'import OTIO](assets/sequencerOTIO_import_01.png)

Récupérer un `.otio` depuis Resolve, selon l'un de ces quatre modes :

| Mode | Ce qu'il fait |
|---|---|
| **Add To Current Scene** | Importe à côté de ce qui existe déjà. |
| **New Scene** | Crée une scène dédiée pour l'import, sans toucher à la scène actuelle. |
| **Replace Current Edit** | Vide d'abord le VSE de la scène, puis importe — une resynchronisation complète. |
| **Update Existing Edit** (Conform) | Compare le montage actuel à l'édit Resolve et rapporte — ou applique — seulement les différences. Voir ci-dessous. |

Les **propriétés du montage** (résolution et frame rate, lues depuis le
fichier OTIO par défaut) peuvent à la place être réglées manuellement et
appliquées à la scène — utile quand le `.otio` ne porte pas de réglages de
projet fiables. Un menu **Resolution** propose des presets courants (HD,
UHD 4K, DCI 2K/4K, SD PAL/NTSC, carré, vertical, scope anamorphique) en
plus d'une largeur/hauteur personnalisée.

### Conform (le mode aller-retour)

Compare le **montage vivant de Blender** à l'export Resolve et classe
chaque plan :

| Statut | Signification |
|---|---|
| Inchangé | Aucune différence détectée |
| Déplacé | Position changée |
| Retrimé | Points in/out changés |
| Split | Le plan a été coupé en plusieurs morceaux |
| Modifié | Propriétés (opacité, volume, transform, vitesse) différentes |
| Nouveau | Présent dans l'export Resolve, absent de Blender |
| Supprimé | Présent dans Blender, absent de l'export Resolve |

**Options de conform :**

- **Reference OTIO** (optionnel) — l'export Blender d'origine, l'état
  "avant". Sans lui, conform compare directement au montage vivant de
  Blender ; le fournir affine le diff (en particulier, il est nécessaire
  pour confirmer de vraies *suppressions*, voir ci-dessous).
- **Apply moves & retrims** — désactivé par défaut, ce qui fait tourner
  conform d'abord comme un rapport à blanc, rien n'étant appliqué.
  Activez pour réellement déplacer et retrimer les plans correspondants.
- **Also remove deleted shots** (destructif) — supprime les strips
  confirmés comme supprimés en comparant avec le **Reference OTIO**. Ne
  supprime jamais rien sans cette référence pour confirmer que la
  suppression est réelle, pas juste un plan que conform n'a pas réussi à
  apparier.
- **Also conform properties** — réapplique volume, opacité, transform et
  vitesse (et les fondus, via opacité/volume) partout où ils diffèrent
  entre l'export de référence et le retour Resolve. Nécessite aussi la
  référence.
- **Generate debug report** (activé par défaut) — même rapport de debug
  qu'à l'export, déposé à côté de l'OTIO importé et chargé comme bloc de
  texte.

Vous pouvez ensuite **appliquer seulement les changements voulus** — rien
n'est réimporté à l'aveugle, donc les modifications faites dans Blender
*après* l'export d'origine ne sont pas écrasées juste parce que Resolve a
renvoyé quelque chose.

!!! info "Ce qui est dans le périmètre du conform"
    Conform fonctionne sur tout strip adossé à un vrai média (plans
    vidéo/image/son). Les strips couleur, texte, les scènes de dessin et
    les calques d'ajustement restent hors du diff et ne sont jamais
    touchés.
