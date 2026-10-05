# Fonctionnalités

Chaque section ci-dessous est marquée **LITE** (inclus dans la version
gratuite) et/ou **PRO** (uniquement dans la version payante). Voir
[LITE et PRO](index.md#lite-et-pro) pour le détail complet des niveaux.

## Barre d'outils contextuelle — LITE et PRO

![Toolbar sequencerFlow](assets/sequencerFlow_toolBar_01.png)

Dessinée directement dans le VSE, sans fouiller les menus : split
intelligent (strips sélectionnés coupés par le timeline cursor), join, swap, slip,
sélection directionnelle/par canal, jeux de sélection, isolation de canal
et de sélection, cadrage automatique du frame range, suivi de la tête de
lecture pendant la lecture.

## Guides de zones — LITE et PRO

![Guides de zones sur des plages de canaux](assets/sequencerFlow_zoneGuides_01.gif)

Bandes colorées sur des plages de canaux (vidéo, audio, effets...) pour
qu'une timeline chargée reste lisible en un coup d'œil, avec des presets et
des limites redimensionnables au glisser.

## Connexions de strips — LITE

Liaison automatique ou manuelle entre strips liés (typiquement un plan
vidéo et son son), avec un indicateur visuel partout où ils sont
connectés. Sert surtout à préparer un export aller-retour :
**[sequencerOTIO](../sequencerOTIO/index.md)** (un autre addon SlateFlow)
lit ces liens pour garder les paires vidéo/audio ensemble à l'export vers
Resolve via OpenTimelineIO.

## Contrôle de vitesse — LITE

Un badge sur chaque strip retimé, un dialogue de vitesse en pourcentage,
freeze frame — le tout construit sur les opérateurs de retiming natifs de
Blender.

## Renommage en lot & export par strip — LITE

Renommez une sélection ou toute la timeline d'un coup, et rendez chaque
strip sélectionné dans son propre fichier vidéo (ou mixez son audio
individuellement).

## Source Viewer — PRO

![Source viewing en Dual Monitor](assets/sequencerFlow_dualMonitor_01.gif)

Vrai montage 3 points dans Blender : posez des points IN/OUT sur n'importe
quel plan dans une scène dédiée, puis insérez à la tête de lecture, avec
tous les plans suivants qui se décalent automatiquement. Votre scène de
montage n'est jamais touchée pendant que vous parcourez des rushs. Un mode
Dual Monitor optionnel donne un second aperçu source, entièrement
indépendant.

## Courbes sur les strips — PRO

![Courbes de volume/opacité dessinées sur les strips](assets/sequencerFlow_curves_01.gif)

Courbes de volume et d'opacité dessinées directement sur les strips,
éditables au clic-glisser — pilotant de vraies F-Curves Blender, pas un
modèle de données parallèle.

## Audio avancé — PRO

Un VU-mètre et des badges de canal audio, avec réattribution rapide
mono/stéréo.

## Minimap de la timeline — PRO

![Minimap de la timeline](assets/sequencerFlow_minimap_01.gif)

Une vue d'ensemble 2D (temps × canaux) de toute la timeline, cliquable ou
glissable pour recentrer instantanément la vue principale.
