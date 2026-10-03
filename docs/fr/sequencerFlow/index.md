# sequencerFlow

![sequencerFlow](../../assets/branding/logo_sequencerflow.png){: .addon-hero-logo }

**Des outils de montage façon Premiere/Resolve pour le Video Sequence Editor de Blender.**

sequencerFlow ajoute une boîte à outils flottante dessinée en GPU et un
ensemble d'outils de production directement dans le VSE, pour rapprocher le
séquenceur natif de Blender d'un NLE dédié — sans jamais masquer ou
verrouiller le moindre outil natif. Tout ce qu'il fait lit et écrit les
données natives de Blender : de vrais strips, de vraies F-Curves, de
vraies scènes. Désactivez l'addon et votre montage reste un fichier
`.blend` parfaitement ordinaire.

![Toolbar et Source Viewer dans le VSE](assets/sequencerFlow_all_01.png)

## LITE et PRO

sequencerFlow existe en deux niveaux, à partir de la même base de code :

- **LITE** (gratuit) : la barre d'outils contextuelle (sauf Insert), les
  connexions de strips, les sélections avancées, l'isolation de
  canal/strip, le frame range, le renommage en lot, l'export par strip, les
  guides de zones, les raccourcis configurables.
- **PRO** (payant) : tout LITE, plus le **Source Viewer** (montage 3 points
  et Insert), les **courbes** de volume/opacité **dessinées sur les
  strips**, les outils **audio** avancés (VU-mètre, réattribution de
  canal), et la **minimap** de la timeline.

Voir **[Fonctionnalités](features.md)** pour le détail complet.

## En un coup d'œil

- **Une barre d'outils contextuelle dessinée directement dans le VSE** :
  split intelligent (gère correctement les strips SCENE), join, swap, slip,
  sélection directionnelle/par canal, jeux de sélection, isolation de canal
  et de sélection, cadrage automatique du frame range, suivi de la tête de
  lecture pendant la lecture.
- **Source Viewer** (PRO) — vrai montage 3 points : posez des points IN/OUT
  sur n'importe quel plan dans une scène dédiée, puis insérez à la tête de
  lecture, avec tous les plans suivants qui se décalent automatiquement.
- **Guides de zones** — bandes colorées sur des plages de canaux pour
  qu'une timeline chargée reste lisible en un coup d'œil.
- **Courbes de volume et d'opacité** (PRO) dessinées directement sur les
  strips, éditables au clic-glisser — pilotant de vraies F-Curves Blender.
- **Contrôle de vitesse** : badge sur chaque strip retimé, dialogue de
  vitesse en pourcentage, freeze frame, le tout sur les opérateurs de
  retiming natifs de Blender.
- **Connexions de strips** — liaison automatique ou manuelle entre strips
  liés (typiquement un plan vidéo et son son). Lues par
  **[sequencerOTIO](../sequencerOTIO/index.md)** (un autre addon SlateFlow)
  pour garder les paires vidéo/audio ensemble à l'export vers Resolve.
- **Renommage en lot** et **export par strip**.

## Pourquoi ça reste natif

sequencerFlow ne remplace jamais un panneau, un outil ou un raccourci de
Blender — il ne fait qu'ajouter une couche par-dessus. La toolbar et chaque
overlay (courbes, guides de zones, marqueurs de connexion) sont dessinés
directement dans la vue, et chaque action déclenchée est un vrai opérateur
Blender ou une vraie édition de F-Curve. Désactivez-le : vos strips, clés
et scènes sont exactement comme Blender les a laissés.

Nécessite **Blender 5.2 ou plus récent**.

## Licence

[GNU General Public License v3.0 ou ultérieure](https://www.gnu.org/licenses/gpl-3.0.html)
— SPDX : `GPL-3.0-or-later`.

sequencerFlow fait partie de la suite **[SlateFlow](../index.md)**.

## Support

slateFlow est développé sur mon temps libre, en parallèle d'une activité
d'indépendant. Les prix sont volontairement accessibles : en échange, je ne
peux pas m'engager sur des délais de correctifs ou des développements sur
demande. Les retours et les idées sont les bienvenus — les bugs les plus
importants seront corrigés, et les bonnes idées feront leur chemin. Merci de
votre compréhension.
